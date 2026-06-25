import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useNews, useNewsBySlug, formatRelativeDate } from "@/lib/news";
import { useI18n, I18nProvider } from "@/lib/i18n";
import { InfoBar } from "@/components/info-bar";
import { Footer } from "@/components/footer";
import { StickyPlayer } from "@/components/sticky-player";
import { PlayerProvider, usePlayer } from "@/components/player-context";
import { YoutubeLiveWidget } from "@/components/youtube-live";
import { Logo } from "@/components/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ArrowLeft, Clock, Newspaper, User, Loader2, Play, Pause, Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/noticias/$slug")({
  component: NewsDetailPage,
});

// Header adaptado para la página de noticia: los links llevan a /#seccion
function NewsHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { playing, toggle, status } = usePlayer();
  const { t } = useI18n();

  const NAV = [
    { href: "/#inicio", label: t("nav.home") },
    { href: "/#noticias", label: t("nav.news") },
    { href: "/#programacion", label: t("nav.programming") },
    { href: "/#nosotros", label: t("nav.about") },
    { href: "/#contacto", label: t("nav.contact") },
  ];

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <a aria-label="Facebook" href="#" className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"><Instagram className="h-4 w-4" /></a>
            <a aria-label="YouTube" href="#" className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"><Youtube className="h-4 w-4" /></a>
          </div>

          <LanguageSwitcher />

          <button
            onClick={toggle}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary px-4 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-background/15">
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-px" />}
            </span>
            <span className="hidden sm:inline">{playing ? t("cta.live") : t("cta.listenLive")}</span>
            {playing && (
              <span className="hidden items-center gap-0.5 sm:flex" aria-hidden>
                <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
                <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
                <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
              </span>
            )}
            <span className="sr-only">{status}</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="rounded-md p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// Sidebar con noticias relacionadas
function RelatedNews({ currentSlug }: { currentSlug: string }) {
  const { lang } = useI18n();
  const { data: news } = useNews();

  const related = news?.filter((n) => n.slug !== currentSlug).slice(0, 4) ?? [];

  if (related.length === 0) return null;

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <h2 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
        También te podría interesar
      </h2>
      <div className="flex flex-col gap-4">
        {related.map((n) => (
          <Link
            key={n.id}
            to="/noticias/$slug"
            params={{ slug: n.slug }}
            className="group flex gap-3 items-start rounded-xl p-2 -mx-2 transition-colors hover:bg-accent"
          >
            <div className="shrink-0 w-20 h-16 overflow-hidden rounded-lg bg-surface">
              {n.image ? (
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <Newspaper className="h-5 w-5" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{n.category}</span>
              <p className="mt-0.5 text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
                {n.title}
              </p>
              <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {formatRelativeDate(n.dateIso, lang)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function NewsDetailContent() {
  const { slug } = Route.useParams();
  const { lang } = useI18n();
  const { data: item, isLoading, isError } = useNewsBySlug(slug);

  return (
    <main className="container-page py-14 sm:py-20">
      <Link
        to="/"
        hash="noticias"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Volver a noticias
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Artículo principal */}
        <article className="flex-1 min-w-0">
          {isLoading && (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className="text-sm">Cargando noticia…</p>
            </div>
          )}

          {isError && (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <Newspaper className="h-12 w-12 text-muted-foreground" />
              <h1 className="font-display text-2xl font-bold text-foreground">No se pudo cargar la noticia</h1>
              <p className="text-sm text-muted-foreground">Verificá tu conexión e intentá de nuevo.</p>
            </div>
          )}

          {!isLoading && !isError && !item && (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <Newspaper className="h-12 w-12 text-muted-foreground" />
              <h1 className="font-display text-2xl font-bold text-foreground">Noticia no encontrada</h1>
              <p className="text-sm text-muted-foreground">Puede que haya sido movida o eliminada.</p>
            </div>
          )}

          {item && (
            <>
              <span className="inline-flex items-center rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-foreground">
                {item.category}
              </span>

              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {item.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />{item.author}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />{formatRelativeDate(item.dateIso, lang)}
                </span>
              </div>

              {item.image && (
                <div className="mt-8 overflow-hidden rounded-2xl">
                  <img src={item.image} alt={item.title} className="h-auto w-full object-cover" />
                </div>
              )}

              <div
                className="wp-content mt-8"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </>
          )}
        </article>

        {/* Sidebar */}
        <RelatedNews currentSlug={slug} />
      </div>
    </main>
  );
}

function NewsDetailPage() {
  return (
    <I18nProvider>
      <PlayerProvider>
        <div className="dark min-h-screen bg-background pb-24 text-foreground">
          <InfoBar />
          <NewsHeader />
          <NewsDetailContent />
          <Footer />
          <StickyPlayer />
          <YoutubeLiveWidget />
        </div>
      </PlayerProvider>
    </I18nProvider>
  );
}
