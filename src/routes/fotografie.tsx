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
        eyebrow="Fotografie"
        title="Hier entsteht gerade"
        italic="etwas Schönes."
        intro="Unser Fotografie-Bereich ist noch in Arbeit. Wir feilen an Bildern, Worten und einer ehrlichen Handschrift – damit hier bald etwas steht, hinter dem wir wirklich stehen."
      />

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <img
              src={photoMaternity}
              alt="Fotografie von Martina Jürgens – Frau im stillen Wasser"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover rounded-sm shadow-[var(--shadow-soft)] mb-4"
            />
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-12">
              Foto · Martina Jürgens
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance">
              Was bald hier <span className="italic">wohnen darf.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-muted-foreground font-light">
              <li>Hochzeitsfotografie – für den Tag, an dem alles ehrlich ist.</li>
              <li>Babybauch – weiches Licht, kein Posieren.</li>
              <li>Mutterglück – die kleinen Momente zwischen euch.</li>
              <li>Paarshootings – Nähe, wie sie wirklich aussieht.</li>
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
