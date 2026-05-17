import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/fuer-wen")({
  head: () => ({
    meta: [
      { title: "Für wen ist Meerzeit – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Für Mütter, die eine Pause brauchen. Für Frauen, die wieder bei sich ankommen wollen. Für Freundinnen, die gemeinsam Zeit erleben möchten.",
      },
      { property: "og:title", content: "Für wen ist Meerzeit?" },
      {
        property: "og:description",
        content: "Wenn du das Gefühl kennst, einmal kurz aussteigen zu wollen – dann bist du hier richtig.",
      },
    ],
  }),
  component: ForWhomPage,
});

const groups = [
  {
    t: "Für Mütter,",
    s: "die eine Pause brauchen – ohne schlechtes Gewissen. Hier darfst du für ein paar Stunden niemandem etwas sein außer dir selbst.",
  },
  {
    t: "Für Frauen,",
    s: "die wieder bei sich selbst ankommen wollen. Zwischen To-Dos und Rollen findest du hier deinen eigenen Atem.",
  },
  {
    t: "Für Freundinnen,",
    s: "die gemeinsam einen echten Moment erleben möchten. Statt Brunch-Smalltalk: ein Erlebnis, das bleibt.",
  },
];

function ForWhomPage() {
  return (
    <main>
      <PageHeader
        eyebrow="für dich"
        title="Wenn du das Gefühl kennst,"
        italic="einmal kurz aussteigen zu wollen."
        intro="Du musst nichts mitbringen außer dir selbst. Keine Vorkenntnisse, keine Erwartungen, kein Talent nötig."
      />

      <section className="py-20 md:py-28 px-6 bg-[color:var(--smoke)] text-[color:var(--ivory)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8">
          {groups.map((b, i) => (
            <Reveal key={b.t} delay={i * 150}>
              <div className="text-center">
                <div className="inline-block w-10 h-px bg-[color:var(--terracotta)] mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{b.t}</h3>
                <p className="text-[color:var(--ivory)]/75 leading-relaxed font-light">{b.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">und ganz besonders</p>
          <h2 className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-snug text-balance">
            Für dich – wenn du gerade liest und denkst:
            <br />
            <span className="italic">„Ja, das brauche ich.“</span>
          </h2>
          <Link
            to="/sessions"
            className="mt-10 inline-block px-8 py-3 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase"
          >
            Events entdecken
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
