// ============================================================
//  LOGO DE RADIO CRISTAL
//  Para usar el logo PNG:
//  1. Copiá el archivo a src/assets/logo.png
//  2. Descomentá la línea de import abajo
//  3. Comentá o borrá el bloque <div> del logo SVG
// ============================================================

import logoImg from "@/assets/logo.png"; // <- descomentá cuando tengas el archivo

export function Logo({ className = "" }: { className?: string }) {
  // Cuando tengas el PNG, reemplazá este componente por:
return <img src={logoImg} alt="Radio Cristal" className={`h-10 w-auto ${className}`} />;

}
