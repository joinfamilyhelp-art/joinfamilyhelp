import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", to: "/" as const },
  { label: "Productos", to: "/" as const, hash: "misiones" },
  { label: "Plataforma", to: "/" as const, hash: "plataforma" },
  { label: "Comunidad", to: "/" as const, hash: "comunidad" },
  { label: "Recursos", to: "/" as const, hash: "recursos" },
  { label: "Nosotros", to: "/" as const, hash: "nosotros" },
];

// External destinations — sitio informativo, sin auth local.
const LOGIN_URL = "https://app.familyhelp.com/login";
const BRUJULA_URL = "https://app.familyhelp.com/brujula";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-950 text-white">
            <Heart className="h-4 w-4 fill-rose-400 text-rose-400" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-wide">
            Family <span className="italic text-indigo-700">Help</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                hash={link.hash}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-slate-900" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LOGIN_URL}
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
          >
            Iniciar sesión
          </a>
          <a
            href={BRUJULA_URL}
            className="inline-flex items-center rounded-full bg-indigo-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
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
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <a
                href={LOGIN_URL}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                Iniciar sesión
              </a>
              <a
                href={BRUJULA_URL}
                className="rounded-full bg-indigo-950 px-4 py-2 text-center text-base font-medium text-white"
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
