import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
const logoAsset = { url: "/family-help-logo.png" };
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WHATSAPP_CTA_URL = buildWhatsAppUrl(
  "Hola, quiero conocer más sobre Family Help.",
);

const PRODUCTOS = [

  { label: "Misión Familias", to: "/mision-familias" as const },
  { label: "Misión Docentes", to: "/mision-docentes" as const },
  { label: "Misión Adolescentes", to: "/mision-adolescentes" as const },
  { label: "Misión Adultos", to: "/mision-adultos" as const },
];

const ENLACES = [
  { label: "Plataforma BRÚJULA®", to: "/plataforma" as const },
  { label: "Comunidad", to: "/comunidad" as const },
  { label: "Recursos", to: "/recursos" as const },
  { label: "Nosotros", to: "/nosotros" as const },
];

const LEGAL = [
  { label: "Política de privacidad", to: "/privacidad" as const },
  { label: "Términos y condiciones", to: "/terminos" as const },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-brand-mist)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logoAsset.url}
                alt="Family Help"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                loading="lazy"
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
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              Tecnología al servicio del desarrollo humano. Diseñamos capacidades para que
              decidas tu propio camino.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-ink)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-brand-indigo)]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Escríbenos por WhatsApp
              </a>
            </div>

          </div>

          {/* Productos */}
          <FooterColumn title="Productos" links={PRODUCTOS} />

          {/* Enlaces */}
          <FooterColumn title="Enlaces" links={ENLACES} />

          {/* Legal */}
          <FooterColumn title="Legal" links={LEGAL} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-brand-mist)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Family Help®. Todos los derechos reservados.
          </p>
          <p
            className="text-base text-[var(--color-brand-violet)]"
            style={{ fontFamily: "Satisfy, cursive" }}
          >
            Desarrollamos capacidades para que decidas tu propio camino.
          </p>
        </div>

        {/* Cintillo de descargo Hotmart */}
        <p className="mt-8 text-xs text-slate-400 leading-relaxed">
          Family Help y BRÚJULA® son productos independientes. Hotmart es la plataforma
          encargada de la distribución y procesamiento de los pagos de nuestras misiones
          digitales. La compra y uso de estas herramientas no garantizan resultados mágicos;
          son sistemas de acompañamiento diario diseñados para el desarrollo de la autonomía
          personal.
        </p>
      </div>
    </footer>
  );
}

type ColLink = { label: string; to: string };

function FooterColumn({ title, links }: { title: string; links: ColLink[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-ink)]">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-slate-600 transition-colors hover:text-[var(--color-brand-ink)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
