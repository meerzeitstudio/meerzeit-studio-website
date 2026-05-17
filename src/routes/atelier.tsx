import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import wave from "@/assets/atelier-wave.jpg";
import iris1 from "@/assets/iris-1.png";
import iris2 from "@/assets/iris-2.png";
import iris3 from "@/assets/iris-3.png";
import iris4 from "@/assets/iris-4.jpg";
import ref1 from "@/assets/ref-iris-1.png";
import ref2 from "@/assets/ref-iris-2.png";
import ref3 from "@/assets/ref-iris-3.png";
import ref4 from "@/assets/ref-iris-4.png";
import ref5 from "@/assets/ref-iris-5.jpg";

type ForSale = { img: string; title: string; quote: string };

const forSale: ForSale[] = [
  { img: iris1, title: "Im Farbsturm", quote: "„Wenn alles in dir bunt wird, darf es laut sein.“" },
  { img: iris2, title: "Aufschwung", quote: "„Es gibt Momente, in denen man nur noch nach oben greift.“" },
  { img: iris3, title: "Freiheit & Bindung", quote: "„Zwischen den Worten lebt das, was uns ausmacht.“" },
  { img: iris4, title: "Gedankenflug", quote: "„Manchmal trägt der Kopf eine ganze Stadt aus Träumen.“" },
];

const references: { img: string; title: string; quote: string }[] = [
  { img: ref1, title: "Im Verborgenen", quote: "„Was wir nicht zeigen, formt uns am tiefsten.“" },
  { img: ref2, title: "Der Visionär", quote: "„Manche Gedanken leuchten, lange nachdem sie ausgesprochen sind.“" },
  { img: ref3, title: "Halt", quote: "„Zwischen zwei Händen findet das Gesicht zurück zu sich.“" },
  { img: ref4, title: "Heimkehr", quote: "„Es gibt Orte, die uns kennen, bevor wir sie betreten.“" },
];

const process = [
  { n: "01", t: "Kennenlernen", s: "Ein erstes Gespräch – per Mail, Telefon oder im Atelier. Was bewegt dich? Welcher Raum darf bespielt werden?" },
  { n: "02", t: "Entwurf & Stimmung", s: "Wir entwickeln eine erste Farb- und Formidee – inklusive Format, Material und Preisrahmen." },
  { n: "03", t: "Im Atelier", s: "Das Werk entsteht in Ruhe. Zwischenbilder bekommst du auf Wunsch – sonst überraschen wir." },
  { n: "04", t: "Ankunft", s: "Sicher verpackt, persönlich übergeben oder versendet. Inklusive kleiner Geschichte zum Werk." },
];

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "Atelier – Kunstwerke und Auftragsarbeiten" },
      {
        name: "description",
        content:
          "Freie Kunstwerke und Auftragsarbeiten aus dem Meerzeit Studio – Originale von Iris Christophers, gemacht für Räume mit Geschichte.",
      },
      { property: "og:title", content: "Atelier – Meerzeit Studio" },
      { property: "og:image", content: wave },
    ],
  }),
  component: AtelierPage,
});

function AtelierPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Atelier"
        title="Werke, die Räume"
        italic="lebendig machen."
        intro="Freie Arbeiten und Auftragskunst aus dem Studio – derzeit ausschließlich Originale von Iris Christophers. Kunst, die Emotion sichtbar werden lässt."
      />

      {/* GALERIE ZUM VERKAUF */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Galerie</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Werke, die ein <span className="italic">Zuhause suchen.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Eine kleine, kuratierte Auswahl verfügbarer Originale aus dem Atelier –
                jedes Werk begleitet von einem Gedanken der Künstlerin.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {forSale.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <figure className="group">
                  <div className="overflow-hidden rounded-sm bg-card">
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="font-serif text-xl">{w.title}</h3>
                    <p className="font-script text-[color:var(--terracotta)] text-base mt-2 leading-snug">
                      {w.quote}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                      Iris Christophers
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/buchen"
              className="inline-block px-8 py-4 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              Werk anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* REFERENZEN */}
      <section className="py-24 md:py-32 px-6 bg-[color:var(--ivory)] border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Referenzen</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Werke in ihrem <span className="italic">neuen Zuhause.</span>
              </h2>
              <p className="mt-5 text-muted-foreground font-light leading-relaxed">
                Eine Auswahl bisheriger Werke von Iris Christophers –
                entstanden für Wohnräume und Praxen. Jedes Bild ein Unikat,
                gemacht für genau diesen Ort.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-14">
            {references.map((r, i) => {
              const isLandscape = r.title === "Heimkehr";
              return (
                <Reveal
                  key={r.title}
                  delay={i * 100}
                  className={isLandscape ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"}
                >
                  <figure className="group">
                    <div className="overflow-hidden rounded-sm bg-card">
                      <img
                        src={r.img}
                        alt={r.title}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] ${isLandscape ? "aspect-[16/9]" : "aspect-[4/5]"}`}
                      />
                    </div>
                    <figcaption className="mt-5">
                      <h3 className="font-serif text-xl">{r.title}</h3>
                      <p className="font-script text-[color:var(--terracotta)] text-base mt-2 leading-snug">
                        {r.quote}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3">
                        Iris Christophers
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SO ENTSTEHT EINE AUFTRAGSARBEIT */}
      <section className="py-24 md:py-32 px-6 bg-background border-t border-border/60">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">So entsteht ein Unikat</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Vier ehrliche <span className="italic">Schritte.</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                Eine Auftragsarbeit ist ein Dialog – kein Bestellvorgang. So gehen wir gemeinsam vor.
              </p>
            </div>
          </Reveal>

          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <li className="border-t border-[color:var(--smoke)]/25 pt-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl text-[color:var(--terracotta)]">{p.n}</span>
                    <h3 className="font-serif text-2xl">{p.t}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">{p.s}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buchen"
              className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Anfrage senden
            </Link>
            <a
              href={whatsappLink("Hallo Meerzeit Studio, ich interessiere mich für ein Kunstwerk.")}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
            >
              WhatsApp · {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
