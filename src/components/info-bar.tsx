import { useClock, formatDate, formatTime } from "@/lib/use-clock";
import { useWeather } from "@/lib/use-weather";
import { useI18n, describeWeatherKey } from "@/lib/i18n";
import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning, CloudFog, CloudSun } from "lucide-react";

function WeatherIcon({ code }: { code: number; isDay: boolean }) {
  const cls = "h-3.5 w-3.5";
  if (code === 0) return <Sun className={cls} />;
  if ([1, 2].includes(code)) return <CloudSun className={cls} />;
  if (code === 3) return <Cloud className={cls} />;
  if ([45, 48].includes(code)) return <CloudFog className={cls} />;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <CloudRain className={cls} />;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow className={cls} />;
  if ([95, 96, 99].includes(code)) return <CloudLightning className={cls} />;
  return <Cloud className={cls} />;
}

export function InfoBar() {
  const now = useClock();
  const w = useWeather();
  const { t, locale } = useI18n();
  return (
    <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
      <div className="container-page flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span className="capitalize">{formatDate(now, locale)}</span>
          <span className="opacity-50">|</span>
          <span className="font-mono tabular-nums">{formatTime(now, locale)}</span>
          <span className="opacity-50">|</span>
          <span className="opacity-80">{t("infobar.location")}</span>
        </div>
        <div className="flex items-center gap-4">
          {w ? (
            <>
              <span className="flex items-center gap-1.5">
                <WeatherIcon code={w.code} isDay={w.isDay} />
                {t(describeWeatherKey(w.code))}
              </span>
              <span className="opacity-50">|</span>
              <span>
                <span className="font-semibold">{w.temp}°C</span>
                <span className="ml-2 opacity-70">{t("infobar.feels")} {w.feels}°</span>
              </span>
            </>
          ) : (
            <span className="opacity-70">{t("infobar.loading")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
