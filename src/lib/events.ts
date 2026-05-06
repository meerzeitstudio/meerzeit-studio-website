export type SessionTitle =
  | "Malen am Meer"
  | "Meditatives Malen"
  | "Malen bei Nacht"
  | "Paint & Beats"
  | "Mutti malt – mit Baby";

export type SessionEvent = {
  date: Date;
  title: SessionTitle;
  time: string;
  location: string;
  spots: number;
};

// Termine – hier können neue Sessions einfach ergänzt werden
export const events: SessionEvent[] = [
  { date: new Date(2026, 4, 16), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 4, 21), title: "Mutti malt – mit Baby", time: "10:30 – 12:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 4, 23), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 5, 6), title: "Paint & Beats", time: "19:00 – 22:00", location: "Studio Warnemünde", spots: 10 },
  { date: new Date(2026, 5, 11), title: "Mutti malt – mit Baby", time: "10:30 – 12:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 5, 13), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Kühlungsborn", spots: 8 },
  { date: new Date(2026, 5, 20), title: "Malen bei Nacht", time: "20:30 – 23:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 6, 4), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
  { date: new Date(2026, 6, 11), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Heiligendamm", spots: 8 },
  { date: new Date(2026, 6, 18), title: "Paint & Beats", time: "19:00 – 22:00", location: "Studio Warnemünde", spots: 10 },
  { date: new Date(2026, 6, 25), title: "Malen bei Nacht", time: "20:30 – 23:00", location: "Strand Kühlungsborn", spots: 8 },
  { date: new Date(2026, 7, 8), title: "Malen am Meer", time: "10:00 – 13:00", location: "Strand Warnemünde", spots: 8 },
  { date: new Date(2026, 7, 22), title: "Meditatives Malen", time: "18:00 – 20:30", location: "Studio Warnemünde", spots: 6 },
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
