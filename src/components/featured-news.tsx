import { Link } from "@tanstack/react-router";
import { useNews, formatRelativeDate } from "@/lib/news";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Clock, Newspaper } from "lucide-react";

export function FeaturedNews() {
  const { lang, t } = useI18n();
  const { data: news, isLoading, isError } = useNews();

  if (isLoading) {
    return (
      <section className="relative -mt-12 lg:-mt-16">
        <div className="container-page">
          <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-elevated sm:p-6 lg:grid-cols-2">
            <div className="aspect-16/11 animate-pulse rounded-2xl bg-surface" />
            <div className="grid gap-4">
              {[0, 1].map((i) => (
                <div key={i} className="h-full animate-pulse rounded-2xl bg-surface" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !news || news.length === 0) return null;

  const items = news.slice(0, 3);
  const [main, ...rest] = items;

  return (
    <section className="relative -mt-12 lg:-mt-16">
      <div className="container-page">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-elevated sm:p-6 lg:grid-cols-2">
          <Link to="/noticias/$slug" params={{ slug: main.slug }} className="group relative overflow-hidden rounded-2xl bg-surface">
            {main.image ? (
              <img src={main.image} alt={main.title} className="aspect-[16/11] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            ) : (
              <div className="flex aspect-[16/11] h-full w-full items-center justify-center text-muted-foreground">
                <Newspaper className="h-12 w-12" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
              <span className="inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground">
                {main.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">{main.title}</h3>
              <p className="mt-2 line-clamp-2 max-w-xl text-sm text-white/80">{main.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-white/70">
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{formatRelativeDate(main.dateIso, lang)}</span>
                <span>·</span>
                <span>{main.author}</span>
              </div>
            </div>
          </Link>

          <div className="grid gap-4">
            {rest.map((n) => (
              <Link
                key={n.id}
                to="/noticias/$slug"
                params={{ slug: n.slug }}
                className="group grid grid-cols-[1fr_1.2fr] gap-4 overflow-hidden rounded-2xl bg-surface p-3 transition-colors hover:bg-accent"
              >
                <div className="overflow-hidden rounded-xl bg-card">
                  {n.image ? (
                    <img src={n.image} alt={n.title} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  ) : (
                    <div className="flex aspect-[4/3] h-full w-full items-center justify-center text-muted-foreground">
                      <Newspaper className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{n.category}</span>
                  <h4 className="mt-1 line-clamp-2 font-display text-base font-bold leading-snug sm:text-lg">{n.title}</h4>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{n.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    {t("featured.readMore")} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
