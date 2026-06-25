import { useQuery } from "@tanstack/react-query";
import type { WpNewsItem } from "@/lib/wordpress";
import type { Lang } from "./i18n";
 
const WORDPRESS_URL = "https://radiocristalmadryn.com.ar";
 
export type NewsItem = WpNewsItem;
 
type WpRestPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    author?: Array<{ name?: string }>;
    "wp:term"?: Array<Array<{ name?: string; taxonomy?: string }>>;
  };
};
 
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
 
function mapPost(post: WpRestPost): WpNewsItem {
  const media = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  const author = post._embedded?.author?.[0]?.name ?? "Redacción";
  const categoryTerm = post._embedded?.["wp:term"]
    ?.flat()
    .find((t) => t?.taxonomy === "category" && t?.name?.toLowerCase() !== "sin categoría");
 
  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    image: media,
    category: categoryTerm?.name ?? "Noticias",
    author,
    dateIso: post.date,
  };
}
 
async function fetchNews(perPage = 30): Promise<WpNewsItem[]> {
  const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=${perPage}&_embed=true`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return [];
  const posts = (await res.json()) as WpRestPost[];
  return posts.map(mapPost);
}
 
async function fetchNewsBySlug(slug: string): Promise<WpNewsItem | null> {
  const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return null;
  const posts = (await res.json()) as WpRestPost[];
  return posts.length > 0 ? mapPost(posts[0]) : null;
}
 
/** Trae la lista de noticias publicadas. Cachea 2 minutos para no saturar WP. */
export function useNews() {
  return useQuery({
    queryKey: ["wp-news"],
    queryFn: () => fetchNews(30),
    staleTime: 2 * 60 * 1000,
  });
}

/** Trae una noticia puntual por slug, para la página de detalle. */
export function useNewsBySlug(slug: string) {
  return useQuery({
    queryKey: ["wp-news", slug],
    queryFn: () => fetchNewsBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 2 * 60 * 1000,
  });
}
 
/** Lista de categorías disponibles a partir de las noticias ya cargadas. */
export function categoriesFromNews(news: NewsItem[]): string[] {
  const set = new Set(news.map((n) => n.category));
  return Array.from(set);
}
 
const RELATIVE_LABELS: Record<Lang, { now: string; min: string; hr: string; day: string; on: string }> = {
  es: { now: "Hace instantes", min: "Hace {n} min", hr: "Hace {n} h", day: "Hace {n} días", on: "el" },
  en: { now: "Just now", min: "{n} min ago", hr: "{n} h ago", day: "{n} days ago", on: "on" },
  pt: { now: "Agora mesmo", min: "Há {n} min", hr: "Há {n} h", day: "Há {n} dias", on: "em" },
};
 
/** Formatea una fecha ISO de WordPress como texto relativo ("Hace 2 horas"). */
export function formatRelativeDate(iso: string, lang: Lang): string {
  const labels = RELATIVE_LABELS[lang];
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
 
  if (diffMin < 1) return labels.now;
  if (diffMin < 60) return labels.min.replace("{n}", String(diffMin));
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return labels.hr.replace("{n}", String(diffHr));
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 7) return labels.day.replace("{n}", String(diffDay));
  return date.toLocaleDateString(lang === "es" ? "es-AR" : lang === "pt" ? "pt-BR" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}