import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Ablauf einer Session – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Vier sanfte Schritte: Ankommen, Loslassen, Kreativ werden, Verbinden. So fühlt sich eine Session bei Meerzeit Studio an.",
      },
      { property: "og:title", content: "Ablauf einer Session" },
      {
        property: "og:description",
        content: "Vier sanfte Schritte. Ein ganzer Moment.",
      },
    ],
  }),
  component: AblaufPage,
});

const steps = [
  { n: "01", title: "Ankommen", text: "Eine Tasse Tee. Ein Lächeln. Du darfst ankommen – ohne Erwartung. Wir nehmen uns Zeit, bevor wir beginnen." },
  { n: "02", title: "Loslassen", text: "Wir atmen gemeinsam aus. Den Tag, die Liste, die Rolle. Eine kurze geführte Einladung, in den Moment zu kommen." },
  { n: "03", title: "Kreativ werden", text: "Pinsel, Farbe, Leinwand. Kein richtig, kein falsch. Wir geben dir sanfte Impulse – und viel Raum für deinen eigenen Ausdruck." },
  { n: "04", title: "Verbinden", text: "Wir schließen den Kreis – mit einem Glas, einem Gespräch oder einfach Stille. Du gehst mit deinem Bild und einem vollen Herzen." },
];

function AblaufPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Ablauf einer Session"
        title="Vier sanfte Schritte."
        italic="Ein ganzer Moment."
        intro="Eine Meerzeit-Session dauert rund 120 Minuten. Du brauchst nichts vorzubereiten – wir kümmern uns um Material, Atmosphäre und Getränke."
      />

      <section className="py-20 md:py-28 px-6 bg-[color:var(--muted)]">
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
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

      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">bereit?</p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight text-balance">
            Schenk dir
            <span className="italic"> 120 Minuten </span>
            für nichts als dich.
          </h2>
          <Link
            to="/buchen"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
          >
            Auszeit buchen
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
