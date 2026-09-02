import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Compass,
  Ear,
  Eye,
  GraduationCap,
  Heart,
  MessageCircle,
  PenLine,
  Quote,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroConexion from "@/assets/hero-conexion.jpg";
import conversacion from "@/assets/conversacion-adolescente.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Family Help — Conexión en casa y en el aula sin peleas ni prohibiciones" },
      {
        name: "description",
        content:
          "Rediseña el entorno digital de tu familia o tu aula con micro-acciones diarias y métodos probados: AURA®, HACKEA®, DECIDE®, PUENTE® y FARO®. Sin culpa, sin prohibiciones inútiles.",
      },
      {
        property: "og:title",
        content: "Family Help — Conexión en casa y en el aula sin peleas ni prohibiciones",
      },
      {
        property: "og:description",
        content:
          "Micro-acciones diarias y metodologías probadas para recuperar la conexión, la atención y la paz en casa y en el aula.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const METODOS = [
  {
    key: "aura",
    icon: Baby,
    audiencia: "Niños 3-11",
    metodo: "AURA®",
    eje: "Calma",
    promesa: "Reduce las rabietas por pantallas sin peleas ni gritos.",
    para: "Padres de niños pequeños que necesitan anticipación, juego real y entornos de calma.",
    bullets: [
      "Avisos visuales y rutinas que tu hijo puede predecir.",
      "Alternativas de juego real antes de pedir que apague.",
      "Zonas y tiempos de calma donde las pantallas simplemente no están.",
    ],
    to: "/mision-ninos" as const,
  },
  {
    key: "hackea",
    icon: Sparkles,
    audiencia: "Adolescentes",
    metodo: "HACKEA®",
    eje: "Autonomía",
    promesa: "Haz que tu teléfono trabaje para ti, no al revés.",
    para: "Chicas y chicos que quieren su tiempo de vuelta sin que nadie les quite nada.",
    bullets: [
      "Cómo está diseñada tu app por dentro y por qué es tan difícil soltarla.",
      "Ajustes concretos para recuperar horas cada semana.",
      "Retos de 7 días para probar, medir y decidir por ti mismo.",
    ],
    to: "/mision-adolescentes" as const,
  },
  {
    key: "decide",
    icon: UserRound,
    audiencia: "Adultos",
    metodo: "DECIDE®",
    eje: "Bienestar digital",
    promesa: "Recupera tu atención y tu tiempo en el día a día.",
    para: "Personas que terminan el día cansadas sin saber en qué se les fue.",
    bullets: [
      "Microfricciones intencionales que cortan el piloto automático.",
      "Un ritual de cierre de jornada de 5 minutos.",
      "Decisiones pequeñas y sostenibles, no promesas de fuerza de voluntad.",
    ],
    to: "/mision-adultos" as const,
  },
  {
    key: "puente",
    icon: Users,
    audiencia: "Familias",
    metodo: "PUENTE®",
    eje: "Conexión",
    promesa: "Conecta con tus hijos sin ser el policía de la casa.",
    para: "Madres y padres que discuten cada día por las pantallas y quieren volver a hablar.",
    bullets: [
      "Acuerdos que se sostienen porque los construyen todos, no solo tú.",
      "Frases listas para los momentos difíciles (la hora de la cena, el «cinco minutos más»).",
      "Rutinas de reconexión de 10 minutos que caben en un día real.",
    ],
    to: "/mision-familias" as const,
  },
  {
    key: "faro",
    icon: GraduationCap,
    audiencia: "Docentes",
    metodo: "FARO®",
    eje: "Atención",
    promesa: "Enseña con foco y sin frustración en el aula.",
    para: "Equipos docentes que compiten cada clase contra una pantalla.",
    bullets: [
      "Protocolos de inicio de clase que recuperan la atención en 3 minutos.",
      "Acuerdos de aula claros, sin sanciones ni desgaste.",
      "Lenguaje común con las familias para no remar en direcciones opuestas.",
    ],
    to: "/mision-docentes" as const,
  },
];

const PROCESO = [
  {
    icon: Eye,
    step: "01",
    title: "Comprender",
    text: "Entender cómo está diseñada la atención hoy. Sin alarmismo y sin culpa: primero se ve, después se decide.",
  },
  {
    icon: Ear,
    step: "02",
    title: "Escuchar",
    text: "Abrir una conversación real en casa o en el aula, donde nadie quede en el papel de acusado.",
  },
  {
    icon: PenLine,
    step: "03",
    title: "Diseñar",
    text: "Cambiar el entorno, no a la persona: pequeñas fricciones y acuerdos que hacen fácil lo importante.",
  },
  {
    icon: Compass,
    step: "04",
    title: "Elegir",
    text: "Decidir con criterio propio, una micro-acción a la vez, hasta que deja de ser esfuerzo y se vuelve hábito.",
  },
];

const CONTRASTE = [
  {
    no: "Prohibir el móvil y esperar que funcione",
    si: "Rediseñar el entorno para que la mejor opción sea la más fácil",
  },
  {
    no: "Cursos largos que nadie termina",
    si: "Misiones de 3 días con acciones específicas para el día a día",
  },
  {
    no: "Reglas impuestas desde arriba",
    si: "Acuerdos construidos y firmados en familia",
  },
  {
    no: "Discursos de miedo y culpa",
    si: "Datos claros, criterio propio y práctica diaria",
  },
];

const TESTIMONIOS = [
  {
    quote:
      "Pasamos de discutir cada noche a tener una rutina de cierre. Mi hijo la propuso él mismo el cuarto día.",
    name: "Carolina M.",
    role: "Madre de dos, Misión Familias",
    initials: "CM",
    tone: "bg-[var(--color-brand-terracotta-soft)] text-[var(--color-brand-clay)]",
  },
  {
    quote:
      "Los primeros tres minutos de clase cambiaron todo. Ya no empiezo peleando por la atención.",
    name: "Javier R.",
    role: "Docente de secundaria, Misión Docentes",
    initials: "JR",
    tone: "bg-[var(--color-brand-moss-soft)] text-[var(--color-brand-moss)]",
  },
  {
    quote:
      "Nadie me quitó el teléfono. Entendí cómo funcionaba y recuperé como dos horas al día.",
    name: "Martina, 15",
    role: "Misión Adolescentes",
    initials: "MA",
    tone: "bg-[var(--color-brand-sand)] text-[var(--color-brand-clay)]",
  },
  {
    quote:
      "Lo que más me sirvió fue lo pequeño: un ritual de cinco minutos que sí puedo sostener.",
    name: "Andrés P.",
    role: "Misión Adultos",
    initials: "AP",
    tone: "bg-[var(--color-brand-mist)] text-[var(--color-brand-indigo)]",
  },
  {
    quote:
      "Dejé de sentirme culpable. Eso solo ya cambió la forma en que hablo con mis hijas.",
    name: "Lucía G.",
    role: "Madre, Misión Familias",
    initials: "LG",
    tone: "bg-[var(--color-brand-terracotta-soft)] text-[var(--color-brand-clay)]",
  },
  {
    quote:
      "Por fin familias y colegio hablamos el mismo idioma. Los acuerdos se sostienen.",
    name: "Equipo Colegio Aurora",
    role: "Coordinación de convivencia",
    initials: "CA",
    tone: "bg-[var(--color-brand-moss-soft)] text-[var(--color-brand-moss)]",
  },
];

const FAQS = [
  {
    q: "No tengo tiempo para cursos largos.",
    a: "No hay cursos largos. Son misiones prácticas de 3 días por WhatsApp, con acciones específicas para el día a día. Si tienes un par de minutos mientras preparas el café, tienes tiempo.",
  },
  {
    q: "Ya intenté quitarles el celular y terminamos peleando.",
    a: "No prohibimos ni quitamos pantallas: rediseñamos el entorno. Cambiamos dónde se carga el teléfono, cómo empieza la cena y qué se dice en el momento difícil. El conflicto baja porque desaparece el pulso de poder.",
  },
  {
    q: "¿Esto sirve si mis hijos ya son adolescentes?",
    a: "Sí, y es cuando más importa. Con adolescentes no funciona la regla, funciona el criterio: por eso la Misión Adolescentes (Método HACKEA®) les habla a ellos directamente, sin sermones.",
  },
  {
    q: "¿Y si mi pareja o el colegio no se suman?",
    a: "Puedes empezar sola o solo. Las micro-acciones funcionan aunque solo cambie una persona del sistema; después es mucho más fácil invitar al resto con resultados sobre la mesa.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Todo está explicado en lenguaje cotidiano, paso a paso, y cada acción se puede hacer con el teléfono que ya tienes.",
  },
];

function Home() {
  const [activo, setActivo] = useState(METODOS[0]!.key);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(0);
  const metodo = METODOS.find((m) => m.key === activo) ?? METODOS[0]!;
  const MetodoIcon = metodo.icon;

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-ink)]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-[var(--color-brand-terracotta-soft)] opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute top-32 -right-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-[var(--color-brand-moss-soft)] opacity-50 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-terracotta-soft)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-clay)]">
              <Heart className="h-3.5 w-3.5 fill-current" />
              Sin culpa · Sin prohibiciones · Con criterio
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-brand-ink)] sm:text-5xl md:text-[3.4rem]">
              Recupera la conexión y la paz en tu hogar o en tu aula{" "}
              <span className="text-[var(--color-brand-terracotta)]">
                sin peleas, culpas ni prohibiciones inútiles.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-brand-clay)]">
              Aprende a rediseñar el entorno digital de tu familia o tu aula con micro-acciones
              diarias y metodologías probadas.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                to="/mision-conexion"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Únete gratis a la Misión Conexión en WhatsApp
              </Link>
              <a
                href="#metodos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-brand-terracotta-soft)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-brand-ink)] transition-colors hover:border-[var(--color-brand-terracotta)]"
              >
                Ver los métodos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--color-brand-sand)] pt-6">
              {[
                { k: "3 días", v: "de misión práctica" },
                { k: "Acciones", v: "específicas para el día a día" },
                { k: "5 métodos", v: "registrados" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-xl font-extrabold text-[var(--color-brand-terracotta)]">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-[var(--color-brand-clay)]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--color-brand-terracotta-soft)]/60 via-[var(--color-brand-sand)] to-[var(--color-brand-moss-soft)]/50 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 shadow-2xl ring-1 ring-black/5">
              <img
                src={heroConexion}
                alt="Familia riendo junta en el suelo del salón, jugando sin pantallas"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 max-w-[19rem] rounded-2xl border border-[var(--color-brand-sand)] bg-white/95 p-5 shadow-xl backdrop-blur sm:-left-8 sm:-bottom-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-terracotta-soft)] text-[var(--color-brand-clay)]">
                  <Heart className="h-4 w-4 fill-current" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-clay)]">
                  Principio de presencia
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                Antes de una pantalla, una mirada. Antes de una regla, un vínculo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODOS / PÚBLICOS */}
      <section id="metodos" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-terracotta)]">
              Elige tu punto de partida
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Un método justo para ti!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-brand-clay)]">
              Caminos distintos, el mismo propósito: cambiar el entorno, no a las personas.
            </p>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Métodos Family Help"
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
          >
            {METODOS.map((m) => {
              const Icon = m.icon;
              const isActive = m.key === activo;
              return (
                <button
                  key={m.key}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActivo(m.key)}
                  className={`flex flex-col items-start gap-2 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[var(--color-brand-terracotta)] bg-[var(--color-brand-sand)] shadow-md"
                      : "border-[var(--color-brand-sand)] bg-white hover:-translate-y-0.5 hover:border-[var(--color-brand-terracotta-soft)] hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                      isActive
                        ? "bg-[var(--color-brand-terracotta)] text-white"
                        : "bg-[var(--color-brand-sand)] text-[var(--color-brand-clay)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-[var(--color-brand-ink)]">
                    {m.audiencia}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-clay)]">
                    Método {m.metodo}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="mt-6 grid gap-8 rounded-3xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] p-7 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-terracotta)] text-white">
                  <MetodoIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-clay)]">
                    {metodo.audiencia} · {metodo.eje}
                  </p>
                  <p className="text-lg font-extrabold">Método {metodo.metodo}</p>
                </div>
              </div>

              <p className="mt-6 text-2xl font-bold leading-snug text-[var(--color-brand-ink)]">
                “{metodo.promesa}”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                {metodo.para}
              </p>

              <ul className="mt-6 space-y-3">
                {metodo.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                    <span className="text-[var(--color-brand-clay)]">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/mision-conexion"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Únete gratis en WhatsApp
                </Link>
                <Link
                  to={metodo.to}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-brand-terracotta-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-brand-ink)] transition-colors hover:border-[var(--color-brand-terracotta)]"
                >
                  Ver la misión completa
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full overflow-hidden rounded-2xl border border-[var(--color-brand-sand)] shadow-sm">
                <img
                  src={conversacion}
                  alt="Un adulto y un adolescente caminando y conversando al atardecer"
                  width={1280}
                  height={864}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="scroll-mt-20 bg-[var(--color-brand-sand)]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-clay)]">
              Cómo funciona
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Comprender → Escuchar → Diseñar → Elegir
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-brand-clay)]">
              El mismo recorrido detrás de los cinco métodos. Cuatro pasos, ninguno improvisado.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="group relative rounded-2xl border border-white bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-extrabold tracking-[0.2em] text-[var(--color-brand-terracotta-soft)]">
                    {p.step}
                  </span>
                  <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-cream)] text-[var(--color-brand-terracotta)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                    {p.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CONTRASTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lo que no hacemos, y lo que sí.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--color-brand-sand)]">
            <div className="grid grid-cols-1 divide-y divide-[var(--color-brand-sand)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="bg-[var(--color-brand-cream)] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-clay)]">
                  No hacemos
                </p>
                <ul className="mt-5 space-y-4">
                  {CONTRASTE.map((c) => (
                    <li key={c.no} className="flex gap-3 text-sm leading-relaxed">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-terracotta)]" />
                      <span className="text-[var(--color-brand-clay)]">{c.no}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand-moss)]">
                  Sí hacemos
                </p>
                <ul className="mt-5 space-y-4">
                  {CONTRASTE.map((c) => (
                    <li key={c.si} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                      <span className="font-medium text-[var(--color-brand-ink)]">{c.si}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="historias" className="scroll-mt-20 bg-[var(--color-brand-cream)]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-terracotta)]">
              Historias reales
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Casas más tranquilas, aulas más enfocadas.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIOS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-[var(--color-brand-sand)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="h-5 w-5 text-[var(--color-brand-terracotta-soft)]" />
                <blockquote className="mt-4 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-brand-sand)] pt-5">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${t.tone}`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[var(--color-brand-ink)]">
                      {t.name}
                    </span>
                    <span className="block text-xs text-[var(--color-brand-clay)]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-terracotta)]">
              Antes de empezar
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lo que suelen preguntarnos.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[var(--color-brand-sand)] border-y border-[var(--color-brand-sand)]">
            {FAQS.map((f, i) => {
              const open = faqAbierta === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setFaqAbierta(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-bold text-[var(--color-brand-ink)]">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-brand-terracotta)] transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open ? (
                    <p className="-mt-1 pb-6 pr-8 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                      {f.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--color-brand-ink)]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Empieza esta semana con una sola micro-acción.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Tres días, una acción específica cada mañana y una acción concreta para esa misma
            noche. Gratis y sin instalar nada.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/mision-conexion"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-terracotta-soft)] hover:text-[var(--color-brand-ink)]"
            >
              <MessageCircle className="h-4 w-4" />
              Únete gratis a la Misión Conexión en WhatsApp
            </Link>
            <Link
              to="/recursos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Descarga la Guía Práctica
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
