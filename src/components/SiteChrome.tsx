import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CONTACT, whatsappLink } from "@/lib/contact";
import logo from "@/assets/logo.png";

const links = [
  { to: "/sessions", label: "Sessions" },
  { to: "/termine", label: "Termine" },
  { to: "/private-anlaesse", label: "Private Anlässe" },
  { to: "/ablauf", label: "Ablauf" },
  { to: "/fuer-wen", label: "Für wen" },
  { to: "/ueber-uns", label: "Über uns" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent border-transparent text-[color:var(--ivory)]"
          : "backdrop-blur-md bg-background/85 border-b border-border/40 text-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Meerzeit Studio Logo"
            width={1024}
            height={1024}
            className={`h-10 md:h-12 w-auto transition ${transparent ? "brightness-0 invert" : ""}`}
          />
          <span className="sr-only">Meerzeit Studio</span>
        </Link>
        <div className="hidden lg:flex items-center gap-7 text-sm">
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
        <div className="flex items-center gap-2">
          <Link
            to="/buchen"
            className="hidden sm:inline-block text-sm px-5 py-2 rounded-full bg-[color:var(--terracotta)] text-[color:var(--ivory)] hover:bg-[color:var(--copper)] transition"
          >
            Buchen
          </Link>
          <button
            aria-label="Menü"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2"
          >
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md text-foreground">
          <div className="px-6 py-6 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="py-1">
                {l.label}
              </Link>
            ))}
            <Link to="/buchen" className="py-1 text-[color:var(--terracotta)]">
              Buchen
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="py-1">
              WhatsApp · {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="py-16 px-6 bg-[color:var(--graphite)] text-[color:var(--ivory)]/70 text-sm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Meerzeit Studio Logo"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-20 w-auto brightness-0 invert"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="uppercase tracking-widest text-xs text-[color:var(--ivory)]/50 mb-1">Entdecken</p>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[color:var(--ivory)] transition">
              {l.label}
            </Link>
          ))}
          <Link to="/buchen" className="hover:text-[color:var(--ivory)] transition">
            Buchen
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="uppercase tracking-widest text-xs text-[color:var(--ivory)]/50 mb-1">Kontakt</p>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-[color:var(--ivory)] transition">
            {CONTACT.email}
          </a>
          <a href={`tel:+${CONTACT.phoneE164}`} className="hover:text-[color:var(--ivory)] transition">
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--terracotta)] hover:text-[color:var(--ivory)] transition"
          >
            WhatsApp schreiben →
          </a>
        </div>
      </div>
      <p className="text-center mt-12 text-[color:var(--ivory)]/50">
        © {new Date().getFullYear()} Meerzeit Studio. Mit Liebe gemacht.
      </p>
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
