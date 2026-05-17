import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import founders from "@/assets/founders.jpg";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meerzeit Studio",
  description:
    "Meerzeit Studio entwickelt kreative Erlebnisse und Auftragsarbeiten, die Menschen berühren – authentisch, ruhig und zeitlos.",
  slogan: "Nicht nur etwas Schönes. Etwas Echtes.",
  knowsAbout: [
    "Kreative Auszeiten",
    "Acrylmalerei",
    "Auftragskunst",
    "Fotografie",
    "Resonanz",
    "Entschleunigung",
  ],
};

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Zwei Gründerinnen, selbst Mütter. Aus kleinen Treffen wurde eine Idee: Frauen einen Raum geben, in dem sie einfach sein dürfen.",
      },
      { property: "og:title", content: "Über uns – Meerzeit Studio" },
      {
        property: "og:description",
        content: "Zwei Gründerinnen. Selbst Mütter. Eine gemeinsame Vision.",
      },
      { property: "og:image", content: founders },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="über uns"
        title="Zwei Gründerinnen."
        italic="Selbst Mütter."
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={founders}
                alt="Die zwei Gründerinnen von Meerzeit Studio am Meer"
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">unsere Geschichte</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Aus kleinen Treffen wurde
              <br />
              <span className="italic">eine Idee.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Wir sind zwei Frauen, zwei Mütter, zwei Freundinnen. Zwischen
                Wickeltisch, Job und Wäscheberg haben wir uns immer wieder eine Sache
                gefehlt: einen Ort, an dem wir einfach sein dürfen.
              </p>
              <p>
                Also haben wir ihn uns gemacht. Erst für uns. Dann für unsere Freundinnen.
                Heute für dich.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Meerzeit Studio ist genau das, was wir damals selbst gebraucht hätten.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">wofür wir stehen</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Vision &amp; <span className="italic">Mission.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* VISION */}
            <Reveal>
              <article className="relative h-full bg-card border border-border rounded-sm p-8 md:p-10 shadow-[var(--shadow-soft)]">
                <span className="absolute -top-3 left-8 px-3 py-1 bg-[color:var(--terracotta)] text-[color:var(--ivory)] text-xs tracking-[0.25em] uppercase rounded-full">
                  Vision
                </span>
                <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-6 mt-2">
                  Räume, die Menschen
                  <span className="italic"> langsamer werden lassen.</span>
                </h3>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    In einer Welt, die immer schneller wird, glauben wir an Räume, die
                    Menschen wieder langsamer werden lassen.
                  </p>
                  <p>
                    Wir kennen den Druck, kreativ sein zu wollen – und gleichzeitig das
                    Gefühl, dass alles sofort gut sein muss. Das leere Blatt. Die
                    Erwartungen. Der Fokus auf das Ergebnis.
                  </p>
                  <p className="font-serif text-foreground italic text-lg leading-relaxed">
                    Doch wir haben gelernt: Die schönsten Ideen entstehen nicht unter Druck.
                  </p>
                  <ul className="space-y-2 pl-4 border-l-2 border-[color:var(--terracotta)]/40">
                    <li>Sie entstehen, wenn man einfach beginnt.</li>
                    <li>Wenn Menschen zusammenkommen.</li>
                    <li>Wenn aus Ruhe Flow wird.</li>
                    <li>Wenn Kreativität wieder leicht sein darf.</li>
                  </ul>
                  <p>
                    Meerzeit Studio schafft genau diesen Raum – für echte Begegnung, für
                    Resonanz, für kreative Momente, die nicht perfekt sein müssen, um
                    bedeutend zu sein.
                  </p>
                  <p className="font-script text-[color:var(--terracotta)] text-lg pt-2">
                    Wir glauben, die Welt braucht mehr davon.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* MISSION */}
            <Reveal delay={150}>
              <article className="relative h-full bg-[color:var(--smoke)] text-[color:var(--ivory)] rounded-sm p-8 md:p-10 shadow-[var(--shadow-soft)]">
                <span className="absolute -top-3 left-8 px-3 py-1 bg-[color:var(--ivory)] text-[color:var(--smoke)] text-xs tracking-[0.25em] uppercase rounded-full">
                  Mission
                </span>
                <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-6 mt-2">
                  Arbeiten, die berühren.
                  <span className="italic"> Räume, die verbinden.</span>
                </h3>
                <div className="space-y-4 text-[color:var(--ivory)]/85 font-light leading-relaxed">
                  <p>
                    Meerzeit Studio entwickelt kreative Erlebnisse und Auftragsarbeiten,
                    die Menschen berühren.
                  </p>
                  <p>
                    Von Fotoshootings bis zu individuellen Kunstwerken schaffen wir
                    Arbeiten mit Gefühl, Atmosphäre und Persönlichkeit – authentisch,
                    ruhig und zeitlos.
                  </p>
                  <p>
                    Gleichzeitig öffnen wir Räume, in denen Menschen gemeinsam kreativ
                    werden können. Ohne Leistungsdruck. Ohne Erwartungen. Einfach im
                    Moment.
                  </p>
                  <p className="font-serif italic text-[color:var(--ivory)] text-lg leading-relaxed">
                    Denn Kreativität verändert sich, wenn man sie teilt.
                  </p>
                  <ul className="space-y-2 pl-4 border-l-2 border-[color:var(--terracotta)]">
                    <li>Sie verbindet.</li>
                    <li>Sie entschleunigt.</li>
                    <li>Sie bringt Menschen wieder in Resonanz – mit sich und miteinander.</li>
                  </ul>
                  <p className="pt-2">
                    Darum geht es bei Meerzeit Studio. Nicht nur etwas Schönes zu
                    erschaffen,
                    <span className="font-script text-[color:var(--terracotta)] text-xl"> sondern etwas Echtes.</span>
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[color:var(--muted)] text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">was wir versprechen</p>
          <p className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-snug text-balance">
            Einen Raum, der sich anfühlt wie eine
            <span className="italic"> warme Umarmung</span> – ohne Worte.
          </p>
          <Link
            to="/sessions"
            className="mt-10 inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
          >
            Unsere Begegnungen
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
