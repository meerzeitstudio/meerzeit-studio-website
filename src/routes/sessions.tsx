import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import sMeer from "@/assets/session-meer.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import sMutti from "@/assets/session-mutti-baby.jpg";

export const Route = createFileRoute("/sessions")({
  head: () => ({
    meta: [
      { title: "Unsere Sessions – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Malen am Meer, Meditatives Malen, Mutti malt mit Baby, Malen bei Nacht und Paint & Beats – kreative Auszeit-Formate für Frauen.",
      },
      { property: "og:title", content: "Unsere Sessions – Meerzeit Studio" },
      { property: "og:image", content: sMeer },
    ],
  }),
  component: SessionsPage,
});

const sessions = [
  {
    title: "Malen am Meer",
    img: sMeer,
    text: "Die Wellen als Taktgeberin. Salzige Luft, weiche Farben, ein Pinsel in deiner Hand – und der Horizont, der alles weit macht. Eine Session draußen, wenn das Wetter es erlaubt – sonst mit Meeresrauschen im Raum.",
    mood: "weit · klar · frei",
  },
  {
    title: "Meditatives Malen",
    img: sMeditativ,
    text: "Stille. Eine Kerze. Dein Atem. Du tauchst ein – Strich für Strich – bis nichts mehr muss und du einfach da bist. Eine geführte Reise nach innen, mit Pinsel statt Worten. Ideal, wenn dein Kopf zu voll ist.",
    mood: "still · achtsam · weich",
  },
  {
    title: "Mutti malt – mit Baby",
    img: sMutti,
    text: "Dein Baby ist dabei – in der Trage, im Tuch oder auf der Krabbeldecke neben dir. Du musst niemanden organisieren, niemanden weggeben. Du darfst Mama sein UND einen Moment für dich haben. Mit Wickelmöglichkeit, Stillplatz und ganz viel Verständnis.",
    mood: "sanft · ehrlich · ohne schlechtes Gewissen",
  },
  {
    title: "Malen bei Nacht",
    img: sNacht,
    text: "Wenn die Welt leiser wird. Kerzenschein, warme Töne, ein Glas in der Hand – und ein Bild, das nur in dieser Nacht entstehen kann. Für Frauen, die sich ihre Abende zurückholen wollen.",
    mood: "warm · intim · zauberhaft",
  },
  {
    title: "Paint & Beats",
    img: sBeats,
    text: "Musik, die durch dich hindurch geht. Farbe, die folgt. Eine Session, die sich wie Tanzen anfühlt – nur in Slow Motion. Mit kuratierter Playlist und viel Bewegungsfreiheit.",
    mood: "lebendig · frei · spielerisch",
  },
];

function SessionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="unsere Sessions"
        title="Was bei uns"
        italic="entstehen darf."
        intro="Jede Session ist ein eigener Raum. Such dir aus, was sich heute richtig anfühlt – wir kümmern uns um Material, Atmosphäre und Getränke."
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {sessions.map((s, i) => (
            <Reveal key={s.title}>
              <article
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[1400ms]"
                  />
                </div>
                <div>
                  <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">
                    0{i + 1} — {s.mood}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl mb-6">{s.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">{s.text}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/termine"
                      className="text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
                    >
                      Termine ansehen
                    </Link>
                    <Link
                      to="/buchen"
                      className="text-sm tracking-widest uppercase border-b border-transparent hover:border-[color:var(--smoke)] pb-1 text-[color:var(--smoke)]"
                    >
                      Diese Session anfragen
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[color:var(--ivory)]">
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
