import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/philosophie")({
  head: () => ({
    meta: [
      { title: "Unsere Philosophie – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Es geht nicht um das perfekte Bild, sondern um den perfekten Moment. Unsere Philosophie für kreative Auszeiten.",
      },
      { property: "og:title", content: "Unsere Philosophie" },
      {
        property: "og:description",
        content: "Abschalten. Kreativ sein ohne Druck. Sich verbinden.",
      },
    ],
  }),
  component: PhilosophiePage,
});

function PhilosophiePage() {
  return (
    <main>
      <PageHeader eyebrow="unsere Philosophie" title="Was uns" italic="trägt." />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <blockquote className="font-serif text-3xl md:text-5xl leading-[1.2] italic text-balance">
              „Es geht nicht um das perfekte Bild,
              <br />
              sondern um den{" "}
              <span className="text-[color:var(--terracotta)] not-italic">perfekten Moment.</span>“
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[color:var(--muted)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          {[
            { w: "abschalten", t: "Den Kopf leerräumen. Den Körper wieder spüren. Einmal nichts müssen." },
            { w: "kreativ sein – ohne Druck", t: "Kein Talent, keine Bewertung. Nur dein Ausdruck, in deinem Tempo." },
            { w: "dich verbinden", t: "Mit dir selbst. Mit anderen Frauen. Mit dem, was wirklich zählt." },
          ].map((item, i) => (
            <Reveal key={item.w} delay={i * 150}>
              <div className="py-6">
                <div className="font-serif text-5xl text-[color:var(--copper)] mb-4">0{i + 1}</div>
                <p className="font-serif text-2xl mb-3">{item.w}</p>
                <p className="text-muted-foreground font-light leading-relaxed">{item.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">unsere Einladung</p>
          <p className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-snug italic text-balance">
            Komm so, wie du bist. Geh, wie du sein willst.
          </p>
          <Link
            to="/buchen"
            className="mt-10 inline-block px-8 py-3 rounded-full bg-[color:var(--smoke)] text-[color:var(--ivory)] hover:bg-[color:var(--graphite)] transition text-sm tracking-widest uppercase"
          >
            Auszeit buchen
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
