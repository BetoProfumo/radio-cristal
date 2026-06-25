import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================
//  GALERÍA DE PUERTO MADRYN
//  Para agregar o cambiar fotos:
//  1. Copiá las imágenes a la carpeta src/assets/
//  2. Agregá el import arriba (igual que img1, img2, etc.)
//  3. Agregá un objeto al array IMAGES con { src: imgX, caption: "..." }
// ============================================================

import img1 from "@/assets/madryn-1.jpg";
import img2 from "@/assets/madryn-2.jpg";
import img3 from "@/assets/madryn-3.jpg";
import img4 from "@/assets/madryn-4.jpg";
import img5 from "@/assets/madryn-5.jpg";

const IMAGES = [
  { src: img1, caption: "Puerto Madryn" },
  { src: img2, caption: "Puerto Madryn" },
  { src: img3, caption: "Puerto Madryn" },
  { src: img4, caption: "Puerto Madryn" },
  { src: img5, caption: "Puerto Madryn" },
];

const INTERVAL = 5000;

export function MadrynGallery() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number, dir: "left" | "right") => {
    if (transitioning) return;
    setDirection(dir);
    setPrev(current);
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 700);
  };

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(), INTERVAL);
  };

  const advance = () => {
    setCurrent((c) => {
      const next = (c + 1) % IMAGES.length;
      setDirection("right");
      setPrev(c);
      setTransitioning(true);
      setTimeout(() => { setPrev(null); setTransitioning(false); }, 700);
      return next;
    });
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="container-page">
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Nuestra ciudad</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">Puerto Madryn</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            La tierra que nos da voz. Capital de la ballena franca austral y puerta de entrada a la Patagonia.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-[16/7] bg-surface shadow-elevated group">
          {prev !== null && (
            <img
              key={`prev-${prev}`}
              src={IMAGES[prev].src}
              alt={IMAGES[prev].caption}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ animation: `slideOut${direction === "right" ? "Left" : "Right"} 0.7s ease forwards` }}
            />
          )}
          <img
            key={`cur-${current}`}
            src={IMAGES[current].src}
            alt={IMAGES[current].caption}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ animation: prev !== null ? `slideIn${direction === "right" ? "Right" : "Left"} 0.7s ease forwards` : undefined }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <p className="absolute bottom-5 left-6 font-display text-lg font-semibold text-white drop-shadow-lg">
            {IMAGES[current].caption}
          </p>

          <button onClick={() => { goTo((current - 1 + IMAGES.length) % IMAGES.length, "left"); restartTimer(); }} aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/50 text-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => { goTo((current + 1) % IMAGES.length, "right"); restartTimer(); }} aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/50 text-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 right-5 flex gap-1.5">
            {IMAGES.map((_, i) => (
              <button key={i} onClick={() => { goTo(i, i > current ? "right" : "left"); restartTimer(); }}
                aria-label={`Imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight  { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideOutLeft  { from { transform: translateX(0); }    to { transform: translateX(-100%); } }
        @keyframes slideInLeft   { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes slideOutRight { from { transform: translateX(0); }    to { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}
