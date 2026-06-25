import hero from "@/assets/hero-studio.jpg";
import { usePlayer } from "./player-context";
import { useI18n } from "@/lib/i18n";
import { Newspaper, Pause, Play } from "lucide-react";
import { WhaleDecoration } from "./whale-hero.tsx";

export function Hero() {
  const { playing, toggle } = usePlayer();
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-background/40 dark:from-background/95 dark:via-background/80 dark:to-background/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--color-brand)_45%,transparent),transparent_55%)]" />
      </div>

      {/* Olas decorativas de ballenas en el fondo inferior del hero */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 -z-[1] select-none overflow-hidden h-40 opacity-10">
        <svg viewBox="0 0 1440 160" className="absolute bottom-0 w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 Q90 40 180 80 Q270 120 360 80 Q450 40 540 80 Q630 120 720 80 Q810 40 900 80 Q990 120 1080 80 Q1170 40 1260 80 Q1350 120 1440 80 L1440 160 L0 160Z" fill="white"/>
          {/* Ballena 1 */}
          <path d="M180 65 C165 58 142 65 130 54 C126 49 133 41 144 45 C135 34 149 25 163 30 C168 14 187 7 208 14 C223 2 252 4 267 17 C285 12 300 22 301 36 C313 32 324 42 320 54 C328 62 322 74 309 77 C305 83 287 87 269 84 C261 91 243 93 227 89 C215 95 193 94 182 87 Z" fill="white" opacity="0.9"/>
          <path d="M180 67 C167 61 150 53 138 61 C135 64 138 70 145 67 C151 77 163 80 175 73 Z" fill="white" opacity="0.9"/>
          <path d="M180 67 C170 76 159 87 165 95 C169 97 175 92 176 84 C183 87 188 82 185 72 Z" fill="white" opacity="0.9"/>
          {/* aleta dorsal */}
          <path d="M226 12 C231 -4 244 -13 251 -8 C255 -4 252 11 245 17 Z" fill="white" opacity="0.9"/>
          {/* salpicadura */}
          <path d="M301 34 Q307 22 312 11 Q315 4 320 14" stroke="white" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round"/>
          <circle cx="321" cy="6" r="2.5" fill="white" opacity="0.5"/>
          {/* Ballena 2 */}
          <path d="M850 72 C838 66 818 72 808 63 C804 59 810 51 820 54 C812 44 824 36 837 41 C841 27 857 20 876 26 C890 15 915 17 928 29 C944 25 957 34 957 47 C968 43 978 52 975 63 C982 71 976 81 964 83 C960 89 944 93 927 90 C920 97 903 98 888 95 C877 101 856 99 846 92 Z" fill="white" opacity="0.7"/>
          <path d="M850 73 C838 67 823 60 812 67 C809 70 812 76 818 73 C824 83 835 85 846 78 Z" fill="white" opacity="0.7"/>
          <path d="M850 73 C841 82 831 92 836 100 C840 102 845 97 846 89 C853 92 857 87 855 77 Z" fill="white" opacity="0.7"/>
          <path d="M886 23 C890 11 901 3 907 7 C911 10 908 23 902 28 Z" fill="white" opacity="0.7"/>
        </svg>
      </div>

      <div className="container-page relative grid min-h-[78vh] items-center gap-10 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        {/* Columna izquierda: texto */}
        <div className="fade-up text-primary-foreground dark:text-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="live-dot" />
            {t("hero.badge")}
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Radio <span className="bg-gradient-to-r from-white to-[oklch(0.85_0.15_240)] bg-clip-text text-transparent dark:from-foreground dark:to-brand">Cristal</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80 dark:text-muted-foreground sm:text-xl">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={toggle}
              className="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background/20">
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-px" />}
              </span>
              {playing ? t("cta.pause") : t("cta.listenLive")}
            </button>
            <a
              href="#noticias"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 dark:border-border dark:bg-card dark:text-foreground dark:hover:bg-accent"
            >
              <Newspaper className="h-4 w-4" />
              {t("hero.latestNews")}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-white/80 dark:border-border dark:text-muted-foreground">
            <div>
              <dt className="text-xs uppercase tracking-wider opacity-70">{t("hero.listeners")}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-white dark:text-foreground">+12K</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider opacity-70">{t("hero.programs")}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-white dark:text-foreground">24</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider opacity-70">{t("hero.years")}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-white dark:text-foreground">15+</dd>
            </div>
          </dl>
        </div>

        {/* Columna derecha: card del reproductor + ballenas */}
        <WhaleDecoration playing={playing} />
      </div>
    </section>
  );
}
