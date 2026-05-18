import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import iris1 from "@/assets/iris-1.png";
import photoMaternity from "@/assets/photo-martina-1.jpg";

export const Route = createFileRoute("/bleibendes")({
  head: () => ({
    meta: [
      { title: "Bleibendes: Kunst & Fotografie aus dem Meerzeit Studio" },
      {
        name: "description",
        content:
          "Bleibendes vom Meerzeit Studio: Kunstwerke und Fotografie, die echte Momente sichtbar machen und im Raum weiterleben dürfen.",
      },
      { property: "og:title", content: "Bleibendes · Meerzeit Studio" },
      {
        property: "og:description",
        content:
          "Kunst und Fotografie, die sich echt anfühlen und bleiben dürfen.",
      },
      { property: "og:image", content: iris1 },
    ],
  }),
  component: BleibendesPage,
});

function BleibendesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Bleibendes"
        title="Momente, die"
        italic="bleiben dürfen."
        intro="Manche Momente möchte man festhalten. Mit Bildern, Kunst und Erinnerungen, die sich echt anfühlen und bleiben dürfen."
      />

      {/* SUB-NAV */}
      <div className="px-6 -mt-6 pb-2">
        <div className="max-w-6xl mx-auto flex justify-center gap-3 md:gap-4 flex-wrap">
          <Link
            to="/atelier"
            className="px-6 py-2.5 rounded-full border border-[color:var(--smoke)]/40 text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-xs tracking-[0.25em] uppercase"
          >
            Atelier entdecken
          </Link>
          <Link
            to="/fotografie"
            className="px-6 py-2.5 rounded-full border border-[color:var(--smoke)]/40 text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-xs tracking-[0.25em] uppercase"
          >
            Fotografie ansehen
          </Link>
        </div>
      </div>

      {/* KUNSTWERKE */}
      <section id="kunstwerke" className="py-24 md:py-32 px-6 bg-background scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={iris1}
                alt="Kunstwerk aus dem Atelier"
                loading="lazy"
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
            <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Kunstwerke</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Kunst mit Ruhe, <span className="italic">Gefühl und Persönlichkeit.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed text-lg">
                Originale aus dem Atelier. Organisch, farbstark, ehrlich. Werke, die ein Zuhause
                suchen, und individuelle Auftragsarbeiten, die in deinem Raum entstehen dürfen.
              </p>
              <Link
                to="/atelier"
                className="mt-8 inline-block text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
              >
                Atelier entdecken →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOTOGRAFIE */}
      <section id="fotografie" className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={photoMaternity}
                alt="Fotografie aus dem Meerzeit Studio"
                loading="lazy"
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
            <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Fotografie</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Für Erinnerungen, <span className="italic">die sich echt anfühlen.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed text-lg">
                Hochzeiten, Babybauch, Motherhood, Paare und Brand Shootings für Unternehmerinnen.
                ehrliche Bilder im Editorial-Stil. Kein Posieren, kein Schnellschuss.
              </p>
              <Link
                to="/fotografie"
                className="mt-8 inline-block text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
              >
                Fotografie ansehen →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-script text-[color:var(--terracotta)] text-xl md:text-2xl text-center mt-20 max-w-2xl mx-auto leading-snug">
              „Events sind Momente erleben. Bleibendes ist Momente festhalten."
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
