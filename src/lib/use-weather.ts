import { useEffect, useState } from "react";

export type Weather = {
  temp: number;
  feels: number;
  code: number;
  isDay: boolean;
};

// Puerto Madryn, Chubut
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-42.7692&longitude=-65.0385&current=temperature_2m,apparent_temperature,weather_code,is_day&timezone=America%2FArgentina%2FBuenos_Aires";

export function describeWeather(code: number): string {
  if (code === 0) return "Despejado";
  if ([1, 2].includes(code)) return "Parcialmente nublado";
  if (code === 3) return "Nublado";
  if ([45, 48].includes(code)) return "Neblina";
  if ([51, 53, 55, 56, 57].includes(code)) return "Llovizna";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Lluvia";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Nieve";
  if ([95, 96, 99].includes(code)) return "Tormenta";
  return "—";
}

export function useWeather() {
  const [data, setData] = useState<Weather | null>(null);

  useEffect(() => {
    let cancel = false;
    const load = async () => {
      try {
        const r = await fetch(URL);
        const j = await r.json();
        if (cancel) return;
        setData({
          temp: Math.round(j.current.temperature_2m),
          feels: Math.round(j.current.apparent_temperature),
          code: j.current.weather_code,
          isDay: j.current.is_day === 1,
        });
      } catch {
        /* noop */
      }
    };
    load();
    const id = setInterval(load, 10 * 60 * 1000);
    return () => {
      cancel = true;
      clearInterval(id);
    };
  }, []);

  return data;
}
