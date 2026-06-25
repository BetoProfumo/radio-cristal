import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { InfoBar } from "@/components/info-bar";
import { Hero } from "@/components/hero";
import { FeaturedNews } from "@/components/featured-news";
import { NewsSection } from "@/components/news-section";
import { About } from "@/components/about";
import { MadrynGallery } from "@/components/madryn-gallery";
import { Programming } from "@/components/programming";
import { Socials } from "@/components/socials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { StickyPlayer } from "@/components/sticky-player";
import { YoutubeLiveWidget } from "@/components/youtube-live";
import { PlayerProvider } from "@/components/player-context";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radio Cristal — La voz de Puerto Madryn las 24 horas" },
      {
        name: "description",
        content:
          "Radio Cristal Puerto Madryn: noticias, programación en vivo y la mejor música de la Patagonia argentina. Escuchá nuestra transmisión 24/7.",
      },
      { property: "og:title", content: "Radio Cristal — La voz de Puerto Madryn" },
      { property: "og:description", content: "Noticias, streaming en vivo y programación de Radio Cristal, Puerto Madryn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <PlayerProvider>
        <div className="dark min-h-screen bg-background pb-24 text-foreground">
          <InfoBar />
          <Header />
          <main>
            <Hero />
            <FeaturedNews />
            <NewsSection />
            <About />
            <MadrynGallery />
            <Programming />
            <Socials />
            <Contact />
          </main>
          <Footer />
          <StickyPlayer />
          <YoutubeLiveWidget />
        </div>
      </PlayerProvider>
    </I18nProvider>
  );
}
