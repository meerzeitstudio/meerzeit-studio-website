import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { sessionOptionsList } from "@/lib/events";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/buchen")({
  head: () => ({
    meta: [
      { title: "Auszeit buchen – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Buche deine kreative Auszeit – per Formular, E-Mail oder direkt über WhatsApp. Wir melden uns innerhalb von 48 Stunden.",
      },
      { property: "og:title", content: "Buche deine Auszeit – Meerzeit Studio" },
    ],
  }),
  component: BookingPage,
});

const occasionOptions = [
  "Einzelplatz in offener Session",
  "Freundinnenabend",
  "Hochzeit / JGA",
  "Firmenevent",
  "Geburtstag / privater Anlass",
  "Mutti malt – mit Baby",
  "Etwas anderes",
];

function BookingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="deine Auszeit wartet"
        title="Buche deine"
        italic="Auszeit."
        intro="Schreib uns – per Formular, E-Mail oder direkt über WhatsApp. Wir melden uns innerhalb von 48 Stunden mit Terminen und allen Details."
      />

      {/* Schnellkontakte */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto -mt-6 grid sm:grid-cols-2 gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
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
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Danke! Wir melden uns bald bei dir. ✨");
              }}
              className="bg-card p-8 md:p-12 rounded-sm shadow-[var(--shadow-soft)] space-y-6 border border-border"
            >
              <div>
                <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">Dein Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                  placeholder="Wie dürfen wir dich nennen?"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">E-Mail</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                    placeholder="dein@name.de"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">
                    Telefon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                    placeholder="optional"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">Anlass</label>
                <select
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {occasionOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">
                  Welche Session interessiert dich?
                </label>
                <select
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                  defaultValue=""
                >
                  <option value="">Noch nicht sicher</option>
                  {sessionOptionsList.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">
                  Deine Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition resize-none"
                  placeholder="Erzähl uns ein wenig: Wann hast du Zeit? Wie viele seid ihr? Besondere Wünsche zum Material (z. B. bestimmte Farben, Goldfolie, Format)?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
              >
                Anfrage senden
              </button>
            </form>
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
