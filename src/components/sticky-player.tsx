import { usePlayer } from "./player-context";
import { useI18n } from "@/lib/i18n";
import { Loader2, Pause, Play, Volume2, VolumeX, Wifi, WifiOff } from "lucide-react";

export function StickyPlayer() {
  const { playing, toggle, status, volume, setVolume } = usePlayer();
  const { t } = useI18n();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="pointer-events-auto mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-border bg-card/90 px-3 py-2 shadow-elevated backdrop-blur-xl sm:gap-4 sm:px-4">
        <button
          onClick={toggle}
          aria-label={playing ? t("player.pause") : t("player.play")}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-primary text-brand-foreground shadow-glow transition-transform active:scale-95"
        >
          {status === "connecting" ? <Loader2 className="h-5 w-5 animate-spin" /> : playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-px" />}
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-live/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-live">
            <span className="live-dot" /> {t("player.live")}
          </span>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold leading-tight">La Mañana Informativa</div>
            <div className="truncate text-[11px] text-muted-foreground">Diego Vázquez</div>
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          {volume === 0 ? <VolumeX className="h-4 w-4 text-muted-foreground" /> : <Volume2 className="h-4 w-4 text-muted-foreground" />}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-1 w-24 accent-brand"
            aria-label={t("player.volume")}
          />
        </div>

        <div className="hidden items-center gap-1 text-[11px] text-muted-foreground sm:flex">
          {status === "error" ? <WifiOff className="h-3.5 w-3.5 text-destructive" /> : <Wifi className="h-3.5 w-3.5" />}
          <span className="hidden md:inline">{status === "error" ? t("player.nosignal") : status === "connecting" ? t("player.connecting") : playing ? t("player.connected") : t("player.idle")}</span>
        </div>
      </div>
    </div>
  );
}
