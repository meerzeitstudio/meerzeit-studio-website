import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { CalendarSection } from "@/components/CalendarSection";
import { events, titleColor } from "@/lib/events";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/termine")({
  head: () => ({
    meta: [
      { title: "Termine · Meerzeit Studio" },
      {
        name: "description",
        content:
          "Alle kommenden Creative Events im Überblick. Finde deinen Termin und buche deine kreative Auszeit am Meer.",
      },
      { property: "og:title", content: "Termine · Meerzeit Studio" },
      { property: "og:description", content: "Alle kommenden Creative Events im Überblick." },
    ],
  }),
  component: TerminePage,
});

function TerminePage() {
  const upcoming = useMemo(
    () => [...events].filter((e) => e.date >= new Date(new Date().toDateString())).sort((a, b) => +a.date - +b.date),
    [],
  );
  const [, setSelected] = useState<Date | undefined>(upcoming[0]?.date);

  return (
    <main>
      <PageHeader
        eyebrow="kommende Events"
        title="Unsere"
        italic="Termine."
        intro="Wähle ein Datum im Kalender oder stöbere durch die Liste. Jede Event ist eine kleine Auszeit für dich."
      />

      <section className="py-16 md:py-24 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <CalendarSection />
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg text-center mb-3">alle Termine im Überblick</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Kommende <span className="italic">Events</span>
            </h2>
          </Reveal>

          <div className="space-y-3">
            {upcoming.map((e, i) => (
              <Reveal key={i} delay={i * 50}>
                <button
                  onClick={() => {
                    setSelected(e.date);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left grid grid-cols-[auto_1fr_auto] gap-6 items-center p-5 md:p-6 bg-card rounded-sm border border-border hover:border-[color:var(--terracotta)]/50 hover:shadow-[var(--shadow-soft)] transition group"
                >
                  <div className="text-center min-w-[64px]">
                    <div className="font-serif text-3xl leading-none">{e.date.getDate()}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {e.date.toLocaleDateString("de-DE", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-2 h-2 rounded-full" style={{ background: titleColor[e.title] }} />
                      <h3 className="font-serif text-xl">{e.title}</h3>
                    </div>
                    {e.theme && (
                      <p className="text-sm italic text-[color:var(--terracotta)] mb-1">Thema: {e.theme}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {e.time} · {e.location}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground hidden sm:block">
                    <div className="text-[color:var(--terracotta)] text-xs group-hover:underline">Details →</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[color:var(--ivory)] text-center">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl italic mb-6 text-balance max-w-xl mx-auto">
            „Kein passender Termin dabei?“
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Schreib uns. Wir planen regelmäßig neue Events und private Auszeiten für kleine Gruppen.
          </p>
          <Link
            to="/buchen"
            className="inline-block px-8 py-4 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-sm tracking-widest uppercase shadow-[var(--shadow-glow)]"
          >
            Termin anfragen
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
