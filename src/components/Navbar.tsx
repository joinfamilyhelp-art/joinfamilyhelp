import { Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAsset from "@/assets/family-help-logo.png.asset.json";

const NAV_LINKS = [
  { label: "Inicio", to: "/" as const, hash: undefined },
  { label: "Plataforma", to: "/plataforma" as const, hash: undefined },
  { label: "Comunidad", to: "/comunidad" as const, hash: undefined },
  { label: "Recursos", to: "/recursos" as const, hash: undefined },
  { label: "Nosotros", to: "/nosotros" as const, hash: undefined },
];

const MISIONES = [
  { label: "Misión Familias", sub: "Método PUENTE", to: "/mision-familias" as const },
  { label: "Misión Docentes", sub: "Método FARO", to: "/mision-docentes" as const },
  { label: "Misión Jóvenes", sub: "Método DECIDE", to: "/mision-jovenes" as const },
  { label: "Misión Adultos", sub: "Método DECIDE", to: "/mision-adultos" as const },
];

const LOGIN_URL = "https://app.joinfamilyhelp.com/login";
const BRUJULA_URL = "https://app.joinfamilyhelp.com/brujula";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[--color-brand-mist] bg-white/85 backdrop-blur">
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
              className="font-serif text-base font-semibold tracking-[0.14em] text-[--color-brand-ink]"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              FAMILY
            </span>
            <span
              className="text-2xl text-[--color-brand-violet]"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Help
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <Fragment key={link.label}>
              <li>
                <Link
                  to={link.to}
                  hash={link.hash}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-[--color-brand-ink]"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-[--color-brand-ink]" }}
                >
                  {link.label}
                </Link>
              </li>
              {i === 0 ? (
                <li className="group relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[--color-brand-ink]"
                  >
                    Misiones
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-[--color-brand-mist] bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {MISIONES.map((m) => (
                      <Link
                        key={m.to}
                        to={m.to}
                        className="block rounded-lg px-3 py-2 hover:bg-[--color-brand-mist]"
                      >
                        <p className="text-sm font-semibold text-[--color-brand-ink]">
                          {m.label}
                        </p>
                        <p className="text-xs text-slate-500">{m.sub}</p>
                      </Link>
                    ))}
                  </div>
                </li>
              ) : null}
            </Fragment>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-[--color-brand-ink]"
          >
            Iniciar sesión
          </a>
          <a
            href={BRUJULA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[--color-brand-ink] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[--color-brand-indigo] hover:shadow-md"
          >
            Acceder a BRÚJULA®
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[--color-brand-mist] bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-[--color-brand-mist]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[--color-brand-mist] pt-3">
              <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Misiones
              </p>
              {MISIONES.map((m) => (
                <Link
                  key={m.to}
                  to={m.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-[--color-brand-mist]"
                >
                  <span className="block text-sm font-semibold text-[--color-brand-ink]">
                    {m.label}
                  </span>
                  <span className="block text-xs text-slate-500">{m.sub}</span>
                </Link>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-[--color-brand-mist] pt-3">
              <a
                href={LOGIN_URL}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-[--color-brand-mist]"
              >
                Iniciar sesión
              </a>
              <a
                href={BRUJULA_URL}
                className="rounded-full bg-[--color-brand-ink] px-4 py-2 text-center text-base font-medium text-white"
              >
                Acceder a BRÚJULA®
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
