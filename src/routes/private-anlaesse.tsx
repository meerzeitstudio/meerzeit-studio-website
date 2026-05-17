import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import privateImg from "@/assets/private-events.jpg";
import { CONTACT, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/private-anlaesse")({
  head: () => ({
    meta: [
      { title: "Private Anlässe – Firmenevent, Hochzeit & Freundinnenabend" },
      {
        name: "description",
        content:
          "Meerzeit Studio als Firmenevent, Hochzeitsfeier oder Freundinnenabend buchen – kreative Auszeit auf Anfrage, ganz nach euren Wünschen.",
      },
      { property: "og:title", content: "Private Anlässe – Meerzeit Studio" },
      { property: "og:image", content: privateImg },
    ],
  }),
  component: PrivatePage,
});

const occasions = [
  {
    t: "Firmenevent",
    s: "Ein Teamtag, der nicht nach Pflicht riecht. Wir kommen zu euch oder empfangen euch im Studio – und schaffen Stunden, die euer Team wirklich verbindet. Kein Powerpoint, keine Eisbrecher-Spielchen – nur ein gemeinsamer, ehrlicher Moment.",
  },
  {
    t: "Hochzeitsfeier",
    s: "Ein kreativer Junggesellinnenabschied, ein Brunch mit den Brautjungfern oder ein gemaltes Erinnerungsstück eurer Gäste – wir gestalten den Rahmen, ihr erlebt den Moment. Pinsel statt Penisstrohhalm.",
  },
  {
    t: "Freundinnenabend",
    s: "Ihr seid 4 bis 12 Frauen und wollt einen Abend, der schöner ist als Wein bei dir auf dem Sofa? Wir richten alles her – Farben, Atmosphäre, Snacks – und ihr genießt einfach.",
  },
  {
    t: "Geburtstag & mehr",
    s: "Runder Geburtstag, Babymoon, Mama-Tochter-Tag, Reunion mit alten Freundinnen – wenn der Anlass besonders ist, gestalten wir den Rahmen so, dass er sich auch so anfühlt.",
  },
];

function PrivatePage() {
  return (
    <main>
      <PageHeader
        eyebrow="auf Anfrage"
        title="Eure Auszeit –"
        italic="ganz für euch."
        intro="Ob Firmenevent, Hochzeit oder Freundinnenabend: Wir gestalten Meerzeit-Begegnungen auch privat – im Studio, bei euch zu Hause oder am Ort eurer Feier."
      />

      <section className="px-6">
        <div className="max-w-5xl mx-auto -mt-8 md:-mt-12">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={privateImg}
                alt="Frauen malen gemeinsam bei einem privaten Event mit Kerzen und Blumen"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-[300px] md:h-[480px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {occasions.map((o, i) => (
            <Reveal key={o.t} delay={i * 100}>
              <div className="bg-card border border-border rounded-sm p-8 md:p-10 h-full shadow-[var(--shadow-soft)]">
                <div className="w-8 h-px bg-[color:var(--terracotta)] mb-5" />
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{o.t}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{o.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg text-center mb-3">so läuft es ab</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Wie ein <span className="italic">privater Anlass</span> entsteht
            </h2>
          </Reveal>
          <ol className="space-y-6">
            {[
              ["Anfrage", "Schreib uns – per Formular, E-Mail oder direkt über WhatsApp. Erzähl uns vom Anlass, der Gruppengröße und euren Wünschen."],
              ["Konzept", "Wir antworten innerhalb von 48 Stunden mit einem passenden Vorschlag: Format, Material, Ort, Zeit und Preis."],
              ["Vorbereitung", "Wir kümmern uns um alles – Farben, Leinwände, Pinsel, Atmosphäre, Musik. Auf Wunsch auch Getränke und kleine Speisen."],
              ["Eure Event", "Ihr kommt an, lasst los, malt – und nehmt am Ende nicht nur euer Bild mit nach Hause, sondern einen Moment, der bleibt."],
            ].map(([t, s], i) => (
              <Reveal key={t} delay={i * 80}>
                <li className="grid grid-cols-[auto_1fr] gap-5 md:gap-6 items-start">
                  <span className="font-serif text-2xl text-[color:var(--terracotta)] w-10">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl mb-1">{t}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{s}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl italic max-w-2xl mx-auto leading-snug mb-10 text-balance">
            „Sagt uns, was euch vorschwebt – wir machen den Rest.“
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buchen"
              className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Anfrage senden
            </Link>
            <a
              href={whatsappLink("Hallo Meerzeit Studio, wir möchten eine Event für einen privaten Anlass anfragen.")}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              WhatsApp · {CONTACT.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
