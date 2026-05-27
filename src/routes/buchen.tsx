import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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




function BookingPage() {
  const [formConsent, setFormConsent] = useState(false);
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
            <div className="bg-card rounded-sm shadow-[var(--shadow-soft)] border border-border overflow-hidden">
              {formConsent ? (
                <iframe
                  title="Anfrageformular Meerzeit Studio"
                  src="https://form.typeform.com/to/knIiW622"
                  className="w-full"
                  style={{ height: "720px", border: 0 }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                />
              ) : (
                <div className="p-8 md:p-12 text-center flex flex-col items-center gap-5">
                  <p className="font-script text-[color:var(--terracotta)] text-xl">Anfrageformular</p>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                    Formular laden
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md leading-relaxed font-light">
                    Unser Anfrageformular wird vom Anbieter{" "}
                    <strong className="text-foreground">Typeform</strong> (Typeform S.L., Spanien;
                    Infrastruktur in den USA) bereitgestellt. Mit Klick auf den Button willigst du
                    in das Laden des Formulars sowie das Setzen von Cookies und eine mögliche
                    Datenübermittlung in die USA ein. Mehr Infos in unserer{" "}
                    <Link to="/datenschutz" className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormConsent(true)}
                    className="mt-2 px-6 py-3 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm"
                  >
                    Formular jetzt laden
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Lieber direkt? Schreib uns per{" "}
                    <a href={`mailto:${CONTACT.email}`} className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                      E-Mail
                    </a>{" "}
                    oder{" "}
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}
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
            „Hier darfst du einfach sein.“
          </p>
        </div>
      </section>
    </main>
  );
}
