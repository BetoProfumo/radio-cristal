import { useEffect, useState } from "react";

export function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function formatTime(d: Date, locale = "es-AR") {
  return d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export function formatDate(d: Date, locale = "es-AR") {
  return d.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" });
}
