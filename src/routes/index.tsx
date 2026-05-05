import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import sMeer from "@/assets/session-meer.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import founders from "@/assets/founders.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meerzeit Studio – Creative Sessions für Frauen" },
      {
        name: "description",
        content:
          "Kreative Auszeit-Events für Frauen und Mütter. 120 Minuten nur für dich – kein Müssen, kein Perfekt, nur Sein.",
      },
      { property: "og:title", content: "Meerzeit Studio – Creative Sessions" },
      {
        property: "og:description",
        content: "Ein Raum, in dem du loslassen, eintauchen und einfach im Moment sein kannst.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const sessions = [
  {
    title: "Malen am Meer",
    img: sMeer,
    text: "Die Wellen als Taktgeberin. Salzige Luft, weiche Farben, ein Pinsel in deiner Hand – und der Horizont, der alles weit macht.",
  },
  {
    title: "Meditatives Malen",
    img: sMeditativ,
    text: "Stille. Eine Kerze. Dein Atem. Du tauchst ein – Strich für Strich – bis nichts mehr muss und du einfach da bist.",
  },
  {
    title: "Malen bei Nacht",
    img: sNacht,
    text: "Wenn die Welt leiser wird. Kerzenschein, warme Töne, ein Glas in der Hand – und ein Bild, das nur in dieser Nacht entstehen kann.",
  },
  {
    title: "Paint & Beats",
    img: sBeats,
    text: "Musik, die durch dich hindurch geht. Farbe, die folgt. Eine Session, die sich wie Tanzen anfühlt – nur in Slow Motion.",
  },
];

const steps = [
  { n: "01", title: "Ankommen", text: "Eine Tasse Tee. Ein Lächeln. Du darfst ankommen – ohne Erwartung." },
  { n: "02", title: "Loslassen", text: "Wir atmen gemeinsam aus. Den Tag, die Liste, die Rolle. Alles darf jetzt warten." },
  { n: "03", title: "Kreativ werden", text: "Pinsel, Farbe, Leinwand. Kein richtig, kein falsch. Nur du und der Moment." },
  { n: "04", title: "Verbinden", text: "Mit dir. Mit anderen Frauen. Mit dem Gefühl, gesehen zu sein." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-wide">
            Meerzeit <span className="text-[color:var(--terracotta)]">Studio</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sessions" className="hover:text-foreground transition">Sessions</a>
            <a href="#philosophie" className="hover:text-foreground transition">Philosophie</a>
            <a href="#ueber-uns" className="hover:text-foreground transition">Über uns</a>
            <a href="#ablauf" className="hover:text-foreground transition">Ablauf</a>
          </div>
          <a
            href="#buchen"
            className="text-sm px-5 py-2 rounded-full bg-[color:var(--smoke)] text-[color:var(--ivory)] hover:bg-[color:var(--graphite)] transition"
          >
            Buchen
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center pt-16">
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
            <a
              href="#sessions"
              className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition shadow-[var(--shadow-glow)] text-sm tracking-widest uppercase"
            >
              Creative Sessions entdecken
            </a>
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

      {/* SESSIONS */}
      <section id="sessions" className="py-24 md:py-32 px-6 bg-[color:var(--ivory)]">
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
                <article className="group relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FÜR WEN */}
      <section className="py-32 px-6 bg-[color:var(--smoke)] text-[color:var(--ivory)]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--ivory)]/70 text-lg text-center mb-3">für dich</p>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-balance">
              Wenn du das Gefühl kennst,
              <br />
              <span className="italic">einmal kurz aussteigen zu wollen.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { t: "Für Mütter,", s: "die eine Pause brauchen – ohne schlechtes Gewissen." },
              { t: "Für Frauen,", s: "die wieder bei sich selbst ankommen wollen." },
              { t: "Für Freundinnen,", s: "die gemeinsam einen Moment erleben möchten." },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 150}>
                <div className="text-center">
                  <div className="inline-block w-10 h-px bg-[color:var(--terracotta)] mb-6" />
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">{b.t}</h3>
                  <p className="text-[color:var(--ivory)]/70 leading-relaxed font-light">{b.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="py-32 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-8">unsere Philosophie</p>
            <blockquote className="font-serif text-3xl md:text-5xl leading-[1.2] italic text-balance">
              „Es geht nicht um das perfekte Bild,
              <br />
              sondern um den{" "}
              <span className="text-[color:var(--terracotta)] not-italic">perfekten Moment.</span>“
            </blockquote>
          </Reveal>

          <div className="mt-20 grid sm:grid-cols-3 gap-10 text-center">
            {["abschalten", "kreativ sein – ohne Druck", "dich verbinden"].map((w, i) => (
              <Reveal key={w} delay={i * 150}>
                <div className="py-6">
                  <div className="font-serif text-5xl text-[color:var(--copper)] mb-3">0{i + 1}</div>
                  <p className="font-serif text-xl">{w}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section id="ueber-uns" className="py-24 md:py-32 px-6 bg-[color:var(--muted)]">
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
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">über uns</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-balance">
              Zwei Gründerinnen.
              <br />
              <span className="italic">Selbst Mütter.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Aus kleinen Treffen in unseren Wohnzimmern wurde eine Idee – und aus
                dieser Idee ein Ort.
              </p>
              <p>
                Wir wollten Frauen einen Raum geben, in dem sie nichts sein müssen.
                Keine Mama, keine Kollegin, keine Partnerin. Nur sie selbst.
              </p>
              <p className="font-serif italic text-foreground">
                Ein Raum, in dem du einfach sein darfst.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABLAUF */}
      <section id="ablauf" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Ablauf einer Session</p>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                Vier sanfte Schritte. <span className="italic">Ein ganzer Moment.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-[color:var(--copper)]/30" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="text-center relative">
                  <div className="relative mx-auto mb-6 w-24 h-24 rounded-full bg-background border border-[color:var(--copper)]/40 flex items-center justify-center font-serif text-2xl text-[color:var(--terracotta)] shadow-[var(--shadow-soft)]">
                    {s.n}
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="buchen"
        className="relative py-32 md:py-44 px-6 text-center text-[color:var(--ivory)] overflow-hidden"
      >
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
            <p className="mt-8 text-[color:var(--ivory)]/80 text-lg font-light">
              Wir freuen uns, dir einen Platz zu reservieren.
            </p>
            <a
              href="mailto:hallo@meerzeit-studio.de"
              className="mt-12 inline-block px-10 py-4 rounded-full bg-[color:var(--terracotta)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Jetzt anfragen
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-[color:var(--graphite)] text-[color:var(--ivory)]/60 text-center text-sm">
        <p className="font-serif text-xl text-[color:var(--ivory)] mb-2">
          Meerzeit <span className="text-[color:var(--terracotta)]">Studio</span>
        </p>
        <p className="font-script text-base mb-4">— Creative Sessions für Frauen —</p>
        <p>© {new Date().getFullYear()} Meerzeit Studio. Mit Liebe gemacht.</p>
      </footer>
    </main>
  );
}
