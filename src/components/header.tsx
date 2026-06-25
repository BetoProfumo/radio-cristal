import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { usePlayer } from "./player-context";
import { useI18n } from "@/lib/i18n";
import { Facebook, Instagram, Menu, Pause, Play, X, Youtube } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { playing, toggle, status } = usePlayer();
  const { t } = useI18n();

  const NAV = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#noticias", label: t("nav.news") },
    { href: "#programacion", label: t("nav.programming") },
    { href: "#nosotros", label: t("nav.about") },
    { href: "#contacto", label: t("nav.contact") },
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
        <a href="#inicio" className="shrink-0">
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
            <span className="hidden items-center gap-0.5 sm:flex" aria-hidden>
              {playing && (
                <>
                  <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
                  <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
                  <span className="eq-bar block h-3 w-0.5 rounded-full bg-current/70" />
                </>
              )}
            </span>
            <span className="sr-only">{status}</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.home")}
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
