import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  FileText,
  GraduationCap,
  LayoutTemplate,
  Palette,
  Wrench,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos Gratuitos — Herramientas para tu hogar y aula | Family Help" },
      {
        name: "description",
        content:
          "Descarga herramientas prácticas e imprimibles para transformar la dinámica digital en casa o en el aula. Plantillas, guías, checklists y tests gratuitos.",
      },
      { property: "og:title", content: "Recursos Gratuitos — Family Help" },
      {
        property: "og:description",
        content:
          "Plantillas, guías, checklists y tests para aplicar hoy mismo el Método AURA®, HACKEA® y FARO®.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Recursos,
});

const RECURSOS_URL = "https://app.joinfamilyhelp.com/recursos";

const FILTROS = [
  { key: "todos", label: "Todos" },
  { key: "aura", label: "Para Padres (PUENTE®)" },
  { key: "decide", label: "Para Adultos (DECIDE®)" },
  { key: "faro", label: "Para Docentes (FARO®)" },
  { key: "imprimibles", label: "Plantillas e Imprimibles" },
] as const;

const RECURSOS = [
  {
    id: "acuerdo-familiar",
    title: "Acuerdo Familiar de Uso de Pantallas",
    description:
      "Un marco de compromisos mutuos (padres e hijos) para establecer reglas claras sin imponer ni pelear.",
    icon: FileText,
    cta: "Descargar Plantilla Gratis",
    category: "imprimibles",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    iconBg: "bg-sky-100 text-sky-700",
  },
  {
    id: "reloj-rutinas-aura",
    title: "Reloj de Rutinas y Zonas Libres de Pantalla (Método AURA®)",
    description:
      "Plantilla imprimible para niños de 3 a 11 años que ayuda a anticipar la desconexión mediante códigos visuales.",
    icon: Palette,
    cta: "Descargar Imprimible",
    category: "aura",
    color: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-100 text-violet-700",
  },
  {
    id: "checklist-entorno",
    title: "Configuración de Entorno Digital Seguro",
    description:
      "Paso a paso para ajustar la privacidad y límites de uso en routers, consolas y teléfonos sin usar software espía.",
    icon: Wrench,
    cta: "Descargar Checklist",
    category: "imprimibles",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "test-clima-digital",
    title: "Evaluación del Clima Digital Familiar",
    description:
      "Descubre en 3 minutos qué método necesita tu hogar para recuperar la paz y el foco.",
    icon: BarChart3,
    cta: "Realizar Test Gratis",
    category: "hackea",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    id: "protocolo-faro",
    title: "Protocolo de Atención y Foco en el Aula (Método FARO®)",
    description:
      "Herramienta en PDF para profesores sobre cómo gestionar el uso de dispositivos en horas de clase.",
    icon: GraduationCap,
    cta: "Descargar Guía para Profesores",
    category: "faro",
    color: "bg-rose-50 text-rose-700 border-rose-100",
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    id: "kit-micro-acciones",
    title: "Kit de Micro-Acciones para la Semana",
    description:
      "Siete tarjetas imprimibles con pequeñas decisiones diarias que reducen la tensión por pantallas en casa.",
    icon: LayoutTemplate,
    cta: "Descargar Kit Gratis",
    category: "imprimibles",
    color: "bg-teal-50 text-teal-700 border-teal-100",
    iconBg: "bg-teal-100 text-teal-700",
  },
  {
    id: "guia-hackea",
    title: "Guía Rápida: Haz que tu Teléfono Trabaje para Ti",
    description:
      "Ajustes concretos y retos de 7 días para adolescentes que quieren recuperar su tiempo sin que nadie les quite nada.",
    icon: BookOpen,
    cta: "Descargar Guía",
    category: "hackea",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-700",
  },
] as const;

function Recursos() {
  const [filtro, setFiltro] = useState<string>("todos");
  const [modal, setModal] = useState<null | (typeof RECURSOS)[number]>(null);

  const visibles = useMemo(
    () => RECURSOS.filter((r) => filtro === "todos" || r.category === filtro),
    [filtro]
  );

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modal]);

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-ink)]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-brand-cream)]">
        <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-[var(--color-brand-violet-soft)] opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-[var(--color-brand-moss-soft)] opacity-50 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-brand-clay)] hover:text-[var(--color-brand-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-sand)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-clay)]">
              <BookOpen className="h-3.5 w-3.5" />
              Centro de herramientas
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-brand-ink)] sm:text-5xl md:text-[3.25rem]">
              Herramientas prácticas e imprimibles para transformar tu hogar{" "}
              <span className="text-[var(--color-brand-violet)]">hoy mismo</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-brand-clay)]">
              Recursos gratuitos diseñados por especialistas para aplicar en casa o en el aula.
              Descárgalos al instante.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b border-[var(--color-brand-sand)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar recursos">
            {FILTROS.map((f) => {
              const active = filtro === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFiltro(f.key)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    active
                      ? "bg-[var(--color-brand-ink)] text-white shadow-md"
                      : "bg-[var(--color-brand-cream)] text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-sand)]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((r) => (
              <article
                key={r.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${r.color.split(" ")[2]}`}
              >
                {/* Miniatura / vista previa */}
                <div className={`relative aspect-[4/3] overflow-hidden ${r.color.split(" ")[0]}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`rounded-2xl border-2 border-dashed p-6 shadow-sm ${r.iconBg}`}>
                      <r.icon className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="absolute inset-x-4 top-4 space-y-1.5 opacity-60">
                    <div className={`h-1.5 w-3/4 rounded ${r.iconBg.replace("text-", "bg-")}`} />
                    <div className={`h-1.5 w-1/2 rounded ${r.iconBg.replace("text-", "bg-")}`} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border bg-white/90 p-3 backdrop-blur">
                    <p className="truncate text-xs font-bold text-[var(--color-brand-ink)]">{r.title}</p>
                    <p className="mt-1 h-0 w-full" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className={`flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${r.iconBg}`}>
                    <r.icon className="h-3 w-3" />
                    {FILTROS.find((f) => f.key === r.category)?.label ?? "Recurso"}
                  </div>
                  <h2 className="mt-4 text-lg font-bold leading-snug text-[var(--color-brand-ink)]">
                    {r.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                    {r.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setModal(r)}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-brand-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-indigo)]"
                  >
                    {r.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {visibles.length === 0 ? (
            <p className="mt-12 text-center text-sm text-[var(--color-brand-clay)]">
              No hay recursos en esta categoría todavía.
            </p>
          ) : null}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--color-brand-ink)]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Necesitas una herramienta a la medida de tu familia o institución?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Diseñamos recursos, talleres y acompañamientos personalizados según el método que mejor se ajuste a tu situación.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/charlas-y-talleres"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-brand-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-cream)]"
            >
              Ver Charlas y Talleres
            </Link>
            <Link
              to="/acompanamiento-profesional"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Acompañamiento Profesional
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {modal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-[var(--color-brand-clay)] transition-colors hover:bg-[var(--color-brand-sand)] hover:text-[var(--color-brand-ink)]"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${modal.iconBg}`}>
              <modal.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-brand-ink)]">{modal.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-clay)]">
              {modal.description}
            </p>

            <DownloadForm recurso={modal} onClose={() => setModal(null)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DownloadForm({
  recurso,
  onClose,
}: {
  recurso: (typeof RECURSOS)[number];
  onClose: () => void;
}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || nombre.trim().length < 2) {
      setError("Por favor ingresa tu nombre.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setError("Por favor ingresa un correo válido.");
      return;
    }
    setError(null);

    const url = new URL(RECURSOS_URL);
    url.searchParams.set("recurso", recurso.id);
    url.searchParams.set("nombre", nombre.trim());
    url.searchParams.set("email", email.trim());

    window.open(url.toString(), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-clay)]">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] px-4 py-3 text-sm text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[var(--color-brand-clay)]/60 focus:border-[var(--color-brand-ink)] focus:ring-2 focus:ring-[var(--color-brand-ink)]/10"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-clay)]">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] px-4 py-3 text-sm text-[var(--color-brand-ink)] outline-none transition-colors placeholder:text-[var(--color-brand-clay)]/60 focus:border-[var(--color-brand-ink)] focus:ring-2 focus:ring-[var(--color-brand-ink)]/10"
        />
      </div>

      {error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{error}</p>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-brand-ink)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-indigo)]"
      >
        Obtener Recurso en mi Correo
      </button>

      <p className="text-center text-xs leading-relaxed text-[var(--color-brand-clay)]">
        Cero spam. Solo herramientas útiles para tu familia.
      </p>
    </form>
  );
}
