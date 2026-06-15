import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { absUrl } from "@/lib/seo";
import founders from "@/assets/founders.jpg";
import irisAsset from "@/assets/iris.png.asset.json";
import martinaAsset from "@/assets/martina.jpeg.asset.json";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meerzeit Studio",
  description:
    "Meerzeit Studio entwickelt kreative Erlebnisse und Auftragsarbeiten, die Menschen berühren. Authentisch, ruhig und zeitlos.",
  slogan: "Nicht nur etwas Schönes. Etwas Echtes.",
  knowsAbout: [
    "Kreative Auszeiten",
    "Acrylmalerei",
    "Auftragskunst",
    "Fotografie",
    "Resonanz",
    "Entschleunigung",
  ],
};

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns · Meerzeit Studio" },
      {
        name: "description",
        content:
          "Zwei Gründerinnen, selbst Mütter. Aus kleinen Treffen wurde eine Idee: einen Raum schaffen, in dem ihr einfach sein dürft.",
      },
      { property: "og:title", content: "Über uns · Meerzeit Studio" },
      {
        property: "og:description",
        content: "Zwei Gründerinnen. Selbst Mütter. Eine gemeinsame Vision.",
      },
      { property: "og:image", content: absUrl(founders) },
      { name: "twitter:image", content: absUrl(founders) },
    ],
    links: [{ rel: "canonical", href: absUrl("/ueber-uns") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="über uns"
        title="Zwei Gründerinnen."
        italic="Selbst Mütter."
      />

      <section className="py-16 md:py-24 px-6">
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
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">unsere Geschichte</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Aus kleinen Treffen wurde
              <br />
              <span className="italic">eine Idee.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Wir sind zwei Frauen, zwei Mütter, zwei Freundinnen. Zwischen
                Wickeltisch, Job und Wäscheberg haben wir uns immer wieder eine Sache
                gefehlt: einen Ort, an dem wir einfach sein dürfen.
              </p>
              <p>
                Also haben wir ihn uns gemacht. Erst für uns. Dann für unsere Freundinnen.
                Heute für dich.
              </p>
              <p className="font-serif italic text-foreground text-xl whitespace-pre-line">
                Meerzeit Studio ist genau das, was wir damals selbst gebraucht hätten. {"\n\n"}
                Eure Iris & Martina
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION — text only */}
      <section className="py-16 md:py-24 px-6 border-t border-border/60">
        <div className="max-w-3xl mx-auto grid md:grid-cols-[auto_1fr] gap-x-12 gap-y-16">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg md:sticky md:top-28">Vision</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Ein Raum, in dem ihr
              <br />
              <span className="italic">einfach sein dürft.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Wir glauben, dass jede:r Momente braucht, in denen man einfach mal nur
                sein darf. Ohne Erwartungen. Ohne Druck. Ohne perfekt funktionieren zu müssen.
              </p>
              <p>
                Meerzeit Studio ist aus genau diesem Wunsch entstanden: einen Raum zu schaffen,
                der ruhig ist. Kreativ. Echt. Einen Ort, an dem man abschalten, ausprobieren
                und wieder bei sich ankommen darf.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Denn oft entstehen die schönsten Dinge nicht dann, wenn alles perfekt sein soll,
                sondern wenn man loslässt und einfach beginnt.
              </p>
              <p>
                Genau dafür möchten wir Raum schaffen. Für kleine Auszeiten. Für echte
                Begegnungen. Und für kreative Momente, die sich leicht anfühlen dürfen.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg md:sticky md:top-28">Mission</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-balance">
              Kreative Erlebnisse
              <br />
              <span className="italic">und Arbeiten mit Gefühl.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Mit Meerzeit Studio schaffen wir kreative Erlebnisse und persönliche
                Arbeiten mit Gefühl.
              </p>
              <p>
                Wir veranstalten kreative Events für dich, in denen nicht Leistung oder
                Talent im Mittelpunkt stehen, sondern Zeit für sich selbst.
              </p>
              <p>
                Gleichzeitig gestalten wir Kunstwerke und fotografische Erinnerungen, die
                echt und persönlich sind.
              </p>
              <p>
                Ob bei kreativen Events, einem Fotoshooting oder einem individuellen
                Kunstwerk: Es geht uns nicht darum, etwas Perfektes zu erschaffen.
              </p>
              <p className="font-serif italic text-foreground text-xl">
                Sondern etwas, das sich ehrlich anfühlt. Etwas, das bleibt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IRIS & MARTINA — persönliche Vorstellung */}
      <section className="py-20 md:py-28 px-6 border-t border-border/60">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">die Menschen dahinter</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              Iris &amp; <span className="italic">Martina.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed text-lg">
              Zwei Frauen, zwei Wege, eine gemeinsame Vision.
            </p>
          </Reveal>
        </div>

        {/* MARTINA */}
        <div className="max-w-6xl mx-auto mb-24 md:mb-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={irisAsset.url}
                alt="Martina, Mitgründerin von Meerzeit Studio"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Martina</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-balance">
              Zwischen Analyse und <span className="italic">Kreativität.</span>
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Eigentlich komme ich aus dem Ingenieurwesen – aber Kreativität war schon
                immer der rote Faden in meinem Leben. Während ich beruflich gerne
                analysiere, plane und Lösungen entwickle, finde ich meinen Ausgleich in
                der Kunst, der Fotografie und allem, was Menschen zusammenbringt.
              </p>
              <p>
                Mich begeistern die kleinen Details: besondere Lichtstimmungen, spannende
                Strukturen, kreative Ideen und die Geschichten hinter den Menschen, die
                einem begegnen. Genau deshalb liebe ich kreative Workshops. Sie schaffen
                Raum, um Neues auszuprobieren, den Kopf freizubekommen und für ein paar
                Stunden ganz im Moment zu sein.
              </p>
              <p className="font-serif italic text-foreground">
                Mit Meerzeit Studio möchte ich einen Ort schaffen, an dem niemand kreativ
                sein muss, sondern kreativ sein darf. Einen Ort für Begegnungen,
                Inspiration und die Freude, etwas mit den eigenen Händen entstehen zu
                lassen.
              </p>
              <p>
                Wenn ich nicht gerade male oder neue Workshop-Ideen sammle, bin ich meist
                mit der Kamera unterwegs, löse begeistert Rätsel oder genieße die
                ostfriesische Weite, die mich immer wieder inspiriert.
              </p>
            </div>
          </Reveal>
        </div>

        {/* IRIS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal delay={120} className="md:order-2">
            <div className="overflow-hidden rounded-sm shadow-[var(--shadow-soft)]">
              <img
                src={martinaAsset.url}
                alt="Iris, Mitgründerin von Meerzeit Studio"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform duration-[1600ms]"
              />
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Iris</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-balance">
              Vom Bewerten <span className="italic">ins Loslassen.</span>
            </h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Als Kind und Jugendliche war Kreativität mein natürlicher Ausdruck. Ich
                habe gemalt, ausprobiert und war voller Ideen. Damals gewann ich sogar bei
                „Jugend kreativ" den ersten Platz im Landkreis Wittmund. Trotzdem verlor
                ich durch die Schule irgendwann den Zugang zur Kunst. Ich habe Kunst
                später sogar abgewählt, obwohl ich es eigentlich liebte.
              </p>
              <p className="font-serif italic text-foreground">Warum?</p>
              <p>
                Weil es sich plötzlich nicht mehr frei anfühlte. Kunst wurde bewertet,
                verglichen und an Regeln geknüpft. Es musste nach Lernplan gearbeitet
                werden, mit klaren Vorgaben und Erwartungen. Schon damals merkte ich: Das
                passt nicht zu meinem Verständnis von kreativem Schaffen.
              </p>
              <p>
                Im Erwachsenenleben wurde das Malen dann wieder zu meinem Rückzugsort. Ein
                Ort, an dem ich Ruhe, Inspiration und Verbindung zu mir selbst gefunden
                habe. Ich habe verschiedene Techniken ausprobiert, mit Farben, Formen und
                Kompositionen experimentiert und mit der Zeit ein eigenes Gespür dafür
                entwickelt.
              </p>
              <p>
                Am Anfang war ich unglaublich stolz darauf, Realität möglichst perfekt
                abbilden zu können. Dafür bekam ich viel Anerkennung und Zuspruch.
                Irgendwann verstand ich jedoch, dass meine wahre Freude woanders liegt:
                im Loslassen.
              </p>
              <p className="font-serif italic text-foreground">
                Ohne Druck. Ohne Erwartungen. Ohne vorher genau zu wissen, was entstehen
                soll.
              </p>
              <p>
                Einfach meiner Intuition zu folgen und Stimmung, Gedanken oder Gefühle auf
                die Leinwand zu bringen. Die Ergebnisse wurden abstrakter, persönlicher
                und ehrlicher. Mixed Media wurde zu meiner Ausdrucksform. Nicht einfach
                nur „schön", sondern echt. Verletzlich. Frei.
              </p>
              <p>
                Ich bin fest davon überzeugt, dass jeder Mensch kreativ ist. Doch unsere
                Gesellschaft verbindet Kreativität oft mit Leistung, Bewertung und
                Perfektion. Dadurch verlieren viele den Zugang zu ihrer eigenen
                schöpferischen Kraft und gehen verkopft an kreative Prozesse heran.
              </p>
              <p className="font-serif italic text-foreground">
                Diese Blockaden wieder zu lösen und Menschen zurück in ihren eigenen
                kreativen Flow zu bringen, ist meine Motivation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-[color:var(--muted)] text-center">
        <Reveal>
          <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">was wir versprechen</p>
          <p className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-snug text-balance">
            Einen Raum, der sich anfühlt wie eine
            <span className="italic"> warme Umarmung</span>. Ohne Worte.
          </p>
          <Link
            to="/sessions"
            className="mt-10 inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
          >
            Unsere Events
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
