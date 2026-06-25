import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "@/lib/i18n";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <Logo className="text-primary-foreground [&_*]:text-primary-foreground" />
          <p className="mt-4 max-w-xs text-sm opacity-75">{t("footer.tag")}</p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><I className="h-4 w-4" /></a>
            ))}
          </div>
          <div className="mt-5">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider opacity-70">{t("footer.langLabel")}</div>
            <LanguageSwitcher />
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">{t("footer.nav")}</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            <li><a href="#inicio" className="hover:opacity-100">{t("nav.home")}</a></li>
            <li><a href="#noticias" className="hover:opacity-100">{t("nav.news")}</a></li>
            <li><a href="#programacion" className="hover:opacity-100">{t("nav.programming")}</a></li>
            <li><a href="#nosotros" className="hover:opacity-100">{t("nav.about")}</a></li>
            <li><a href="#contacto" className="hover:opacity-100">{t("nav.contact")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Av. Roca 1234, Puerto Madryn, Chubut</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" />fmcristal107.1@gmail.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" />+54 280 4 123 456</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">{t("footer.join")}</h4>
          <p className="mt-4 text-sm opacity-75">{t("footer.joinDesc")}</p>
          <form className="mt-4 flex">
            <input type="email" placeholder="tu@email.com" className="h-10 w-full rounded-l-full bg-white/10 px-4 text-sm outline-none placeholder:text-white/50" />
            <button className="h-10 rounded-r-full bg-brand px-4 text-sm font-semibold text-brand-foreground">OK</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs opacity-70 sm:flex-row">
          <span>© {new Date().getFullYear()} Radio Cristal. {t("footer.rights")}</span>
          <span className="opacity-70">Sitio web desarrollado por <a href="https://www.instagram.com/valentino.profumo/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-100 underline underline-offset-2">Valentino Profumo</a></span>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100">{t("footer.privacy")}</a>
            <a href="#" className="hover:opacity-100">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
