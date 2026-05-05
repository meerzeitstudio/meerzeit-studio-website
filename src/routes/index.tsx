import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import sMeer from "@/assets/session-meer.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meerzeit Studio – Creative Sessions für Frauen" },
      {
        name: "description",
        content:
          "120 Minuten nur für dich. Kreative Auszeit-Events für Frauen und Mütter – kein Müssen, kein Perfekt, nur Sein.",
      },
      { property: "og:title", content: "Meerzeit Studio – Creative Sessions" },
      {
        property: "og:description",
        content: "Ein Raum, in dem du loslassen, eintauchen und einfach im Moment sein kannst.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const sessions = [
  { title: "Malen am Meer", img: sMeer, text: "Salzige Luft, weiche Farben – und der Horizont, der alles weit macht." },
  { title: "Meditatives Malen", img: sMeditativ, text: "Stille. Eine Kerze. Dein Atem. Strich für Strich darfst du einfach sein." },
  { title: "Malen bei Nacht", img: sNacht, text: "Kerzenschein, warme Töne – ein Bild, das nur in dieser Nacht entsteht." },
  { title: "Paint & Beats", img: sBeats, text: "Musik durch dich hindurch. Farbe folgt. Wie Tanzen in Slow Motion." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Frauen malen gemeinsam am Meer im warmen Abendlicht"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--graphite)]/30 via-[color:var(--graphite)]/40 to-[color:var(--graphite)]/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-[color:var(--ivory)] fade-in-up">
          <p className="font-script text-lg md:text-xl text-[color:var(--ivory)]/80 mb-6 tracking-wide">
            — Meerzeit Studio
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            120 Minuten
            <br />
            <span className="italic font-light">nur für dich.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[color:var(--ivory)]/85 font-light text-balance">
            Kein Müssen. Kein Perfekt. Nur Sein.
          </p>
          <div className="mt-12">
            <Link
              to="/sessions"
              className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition shadow-[var(--shadow-glow)] text-sm tracking-widest uppercase"
            >
              Creative Sessions entdecken
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[color:var(--ivory)]/60 text-xs tracking-[0.3em] uppercase animate-pulse">
          ↓ scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">ein Raum für dich</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-snug text-balance">
              Meerzeit Studio steht für{" "}
              <span className="italic">kreative Auszeiten für Frauen.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-balance">
              Ein Raum, in dem du loslassen, eintauchen und einfach im Moment sein kannst.
              Keine Vorkenntnisse, keine Erwartungen – nur du, die Farbe und der Augenblick.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SESSIONS PREVIEW */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">unsere Sessions</p>
              <h2 className="font-serif text-4xl md:text-6xl text-balance">
                Vier Welten. <span className="italic">Ein Gefühl.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Link to="/sessions" className="group block relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--graphite)]/85 via-[color:var(--graphite)]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-[color:var(--ivory)]">
                    <h3 className="font-serif text-3xl md:text-4xl mb-3">{s.title}</h3>
                    <p className="text-[color:var(--ivory)]/85 text-base leading-relaxed font-light max-w-md">
                      {s.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/sessions"
              className="inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              Alle Sessions ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 px-6 text-center text-[color:var(--ivory)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-dusk)]" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-xl mb-6">deine Auszeit wartet</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-balance">
              Buche deine
              <br />
              <span className="italic">Auszeit.</span>
            </h2>
            <Link
              to="/buchen"
              className="mt-12 inline-block px-10 py-4 rounded-full bg-[color:var(--terracotta)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Jetzt anfragen
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
