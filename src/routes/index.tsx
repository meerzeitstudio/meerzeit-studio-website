import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CalendarSection } from "@/components/CalendarSection";
import { CONTACT, whatsappLink } from "@/lib/contact";
import hero from "@/assets/hero.jpg";
import sMeer from "@/assets/session-meer.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import sMutti from "@/assets/session-mutti-baby.jpg";
import privateImg from "@/assets/private-events.jpg";
import logo from "@/assets/logo.png";
import atelierWave from "@/assets/atelier-wave.jpg";
import atelierPortrait from "@/assets/atelier-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meerzeit Studio – Creative Events für Frauen" },
      {
        name: "description",
        content:
          "Kreative Auszeit-Events für Frauen, Mütter und Freundinnen. Acrylmalerei in entspannter Atmosphäre – kein Müssen, kein Perfekt.",
      },
      { property: "og:title", content: "Meerzeit Studio – Creative Events" },
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
  { title: "Mutti malt – mit Baby", img: sMutti, text: "Du malst, dein Baby ist bei dir – in der Trage, im Tuch, auf der Decke. Ohne schlechtes Gewissen." },
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
          <img src={logo} alt="Meerzeit Studio Logo" className="mx-auto w-56 md:w-72 h-auto opacity-95 mb-10" />
          <h1 className="font-serif leading-[0.95] text-balance">
            <span className="block text-6xl md:text-8xl tracking-tight">Meerzeit</span>
            <span className="block italic font-light text-5xl md:text-7xl text-[color:var(--ivory)]/95 mt-2">
              Studio
            </span>
          </h1>
          <p className="mt-12 text-lg md:text-xl text-[color:var(--ivory)]/85 font-light leading-relaxed text-balance max-w-xl mx-auto">
            Für die, die dir nahe sind.
            <br />
            <span className="italic">Und für die, die du selbst bist.</span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/termine"
              className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition shadow-[var(--shadow-glow)] text-sm tracking-widest uppercase"
            >
              Termine ansehen
            </Link>
            <Link
              to="/sessions"
              className="inline-block px-8 py-4 rounded-full border border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)]/10 transition text-sm tracking-widest uppercase"
            >
              Events entdecken
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[color:var(--ivory)]/60 text-xs tracking-[0.3em] uppercase animate-pulse">
          ↓ scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 px-6">
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

      {/* CALENDAR – oben sichtbar */}
      <section className="pt-8 md:pt-10 pb-20 md:pb-28 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">die nächsten Termine</p>
              <h2 className="font-serif text-3xl md:text-5xl text-balance">
                Such dir <span className="italic">deinen Tag.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CalendarSection compact />
          </Reveal>
        </div>
      </section>

      {/* SESSIONS PREVIEW */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">unsere Events</p>
              <h2 className="font-serif text-4xl md:text-6xl text-balance">
                Was bei uns <span className="italic">entstehen darf.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Jede Event ist ein eigener Raum. Such dir aus, was sich heute richtig anfühlt –
                wir kümmern uns um Material, Atmosphäre und Getränke.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
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
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-[color:var(--ivory)]">
                    <h3 className="font-serif text-2xl md:text-3xl mb-2">{s.title}</h3>
                    <p className="text-[color:var(--ivory)]/85 text-sm leading-relaxed font-light">
                      {s.text}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/sessions"
              className="inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              Alle Events ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIAL / ABLAUF KURZ */}
      <section className="py-24 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">so läuft es ab</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-snug">
              Du kommst an –<br />
              <span className="italic">wir kümmern uns um den Rest.</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Material inklusive</strong>
                Wir arbeiten mit hochwertigen Mittelklasse-Studiofarben aus dem Acrylbereich –
                und erweitern unser Sortiment laufend. Besondere Wünsche? Sag Bescheid in der Anfrage.
              </li>
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Keine Vorkenntnisse</strong>
                Du brauchst nichts mitzubringen außer dir selbst. Bequeme Kleidung empfehlen wir.
              </li>
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Rund 120 Minuten</strong>
                Ankommen, loslassen, malen, verbinden. Du gehst mit deinem Bild – und einem vollen Herzen.
              </li>
            </ul>
            <Link
              to="/ablauf"
              className="mt-8 inline-block text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
            >
              Mehr zum Ablauf
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <img
              src={sMeditativ}
              alt="Acrylfarben und Pinsel im Studio"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-soft)]"
            />
          </Reveal>
        </div>
      </section>

      {/* PRIVATE ANLÄSSE */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={privateImg}
              alt="Privates Event mit Frauen, die gemeinsam malen"
              loading="lazy"
              width={1600}
              height={1024}
              className="w-full aspect-[4/3] object-cover rounded-sm shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">auch als privates Erlebnis</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-snug">
              Firmenevent, Hochzeit oder
              <br />
              <span className="italic">Freundinnenabend.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light mb-6">
              Manche Anlässe verdienen mehr als einen Tisch im Restaurant. Wir gestalten Meerzeit-Begegnungen
              auch privat – im Studio, bei euch zu Hause oder am Ort eurer Feier. Für Teams, Brautpartys,
              runde Geburtstage oder einfach einen Abend, den ihr nicht so schnell vergesst.
            </p>
            <Link
              to="/private-anlaesse"
              className="inline-block px-7 py-3 rounded-full bg-[color:var(--smoke)] text-[color:var(--ivory)] hover:bg-[color:var(--graphite)] transition text-sm tracking-widest uppercase"
            >
              Mehr erfahren
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ATELIER & FOTOGRAFIE */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Weitere Ausdrucksformen</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Aus dem <span className="italic">Studio.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Neben den Events entstehen Werke und Bilder – in zwei eigenen Welten.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <Link to="/atelier" className="group block relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={atelierWave} alt="Atelier – Kunstwerke" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--graphite)]/85 via-[color:var(--graphite)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-[color:var(--ivory)]">
                  <p className="font-script text-[color:var(--terracotta)] text-base mb-1">Atelier</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">Kunstwerke</h3>
                  <p className="text-[color:var(--ivory)]/85 text-sm leading-relaxed font-light">
                    Originale und Auftragsarbeiten – Kunst, die Räume ruhiger macht.
                  </p>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/fotografie" className="group block relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={atelierPortrait} alt="Fotografie" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--graphite)]/85 via-[color:var(--graphite)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-[color:var(--ivory)]">
                  <p className="font-script text-[color:var(--terracotta)] text-base mb-1">Fotografie</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">Erinnerungen</h3>
                  <p className="text-[color:var(--ivory)]/85 text-sm leading-relaxed font-light">
                    Hochzeit, Babybauch, Mutterglück, Paare und Brand – leise und ehrlich.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 px-6 text-center text-[color:var(--ivory)] overflow-hidden">
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
            <p className="mt-6 text-[color:var(--ivory)]/80 max-w-md mx-auto font-light">
              Per Formular, E-Mail oder direkt über WhatsApp – wie es für dich am leichtesten ist.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/buchen"
                className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
              >
                Jetzt anfragen
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)]/10 transition text-sm tracking-widest uppercase"
              >
                WhatsApp · {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
