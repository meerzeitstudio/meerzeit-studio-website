export type SessionTitle =
  | "Freies Malen am organisierten Ort"
  | "Meditatives Malen"
  | "Malen bei Nacht"
  | "Beats & Brushes"
  | "Beats & Brushes – Neon Edition"
  | "Mutti malt mit Baby"
  | "Küstenmalerei"
  | "Kaffee Meerzeit";

export type SessionEvent = {
  date: Date;
  title: SessionTitle;
  theme?: string;
  time: string;
  location: string;
  spots: number;
  price?: string;
  description?: string;
  partner?: string;
  bookingInfo?: string;
};

// Termine: hier können neue Events einfach ergänzt werden
export const events: SessionEvent[] = [
  { date: new Date(2026, 4, 20), title: "Meditatives Malen", theme: "Farbe und Klang", time: "18:00 bis 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
  { date: new Date(2026, 4, 27), title: "Meditatives Malen", theme: "Traumreise und Piano", time: "18:00 bis 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
  { date: new Date(2026, 5, 3), title: "Meditatives Malen", theme: "Natur und Melodie", time: "18:00 bis 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
  {
    date: new Date(2026, 7, 23),
    title: "Küstenmalerei",
    time: "17:30 bis 19:30",
    location: "Norddeich",
    spots: 10,
    price: "59 €",
    description: "Ein kreativer Abend, an dem die Teilnehmenden ihr eigenes abstraktes Meeresbild mit Strukturpaste und hochwertigen Materialien gestalten – ganz ohne Vorkenntnisse.",
    partner: "Norddeich Tourismus",
    bookingInfo: "Anmeldung über Norddeich Tourismus",
  },
  {
    date: new Date(2026, 9, 9),
    title: "Beats & Brushes – Neon Edition",
    time: "17:30 bis 19:30",
    location: "Lesesaal Norddeich",
    spots: 12,
    price: "59 €",
    description: "Ein Schwarzlicht-Workshop mit Neonfarben, Strukturpaste und mitreißender Musik – ein kreatives Erlebnis statt eines klassischen Malkurses.",
    partner: "Norddeich Tourismus",
    bookingInfo: "Anmeldung über Norddeich Tourismus",
  },
  {
    date: new Date(2026, 9, 10),
    title: "Kaffee Meerzeit",
    time: "09:30 bis 11:30",
    location: "Norddeich",
    spots: 10,
    price: "49 €",
    description: "Ein entschleunigender Kreativvormittag, bei dem mit Kaffee statt Farbe gemalt wird. In gemütlicher Atmosphäre entstehen ganz besondere Kunstwerke – begleitet von Kaffee, Gesprächen und einer kleinen Auszeit vom Alltag.",
    partner: "Norddeich Tourismus",
    bookingInfo: "Anmeldung über Norddeich Tourismus",
  },
];

export const titleColor: Record<SessionTitle, string> = {
  "Freies Malen am organisierten Ort": "var(--sage)",
  "Meditatives Malen": "var(--smoky-blue)",
  "Malen bei Nacht": "var(--graphite)",
  "Beats & Brushes": "var(--terracotta)",
  "Beats & Brushes – Neon Edition": "var(--terracotta)",
  "Mutti malt mit Baby": "var(--copper)",
  "Küstenmalerei": "var(--ocean)",
  "Kaffee Meerzeit": "var(--copper)",
};

export const sessionOptionsList: SessionTitle[] = [
  "Freies Malen am organisierten Ort",
  "Meditatives Malen",
  "Malen bei Nacht",
  "Beats & Brushes",
  "Beats & Brushes – Neon Edition",
  "Mutti malt mit Baby",
  "Küstenmalerei",
  "Kaffee Meerzeit",
];

