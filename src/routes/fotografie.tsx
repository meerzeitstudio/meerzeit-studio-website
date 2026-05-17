import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import photoWedding from "@/assets/photo-wedding.jpg";
import photoMotherhood from "@/assets/photo-motherhood.jpg";
import photoMaternity from "@/assets/photo-maternity.jpg";
import photoBrand from "@/assets/photo-brand.jpg";

const services = [
  { t: "Hochzeitsfotografie", s: "Für den Tag, an dem alles ehrlich ist. Bilder, die sich anfühlen wie ihr.", img: photoWedding },
  { t: "Babybauch", s: "Weiches Licht, kein Posieren – nur du und das Leben, das in dir wächst.", img: photoMaternity },
  { t: "Motherhood", s: "Die kleinen Momente zwischen euch – festgehalten, bevor sie weiterziehen.", img: photoMotherhood },
  { t: "Paarshootings", s: "Nähe, wie sie wirklich aussieht. Ohne Inszenierung, mit viel Raum.", img: photoWedding },
  { t: "Brand Shootings", s: "Für Unternehmerinnen, die sich zeigen wollen – als die, die sie wirklich sind.", img: photoBrand },
];

export const Route = createFileRoute("/fotografie")({
  head: () => ({
    meta: [
      { title: "Fotografie – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Emotionale Fotografie aus dem Meerzeit Studio: Hochzeiten, Babybauch, Motherhood, Paare und Brand Shootings für Unternehmerinnen.",
      },
      { property: "og:title", content: "Fotografie – Meerzeit Studio" },
      { property: "og:image", content: photoMaternity },
    ],
  }),
  component: FotografiePage,
});

function FotografiePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Fotografie"
        title="Für Erinnerungen, die sich"
        italic="echt anfühlen."
        intro="Leise, nah und ohne Inszenierung. Wir fotografieren Momente, die bleiben dürfen – so weich und ehrlich wie sie sind."
      />

      {/* HERO IMAGE */}
      <section className="px-6 -mt-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img
              src={photoMaternity}
              alt="Babybauch-Shooting im Abendlicht"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full aspect-[16/10] object-cover rounded-sm shadow-[var(--shadow-soft)]"
            />
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-script text-[color:var(--terracotta)] text-lg mb-3">Was wir festhalten</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
                Bilder, die <span className="italic">bleiben dürfen.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <figure>
                  <div className="overflow-hidden rounded-sm bg-card">
                    <img
                      src={s.img}
                      alt={s.t}
                      loading="lazy"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="font-serif text-2xl mb-2">{s.t}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{s.s}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buchen"
              className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Anfrage senden
            </Link>
            <a
              href={whatsappLink("Hallo Meerzeit Studio, ich interessiere mich für ein Shooting.")}
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
