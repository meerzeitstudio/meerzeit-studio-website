import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import sFreies from "@/assets/session-freies-malen.jpg";
import sMeditativ from "@/assets/session-meditativ.jpg";
import sNacht from "@/assets/session-nacht.jpg";
import sBeats from "@/assets/session-beats.jpg";
import sMutti from "@/assets/session-mutti-baby.jpg";
import { CONTACT } from "@/lib/contact";
import pdfAsset from "@/assets/meerzeit-flyer-allgemein.pdf.asset.json";


export const Route = createFileRoute("/flyer-allgemein")({
  head: () => ({
    meta: [
      { title: "Flyer · Meerzeit Studio" },
      { name: "description", content: "Allgemeiner A4-Flyer für Meerzeit Studio – kreative Auszeit-Events." },
    ],
  }),
  component: FlyerPage,
});

const COLORS = {
  dark: "#2C2825",
  terracotta: "#C17A5A",
  muted: "#9B8E84",
  cream: "#F5F0EA",
  sand: "#E8E0D8",
  white: "#FFFFFF",
  topbarLeft: "#C8B8A4",
};

const offers = [
  { img: sFreies, title: "Freies Malen am organisierten Ort", mood: "frei · draußen · besonders" },
  { img: sMeditativ, title: "Meditatives Malen", mood: "still · achtsam · weich" },
  { img: sMutti, title: "Mutti malt mit Baby", mood: "sanft · ehrlich · ohne schlechtes Gewissen" },
  { img: sNacht, title: "Malen bei Nacht", mood: "warm · intim · zauberhaft" },
  { img: sBeats, title: "Beats & Brushes", mood: "lebendig · frei · spielerisch" },
];

function Flyer() {
  return (
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        background: COLORS.white,
        color: COLORS.dark,
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: COLORS.dark,
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: COLORS.topbarLeft, fontWeight: 500 }}>
          MEERZEIT STUDIO
        </span>
        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "11px", color: COLORS.muted }}>
          gemeinsam. kreativ. verbunden.
        </span>
      </div>

      {/* HERO */}
      <div style={{ width: "100%", height: "260px", overflow: "hidden" }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* TITLE */}
      <div style={{ background: COLORS.cream, padding: "26px 32px 20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.14em", color: COLORS.terracotta, textTransform: "uppercase", fontWeight: 500 }}>
          Kreative Auszeit-Events
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "36px", color: COLORS.dark, margin: "8px 0 4px", lineHeight: 1.1 }}>
          Meerzeit Studio
        </h1>
        <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "20px", color: COLORS.terracotta }}>
          für Frauen, Mütter und Freundinnen.
        </div>
        <hr style={{ border: "none", borderTop: `1px solid ${COLORS.sand}`, marginTop: "16px" }} />
      </div>

      {/* INTRO */}
      <div style={{ background: COLORS.white, padding: "20px 32px 8px" }}>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "14px", color: COLORS.dark, margin: 0, lineHeight: 1.6 }}>
          „Wir schaffen Räume zum Abschalten, kreativ sein und einfach mal wieder Zeit für sich selbst.
          Ohne Druck. Ohne Erwartungen. Nur du, die Farben und der Moment."
        </p>
        <div style={{ fontSize: "11px", color: COLORS.muted, marginTop: "8px" }}>
          Keine Vorkenntnisse nötig · Hochwertige Acrylfarben · Dein Bild direkt mit nach Hause
        </div>
      </div>

      {/* OFFERS */}
      <div style={{ background: COLORS.white, padding: "16px 32px 8px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.14em", color: COLORS.terracotta, textTransform: "uppercase", fontWeight: 500, marginBottom: "12px" }}>
          Unsere Angebote
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {offers.map((o) => (
            <div key={o.title} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div style={{ width: "64px", height: "64px", flexShrink: 0, overflow: "hidden" }}>
                <img src={o.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: COLORS.dark, lineHeight: 1.2 }}>
                  {o.title}
                </div>
                <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "11px", color: COLORS.terracotta, marginTop: "3px" }}>
                  {o.mood}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRIVATE ANLÄSSE */}
      <div style={{ background: COLORS.cream, padding: "18px 32px", marginTop: "16px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.14em", color: COLORS.terracotta, textTransform: "uppercase", fontWeight: 500, marginBottom: "6px" }}>
          Auch als privates Event buchbar
        </div>
        <p style={{ fontSize: "12.5px", color: COLORS.dark, margin: 0, lineHeight: 1.55 }}>
          Geburtstag, JGA, Teamevent oder Mädelsabend — wir kommen zu euch oder empfangen euch bei uns.
          Alles inklusive: Farben, Leinwände, Anleitung und ein Moment, den ihr nicht vergesst.
        </p>
      </div>

      {/* spacer */}
      <div style={{ flex: 1, background: COLORS.white }} />

      {/* CONTACT BAR */}
      <div
        style={{
          background: COLORS.sand,
          padding: "14px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: COLORS.dark,
        }}
      >
        <span>{CONTACT.phoneDisplay}  ·  {CONTACT.email}</span>
        <span style={{ fontWeight: 500 }}>Termine & Buchung online</span>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: COLORS.dark,
          padding: "12px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "11px", color: COLORS.muted }}>
          Eure Iris & Martina
        </span>
        <span style={{ fontSize: "11px", color: COLORS.terracotta }}>
          www.meerzeit.studio
        </span>
      </div>
    </div>
  );
}

function FlyerPage() {
  return (
    <>
      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          body { background: #fff !important; }
          .flyer-screen-wrap { padding: 0 !important; background: #fff !important; }
          .flyer-print-hide { display: none !important; }
        }
      `}</style>
      <div className="flyer-screen-wrap" style={{ background: "#ddd", padding: "24px 0", minHeight: "100vh" }}>
        <div
          className="flyer-print-hide"
          style={{ maxWidth: "210mm", margin: "0 auto 16px", display: "flex", justifyContent: "flex-end" }}
        >
          <a
            href={pdfAsset.url}
            download="meerzeit-flyer-allgemein.pdf"
            style={{
              background: COLORS.terracotta,
              color: COLORS.white,
              textDecoration: "none",
              padding: "10px 18px",
              fontSize: "12px",
              letterSpacing: "0.1em",
              marginRight: "8px",
            }}
          >
            PDF HERUNTERLADEN
          </a>
          <button
            onClick={() => window.print()}
            style={{
              background: COLORS.dark,
              color: COLORS.white,
              border: "none",
              padding: "10px 18px",
              fontSize: "12px",
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            DRUCKEN
          </button>
        </div>
        <Flyer />
      </div>
    </>
  );
}
