import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/sessions", label: "Sessions" },
  { to: "/fuer-wen", label: "Für wen" },
  { to: "/philosophie", label: "Philosophie" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/ablauf", label: "Ablauf" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-transparent text-[color:var(--ivory)]"
          : "backdrop-blur-md bg-background/80 border-b border-border/40 text-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide">
          Meerzeit <span className="text-[color:var(--terracotta)]">Studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="opacity-80 hover:opacity-100 transition"
              activeProps={{ className: "opacity-100 font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/buchen"
          className="text-sm px-5 py-2 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition"
        >
          Buchen
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="py-14 px-6 bg-[color:var(--graphite)] text-[color:var(--ivory)]/60 text-center text-sm">
      <Link to="/" className="font-serif text-2xl text-[color:var(--ivory)] mb-2 inline-block">
        Meerzeit <span className="text-[color:var(--terracotta)]">Studio</span>
      </Link>
      <p className="font-script text-base mb-6">— Creative Sessions für Frauen —</p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-[color:var(--ivory)]/70">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="hover:text-[color:var(--ivory)] transition">
            {l.label}
          </Link>
        ))}
        <Link to="/buchen" className="hover:text-[color:var(--ivory)] transition">
          Buchen
        </Link>
      </div>
      <p>© {new Date().getFullYear()} Meerzeit Studio. Mit Liebe gemacht.</p>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
}) {
  return (
    <header className="pt-40 pb-20 px-6 text-center bg-[color:var(--ivory)]">
      <div className="max-w-3xl mx-auto fade-in-up">
        <p className="font-script text-[color:var(--terracotta)] text-lg mb-4">{eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight text-balance">
          {title}
          {italic && (
            <>
              <br />
              <span className="italic">{italic}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-light text-balance">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
