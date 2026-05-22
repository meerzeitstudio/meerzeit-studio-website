import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum · Meerzeit Studio" },
      { name: "description", content: "Impressum & Anbieterkennzeichnung von Meerzeit Studio · Creative Events." },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader
        eyebrow="rechtliches"
        title="Impressum"
        italic="Anbieterkennzeichnung"
      />
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto space-y-10 text-muted-foreground leading-relaxed font-light">
          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Meerzeit Studio · Creative Events GbR
              <br />
              Vertretungsberechtigte Gesellschafterinnen: Martina Jürgens &amp; Iris Christophers
              <br />
              Börgweg 1c
              <br />
              26556 Utarp
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Kontakt</h2>
            <p>
              Telefon &amp; WhatsApp:{" "}
              <a href={`tel:+${CONTACT.phoneE164}`} className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                {CONTACT.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${CONTACT.email}`} className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                {CONTACT.email}
              </a>
              <br />
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-[color:var(--terracotta)] hover:text-[color:var(--copper)]">
                Direkt per WhatsApp schreiben →
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Verantwortlich für den Inhalt</h2>
            <p>
              nach § 18 Abs. 2 MStV:
              <br />
              Martina Jürgens &amp; Iris Christophers
              <br />
              Börgweg 1c, 26556 Utarp
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Umsatzsteuer</h2>
            <p>
              Als Gesellschaft bürgerlichen Rechts (GbR) führen wir derzeit keine
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz.
            </p>
          </div>


          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
              <br />
              Unsere E-Mail-Adresse findest du oben. Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
