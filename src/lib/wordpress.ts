import { createServerFn } from "@tanstack/react-start";

// ---------------------------------------------------------------------------
// Configuración: la URL del sitio de WordPress que ya usa la radio.
// Las noticias se siguen escribiendo ahí, exactamente como hoy, y esta página
// las trae automáticamente a través de la API REST pública de WordPress.
// ---------------------------------------------------------------------------
const WORDPRESS_URL = "https://radiocristalmadryn.com.ar";

export type WpNewsItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML ya saneado por WordPress
  image: string | null;
  category: string;
  author: string;
  dateIso: string;
};

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

/**
 * Trae las últimas noticias publicadas en WordPress.
 * Se ejecuta en el servidor (server function de TanStack Start) para evitar
 * problemas de CORS al llamar a la API REST de WordPress desde el navegador.
 */
export const fetchWordpressNews = createServerFn({ method: "GET" })
  .validator((input: { perPage?: number } | undefined) => input ?? {})
  .handler(async ({ data }): Promise<WpNewsItem[]> => {
    const perPage = data.perPage ?? 30;
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=${perPage}&_embed=true`;

    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        console.error(`WordPress API respondió ${res.status} para ${url}`);
        return [];
      }
      const posts = (await res.json()) as WpRestPost[];
      return posts.map(mapPost);
    } catch (err) {
      console.error("No se pudo conectar a la API de WordPress:", err);
      return [];
    }
  });

/** Trae una sola noticia por su slug (para la página de detalle). */
export const fetchWordpressNewsBySlug = createServerFn({ method: "GET" })
  .validator((input: { slug: string }) => input)
  .handler(async ({ data }): Promise<WpNewsItem | null> => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(data.slug)}&_embed=true`;

    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) return null;
      const posts = (await res.json()) as WpRestPost[];
      return posts.length > 0 ? mapPost(posts[0]) : null;
    } catch (err) {
      console.error("No se pudo conectar a la API de WordPress:", err);
      return null;
    }
  });
