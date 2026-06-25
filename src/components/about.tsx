// ============================================================
//  SECCIÓN "SOBRE NOSOTROS"
//  Para agregar fotos del estudio al carrusel:
//  1. Copiá las imágenes a src/assets/
//  2. Agregá un import abajo y una entrada en STUDIO_IMAGES
// ============================================================

import about from "@/assets/radio2.png";
import estudio1 from "@/assets/radio1.png";
import estudio3 from "@/assets/radio3.png";
import estudio4 from "@/assets/radio4.png";
import estudio5 from "@/assets/radio5.png";
import estudio6 from "@/assets/radio6.png";
import estudio7 from "@/assets/radio7.png";
import estudio8 from "@/assets/radio8.png";
import estudio9 from "@/assets/radio9.png";
import estudio10 from "@/assets/radio10.png";
import estudio11 from "@/assets/radio11.png";
import { useI18n } from "@/lib/i18n";
import { Award, Heart, Mic, Users } from "lucide-react";
import { useEffect, useState } from "react";

const STUDIO_IMAGES = [
  { src: about, caption: "Nuestros estudios" },
  { src: estudio1, caption: "En el aire" },
  { src: estudio3, caption: "En el aire" },
  { src: estudio4, caption: "En el aire" },
  { src: estudio5, caption: "En el aire" },
  { src: estudio6, caption: "En el aire" },
  { src: estudio7, caption: "En el aire" },
  { src: estudio8, caption: "En el aire" },
  { src: estudio9, caption: "En el aire" },
  { src: estudio10, caption: "En el aire" },
  { src: estudio11, caption: "En el aire" },
];

const VALUES = [
  { icon: Mic, key: "v1" },
  { icon: Users, key: "v2" },
  { icon: Award, key: "v3" },
  { icon: Heart, key: "v4" },
] as const;

function StudioCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (STUDIO_IMAGES.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % STUDIO_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border shadow-elevated aspect-[5/4] bg-surface">
      {STUDIO_IMAGES.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.caption}
          width={1280}
          height={832}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {STUDIO_IMAGES.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {STUDIO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <section id="nosotros" className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <StudioCarousel />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-elevated sm:block lg:-right-6">
            <div className="font-display text-3xl font-bold">15+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("about.years")}</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t("about.eyebrow")}</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t("about.title")}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about.body")}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.key} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold">{t(`about.${v.key}.t`)}</div>
                  <div className="text-sm text-muted-foreground">{t(`about.${v.key}.d`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
