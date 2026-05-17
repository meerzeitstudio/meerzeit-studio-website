export type SessionTitle =
  | "Malen am Meer"
  | "Meditatives Malen"
  | "Malen bei Nacht"
  | "Paint & Beats"
  | "Mutti malt – mit Baby";

export type SessionEvent = {
  date: Date;
  title: SessionTitle;
  theme?: string;
  time: string;
  location: string;
  spots: number;
};

// Termine – hier können neue Sessions einfach ergänzt werden
export const events: SessionEvent[] = [
  { date: new Date(2026, 4, 20), title: "Meditatives Malen", theme: "Farbe und Klang", time: "18:00 – 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
  { date: new Date(2026, 4, 27), title: "Meditatives Malen", theme: "Traumreise und Piano", time: "18:00 – 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
  { date: new Date(2026, 5, 3), title: "Meditatives Malen", theme: "Natur und Melodie", time: "18:00 – 20:30", location: "Fliederweg 1, 26556 Utarp", spots: 6 },
];

export const titleColor: Record<SessionTitle, string> = {
  "Malen am Meer": "var(--sage)",
  "Meditatives Malen": "var(--smoky-blue)",
  "Malen bei Nacht": "var(--graphite)",
  "Paint & Beats": "var(--terracotta)",
  "Mutti malt – mit Baby": "var(--copper)",
};

export const sessionOptionsList: SessionTitle[] = [
  "Malen am Meer",
  "Meditatives Malen",
  "Malen bei Nacht",
  "Paint & Beats",
  "Mutti malt – mit Baby",
];
