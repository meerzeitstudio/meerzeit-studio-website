import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { absUrl } from "@/lib/seo";
import founders from "@/assets/founders.jpg";
import irisAsset from "@/assets/iris.png.asset.json";
import martinaAsset from "@/assets/martina.jpeg.asset.json";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meerzeit Studio",
  description:
    "Meerzeit Studio entwickelt kreative Erlebnisse und Auftragsarbeiten, die Menschen berühren. Authentisch, ruhig und zeitlos.",
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
      { title: "Über uns · Meerzeit Studio" },
      {
        name: "description",
        content:
          "Zwei Gründerinnen, selbst Mütter. Aus kleinen Treffen wurde eine Idee: einen Raum schaffen, in dem ihr einfach sein dürft.",
      },
      { property: "og:title", content: "Über uns · Meerzeit Studio" },
      {
        property: "og:description",
        content: "Zwei Gründerinnen. Selbst Mütter. Eine gemeinsame Vision.",
      },
      { property: "og:image", content: absUrl(founders) },
      { name: "twitter:image", content: absUrl(founders) },
    ],
    links: [{ rel: "canonical", href: absUrl("/ueber-uns") }],
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
              <p className="font-serif italic text-foreground text-xl whitespace-pre-line">
                Meerzeit Studio ist genau das, was wir damals selbst gebraucht hätten. {"\n\n"}
                Eure Iris & Martina
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION — text only */}
      <section className="py-16 md:py-24 px-6 border-t border-border/60">
        <div className="max-w-3xl mx-auto grid md:grid-cols-[auto_1fr] gap-x-12 gap-y-16">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg md:sticky md:top-28">Vision</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Ein Raum, in dem ihr
              <br />
              <span className="italic">einfach sein dürft.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Wir glauben, dass jede:r Momente braucht, in denen man einfach mal nur
                sein darf. Ohne Erwartungen. Ohne Druck. Ohne perfekt funktionieren zu müssen.
              </p>
              <p>
                Meerzeit Studio ist aus genau diesem Wunsch entstanden: einen Raum zu schaffen,
                der ruhig ist. Kreativ. Echt. Einen Ort, an dem man abschalten, ausprobieren
                und wieder bei sich ankommen darf.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Denn oft entstehen die schönsten Dinge nicht dann, wenn alles perfekt sein soll,
                sondern wenn man loslässt und einfach beginnt.
              </p>
              <p>
                Genau dafür möchten wir Raum schaffen. Für kleine Auszeiten. Für echte
                Begegnungen. Und für kreative Momente, die sich leicht anfühlen dürfen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg md:sticky md:top-28">Mission</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Kreative Erlebnisse
              <br />
              <span className="italic">und Arbeiten mit Gefühl.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Mit Meerzeit Studio schaffen wir kreative Erlebnisse und persönliche
                Arbeiten mit Gefühl.
              </p>
              <p>
                Wir veranstalten kreative Events für dich, in denen nicht Leistung oder
                Talent im Mittelpunkt stehen, sondern Zeit für sich selbst.
              </p>
              <p>
                Gleichzeitig gestalten wir Kunstwerke und fotografische Erinnerungen, die
                echt und persönlich sind.
              </p>
              <p>
                Ob bei kreativen Events, einem Fotoshooting oder einem individuellen
                Kunstwerk: Es geht uns nicht darum, etwas Perfektes zu erschaffen.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Sondern etwas, das sich ehrlich anfühlt. Etwas, das bleibt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WOFÜR WIR STEHEN — zwei Säulen */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">Vision &amp; Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              Momente erleben.
              <br />
              <span className="italic">Momente festhalten.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed text-lg">
              Zwei Wege, ein Gefühl. Bei Meerzeit Studio geht es nicht darum, etwas zu leisten.
              sondern um echte Momente, die berühren und bleiben dürfen.
            </p>
          </Reveal>
        </div>

        {/* EVENTS · Momente erleben */}
        <div className="max-w-5xl mx-auto mb-24 md:mb-32">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={erleben}
                alt="Kreative Auszeit bei Meerzeit Studio"
                loading="lazy"
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
            <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Events — Momente erleben</p>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
                Räume, die Menschen <span className="italic">langsamer werden lassen.</span>
              </h3>
              <div className="mt-6 space-y-5 text-muted-foreground font-light leading-relaxed text-lg">
                <p>
                  In einer Welt, die immer schneller wird, glauben wir an Räume, die Menschen
                  wieder langsamer werden lassen. Ohne Druck. Ohne Erwartungen. Einfach im Moment.
                </p>
                <p className="font-serif italic text-foreground">
                  Die schönsten Ideen entstehen nicht unter Druck. Sie entstehen, wenn man einfach beginnt.
                </p>
                <p>
                  Unsere Events sind kreative Auszeiten für dich. Ein Raum zum Abschalten,
                  Ausprobieren und einfach im Moment sein.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* BLEIBENDES · Momente festhalten */}
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={festhalten}
                alt="Bleibendes: Kunst und Fotografie aus dem Atelier"
                loading="lazy"
                className="w-full aspect-[16/10] md:aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
            <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Bleibendes — Momente festhalten</p>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
                Arbeiten, die berühren. <span className="italic">Erinnerungen, die bleiben.</span>
              </h3>
              <div className="mt-6 space-y-5 text-muted-foreground font-light leading-relaxed text-lg">
                <p>
                  Manche Momente möchte man festhalten. Mit Bildern, Kunst und Erinnerungen,
                  die sich echt anfühlen und bleiben dürfen.
                </p>
                <p>
                  Von Fotografie bis zu individuellen Kunstwerken schaffen wir Arbeiten mit
                  Gefühl, Atmosphäre und Persönlichkeit. Authentisch und zeitlos.
                </p>
                <p className="font-serif italic text-foreground">
                  Nicht nur etwas Schönes zu erschaffen, sondern etwas Echtes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-[color:var(--muted)] text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">was wir versprechen</p>
          <p className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-snug text-balance">
            Einen Raum, der sich anfühlt wie eine
            <span className="italic"> warme Umarmung</span>. Ohne Worte.
          </p>
          <Link
            to="/sessions"
            className="mt-10 inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
          >
            Unsere Events
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
