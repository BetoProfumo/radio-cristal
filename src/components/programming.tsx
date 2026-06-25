import { useState } from "react";
import { SCHEDULE, DAY_LABELS, type DayKey } from "@/lib/programs";
import { useI18n } from "@/lib/i18n";
import { Clock } from "lucide-react";

const DAY_KEYS = Object.keys(DAY_LABELS) as DayKey[];

export function Programming() {
  const { t } = useI18n();
  const [activeDay, setActiveDay] = useState<DayKey>("lunes_viernes");
  const programs = SCHEDULE.programas[activeDay];

  return (
    <section id="programacion" className="py-20 sm:py-28">
      <div className="container-page">

        {/* Encabezado */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t("prog.eyebrow")}</div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t("prog.title")}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t("prog.subtitle")}</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {SCHEDULE.mes}
          </div>
        </div>

        {/* Pestañas de días */}
        <div className="mt-8 flex flex-wrap gap-2">
          {DAY_KEYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeDay === day
                  ? "bg-brand text-brand-foreground"
                  : "bg-surface text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {DAY_LABELS[day]}
            </button>
          ))}
        </div>

        {/* Grilla de programas */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.name + p.time}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elevated"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-primary font-display text-sm font-bold text-brand-foreground">
                  {p.initials}
                </div>
                <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold tabular-nums text-muted-foreground">
                  {p.time}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
              <div className="text-sm font-medium text-brand">{p.host}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        {SCHEDULE.nota && (
          <p className="mt-8 text-xs text-muted-foreground border-t border-border pt-6">
            <span className="font-semibold">Nota: </span>{SCHEDULE.nota}
          </p>
        )}
      </div>
    </section>
  );
}
