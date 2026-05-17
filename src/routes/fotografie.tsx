import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import photoMaternity from "@/assets/photo-martina-1.jpg";

export const Route = createFileRoute("/fotografie")({
  head: () => ({
    meta: [
      { title: "Fotografie – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Unser Fotografie-Bereich entsteht gerade – bald für Hochzeiten, Babybauch, Motherhood und Paare aus dem Meerzeit Studio.",
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
        eyebrow="Bleibendes · Fotografie"
        title="Für Erinnerungen,"
        italic="die sich echt anfühlen."
        intro="Unser Fotografie-Bereich ist noch in Arbeit. Ehrliche Bilder im Editorial-Stil – ohne Posieren, ohne Schnellschuss. Wir feilen an Bildern und Worten, hinter denen wir wirklich stehen."
      />

      {/* GROSSES BILD – FULL BLEED */}
      <section className="px-0 md:px-6">
        <Reveal>
          <figure className="relative w-full max-w-[1600px] mx-auto">
            <img
              src={photoMaternity}
              alt="Fotografie von Martina Jürgens – Frau im stillen Wasser"
              loading="lazy"
              className="w-full h-[70vh] md:h-[88vh] object-cover md:rounded-sm shadow-[var(--shadow-soft)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--graphite)]/60 via-transparent to-transparent md:rounded-sm" />
            <figcaption className="absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-12 text-[color:var(--ivory)] flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <p className="font-script text-2xl md:text-3xl leading-snug max-w-xl">
                „Ein Blick. Ein Bild. Eine Geschichte."
              </p>
              <p className="text-xs uppercase tracking-widest text-[color:var(--ivory)]/80">
                Foto · Martina Jürgens
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal delay={120}>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
              Was bald hier <span className="italic">wohnen darf.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-muted-foreground font-light">
              <li>Hochzeiten – für den Tag, an dem alles ehrlich ist.</li>
              <li>Babybauch – weiches Licht, kein Posieren.</li>
              <li>Motherhood – die kleinen Momente zwischen euch.</li>
              <li>Paarshootings – Nähe, wie sie wirklich aussieht.</li>
              <li>Brand Shootings – für Unternehmerinnen mit Handschrift.</li>
            </ul>
            <p className="font-script text-[color:var(--terracotta)] text-xl mt-10 leading-snug">
              „Gute Dinge brauchen Zeit – und wir nehmen sie uns."
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buchen"
              className="px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
            >
              Trotzdem anfragen
            </Link>
            <a
              href={whatsappLink("Hallo Meerzeit Studio, ich interessiere mich für ein Shooting – ich weiß, ihr seid noch in Arbeit.")}
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
