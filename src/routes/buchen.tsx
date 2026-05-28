import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";

import hero from "@/assets/hero.jpg";
import { absUrl } from "@/lib/seo";

export const Route = createFileRoute("/buchen")({
  head: () => ({
    meta: [
      { title: "Auszeit buchen · Meerzeit Studio" },
      {
        name: "description",
        content:
          "Buche deine kreative Auszeit. Per Formular, E-Mail oder direkt über WhatsApp. Wir melden uns innerhalb von 48 Stunden.",
      },
      { property: "og:title", content: "Buche deine Auszeit · Meerzeit Studio" },
      { property: "og:image", content: absUrl(hero) },
      { name: "twitter:image", content: absUrl(hero) },
    ],
    links: [{ rel: "canonical", href: absUrl("/buchen") }],
  }),
  component: BookingPage,
});

const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

function loadTallyEmbeds() {
  const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
  if (typeof w.Tally !== "undefined") {
    w.Tally.loadEmbeds();
  } else {
    document
      .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
      .forEach((el) => {
        if (el.dataset.tallySrc) el.src = el.dataset.tallySrc;
      });
  }
}

function useTallyEmbed() {
  useEffect(() => {
    const w = window as unknown as { Tally?: { loadEmbeds: () => void } };
    if (typeof w.Tally !== "undefined") {
      loadTallyEmbeds();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", loadTallyEmbeds);
      loadTallyEmbeds();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SCRIPT_SRC;
    s.onload = loadTallyEmbeds;
    s.onerror = loadTallyEmbeds;
    document.body.appendChild(s);
  }, []);
}

function BookingPage() {
  useTallyEmbed();
  return (
    <main>
      <PageHeader
        eyebrow="deine Auszeit wartet"
        title="Buche deine"
        italic="Auszeit."
        intro="Schreib uns. Per Formular, E-Mail oder direkt über WhatsApp. Wir melden uns innerhalb von 48 Stunden mit Terminen und allen Details."
      />

      {/* Schnellkontakte */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto -mt-6 grid sm:grid-cols-2 gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-sm bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition shadow-[var(--shadow-soft)]"
          >
            <p className="text-xs uppercase tracking-widest opacity-80 mb-1">am schnellsten</p>
            <p className="font-serif text-xl">WhatsApp · {CONTACT.phoneDisplay}</p>
            <p className="text-xs mt-1 opacity-90">Antwort meist am selben Tag</p>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="block p-5 rounded-sm bg-card border border-border hover:border-[color:var(--terracotta)]/50 transition shadow-[var(--shadow-soft)]"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">per E-Mail</p>
            <p className="font-serif text-xl text-foreground">{CONTACT.email}</p>
            <p className="text-xs mt-1 text-muted-foreground">Antwort innerhalb von 48 Stunden</p>
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-sm overflow-hidden bg-transparent">
              <iframe
                data-tally-src="https://tally.so/embed/A7yrxB?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={133}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Kontaktformular"
                className="w-full block bg-transparent"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 px-6 text-center text-[color:var(--ivory)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-dusk)]" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative max-w-xl mx-auto">
          <p className="font-script text-[color:var(--terracotta)] text-xl mb-4">wir freuen uns auf dich</p>
          <p className="font-serif text-2xl md:text-3xl italic leading-snug text-balance">
            „Hier darfst du einfach sein."
          </p>
        </div>
      </section>
    </main>
  );
}
