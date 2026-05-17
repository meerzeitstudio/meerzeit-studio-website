import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { events, titleColor, type SessionEvent } from "@/lib/events";

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const formatLong = (d: Date) =>
  d.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export function CalendarSection({ compact = false }: { compact?: boolean }) {
  const eventDates = useMemo(() => events.map((e) => e.date), []);
  const upcoming = useMemo(
    () => [...events].filter((e) => e.date >= new Date(new Date().toDateString())).sort((a, b) => +a.date - +b.date),
    [],
  );
  const [selected, setSelected] = useState<Date | undefined>(upcoming[0]?.date);
  const dayEvents = selected ? events.filter((e) => sameDay(e.date, selected)) : [];

  return (
    <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
      <div className="bg-card p-5 md:p-6 rounded-sm shadow-[var(--shadow-soft)] border border-border inline-block mx-auto lg:mx-0">
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
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--terracotta)] inline-block" />
          Tage mit verfügbaren Sessions
        </div>
      </div>

      <div>
        <h3 className="font-serif text-xl md:text-2xl mb-1">
          {selected ? formatLong(selected) : "Wähle ein Datum"}
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          {dayEvents.length === 0
            ? "Keine Session an diesem Tag – wähle einen markierten Tag im Kalender."
            : `${dayEvents.length} Session${dayEvents.length > 1 ? "s" : ""} an diesem Tag.`}
        </p>
        <div className="space-y-3">
          {dayEvents.map((e, i) => (
            <EventCard key={i} event={e} />
          ))}
        </div>
        {compact && (
          <div className="mt-8">
            <Link
              to="/termine"
              className="text-sm tracking-widest uppercase border-b border-[color:var(--terracotta)] pb-1 text-[color:var(--terracotta)] hover:text-[color:var(--copper)]"
            >
              Alle Termine ansehen
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export function EventCard({ event }: { event: SessionEvent }) {
  return (
    <div className="p-5 md:p-6 bg-card border border-border rounded-sm shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: titleColor[event.title] }} />
        <h4 className="font-serif text-xl">{event.title}</h4>
      </div>
      {event.theme && (
        <p className="font-script text-[color:var(--terracotta)] text-base mb-3 -mt-1">Thema: {event.theme}</p>
      )}
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm mb-4">
        <dt className="text-muted-foreground uppercase tracking-wide text-xs">Zeit</dt>
        <dd>{event.time}</dd>
        <dt className="text-muted-foreground uppercase tracking-wide text-xs">Ort</dt>
        <dd>{event.location}</dd>
      </dl>
      <Link
        to="/buchen"
        className="inline-block px-5 py-2.5 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition text-xs tracking-widest uppercase"
      >
        Diesen Termin buchen
      </Link>
    </div>
  );
}
