import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/SiteChrome";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/termine")({
  head: () => ({
    meta: [
      { title: "Termine – Meerzeit Studio" },
      {
        name: "description",
        content:
          "Alle kommenden Creative Sessions im Überblick. Finde deinen Termin und buche deine kreative Auszeit am Meer.",
      },
      { property: "og:title", content: "Termine – Meerzeit Studio" },
      {
        property: "og:description",
        content: "Alle kommenden Creative Sessions im Überblick.",
      },
    ],
  }),
  component: TermineePage,
});

type SessionEvent = {
  date: Date;
  title: "Malen am Meer" | "Meditatives Malen" | "Malen bei Nacht" | "Paint & Beats";
  time: string;
  location: string;
  spots: number;
};

// Termine – hier können neue Sessions einfach ergänzt werden
const events: SessionEvent[] = [
  { date: new Date(2026, 4, 16), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 4, 23), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 5, 6), title: "Paint & Beats", time: "19:00 – 22:00", location: "Studio Warnemünde", spots: 10 },
  { date: new Date(2026, 5, 13), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Kühlungsborn", spots: 8 },
  { date: new Date(2026, 5, 20), title: "Malen bei Nacht", time: "20:30 – 23:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 6, 4), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 6, 11), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 6, 18), title: "Paint & Beats", time: "19:00 – 22:00", location: "Studio Warnemünde", spots: 10 },
  { date: new Date(2026, 6, 25), title: "Malen bei Nacht", time: "20:30 – 23:00", location: "Strand Kühlungsborn", spots: 8 },
  { date: new Date(2026, 7, 8), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Warnemünde", spots: 8 },
  { date: new Date(2026, 7, 22), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
];

const titleColor: Record<SessionEvent["title"], string> = {
  "Malen am Meer": "var(--sage)",
  "Meditatives Malen": "var(--smoky-blue)",
  "Malen bei Nacht": "var(--graphite)",
  "Paint & Beats": "var(--terracotta)",
};

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const formatLong = (d: Date) =>
  d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

function TermineePage() {
  const eventDates = useMemo(() => events.map((e) => e.date), []);
  const upcoming = useMemo(
    () => [...events].filter((e) => e.date >= new Date(new Date().toDateString())).sort((a, b) => +a.date - +b.date),
    [],
  );
  const [selected, setSelected] = useState<Date | undefined>(upcoming[0]?.date);

  const dayEvents = selected ? events.filter((e) => sameDay(e.date, selected)) : [];

  return (
    <main>
      <PageHeader
        eyebrow="kommende Sessions"
        title="Unsere"
        italic="Termine."
        intro="Wähle ein Datum im Kalender oder stöbere durch die Liste – jede Session ist eine kleine Auszeit für dich."
      />

      <section className="py-16 md:py-24 px-6 bg-[color:var(--ivory)]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          <Reveal>
            <div className="bg-card p-6 rounded-sm shadow-[var(--shadow-soft)] border border-border inline-block">
              <Calendar
                mode="single"
                selected={selected}
                onSelect={setSelected}
                numberOfMonths={1}
                showOutsideDays
                modifiers={{ hasEvent: eventDates }}
                modifiersClassNames={{
                  hasEvent:
                    "relative font-medium text-[color:var(--terracotta)] after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[color:var(--terracotta)]",
                }}
                className={cn("p-3 pointer-events-auto")}
              />
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--terracotta)] inline-block" />
                Tage mit verfügbaren Sessions
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-2">
                {selected ? formatLong(selected) : "Wähle ein Datum"}
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                {dayEvents.length === 0
                  ? "An diesem Tag findet keine Session statt. Wähle einen markierten Tag im Kalender."
                  : `${dayEvents.length} Session${dayEvents.length > 1 ? "s" : ""} an diesem Tag.`}
              </p>

              <div className="space-y-4">
                {dayEvents.map((e, i) => (
                  <EventCard key={i} event={e} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-script text-[color:var(--terracotta)] text-lg text-center mb-3">alle Termine im Überblick</p>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Kommende <span className="italic">Sessions</span>
            </h2>
          </Reveal>

          <div className="space-y-3">
            {upcoming.map((e, i) => (
              <Reveal key={i} delay={i * 60}>
                <button
                  onClick={() => {
                    setSelected(e.date);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left grid grid-cols-[auto_1fr_auto] gap-6 items-center p-5 md:p-6 bg-card rounded-sm border border-border hover:border-[color:var(--terracotta)]/50 hover:shadow-[var(--shadow-soft)] transition group"
                >
                  <div className="text-center min-w-[64px]">
                    <div className="font-serif text-3xl leading-none">
                      {e.date.getDate()}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {e.date.toLocaleDateString("de-DE", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: titleColor[e.title] }}
                      />
                      <h3 className="font-serif text-xl">{e.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {e.time} · {e.location}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground hidden sm:block">
                    {e.spots} Plätze
                    <div className="text-[color:var(--terracotta)] text-xs mt-1 group-hover:underline">
                      Details →
                    </div>
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
            Schreib uns – wir planen regelmäßig neue Sessions und private Auszeiten für kleine Gruppen.
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

function EventCard({ event }: { event: SessionEvent }) {
  return (
    <div className="p-6 bg-card border border-border rounded-sm shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: titleColor[event.title] }} />
        <h3 className="font-serif text-2xl">{event.title}</h3>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm mb-5">
        <dt className="text-muted-foreground uppercase tracking-wide text-xs">Zeit</dt>
        <dd>{event.time}</dd>
        <dt className="text-muted-foreground uppercase tracking-wide text-xs">Ort</dt>
        <dd>{event.location}</dd>
        <dt className="text-muted-foreground uppercase tracking-wide text-xs">Plätze</dt>
        <dd>{event.spots} verfügbar</dd>
      </dl>
      <Link
        to="/buchen"
        className="inline-block px-6 py-3 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-xs tracking-widest uppercase"
      >
        Diesen Termin buchen
      </Link>
    </div>
  );
}
