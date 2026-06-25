// Decoración SVG de ballenas para el Hero
// Se renderiza en el lado derecho del hero en pantallas grandes

export function WhaleDecoration({ playing }: { playing: boolean }) {
  return (
    <div className="fade-up hidden lg:flex lg:items-center lg:justify-center">
      <div className="relative w-full max-w-lg">
        {/* Card del reproductor encima */}
        <div className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-elevated dark:border-border dark:bg-card/70">
          {/* SVG ballena como fondo decorativo dentro del card */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none select-none opacity-[0.07]">
            <svg viewBox="0 0 420 260" className="absolute bottom-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Olas de fondo */}
              <path d="M0 200 Q50 185 100 200 Q150 215 200 200 Q250 185 300 200 Q350 215 420 200 L420 260 L0 260 Z" fill="currentColor" opacity="0.5" className="text-brand"/>
              <path d="M0 220 Q60 205 120 220 Q180 235 240 220 Q300 205 360 220 Q390 228 420 220 L420 260 L0 260 Z" fill="currentColor" className="text-brand"/>
              {/* Ballena grande */}
              <path d="M80 160 C60 155 30 165 15 150 C10 145 18 135 30 138 C20 125 35 115 50 120 C55 100 75 90 100 95 C115 75 145 70 170 80 C195 65 230 68 250 85 C275 80 295 90 300 108 C315 105 330 115 325 130 C335 140 330 155 315 158 C310 165 290 170 265 168 C255 178 235 182 215 178 C200 185 175 185 160 178 C145 185 120 182 105 175 Z" fill="currentColor" className="text-brand" opacity="0.9"/>
              {/* Ojo de la ballena */}
              <circle cx="275" cy="120" r="6" fill="white" opacity="0.9"/>
              <circle cx="277" cy="119" r="3" fill="currentColor" className="text-primary"/>
              {/* Aleta dorsal */}
              <path d="M190 82 C195 60 210 50 220 55 C225 58 222 75 215 82 Z" fill="currentColor" className="text-brand"/>
              {/* Aleta pectoral */}
              <path d="M130 135 C115 148 105 168 115 175 C125 168 140 155 145 140 Z" fill="currentColor" className="text-brand" opacity="0.8"/>
              {/* Cola */}
              <path d="M80 162 C65 155 45 148 30 155 C25 158 28 165 35 163 C42 175 55 178 68 170 Z" fill="currentColor" className="text-brand"/>
              <path d="M80 162 C68 172 55 185 60 195 C65 198 72 193 75 185 C82 188 88 183 85 172 Z" fill="currentColor" className="text-brand"/>
              {/* Salpicadura de agua */}
              <path d="M300 105 Q305 95 308 85 Q310 80 315 88 Q312 95 315 100" stroke="currentColor" strokeWidth="2" fill="none" className="text-brand" opacity="0.7" strokeLinecap="round"/>
              <path d="M308 85 Q312 75 320 70 Q322 65 326 73" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-brand" opacity="0.5" strokeLinecap="round"/>
              <circle cx="321" cy="68" r="2" fill="currentColor" className="text-brand" opacity="0.4"/>
              <circle cx="327" cy="63" r="1.5" fill="currentColor" className="text-brand" opacity="0.3"/>
              {/* Ballena pequeña al fondo */}
              <path d="M10 185 C0 182 -5 188 -10 183 C-12 180 -8 175 -2 177 C-8 170 0 164 10 167 C15 158 28 155 38 159 C46 152 60 153 68 160 C78 157 87 162 88 170 C94 168 100 174 97 180 C101 185 98 192 90 194 C87 198 76 200 65 198 C60 203 50 204 43 200 C37 204 26 203 20 198 Z" fill="currentColor" className="text-brand" opacity="0.5"/>
              {/* Pequeñas burbujas */}
              <circle cx="170" cy="88" r="3" fill="currentColor" className="text-brand" opacity="0.4"/>
              <circle cx="178" cy="78" r="2" fill="currentColor" className="text-brand" opacity="0.3"/>
              <circle cx="165" cy="72" r="1.5" fill="currentColor" className="text-brand" opacity="0.2"/>
            </svg>
          </div>

          {/* Contenido del card (igual que antes) */}
          <div className="flex items-center justify-between text-white dark:text-foreground">
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="live-dot" />
              En vivo
            </div>
            <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
            </svg>
          </div>
          <div className="mt-5 flex items-center gap-4 text-white dark:text-foreground">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-primary">
              <svg className="h-7 w-7 text-brand-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider opacity-70">Transmisión en vivo</div>
              <div className="truncate font-display text-xl font-bold">Radio Cristal 107.1</div>
              <div className="truncate text-sm opacity-80">Puerto Madryn, Chubut</div>
            </div>
          </div>
          <div className="mt-6 flex items-end gap-1 text-brand">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="block w-1.5 rounded-full bg-current"
                style={{
                  height: `${10 + Math.abs(Math.sin(i * 0.6)) * 38}px`,
                  opacity: playing ? 0.9 : 0.35,
                }}
              />
            ))}
          </div>
          <a href="#programacion" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white dark:text-muted-foreground dark:hover:text-foreground">
            Ver programación
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Ballenas flotando DEBAJO del card, visibles en el hero */}
        <div className="pointer-events-none absolute -bottom-16 -left-8 -right-8 select-none opacity-20">
          <svg viewBox="0 0 520 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Ola */}
            <path d="M0 80 Q65 60 130 80 Q195 100 260 80 Q325 60 390 80 Q455 100 520 80 L520 120 L0 120Z" fill="white" opacity="0.3"/>
            {/* Ballena izquierda saltando */}
            <path d="M60 75 C40 68 15 75 5 62 C2 57 10 48 22 52 C12 40 28 30 44 36 C50 18 72 10 95 18 C112 4 145 6 162 20 C185 15 202 25 204 40 C218 36 232 47 227 60 C236 70 230 83 216 86 C212 93 192 97 172 94 C163 102 143 104 125 99 C112 106 88 104 76 96 Z" fill="white" opacity="0.9"/>
            <circle cx="198" cy="46" r="5" fill="white" opacity="0.7"/>
            <circle cx="200" cy="45" r="2.5" fill="currentColor" className="text-primary" opacity="0.9"/>
            {/* Cola ballena izquierda */}
            <path d="M60 77 C46 70 28 62 14 70 C10 73 13 80 20 77 C28 89 42 92 55 84 Z" fill="white" opacity="0.9"/>
            <path d="M60 77 C48 88 36 100 42 110 C48 113 54 107 56 98 C64 101 70 95 67 84 Z" fill="white" opacity="0.9"/>
            {/* Aleta dorsal */}
            <path d="M140 16 C146 -2 162 -12 170 -6 C175 -2 172 14 164 20 Z" fill="white" opacity="0.9"/>
            {/* Salpicadura */}
            <path d="M204 38 Q210 25 215 14 Q218 7 223 18 Q218 27 222 34" stroke="white" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round"/>
            <circle cx="224" cy="8" r="2" fill="white" opacity="0.5"/>
            {/* Ballena derecha más pequeña */}
            <path d="M340 90 C325 85 305 90 296 80 C293 76 298 68 308 71 C300 62 313 54 325 59 C330 44 348 37 366 44 C380 32 406 34 420 46 C438 42 452 51 452 63 C462 61 472 70 468 80 C475 88 469 98 456 100 C453 106 435 109 418 107 C410 113 392 115 378 111 C366 116 345 115 335 108 Z" fill="white" opacity="0.6"/>
            <circle cx="448" cy="68" r="4" fill="white" opacity="0.8"/>
            <circle cx="450" cy="67" r="2" fill="currentColor" className="text-primary" opacity="0.7"/>
            <path d="M340 91 C328 85 312 78 300 85 C297 88 300 94 307 92 C313 102 326 105 337 97 Z" fill="white" opacity="0.6"/>
            <path d="M340 91 C329 101 318 112 323 120 C328 122 333 117 335 109 C342 112 347 106 344 96 Z" fill="white" opacity="0.6"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
