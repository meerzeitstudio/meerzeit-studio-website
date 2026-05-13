import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import wave from "@/assets/atelier-wave.jpg";
import portrait from "@/assets/atelier-portrait.jpg";
import collage from "@/assets/atelier-collage.jpg";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Atelier & Stories – Kunstwerke und Auftragsarbeiten" },
      {
        name: "description",
        content:
          "Weitere kreative Ausdrucksformen von Meerzeit Studio: freie Kunstwerke, Auftragskunst und emotionale Fotografie – Hochzeiten, Babybauch, Motherhood, Paare, Brand.",
      },
      { property: "og:title", content: "Atelier & Stories – Meerzeit Studio" },
      { property: "og:image", content: wave },
    ],
  }),
  component: AtelierPage,
});

const works = [
  { img: wave, title: "Tide", note: "Diptychon · Acryl auf Leinwand" },
  { img: portrait, title: "Sommerlicht", note: "Freie Arbeit · Mixed Media" },
  { img: collage, title: "Zwischenräume", note: "Collage · Acryl & Papier" },
];

const services = [
  { t: "Individuelle Kunstwerke", s: "Ein Werk, das in deinen Raum hineinwächst – in Farbe, Format und Stimmung." },
  { t: "Hochzeitsfotografie", s: "Für den Tag, an dem alles ehrlich ist. Bilder, die sich anfühlen wie ihr." },
  { t: "Babybauchshootings", s: "Weiches Licht, kein Posieren – nur du und das Leben, das in dir wächst." },
  { t: "Motherhood Sessions", s: "Die kleinen Momente zwischen euch – festgehalten, bevor sie weiterziehen." },
  { t: "Paarshootings", s: "Nähe, wie sie wirklich aussieht. Ohne Inszenierung, mit viel Raum." },
  { t: "Brand Shootings", s: "Für Unternehmerinnen, die sich zeigen wollen – als die, die sie wirklich sind." },
];

function AtelierPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Atelier & Stories"
        title="Weitere Ausdrucksformen"
        italic="aus dem Studio."
        intro="Neben den Sessions entstehen hier Werke und Bilder – freie Kunst, Auftragsarbeiten und Fotografie. Verschiedene Sprachen, eine Handschrift."
      />

      {/* KUNSTWERKE */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Kunstwerke</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                  Werke, die Räume <span className="italic">ruhiger machen.</span>
                </h2>
                <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-xl">
                  Freie Arbeiten, strukturierte Leinwandkunst, organische Formen, ruhige Farbwelten –
                  und Auftragskunst, die für einen bestimmten Ort entsteht. Kunst, die Emotion sichtbar werden lässt.
                </p>
              </div>
              <Link
                to="/buchen"
                className="self-start inline-block px-7 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase whitespace-nowrap"
              >
                Kunst entdecken
              </Link>
            </div>
          </Reveal>

          {/* Editorial gallery grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal delay={0}>
              <figure className="col-span-12 md:col-span-7">
                <div className="overflow-hidden rounded-sm bg-card">
                  <img
                    src={works[0].img}
                    alt={works[0].title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                  <span>{works[0].title}</span>
                  <span className="font-light normal-case tracking-normal italic">{works[0].note}</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="col-span-12 md:col-span-5 md:mt-16">
                <div className="overflow-hidden rounded-sm bg-card">
                  <img
                    src={works[1].img}
                    alt={works[1].title}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                  <span>{works[1].title}</span>
                  <span className="font-light normal-case tracking-normal italic">{works[1].note}</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={240}>
              <figure className="col-span-12 md:col-span-5 md:col-start-4">
                <div className="overflow-hidden rounded-sm bg-card">
                  <img
                    src={works[2].img}
                    alt={works[2].title}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                  <span>{works[2].title}</span>
                  <span className="font-light normal-case tracking-normal italic">{works[2].note}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AUFTRAGSARBEITEN */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Auftragsarbeiten</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Für Erinnerungen, die sich
                <br />
                <span className="italic">echt anfühlen.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Ob Pinsel oder Kamera – wir arbeiten leise, nah und ohne Inszenierung.
                Schreib uns, was dir vorschwebt, und wir gestalten den Rahmen.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="border-t border-[color:var(--smoke)]/25 pt-6">
                  <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{s.s}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buchen"
              className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Anfrage senden
            </Link>
            <a
              href={whatsappLink("Hallo Meerzeit Studio, ich interessiere mich für eine Auftragsarbeit.")}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              WhatsApp · {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
