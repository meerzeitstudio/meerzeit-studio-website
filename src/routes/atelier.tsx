import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import wave from "@/assets/atelier-wave.jpg";
import portrait from "@/assets/atelier-portrait.jpg";
import collage from "@/assets/atelier-collage.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import ref1 from "@/assets/ref-1.jpg";
import ref2 from "@/assets/ref-2.jpg";
import ref3 from "@/assets/ref-3.jpg";

type ForSale = { img: string; title: string; quote: string; artist: string; format: string; price: string };

const forSale: ForSale[] = [
  {
    img: gallery1,
    title: "Stiller Strand",
    quote: "„Wenn das Meer atmet, wird alles weicher.“",
    artist: "Iris Christophers",
    format: "80 × 100 cm · Acryl auf Leinwand",
    price: "Auf Anfrage",
  },
  {
    img: gallery2,
    title: "Bewegung",
    quote: "„Manchmal ist eine einzige Linie genug.“",
    artist: "Martina Jürgens",
    format: "60 × 80 cm · Acryl auf Leinwand",
    price: "Auf Anfrage",
  },
  {
    img: gallery3,
    title: "Nordlicht",
    quote: "„Ein Horizont, der nichts von dir verlangt.“",
    artist: "Iris Christophers",
    format: "70 × 90 cm · Acryl & Pigment",
    price: "Auf Anfrage",
  },
  {
    img: gallery4,
    title: "Erdton",
    quote: "„Hier darf alles seine Spuren behalten.“",
    artist: "Martina Jürgens",
    format: "80 × 100 cm · Mixed Media",
    price: "Auf Anfrage",
  },
];

const references = [
  { img: ref1, location: "Privatwohnung · Hamburg", note: "Wohnzimmer · 140 × 100 cm" },
  { img: ref2, location: "Schlafraum · Schleswig", note: "Diptychon · je 60 × 80 cm" },
  { img: ref3, location: "Boutique-Hotel · Ostsee", note: "Lobby · 220 × 140 cm" },
];

const process = [
  { n: "01", t: "Kennenlernen", s: "Ein ruhiges Gespräch – per Mail, Telefon oder im Atelier. Was bewegt dich? Welcher Raum darf bespielt werden?" },
  { n: "02", t: "Entwurf & Stimmung", s: "Wir entwickeln eine erste Farb- und Formidee – inklusive Format, Material und Preisrahmen." },
  { n: "03", t: "Im Atelier", s: "Das Werk entsteht in Ruhe. Zwischenbilder bekommst du auf Wunsch – sonst überraschen wir." },
  { n: "04", t: "Ankunft", s: "Sicher verpackt, persönlich übergeben oder versendet. Inklusive kleiner Geschichte zum Werk." },
];


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

      {/* GALERIE ZUM VERKAUF */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Galerie</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Werke, die ein <span className="italic">Zuhause suchen.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Eine kleine, kuratierte Auswahl verfügbarer Originale aus dem Atelier –
                jedes Werk begleitet von einem Gedanken seiner Künstlerin.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {forSale.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <figure className="group">
                  <div className="overflow-hidden rounded-sm bg-card">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="font-serif text-xl">{w.title}</h3>
                    <p className="font-script text-[color:var(--terracotta)] text-base mt-1 leading-snug">
                      {w.quote}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                      {w.artist}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1 italic">{w.format}</p>
                    <p className="text-sm mt-3 text-[color:var(--smoke)]">{w.price}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/buchen"
              className="inline-block px-8 py-4 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              Werk anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section className="py-24 md:py-32 px-6 bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Referenzen</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Werke in ihrem <span className="italic">neuen Zuhause.</span>
              </h2>
              <p className="mt-5 text-muted-foreground font-light leading-relaxed">
                Eine Auswahl bisheriger Auftragsarbeiten – entstanden für Wohnräume,
                Praxen und Hotels. Jedes Werk ein Unikat, gemacht für genau diesen Ort.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {references.map((r, i) => (
              <Reveal key={r.location} delay={i * 100}>
                <figure>
                  <div className="overflow-hidden rounded-sm bg-card">
                    <img
                      src={r.img}
                      alt={r.location}
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="w-full aspect-[5/4] object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-between text-xs tracking-widest uppercase text-muted-foreground">
                    <span>{r.location}</span>
                    <span className="font-light normal-case tracking-normal italic">{r.note}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SO ENTSTEHT EINE AUFTRAGSARBEIT */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">So entsteht ein Unikat</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Vier ruhige <span className="italic">Schritte.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Eine Auftragsarbeit ist ein Dialog – kein Bestellvorgang. So gehen wir gemeinsam vor.
              </p>
            </div>
          </Reveal>

          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <li className="border-t border-[color:var(--smoke)]/25 pt-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl text-[color:var(--terracotta)]">{p.n}</span>
                    <h3 className="font-serif text-2xl">{p.t}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">{p.s}</p>
                </li>
              </Reveal>
            ))}
          </ol>
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
