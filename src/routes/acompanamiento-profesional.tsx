import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Globe,
  HeartHandshake,
  Landmark,
  Lock,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { guardarContacto } from "@/lib/contactos";




export const Route = createFileRoute("/acompanamiento-profesional")({
  head: () => ({
    meta: [
      {
        title:
          "Acompañamiento Profesional — Orientación, Psicología, Trabajo Social y Psiquiatría | Family Help",
      },
      {
        name: "description",
        content:
          "Reserva sesiones individuales o institucionales con el equipo interdisciplinario de Family Help: orientación familiar, psicología, trabajo social, psiquiatría y comités de convivencia. Sin juicios, con enfoque práctico.",
      },
      {
        property: "og:title",
        content: "Acompañamiento Profesional | Family Help",
      },
      {
        property: "og:description",
        content:
          "Sesiones individuales o institucionales con nuestro equipo interdisciplinario. Sin juicios, con enfoque práctico y centrado en la persona.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcompanamientoPage,
});

type Servicio = {
  id: string;
  titulo: string;
  foco: string;
  cta: string;
  icono: typeof HeartHandshake;
  descripcion: string;
  paraQuien: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    id: "orientacion-familiar",
    titulo: "Orientación Familiar",
    foco: "Mediación en el hogar, acuerdos de convivencia y pautas de crianza.",
    cta: "Agendar Orientación",
    icono: HeartHandshake,
    descripcion:
      "Un espacio guiado para ordenar la dinámica de la casa: acuerdos claros, comunicación sin gritos y pautas de crianza que sí se sostienen en el tiempo.",
    paraQuien: [
      "Parejas y cuidadores que sienten que todo termina en discusión",
      "Familias que necesitan acuerdos de convivencia realistas",
      "Padres que buscan pautas concretas, no teoría",
    ],
  },
  {
    id: "psicologia",
    titulo: "Psicología",
    foco: "Gestión emocional, regulación conductual y bienestar digital individual o familiar.",
    cta: "Agendar Sesión",
    icono: Users,
    descripcion:
      "Acompañamiento terapéutico individual o familiar para trabajar la regulación emocional, la ansiedad y la relación con la tecnología desde la evidencia.",
    paraQuien: [
      "Niños, adolescentes y adultos con malestar emocional",
      "Personas que sienten que la pantalla les gana la batalla",
      "Familias que quieren acompañar un proceso juntos",
    ],
  },
  {
    id: "trabajo-social",
    titulo: "Trabajo Social",
    foco: "Intervención sociofamiliar, redes de apoyo y entornos comunitarios.",
    cta: "Agendar Sesión",
    icono: Globe,
    descripcion:
      "Miramos más allá del consultorio: activamos redes de apoyo, articulamos recursos del entorno y acompañamos a la familia en su contexto real.",
    paraQuien: [
      "Familias en situaciones de vulnerabilidad o transición",
      "Casos que requieren articulación con instituciones",
      "Comunidades que necesitan fortalecer sus redes",
    ],
  },
  {
    id: "psiquiatria",
    titulo: "Psiquiatría",
    foco: "Valoración médica especializada y salud mental integral.",
    cta: "Agendar Consulta",
    icono: Stethoscope,
    descripcion:
      "Valoración médica especializada para niños, adolescentes y adultos, con un enfoque integral que combina la evidencia clínica con la escucha humana.",
    paraQuien: [
      "Quienes necesitan diagnóstico o seguimiento médico",
      "Casos de salud mental que requieren manejo farmacológico",
      "Segundas opiniones con enfoque integral",
    ],
  },
  {
    id: "comites-instituciones",
    titulo: "Comités e Instituciones",
    foco:
      "Comités internos interdisciplinarios y/o acompañamiento a comités escolares de convivencia, equipos docentes y casos complejos.",
    cta: "Solicitar Acompañamiento",
    icono: Landmark,
    descripcion:
      "Acompañamos a colegios, organizaciones y equipos profesionales: comités de convivencia escolar, análisis interdisciplinario de casos y formación de equipos.",
    paraQuien: [
      "Colegios con comités de convivencia activos",
      "Equipos docentes frente a casos complejos",
      "Instituciones que buscan protocolos con respaldo técnico",
    ],
  },
];

type Reserva = {
  servicio: Servicio;
  modalidad: "online" | "presencial";
  fecha: string;
  hora: string;
  nombre: string;
  contacto: string;
  motivo: string;
};

function ReservaModal({
  servicio,
  onClose,
}: {
  servicio: Servicio;
  onClose: () => void;
}) {
  const [reserva, setReserva] = useState<Reserva>({
    servicio,
    modalidad: "online",
    fecha: "",
    hora: "",
    nombre: "",
    contacto: "",
    motivo: "",
  });
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof Reserva>(key: K, value: Reserva[K]) =>
    setReserva((prev) => ({ ...prev, [key]: value }));

  const confirmar = (e: React.FormEvent) => {
    e.preventDefault();
    const nombre = reserva.nombre.trim();
    const contacto = reserva.contacto.trim();
    if (!reserva.fecha || !reserva.hora) {
      setError("Elige una fecha y una hora para tu sesión.");
      return;
    }
    if (nombre.length < 2 || nombre.length > 100) {
      setError("Escribe tu nombre completo.");
      return;
    }
    if (contacto.length < 5 || contacto.length > 100) {
      setError("Escribe un correo o WhatsApp válido para confirmarte.");
      return;
    }
    if (reserva.motivo.trim().length > 1000) {
      setError("El motivo de consulta es demasiado largo (máx. 1000 caracteres).");
      return;
    }
    const message = [
      `Hola, quiero agendar una sesión de ${servicio.titulo}.`,
      `Modalidad: ${reserva.modalidad}.`,
      `Fecha: ${reserva.fecha} a las ${reserva.hora}.`,
      `Nombre: ${nombre}.`,
      `Contacto: ${contacto}.`,
      reserva.motivo.trim() && `Motivo: ${reserva.motivo.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    void guardarContacto({
      origen: "Acompañamiento profesional",
      nombre,
      correo: contacto.includes("@") ? contacto : null,
      telefono: contacto.includes("@") ? null : contacto,
      interes: `${servicio.titulo} · ${reserva.modalidad} · ${reserva.fecha} ${reserva.hora}`,
      mensaje: reserva.motivo,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    onClose();

  };

  const hoy = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-brand-ink)]/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Reservar ${servicio.titulo}`}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-[var(--color-brand-cream)] p-6 shadow-2xl sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-terracotta)]">
              Reserva tu sesión
            </p>
            <h3 className="mt-1 text-xl font-bold text-[var(--color-brand-ink)]">
              {servicio.titulo}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-2 text-[var(--color-brand-clay)] transition-colors hover:bg-[var(--color-brand-sand)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={confirmar} className="mt-6 space-y-5">
          {/* Modalidad */}
          <fieldset>
            <legend className="text-sm font-semibold text-[var(--color-brand-ink)]">
              Modalidad
            </legend>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {(
                [
                  { id: "online", label: "Online", icono: Globe },
                  { id: "presencial", label: "Presencial", icono: MapPin },
                ] as const
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => update("modalidad", m.id)}
                  className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    reserva.modalidad === m.id
                      ? "border-[var(--color-brand-terracotta)] bg-[var(--color-brand-terracotta)] text-white shadow-md"
                      : "border-[var(--color-brand-sand)] bg-white text-[var(--color-brand-clay)] hover:border-[var(--color-brand-terracotta-soft)]"
                  }`}
                  aria-pressed={reserva.modalidad === m.id}
                >
                  <m.icono className="h-4 w-4" />
                  {m.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Fecha y hora */}
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Fecha
              </span>
              <input
                type="date"
                required
                min={hoy}
                value={reserva.fecha}
                onChange={(e) => update("fecha", e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Hora
              </span>
              <input
                type="time"
                required
                min="07:00"
                max="20:00"
                value={reserva.hora}
                onChange={(e) => update("hora", e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
              />
            </label>
          </div>

          {/* Datos */}
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Nombre completo
              </span>
              <input
                type="text"
                required
                maxLength={100}
                value={reserva.nombre}
                onChange={(e) => update("nombre", e.target.value)}
                placeholder="Tu nombre"
                className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Correo o WhatsApp
              </span>
              <input
                type="text"
                required
                maxLength={100}
                value={reserva.contacto}
                onChange={(e) => update("contacto", e.target.value)}
                placeholder="Para confirmarte la reserva"
                className="mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Motivo de consulta{" "}
                <span className="font-normal text-[var(--color-brand-clay)]/70">
                  (breve, es confidencial)
                </span>
              </span>
              <textarea
                rows={3}
                maxLength={1000}
                value={reserva.motivo}
                onChange={(e) => update("motivo", e.target.value)}
                placeholder="Cuéntanos en una o dos líneas qué te trae…"
                className="mt-1.5 w-full resize-none rounded-xl border border-[var(--color-brand-sand)] bg-white px-3 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
              />
            </label>
          </div>

          {error ? (
            <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-lg"
          >
            <CalendarCheck className="h-5 w-5" />
            Confirmar reserva
          </button>
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[var(--color-brand-clay)]/80">
            <Lock className="h-3.5 w-3.5" />
            Tu información es confidencial y solo la usa el equipo profesional.
          </p>
        </form>
      </div>
    </div>
  );
}

function AcompanamientoPage() {
  const [seleccionado, setSeleccionado] = useState<Servicio | null>(null);

  return (
    <div className="bg-[var(--color-brand-cream)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--color-brand-terracotta-soft)]/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--color-brand-violet-soft)]/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
            Equipo interdisciplinario · Online y presencial
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-brand-ink)] sm:text-5xl">
            Acompañamiento especializado cuando necesitas dar un paso más allá.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-brand-clay)] sm:text-lg">
            Reserva sesiones individuales o institucionales con nuestro equipo
            interdisciplinario. Sin juicios, con enfoque práctico y centrado en
            la persona.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[var(--color-brand-clay)]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--color-brand-terracotta)]" />
              Confidencial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClipboardList className="h-4 w-4 text-[var(--color-brand-terracotta)]" />
              Rigor técnico
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HeartHandshake className="h-4 w-4 text-[var(--color-brand-terracotta)]" />
              Calidez humana
            </span>
          </div>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-mist)] text-[var(--color-brand-terracotta)] transition-colors group-hover:bg-[var(--color-brand-terracotta)] group-hover:text-white">
                <s.icono className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-[var(--color-brand-ink)]">
                {s.titulo}
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-brand-terracotta)]">
                {s.foco}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                {s.descripcion}
              </p>
              <ul className="mt-4 space-y-2">
                {s.paraQuien.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-brand-clay)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSeleccionado(s)}
                className="mt-auto inline-flex items-center justify-center gap-1.5 self-stretch rounded-full bg-[var(--color-brand-terracotta)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--color-brand-clay)] hover:shadow-md"
              >
                {s.cta}
                <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>

        {/* Bloque de confianza */}
        <div className="mt-16 grid gap-6 rounded-3xl bg-[var(--color-brand-clay)] p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              ¿No sabes qué especialidad necesitas?
            </h2>
            <p className="mt-3 leading-relaxed text-white/80">
              Escríbenos y el equipo te orienta hacia el profesional adecuado,
              sin costo y sin compromiso. A veces el primer paso es solo
              contarnos qué está pasando.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <button
              type="button"
              onClick={() => setSeleccionado(SERVICIOS[0])}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-brand-clay)] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Programar sesión
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {seleccionado ? (
        <ReservaModal
          servicio={seleccionado}
          onClose={() => setSeleccionado(null)}
        />
      ) : null}
    </div>
  );
}
