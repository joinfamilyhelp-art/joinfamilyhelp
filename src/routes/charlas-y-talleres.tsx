import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  Check,
  ChevronRight,
  GraduationCap,
  Presentation,
  Send,
  Users,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { guardarContacto } from "@/lib/contactos";
import dianaCharlaAsset from "@/assets/diana-charla.jpeg.asset.json";
import auditorioRealAsset from "@/assets/auditorio-real.jpeg.asset.json";




export const Route = createFileRoute("/charlas-y-talleres")({
  head: () => ({
    meta: [
      {
        title:
          "Charlas y Talleres para Colegios y Empresas | Family Help",
      },
      {
        name: "description",
        content:
          "Conferencias y talleres vivenciales sobre cultura digital: escuelas de padres, capacitación docente con Método FARO®, charlas para adolescentes con Método HACKEA® y bienestar digital para empresas.",
      },
      {
        property: "og:title",
        content: "Charlas y Talleres | Family Help",
      },
      {
        property: "og:description",
        content:
          "Experiencias prácticas y sin juicios para colegios, empresas, universidades y organizaciones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CharlasPage,
});

const FORMATOS = [
  {
    id: "padres",
    audiencia: "Para Escuelas de Padres",
    titulo: "Conexión y Convivencia en la Era Digital",
    enfoque:
      "Taller práctico para rediseñar el entorno del hogar, establecer acuerdos sin peleas y acompañar a los hijos sin caer en el rol de policía.",
    icono: Users,
    puntos: [
      "Acuerdos de convivencia digital que sí se cumplen",
      "Alternativas reales a la prohibición y al castigo",
      "Dinámicas vivenciales, no charlas magistrales",
    ],
  },
  {
    id: "docentes",
    audiencia: "Para Equipos Docentes y Educadores",
    titulo: "Captar la Atención en Aulas Distraídas (Método FARO®)",
    enfoque:
      "Herramientas pedagógicas para gestionar el clima de clase, diseñar el entorno de aprendizaje y manejar la competencia con los dispositivos.",
    icono: GraduationCap,
    puntos: [
      "Diseño del entorno de aula para el foco",
      "Gestión del clima de clase sin desgaste",
      "Protocolos claros frente a los dispositivos",
    ],
  },
  {
    id: "estudiantes",
    audiencia: "Para Estudiantes y Adolescentes",
    titulo: "Hackea el Algoritmo (Método HACKEA®)",
    enfoque:
      "Charla interactiva sobre el funcionamiento de las plataformas, recuperación del tiempo y desarrollo de autonomía crítica sin sermones moralistas.",
    icono: Presentation,
    puntos: [
      "Cómo las plataformas capturan la atención",
      "Recuperar el tiempo sin renunciar a la tecnología",
      "Autonomía crítica, no discursos de miedo",
    ],
  },
  {
    id: "empresas",
    audiencia: "Para Empresas y Equipos de Trabajo",
    titulo: "Bienestar Digital y Foco en el Trabajo",
    enfoque:
      "Conferencias sobre higiene digital, desconexión laboral, reducción del burnout y gestión de la atención en entornos de trabajo híbridos.",
    icono: Briefcase,
    puntos: [
      "Higiene digital y desconexión laboral real",
      "Reducción del burnout por hiperconexión",
      "Gestión de la atención en equipos híbridos",
    ],
  },
];

const AUDIENCIAS = [
  "Padres y cuidadores",
  "Docentes y educadores",
  "Estudiantes y adolescentes",
  "Empresa / equipo de trabajo",
];

function FormularioPropuesta() {
  const [form, setForm] = useState({
    institucion: "",
    contacto: "",
    correo: "",
    telefono: "",
    audiencia: AUDIENCIAS[0],
    asistentes: "",
    mensaje: "",
  });
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.institucion.trim().length < 2 || form.institucion.length > 150) {
      setError("Escribe el nombre de la institución o empresa.");
      return;
    }
    if (form.contacto.trim().length < 2 || form.contacto.length > 100) {
      setError("Escribe el nombre de la persona de contacto.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      setError("Escribe un correo válido.");
      return;
    }
    if (form.telefono.trim().length < 7 || form.telefono.length > 25) {
      setError("Escribe un teléfono válido.");
      return;
    }
    if (form.mensaje.length > 1000) {
      setError("El mensaje es demasiado largo (máx. 1000 caracteres).");
      return;
    }
    const message = [
      "Hola, quiero solicitar una propuesta de Charlas y Talleres de Family Help.",
      `Institución / Empresa: ${form.institucion.trim()}.`,
      `Persona de contacto: ${form.contacto.trim()}.`,
      `Correo: ${form.correo.trim()}.`,
      `Teléfono: ${form.telefono.trim()}.`,
      `Audiencia: ${form.audiencia}.`,
      form.asistentes.trim() && `Asistentes estimados: ${form.asistentes.trim()}.`,
      form.mensaje.trim() && `Detalles: ${form.mensaje.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    void guardarContacto({
      origen: "Charlas y talleres",
      nombre: form.contacto,
      correo: form.correo,
      telefono: form.telefono,
      organizacion: form.institucion,
      audiencia: form.audiencia,
      asistentes: form.asistentes ? Number(form.asistentes) : null,
      mensaje: form.mensaje,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");

  };

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20";
  const labelCls = "text-sm font-semibold text-[var(--color-brand-ink)]";

  return (
    <form
      onSubmit={enviar}
      className="rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 shadow-sm sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Institución / Empresa</span>
          <input
            type="text"
            required
            maxLength={150}
            value={form.institucion}
            onChange={(e) => update("institucion", e.target.value)}
            placeholder="Colegio, universidad u organización"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Nombre del contacto</span>
          <input
            type="text"
            required
            maxLength={100}
            value={form.contacto}
            onChange={(e) => update("contacto", e.target.value)}
            placeholder="¿Con quién hablamos?"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Correo</span>
          <input
            type="email"
            required
            maxLength={150}
            value={form.correo}
            onChange={(e) => update("correo", e.target.value)}
            placeholder="correo@institucion.com"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Teléfono</span>
          <input
            type="tel"
            required
            maxLength={25}
            value={form.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            placeholder="+57 …"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className={labelCls}>Audiencia</span>
          <select
            value={form.audiencia}
            onChange={(e) => update("audiencia", e.target.value)}
            className={inputCls}
          >
            {AUDIENCIAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Asistentes estimados</span>
          <input
            type="number"
            min={1}
            max={10000}
            value={form.asistentes}
            onChange={(e) => update("asistentes", e.target.value)}
            placeholder="Ej. 80"
            className={inputCls}
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className={labelCls}>
          Mensaje / Fecha tentativa{" "}
          <span className="font-normal text-[var(--color-brand-clay)]/70">
            (cuéntanos qué necesitan)
          </span>
        </span>
        <textarea
          rows={4}
          maxLength={1000}
          value={form.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
          placeholder="Ej. Queremos un taller para padres de primaria en octubre…"
          className={`${inputCls} resize-none`}
        />
      </label>

      {error ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-lg"
      >
        <Send className="h-5 w-5" />
        Enviar Solicitud de Propuesta
      </button>
      <p className="mt-3 text-center text-xs text-[var(--color-brand-clay)]/80">
        Respondemos en menos de 48 horas con una propuesta a la medida.
      </p>
    </form>
  );
}

function CharlasPage() {
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
          className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[var(--color-brand-violet-soft)]/30 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
              Colegios · Empresas · Universidades · Organizaciones
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-brand-ink)] sm:text-5xl">
              Experiencias y conferencias que transforman la cultura digital de
              tu comunidad.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-brand-clay)] sm:text-lg">
              Diseñamos espacios prácticos, vivenciales y sin juzgar para
              colegios, empresas, universidades y organizaciones.
            </p>
            <div className="mt-8">
              <a
                href="#solicitar-propuesta"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-lg"
              >
                Solicitar Propuesta para mi Institución
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={dianaCharlaAsset.url}
              alt="Diana facilitando una charla de Family Help ante un grupo de participantes"
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src={auditorioRealAsset.url}
              alt="Participantes de un taller de Family Help desarrollando una actividad grupal"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute -bottom-8 -left-6 hidden w-44 rotate-[-4deg] rounded-2xl border-4 border-white object-cover shadow-lg sm:block lg:w-56"
            />
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
            Formatos por audiencia
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[var(--color-brand-ink)] sm:text-4xl">
            Un espacio diseñado para cada grupo
          </h2>
          <p className="mt-4 text-[var(--color-brand-clay)]">
            Facilitación basada en el diálogo: la gente no viene a escuchar un
            sermón, viene a construir sus propias decisiones.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FORMATOS.map((f) => (
            <article
              key={f.id}
              className="group rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-mist)] text-[var(--color-brand-terracotta)] transition-colors group-hover:bg-[var(--color-brand-terracotta)] group-hover:text-white">
                  <f.icono className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand-terracotta)]">
                  {f.audiencia}
                </p>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-snug text-[var(--color-brand-ink)]">
                {f.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                {f.enfoque}
              </p>
              <ul className="mt-4 space-y-2">
                {f.puntos.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[var(--color-brand-clay)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section
        id="solicitar-propuesta"
        className="scroll-mt-24 bg-[var(--color-brand-mist)]/60 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
              Cotización institucional
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[var(--color-brand-ink)] sm:text-3xl">
              Cuéntanos qué necesita tu comunidad
            </h2>
            <p className="mt-3 text-[var(--color-brand-clay)]">
              Diligencia el formulario y te enviamos una propuesta con
              metodología, duración y logística a la medida.
            </p>
          </div>
          <div className="mt-10">
            <FormularioPropuesta />
          </div>
        </div>
      </section>
    </div>
  );
}
