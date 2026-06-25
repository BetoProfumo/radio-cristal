// ============================================================
//  WIDGET DE TRANSMISIÓN EN VIVO — YOUTUBE
//  Channel ID: UC6pJGaMdx5Ter_8zYbLoRgA
//
//  Para que la detección automática de live funcione,
//  necesitás una YouTube Data API Key gratuita:
//  https://console.cloud.google.com → Credentials → API Key
//  Habilitá "YouTube Data API v3" y pegá la key abajo.
// ============================================================

const YOUTUBE_CHANNEL_ID = "UC6pJGaMdx5Ter_8zYbLoRgA";
const YOUTUBE_API_KEY = "AIzaSyDi9_B0exm1LKQM_qZoMODYH3afKeoVXH0n"; // <-- Pegá tu API Key acá (opcional)

import { useEffect, useRef, useState } from "react";
import { X, Youtube, WifiOff, Minimize2, Maximize2 } from "lucide-react";

type LiveStatus = "checking" | "live" | "offline";

async function fetchLiveVideoId(channelId: string, apiKey: string): Promise<string | null> {
  const url = `https://www.googleapis.com/youtube/v3/search?part=id&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0]?.id?.videoId ?? null;
}

export function YoutubeLiveWidget() {
  const [status, setStatus] = useState<LiveStatus>("checking");
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkLive = async () => {
    try {
      if (YOUTUBE_API_KEY) {
        // Con API key: detección exacta
        const videoId = await fetchLiveVideoId(YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY);
        if (videoId) {
          setLiveVideoId(videoId);
          setStatus("live");
        } else {
          setStatus("offline");
        }
      } else {
        // Sin API key: mostramos el embed y dejamos que YouTube decida.
        // Si no hay live activo, YouTube muestra su propio mensaje.
        // Marcamos como "live" para que el iframe se cargue siempre.
        setStatus("live");
        setLiveVideoId(null); // null = usar embed de canal directo
      }
    } catch {
      setStatus("offline");
    }
  };

  useEffect(() => {
    checkLive();
    intervalRef.current = setInterval(checkLive, 2 * 60 * 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // La URL del embed cambia según si tenemos video ID exacto o no
  const embedUrl = liveVideoId
    ? `https://www.youtube.com/embed/${liveVideoId}?autoplay=1&rel=0`
    : `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1&rel=0`;

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-24 right-4 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${
        expanded ? "w-80 h-56" : "w-64 h-auto"
      }`}
      style={{ boxShadow: "0 8px 32px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 bg-surface px-3 py-2 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <Youtube className="h-4 w-4 text-[#FF0000]" />
          <span className="text-xs font-bold text-foreground">En Vivo</span>
          {status === "live" && (
            <span className="flex items-center gap-1 rounded-full bg-red-500/15 px-1.5 py-0.5 text-[10px] font-bold text-red-400">
              <span className="live-dot" style={{ width: 5, height: 5 }} />
              YOUTUBE
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label={expanded ? "Minimizar" : "Expandir"}
          >
            {expanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={() => setVisible(false)}
            className="rounded p-1 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Contenido */}
      {status === "checking" && (
        <div className="flex flex-col items-center justify-center gap-2 py-5 text-muted-foreground">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="text-xs">Verificando…</span>
        </div>
      )}

      {status === "offline" && (
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-5 text-center">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-surface">
            <WifiOff className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-xs font-semibold text-foreground">Sin transmisión activa</p>
          <p className="text-[11px] text-muted-foreground leading-tight">
            Cuando la radio esté en vivo en YouTube, el stream aparecerá aquí.
          </p>
          <a
            href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#FF0000]/10 px-3 py-1 text-[11px] font-semibold text-[#FF0000] hover:bg-[#FF0000]/20 transition-colors"
          >
            <Youtube className="h-3 w-3" /> Ver canal
          </a>
        </div>
      )}

      {status === "live" && (
        <div className={`relative bg-black ${expanded ? "flex-1" : "aspect-video"}`}>
          <iframe
            key={embedUrl}
            src={embedUrl}
            title="Radio Cristal en vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}
    </div>
  );
}
