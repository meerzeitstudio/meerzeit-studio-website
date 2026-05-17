import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import iris1 from "@/assets/iris-1.png";
import iris3 from "@/assets/iris-3.png";
import ref5 from "@/assets/ref-iris-5.jpg";
import photoMaternity from "@/assets/photo-martina-1.jpg";

export const Route = createFileRoute("/bleibendes")({
  head: () => ({
    meta: [
      { title: "Bleibendes – Kunst & Fotografie aus dem Meerzeit Studio" },
      {
        name: "description",
        content:
          "Bleibendes vom Meerzeit Studio: Kunstwerke und Fotografie, die echte Momente sichtbar machen und im Raum weiterleben dürfen.",
      },
      { property: "og:title", content: "Bleibendes – Meerzeit Studio" },
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

      {/* KUNSTWERKE */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <article className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-sm bg-card aspect-[4/5]">
                  <img
                    src={iris1}
                    alt="Kunstwerk aus dem Atelier"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1400ms]"
                  />
                </div>
                <div className="overflow-hidden rounded-sm bg-card aspect-[4/5] mt-10">
                  <img
                    src={iris3}
                    alt="Kunstwerk aus dem Atelier"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1400ms]"
                  />
                </div>
              </div>
              <div>
                <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Kunstwerke</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                  Kunst mit Ruhe, <span className="italic">Gefühl und Persönlichkeit.</span>
                </h2>
                <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                  Originale aus dem Atelier – organisch, farbstark, ehrlich. Werke, die ein Zuhause
                  suchen, und individuelle Auftragsarbeiten, die in deinem Raum entstehen dürfen.
                </p>
                <Link
                  to="/atelier"
                  className="mt-8 inline-block text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
                >
                  Atelier entdecken →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* FOTOGRAFIE */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <article className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Fotografie</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                  Für Erinnerungen, <span className="italic">die sich echt anfühlen.</span>
                </h2>
                <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                  Hochzeiten, Babybauch, Motherhood, Paare und Brand Shootings für Unternehmerinnen –
                  ruhige, ehrliche Bilder im Editorial-Stil. Kein Posieren, kein Schnellschuss.
                </p>
                <Link
                  to="/fotografie"
                  className="mt-8 inline-block text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
                >
                  Fotografie ansehen →
                </Link>
              </div>
              <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
                <img
                  src={photoMaternity}
                  alt="Fotografie aus dem Meerzeit Studio"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover hover:scale-[1.03] transition-transform duration-[1400ms]"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-script text-[color:var(--terracotta)] text-xl md:text-2xl text-center mt-20 max-w-2xl mx-auto leading-snug">
              „Events sind Momente erleben. Bleibendes ist Momente festhalten."
            </p>
            <div className="text-center mt-8">
              <img
                src={ref5}
                alt=""
                aria-hidden
                className="hidden"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
