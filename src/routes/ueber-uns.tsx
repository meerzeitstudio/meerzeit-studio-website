import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import founders from "@/assets/founders.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Zwei Gründerinnen, selbst Mütter. Aus kleinen Treffen wurde eine Idee: Frauen einen Raum geben, in dem sie einfach sein dürfen.",
      },
      { property: "og:title", content: "Über uns – Meerzeit Studio" },
      {
        property: "og:description",
        content: "Zwei Gründerinnen. Selbst Mütter. Eine gemeinsame Vision.",
      },
      { property: "og:image", content: founders },
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
              <p className="font-serif italic text-foreground text-xl">
                Meerzeit Studio ist genau das, was wir damals selbst gebraucht hätten.
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
            <span className="italic"> warme Umarmung</span> – ohne Worte.
          </p>
          <Link
            to="/sessions"
            className="mt-10 inline-block px-8 py-3 rounded-full border border-[color:var(--smoke)] text-[color:var(--smoke)] hover:bg-[color:var(--smoke)] hover:text-[color:var(--ivory)] transition text-sm tracking-widest uppercase"
          >
            Unsere Sessions
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
