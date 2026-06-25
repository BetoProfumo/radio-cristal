import schedule from "./programacion.json";
 
export type Program = {
  time: string;
  name: string;
  host: string;
  description: string;
  initials: string;
};
 
export type DayKey = keyof typeof schedule.programas;
 
export const SCHEDULE = schedule;
 
// Para la sección principal del sitio mostramos Lunes a Viernes
export const PROGRAMS: Program[] = schedule.programas.lunes_viernes;
 
export const DAY_LABELS: Record<DayKey, string> = {
  lunes_viernes: "Lunes a Viernes",
  lunes_miercoles_viernes: "Lun / Mié / Vie",
  jueves: "Jueves",
  sabado: "Sábado",
  domingo: "Domingo",
};