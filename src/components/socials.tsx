import { Facebook, Instagram, MessageCircle, Music2, Twitter, Youtube } from "lucide-react";

const SOCIALS = [
  { name: "Facebook", icon: Facebook, href: "#", color: "from-[#1877F2] to-[#0d5fcc]" },
  { name: "Instagram", icon: Instagram, href: "#", color: "from-[#E1306C] to-[#C13584]" },
  { name: "X / Twitter", icon: Twitter, href: "#", color: "from-[#1f1f1f] to-[#000]" },
  { name: "YouTube", icon: Youtube, href: "#", color: "from-[#FF0000] to-[#c40000]" },
  { name: "TikTok", icon: Music2, href: "#", color: "from-[#25F4EE] to-[#FE2C55]" },
  { name: "WhatsApp", icon: MessageCircle, href: "#", color: "from-[#25D366] to-[#128C7E]" },
];

export function Socials() {
  return (
    <section className="border-y border-border bg-surface py-16">
      <div className="container-page">
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Seguinos</div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Conectate con Radio Cristal</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.name} className={`group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl bg-linear-to-br ${s.color} p-5 text-white transition-transform hover:-translate-y-1`}>
              <s.icon className="h-7 w-7" />
              <span className="text-sm font-semibold">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
