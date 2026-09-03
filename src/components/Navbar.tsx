import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAsset from "@/assets/family-help-logo.png.asset.json";

const NAV_LINKS = [
  { label: "Métodos", to: "/" as const, hash: "metodos" },
  { label: "Cómo funciona", to: "/" as const, hash: "proceso" },
  { label: "Historias", to: "/" as const, hash: "historias" },
  { label: "Preguntas", to: "/" as const, hash: "faqs" },
  { label: "Nosotros", to: "/nosotros" as const, hash: undefined },
];

const ACOMPANAMIENTO_LINKS = [
  { label: "Orientación Familiar", to: "/acompanamiento-profesional" as const },
  { label: "Psicología", to: "/acompanamiento-profesional" as const },
  { label: "Trabajo Social", to: "/acompanamiento-profesional" as const },
  { label: "Psiquiatría", to: "/acompanamiento-profesional" as const },
  {
    label: "Comités e Instituciones",
    to: "/acompanamiento-profesional" as const,
  },
];

export const MISION_URL = "https://app.joinfamilyhelp.com/mision-conexion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!dropOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [dropOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)]/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Family Help"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
          />
          <span className="flex items-baseline gap-1 leading-none">
            <span
              className="text-base font-semibold tracking-[0.14em] text-[var(--color-brand-ink)]"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              FAMILY
            </span>
            <span
              className="text-2xl text-[var(--color-brand-violet)]"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Help
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                hash={link.hash}
                className="text-sm font-medium text-[var(--color-brand-clay)] transition-colors hover:text-[var(--color-brand-ink)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative" ref={dropRef}>
            <button
              type="button"
              onClick={() => setDropOpen((v) => !v)}
              aria-expanded={dropOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-clay)] transition-colors hover:text-[var(--color-brand-ink)]"
            >
              Acompañamiento Profesional
              <ChevronDown
                className={`h-4 w-4 transition-transform ${dropOpen ? "rotate-180" : ""}`}
              />
            </button>
            {dropOpen ? (
              <ul className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] p-2 shadow-xl">
                {ACOMPANAMIENTO_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => setDropOpen(false)}
                      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-brand-clay)] transition-colors hover:bg-[var(--color-brand-sand)] hover:text-[var(--color-brand-ink)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          {NAV_LINKS.slice(2).map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                hash={link.hash}
                className="text-sm font-medium text-[var(--color-brand-clay)] transition-colors hover:text-[var(--color-brand-ink)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/mision-conexion"
            className="inline-flex items-center rounded-full bg-[var(--color-brand-terracotta)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-md"
          >
            Únete a la Misión
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-brand-ink)] lg:hidden"
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-sand)]"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setMobileDropOpen((v) => !v)}
              aria-expanded={mobileDropOpen}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-sand)]"
            >
              Acompañamiento Profesional
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileDropOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileDropOpen ? (
              <div className="space-y-1 pb-1 pl-4">
                {ACOMPANAMIENTO_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-sand)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
            <div className="mt-3 border-t border-[var(--color-brand-sand)] pt-3">
              <Link
                to="/mision-conexion"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[var(--color-brand-terracotta)] px-4 py-2.5 text-center text-base font-semibold text-white"
              >
                Únete a la Misión
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
