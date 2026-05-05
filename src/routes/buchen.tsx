import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/buchen")({
  head: () => ({
    meta: [
      { title: "Auszeit buchen – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Buche deine kreative Auszeit bei Meerzeit Studio. Wir freuen uns, dir einen Platz zu reservieren.",
      },
      { property: "og:title", content: "Buche deine Auszeit – Meerzeit Studio" },
      {
        property: "og:description",
        content: "Reserviere deinen Platz für eine kreative Session am Meer.",
      },
    ],
  }),
  component: BookingPage,
});

const sessionOptions = ["Malen am Meer", "Meditatives Malen", "Malen bei Nacht", "Paint & Beats"];

function BookingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="deine Auszeit wartet"
        title="Buche deine"
        italic="Auszeit."
        intro="Schreib uns – wir melden uns innerhalb von 48 Stunden mit verfügbaren Terminen und allen Details."
      />

      <section className="py-16 md:py-24 px-6">
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
                  Welche Session interessiert dich?
                </label>
                <select
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition"
                  defaultValue=""
                >
                  <option value="" disabled>Bitte wählen</option>
                  {sessionOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                  <option>Ich bin mir noch nicht sicher</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wide uppercase text-muted-foreground mb-2">
                  Deine Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:border-[color:var(--terracotta)] transition resize-none"
                  placeholder="Erzähl uns ein wenig: Allein, mit Freundinnen, ein bestimmtes Datum?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
              >
                Anfrage senden
              </button>

              <p className="text-center text-sm text-muted-foreground pt-2">
                Oder schreib uns direkt:{" "}
                <a href="mailto:hallo@meerzeit-studio.de" className="text-[color:var(--terracotta)] hover:underline">
                  hallo@meerzeit-studio.de
                </a>
              </p>
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
