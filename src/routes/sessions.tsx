import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CalendarSection } from "@/components/CalendarSection";
import { events, titleColor } from "@/lib/events";
import sMeer from "@/assets/session-meer.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import sMutti from "@/assets/session-mutti-baby.jpg";

export const Route = createFileRoute("/sessions")({
  head: () => ({
    meta: [
      { title: "Unsere Events & Termine – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Malen am Meer, Meditatives Malen, Mutti malt mit Baby, Malen bei Nacht und Paint & Beats – kreative Auszeiten und alle kommenden Termine.",
      },
      { property: "og:title", content: "Unsere Events – Meerzeit Studio" },
      { property: "og:image", content: sMeer },
    ],
  }),
  component: SessionsPage,
});

const sessions = [
  {
    title: "Malen am Meer",
    img: sMeer,
    intro: "Die Wellen als Taktgeberin. Salzige Luft, weiche Farben, ein Pinsel in deiner Hand – und der Horizont, der alles weit macht.",
    outro: "Ein Event draußen, wenn das Wetter es erlaubt – sonst mit Meeresrauschen im Raum.",
    mood: "weit · klar · frei",
  },
  {
    title: "Meditatives Malen",
    img: sMeditativ,
    intro: "Stille. Eine Kerze. Dein Atem. Du tauchst ein – Strich für Strich – bis nichts mehr muss und du einfach da bist.",
    outro: "Eine geführte Reise nach innen, mit Pinsel statt Worten. Ideal, wenn dein Kopf zu voll ist.",
    mood: "still · achtsam · weich",
  },
  {
    title: "Mutti malt – mit Baby",
    img: sMutti,
    intro: "Dein Baby ist dabei – in der Trage, im Tuch oder auf der Krabbeldecke neben dir. Du musst niemanden organisieren, niemanden weggeben.",
    outro: "Du darfst Mama sein UND einen Moment für dich haben. Mit Wickelmöglichkeit, Stillplatz und ganz viel Verständnis.",
    mood: "sanft · ehrlich · ohne schlechtes Gewissen",
  },
  {
    title: "Malen bei Nacht",
    img: sNacht,
    intro: "Wenn die Welt leiser wird. Kerzenschein, warme Töne, ein Glas in der Hand – und ein Bild, das nur in dieser Nacht entstehen kann.",
    outro: "Für Frauen, die sich ihre Abende zurückholen wollen.",
    mood: "warm · intim · zauberhaft",
  },
  {
    title: "Paint & Beats",
    img: sBeats,
    intro: "Musik, die durch dich hindurch geht. Farbe, die folgt. Ein Event, das sich wie Tanzen anfühlt – nur in Slow Motion.",
    outro: "Mit kuratierter Playlist und viel Bewegungsfreiheit.",
    mood: "lebendig · frei · spielerisch",
  },
];

function SessionsPage() {
  const upcoming = useMemo(
    () =>
      [...events]
        .filter((e) => e.date >= new Date(new Date().toDateString()))
        .sort((a, b) => +a.date - +b.date),
    [],
  );

  return (
    <main>
      <PageHeader
        eyebrow="unsere Events"
        title="Was bei uns"
        italic="entstehen darf."
        intro="Unsere Events sind kreative Auszeiten für Frauen. Ohne Druck. Ohne Erwartungen. Ein Raum zum Abschalten, Ausprobieren und einfach im Moment sein."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-32 md:space-y-40">
          {sessions.map((s, i) => (
            <Reveal key={s.title}>
              <article className="text-center">
                <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">
                  0{i + 1} — {s.mood}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">{s.title}</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed font-light">
                  {s.intro}
                </p>

                <div className="mt-10 md:mt-14 overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] md:aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
                  />
                </div>

                <p className="max-w-2xl mx-auto mt-10 md:mt-14 text-muted-foreground text-lg leading-relaxed font-light">
                  {s.outro}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#termine"
                    className="text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
                  >
                    Termine ansehen
                  </a>
                  <Link
                    to="/buchen"
                    className="text-sm tracking-widest uppercase border-b border-transparent hover:border-[color:var(--smoke)] pb-1 text-[color:var(--smoke)]"
                  >
                    Dieses Event anfragen
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TERMINE */}
      <section id="termine" className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">kommende Termine</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Wähle einen <span className="italic">Moment für dich.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Wähle ein Datum im Kalender oder stöbere durch die Liste – jedes Event ist eine kleine Auszeit für dich.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <CalendarSection />
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto space-y-3">
            <Reveal>
              <p className="font-script text-[color:var(--terracotta)] text-base text-center mb-3">alle Termine im Überblick</p>
            </Reveal>
            {upcoming.map((e, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid grid-cols-[auto_1fr] gap-6 items-center p-5 md:p-6 bg-card rounded-sm border border-border">
                  <div className="text-center min-w-[64px]">
                    <div className="font-serif text-3xl leading-none">{e.date.getDate()}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {e.date.toLocaleDateString("de-DE", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-2 h-2 rounded-full" style={{ background: titleColor[e.title] }} />
                      <h3 className="font-serif text-xl">{e.title}</h3>
                    </div>
                    {e.theme && (
                      <p className="text-sm italic text-[color:var(--terracotta)] mb-1">Thema: {e.theme}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {e.time} · {e.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/buchen"
              className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* MATERIAL */}
      <section className="py-20 px-6 bg-background border-t border-border/60">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">unser Material</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Mit dem, <span className="italic">womit wir gerne arbeiten.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light">
              Wir arbeiten mit hochwertigen Mittelklasse-Studiofarben aus dem Acrylbereich – pigmentstark,
              angenehm zu vermalen und langlebig auf der Leinwand. Unser Sortiment erweitern wir laufend
              um neue Farben, Werkzeuge und Materialien. Hast du einen besonderen Wunsch – eine bestimmte
              Farbpalette, Goldfolie, größere Leinwand oder ein bestimmtes Format? Schreib es einfach
              in deine Anfrage, wir bereiten alles für dich vor.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
