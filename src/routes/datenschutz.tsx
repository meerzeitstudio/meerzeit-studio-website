import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT } from "@/lib/contact";
import { absUrl } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung · Meerzeit Studio" },
      { name: "description", content: "Datenschutzerklärung von Meerzeit Studio · Creative Events nach DSGVO." },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: absUrl("/datenschutz") }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader
        eyebrow="rechtliches"
        title="Datenschutz"
        italic="erklärung"
      />
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto space-y-10 text-muted-foreground leading-relaxed font-light">
          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              meerzeit.studio GbR
              <br />
              Martina Jürgens &amp; Iris Christophers
              <br />
              Börgweg 1c, 26556 Utarp, Deutschland
              <br />
              E-Mail:{" "}
              <a href={`mailto:${CONTACT.email}`} className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground">
                {CONTACT.email}
              </a>
              <br />
              Telefon: {CONTACT.phoneDisplay}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">2. Allgemeines</h2>
            <p>
              Wir nehmen den Schutz deiner personenbezogenen Daten ernst und behandeln sie vertraulich
              sowie entsprechend der gesetzlichen Vorschriften (DSGVO, BDSG, TDDDG) und dieser
              Datenschutzerklärung. Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">3. Hosting</h2>
            <p>
              Diese Website wird bei einem Dienstleister gehostet, der die Daten in einem Rechenzentrum
              speichert. Der Server erfasst beim Aufruf automatisch sogenannte Server-Logfiles
              (IP-Adresse, Datum und Uhrzeit, abgerufene Datei, Browsertyp, Betriebssystem, Referrer-URL).
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren,
              stabilen Bereitstellung der Website). Speicherdauer: in der Regel max. 30 Tage.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">4. Kontaktaufnahme</h2>
            <p>
              Wenn du uns per E-Mail, Telefon oder WhatsApp kontaktierst, werden deine Angaben zur
              Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wir speichern
              diese Daten nur so lange, wie es zur Bearbeitung erforderlich ist, bzw. solange
              gesetzliche Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">WhatsApp:</strong> Bei Kontakt über WhatsApp werden
              Daten an die WhatsApp Ireland Ltd. bzw. Meta Platforms Inc. (USA) übertragen.
              Es kann zu Datenübermittlungen in Drittländer (USA) kommen. Rechtsgrundlage ist deine
              Einwilligung durch aktive Kontaktaufnahme (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">5. Anfrageformular (Typeform)</h2>
            <p>
              Auf unserer Buchungsseite bieten wir ein Anfrageformular über den Anbieter Typeform S.L.,
              Carrer de Bac de Roda 163, 08018 Barcelona, Spanien, mit Infrastruktur in den USA. Das
              Formular wird erst nach deiner ausdrücklichen Einwilligung geladen („Zwei-Klick-Lösung").
              Mit Klick auf den Ladebutton willigst du in das Setzen von Cookies und ggf. eine
              Datenübermittlung in die USA durch Typeform ein.
            </p>
            <p className="mt-3">
              Verarbeitet werden die von dir eingegebenen Angaben (z. B. Name, E-Mail, Anliegen) zur
              Bearbeitung deiner Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              sowie § 25 Abs. 1 TDDDG. Du kannst deine Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen. Datenschutzhinweise von Typeform:{" "}
              <a
                href="https://www.typeform.com/help/a/data-protection-at-typeform-360029259552/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[color:var(--terracotta)]/50 hover:text-foreground"
              >
                typeform.com/help/data-protection
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">6. Schriftarten (lokal gehostet)</h2>
            <p>
              Wir verwenden Schriftarten, die lokal von unserem Server ausgeliefert werden. Es findet
              keine Verbindung zu Google-Servern statt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">7. Cookies</h2>
            <p>
              Unsere Website setzt selbst keine analyse- oder marketingbezogenen Cookies. Technisch
              notwendige Cookies (z. B. zur Speicherung deiner Einwilligung in den Typeform-Ladebutton)
              werden auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG ohne Einwilligung gesetzt. Eingebettete
              Dienste (Typeform) können nach deiner Einwilligung weitere Cookies setzen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">8. Deine Rechte</h2>
            <p>Du hast nach DSGVO folgende Rechte uns gegenüber:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              <li>
                Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO), z. B. Landesbeauftragte für
                Datenschutz Niedersachsen.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">9. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennst du an „https://" in der Adresszeile des Browsers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-foreground text-xl mb-3">10. Aktualität</h2>
            <p>
              Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}.
              Durch Weiterentwicklung unserer Website oder geänderter gesetzlicher Vorgaben kann es
              notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
