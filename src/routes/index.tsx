import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CalendarSection } from "@/components/CalendarSection";
import { CONTACT, whatsappLink } from "@/lib/contact";
import hero from "@/assets/hero.jpg";
import sMeer from "@/assets/session-freies-malen.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import sMutti from "@/assets/session-mutti-baby.jpg";
import privateImg from "@/assets/private-events.jpg";
import logo from "@/assets/logo.png";
import atelierWave from "@/assets/atelier-wave.jpg";
import atelierPortrait from "@/assets/photo-martina-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meerzeit Studio · Creative Events für dich" },
      {
        name: "description",
        content:
          "Kreative Auszeit-Events für dich. Acrylmalerei in entspannter Atmosphäre. Kein Müssen, kein Perfekt.",
      },
      { property: "og:title", content: "Meerzeit Studio · Creative Events" },
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
  { title: "Freies Malen am organisierten Ort", img: sMeer, text: "Wald, Meer oder kuratierte Location. Wir richten den Rahmen, du malst frei.", to: "/sessions" },
  { title: "Meditatives Malen", img: sMeditativ, text: "Stille. Eine Kerze. Dein Atem. Strich für Strich darfst du einfach sein.", to: "/sessions" },
  { title: "Mutti malt mit Baby", img: sMutti, text: "Du malst, dein Baby ist bei dir, in der Trage, im Tuch, auf der Decke. Ohne schlechtes Gewissen.", to: "/sessions" },
  { title: "Malen bei Nacht", img: sNacht, text: "Kerzenschein, warme Töne. Ein Bild, das nur in dieser Nacht entsteht.", to: "/sessions" },
  { title: "Beats & Brushes", img: sBeats, text: "Musik durch dich hindurch. Farbe folgt. Wie Tanzen in Slow Motion.", to: "/sessions" },
  { title: "So individuell wie ihr", img: privateImg, text: "Firmenevents, Hochzeiten, Abende im Freundeskreis. Eure ganz persönliche Meerzeit-Begegnung.", to: "/private-anlaesse" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Menschen malen gemeinsam am Meer im warmen Abendlicht"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--graphite)]/30 via-[color:var(--graphite)]/40 to-[color:var(--graphite)]/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 md:pt-20 text-center text-[color:var(--ivory)] fade-in-up">
          <img src={logo} alt="Meerzeit Studio Logo" className="mx-auto w-40 md:w-52 h-auto opacity-95 mb-8" />
          <h1 className="font-serif leading-[0.95] text-balance">
            <span className="block text-6xl md:text-8xl tracking-tight">Meerzeit</span>
            <span className="block italic font-light text-5xl md:text-7xl text-[color:var(--ivory)]/95 mt-2">
              Studio
            </span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[color:var(--ivory)]/85 font-light leading-relaxed text-balance max-w-xl mx-auto">
            Events, Kunst und Erinnerungen mit Gefühl.
            <br />
            <span className="italic">Ein Raum zum Abschalten, Kreativsein und Einfach-sein.</span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/sessions"
              className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition shadow-[var(--shadow-glow)] text-sm tracking-widest uppercase"
            >
              Events entdecken
            </Link>
            <Link
              to="/termine"
              className="inline-block px-8 py-4 rounded-full border border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)]/10 transition text-sm tracking-widest uppercase"
            >
              Termine ansehen
            </Link>
          </div>
          <div className="mt-16 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--ivory)]/30 text-[color:var(--ivory)]/70 text-xs tracking-[0.3em] uppercase animate-pulse">
              ↓ scroll
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-xl mb-3">willkommen</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-snug text-balance">
              Kreative Auszeiten für dich.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-balance">
              Bei Meerzeit Studio findest du Zeit für dich selbst. Ohne Druck, ohne Erwartungen.
              Ein Ort zum Abschalten, kreativ sein und gemeinsam Zeit erleben.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALENDAR, oben sichtbar */}
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
                Zeit für dich. <span className="italic">Gemeinsam.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Unsere Events sind kreative Auszeiten für dich. Ohne Druck. Ohne Erwartungen.
                Ein Raum zum Abschalten, kreativ sein und einfach mal wieder Zeit für sich selbst.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sessions.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link to={s.to} className="group block relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
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
              Du kommst an.<br />
              <span className="italic">wir kümmern uns um den Rest.</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Material inklusive</strong>
                Wir arbeiten mit hochwertigen Mittelklasse-Studiofarben aus dem Acrylbereich.
                und erweitern unser Sortiment laufend. Besondere Wünsche? Sag Bescheid in der Anfrage.
              </li>
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Keine Vorkenntnisse</strong>
                Du brauchst nichts mitzubringen außer dir selbst. Bequeme Kleidung empfehlen wir.
              </li>
              <li>
                <strong className="text-foreground font-serif text-lg block mb-1">Rund 120 Minuten</strong>
                Ankommen, loslassen, malen, verbinden. Du gehst mit deinem Bild. Und einem vollen Herzen.
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
                Neben den Events entstehen Werke und Bilder. In zwei eigenen Welten.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <Link to="/atelier" className="group block relative overflow-hidden rounded-sm bg-card shadow-[var(--shadow-soft)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={atelierWave} alt="Atelier: Kunstwerke" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--graphite)]/85 via-[color:var(--graphite)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-[color:var(--ivory)]">
                  <p className="font-script text-[color:var(--terracotta)] text-base mb-1">Atelier</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">Kunstwerke</h3>
                  <p className="text-[color:var(--ivory)]/85 text-sm leading-relaxed font-light">
                    Originale und Auftragsarbeiten. Kunst mit Ausdruck, Farbe und Charakter.
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
                    Hochzeit, Babybauch, Mutterglück, Paare und Brand. Ehrlich und persönlich.
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
              Per Formular, E-Mail oder direkt über WhatsApp, wie es für dich am leichtesten ist.
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
