import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.err.name")).max(100),
    email: z.string().trim().email(t("contact.err.email")).max(200),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    message: z.string().trim().min(10, t("contact.err.message")).max(1000),
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success(t("contact.success"));
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const field = (k: keyof typeof form) => ({
    value: form[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value }),
  });

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{t("contact.eyebrow")}</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t("contact.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("contact.subtitle")}</p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="font-display font-bold">{t("contact.studios")}</div>
                <div className="text-sm text-muted-foreground">Av. Roca 1234, Puerto Madryn, Chubut</div>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="font-display font-bold">{t("contact.email")}</div>
                <a className="text-sm text-muted-foreground hover:text-foreground" href="mailto:fmcristal107.1@gmail.com">fmcristal107.1@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="font-display font-bold">{t("contact.phone")}</div>
                <div className="text-sm text-muted-foreground">+54 280 4 123 456</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold">{t("contact.name")}</span>
              <input {...field("name")} className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
              {errors.name && <span className="mt-1 text-xs text-destructive">{errors.name}</span>}
            </label>
            <label className="block">
              <span className="text-sm font-semibold">{t("contact.email")}</span>
              <input type="email" {...field("email")} className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
              {errors.email && <span className="mt-1 text-xs text-destructive">{errors.email}</span>}
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">{t("contact.phone")} <span className="font-normal text-muted-foreground">{t("contact.phoneOpt")}</span></span>
            <input {...field("phone")} className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">{t("contact.message")}</span>
            <textarea {...field("message")} rows={5} className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30" />
            {errors.message && <span className="mt-1 text-xs text-destructive">{errors.message}</span>}
          </label>
          <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:scale-[1.01] active:scale-95">
            <Send className="h-4 w-4" /> {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}

