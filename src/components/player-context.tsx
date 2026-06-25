import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

// TODO: Reemplazar por la URL real del servidor de streaming de la radio.
// Esta URL te la da tu proveedor de hosting de streaming (Shoutcast, Icecast,
// Zeno.fm, Radio.co, etc.) y suele verse así: https://servidor.proveedor.com/stream
// IMPORTANTE: debe empezar con https:// (no http://) para funcionar en todos los navegadores.
const STREAM_URL = "https://stream.zeno.fm/2cg12xpx2e0vv";

type PlayerCtx = {
  playing: boolean;
  volume: number;
  status: "idle" | "connecting" | "live" | "error";
  toggle: () => void;
  setVolume: (v: number) => void;
};

const Ctx = createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.8);
  const [status, setStatus] = useState<PlayerCtx["status"]>("idle");

  useEffect(() => {
    if (typeof Audio === "undefined") return;
    const a = new Audio();
    a.preload = "none";
    a.src = STREAM_URL;
    a.volume = volume;
    a.addEventListener("playing", () => setStatus("live"));
    a.addEventListener("waiting", () => setStatus("connecting"));
    a.addEventListener("error", () => {
      setStatus("error");
      // eslint-disable-next-line no-console
      console.error(
        "No se pudo conectar al stream de radio. Verificá que STREAM_URL en player-context.tsx sea una URL válida y use https://.",
        a.error,
      );
    });
    audioRef.current = a;
    return () => {
      a.pause();
      a.src = "";
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      setStatus("idle");
    } else {
      setStatus("connecting");
      a.play().then(() => setPlaying(true)).catch(() => setStatus("error"));
      setPlaying(true);
    }
  };

  const value = useMemo(
    () => ({ playing, volume, status, toggle, setVolume: setVolumeState }),
    [playing, volume, status],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePlayer() {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePlayer must be used inside PlayerProvider");
  return v;
}
