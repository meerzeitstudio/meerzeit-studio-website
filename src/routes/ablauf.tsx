import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Ablauf einer Event – Meerzeit Studio" },
      {
        name: "description",
        content:
          "So fühlt sich eine Event bei Meerzeit Studio an: Ankommen, Loslassen, Kreativ werden, Verbinden – inklusive aller Infos zu Material, Dauer und Atmosphäre.",
      },
      { property: "og:title", content: "Ablauf einer Event" },
    ],
  }),
  component: AblaufPage,
});

const steps = [
  {
    n: "01",
    title: "Ankommen",
    text:
      "Du wirst persönlich begrüßt – mit einer Tasse Tee, Kaffee oder einem Glas Wasser. Wir nehmen uns Zeit, bevor wir beginnen: kurzes Hallo, kennenlernen, ankommen. Du suchst dir deinen Platz – die Atmosphäre ist warm, leise Musik, viel Licht.",
  },
  {
    n: "02",
    title: "Loslassen",
    text:
      "Eine kurze, sanfte Einladung in den Moment. Manchmal ein paar tiefe Atemzüge, manchmal ein gemeinsames Innehalten. Kein Esoterik-Programm – nur das Signal an deinen Kopf, dass jetzt Pause ist.",
  },
  {
    n: "03",
    title: "Kreativ werden",
    text:
      "Wir geben dir einen sanften Impuls – eine Farbidee, ein Motiv, eine Technik – und du beginnst. Wir sind die ganze Zeit für dich da, helfen, wenn du es willst, und halten uns zurück, wenn du im Flow bist. Kein richtig, kein falsch – nur dein Bild.",
  },
  {
    n: "04",
    title: "Verbinden",
    text:
      "Am Ende kommen wir nochmal kurz zusammen – mit einem Glas, einem Gespräch oder einfach Stille. Wer mag, zeigt sein Bild, wer nicht, lässt es einfach. Du nimmst deine Leinwand mit – getrocknet, bereit für deine Wand zu Hause.",
  },
];

function AblaufPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Ablauf einer Event"
        title="So fühlt sich"
        italic="Meerzeit an."
        intro="Eine Event dauert rund 120 Minuten. Du brauchst nichts vorzubereiten und nichts mitzubringen – wir kümmern uns um Material, Atmosphäre und Getränke."
      />

      <section className="py-20 md:py-28 px-6 bg-[color:var(--muted)]">
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border border-[color:var(--copper)]/40 flex items-center justify-center font-serif text-2xl text-[color:var(--terracotta)] shadow-[var(--shadow-soft)]">
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-full h-16 w-px bg-[color:var(--copper)]/30" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-3xl md:text-4xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-xl">
                    {s.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Material & gut zu wissen */}
      <section className="py-20 md:py-28 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg text-center mb-3">gut zu wissen</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">
              Was du <span className="italic">erwarten</span> kannst.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                t: "Material inklusive",
                s: "Wir arbeiten mit hochwertigen Mittelklasse-Studiofarben im Acrylbereich – pigmentstark und angenehm zu vermalen. Leinwände, Pinsel, Schürzen und Wasser stellen wir. Unser Sortiment erweitern wir laufend.",
              },
              {
                t: "Besondere Wünsche",
                s: "Du brauchst eine bestimmte Farbpalette, Goldfolie, eine größere Leinwand oder ein spezielles Format? Schreib es in deine Anfrage – wir bereiten es für dich vor.",
              },
              {
                t: "Keine Vorkenntnisse",
                s: "Du musst nicht malen können. Wirklich nicht. Es geht nicht um das perfekte Bild, sondern um den Moment, den du dir nimmst.",
              },
              {
                t: "Was du anziehen solltest",
                s: "Etwas Bequemes, das auch mal einen Farbspritzer abkriegen darf. Schürzen liegen für jede bereit.",
              },
              {
                t: "Getränke & Snacks",
                s: "Tee, Wasser, Kaffee – und je nach Event ein Glas Wein oder etwas Knabberzeug. Bei privaten Anlässen passen wir alles an euren Wunsch an.",
              },
              {
                t: "Dein Bild",
                s: "Du gehst mit deiner Leinwand nach Hause. Acrylfarben trocknen schnell – meist kannst du dein Bild direkt mitnehmen.",
              },
              {
                t: "Gruppengröße",
                s: "Damit wir Zeit für dich haben, sind unsere offenen Events auf 6 bis 10 Plätze begrenzt. Private Gruppen ab 4 Personen.",
              },
              {
                t: "Anreise & Ort",
                s: "Die genaue Adresse bekommst du mit der Buchungsbestätigung. Bei „Freies Malen am organisierten Ort“ treffen wir uns direkt am Strand.",
              },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 60}>
                <div className="bg-card border border-border rounded-sm p-6 md:p-7 h-full">
                  <h3 className="font-serif text-xl mb-2">{b.t}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{b.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">bereit?</p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight text-balance">
            Schenk dir
            <span className="italic"> 120 Minuten </span>
            für nichts als dich.
          </h2>
          <Link
            to="/termine"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
          >
            Termine ansehen
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
