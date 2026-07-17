import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/session-meer.jpg";

export const Route = createFileRoute("/flyer")({
  head: () => ({
    meta: [
      { title: "Flyer · Meerzeit am Meer" },
      { name: "description", content: "Druckfertiger A4-Flyer für Meerzeit am Meer – das Strandatelier." },
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
      {/* 1. TOP BAR */}
      <div
        style={{
          background: COLORS.dark,
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: COLORS.topbarLeft,
            fontWeight: 500,
          }}
        >
          MEERZEIT STUDIO
        </span>
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "11px",
            color: COLORS.muted,
          }}
        >
          gemeinsam. kreativ. verbunden.
        </span>
      </div>

      {/* 2. HERO IMAGE */}
      <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
        <img
          src={heroImg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: 0,
          }}
        />
      </div>

      {/* 3. TITLE BLOCK */}
      <div style={{ background: COLORS.cream, padding: "28px 32px 20px" }}>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: COLORS.terracotta,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Sommer 2026 · Strand Norddeich
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: "38px",
            color: COLORS.dark,
            margin: "8px 0 4px",
            lineHeight: 1.1,
          }}
        >
          Meerzeit am Meer
        </h1>
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "22px",
            color: COLORS.terracotta,
          }}
        >
          das Strandatelier
        </div>
        <hr
          style={{
            border: "none",
            borderTop: `1px solid ${COLORS.sand}`,
            marginTop: "16px",
          }}
        />
      </div>

      {/* 4. KEY EXPERIENCE */}
      <div style={{ background: COLORS.white, padding: "24px 32px" }}>
        {[
          "Malen zwischen den Dünen mit Meeresrauschen",
          "Ein einzigartiges Erlebnis an der Nordsee",
          "Abschalten, loslassen, in den Flow kommen",
          "Dein eigenes Bild — direkt mit nach Hause",
        ].map((line) => (
          <div
            key={line}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "6px 0",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: COLORS.terracotta,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                color: COLORS.dark,
                lineHeight: 1.6,
              }}
            >
              {line}
            </span>
          </div>
        ))}
      </div>

      {/* 5. PROCESS TEASER */}
      <div style={{ background: COLORS.cream, padding: "20px 32px" }}>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: COLORS.dark,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          „Wir zeigen dir die Technik, begleiten dich durch den Prozess — damit du einfach mal loslegen und in den Flow kommen kannst."
        </p>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            color: COLORS.muted,
            marginTop: "8px",
          }}
        >
          Keine Vorkenntnisse nötig · Ab 14 Jahren
        </div>
      </div>

      {/* 6. DETAILS BAR */}
      <div
        style={{
          background: COLORS.sand,
          padding: "14px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          color: COLORS.dark,
        }}
      >
        <span>So., 23. August 2026  ·  16:30 bis 18:30 Uhr</span>
        <span style={{ fontWeight: 500 }}>49,95 Euro pro Person</span>
      </div>

      {/* spacer to push footer down on A4 */}
      <div style={{ flex: 1, background: COLORS.white }} />

      {/* 7. FOOTER */}
      <div
        style={{
          background: COLORS.dark,
          padding: "12px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "11px",
            color: COLORS.muted,
          }}
        >
          Buchung: www.norddeich.de
        </span>
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "11px",
            color: COLORS.terracotta,
          }}
        >
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
      <div
        className="flyer-screen-wrap"
        style={{ background: "#ddd", padding: "24px 0", minHeight: "100vh" }}
      >
        <div
          className="flyer-print-hide"
          style={{
            maxWidth: "210mm",
            margin: "0 auto 16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="/meerzeit-flyer.pdf"
            download="meerzeit-flyer.pdf"
            style={{
              background: COLORS.terracotta,
              color: COLORS.white,
              textDecoration: "none",
              padding: "10px 18px",
              fontFamily: "Arial, sans-serif",
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
              fontFamily: "Arial, sans-serif",
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
