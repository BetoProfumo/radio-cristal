import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useNews, categoriesFromNews, formatRelativeDate } from "@/lib/news";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Clock, Search, User, Newspaper } from "lucide-react";

const PAGE_SIZE = 6;

export function NewsSection() {
  const { lang, t } = useI18n();
  const { data: news, isLoading, isError } = useNews();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => (news ? categoriesFromNews(news) : []), [news]);

  const filtered = useMemo(() => {
    if (!news) return [];
    return news.filter(
      (n) =>
        (cat === "all" || n.category === cat) &&
        (q === "" || n.title.toLowerCase().includes(q.toLowerCase())),
    );
  }, [news, q, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section id="noticias" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t("news.eyebrow")}</div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t("news.title")}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t("news.subtitle")}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <label className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder={t("news.search")}
                className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
              />
            </label>
          </div>
        </div>

        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => { setCat("all"); setPage(1); }}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                cat === "all" ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {t("cat.all")}
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setPage(1); }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  cat === c
                    ? "bg-foreground text-background"
                    : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[16/10] animate-pulse bg-surface" />
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="h-4 w-2/3 animate-pulse rounded bg-surface" />
                  <div className="h-3 w-full animate-pulse rounded bg-surface" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-surface" />
                </div>
              </div>
            ))}

          {!isLoading && isError && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
              {t("news.error")}
            </div>
          )}

          {!isLoading && !isError &&
            visible.map((n) => (
              <Link
                key={n.id}
                to="/noticias/$slug"
                params={{ slug: n.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {n.image ? (
                    <img src={n.image} alt={n.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                      <Newspaper className="h-10 w-10" />
                    </div>
                  )}
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand backdrop-blur">
                    {n.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold leading-snug">{n.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />{n.author}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{formatRelativeDate(n.dateIso, lang)}</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {t("news.readMore")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}

          {!isLoading && !isError && visible.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
              {t("news.empty")}
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-9 w-9 rounded-full text-sm font-semibold transition-colors ${
                  page === i + 1 ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:bg-accent"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
