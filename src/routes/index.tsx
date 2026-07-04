import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Heart, Users, GraduationCap, Sparkles, UserRound, Sun } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const PILARES = ["Detenerse", "Recordar", "Decidir", "Construir"];

const MISIONES = [
  {
    icon: Users,
    audience: "Misión Familias",
    method: "Método PUENTE",
    to: "/mision-familias" as const,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    accent: "from-rose-50 to-white",
    description:
      "Un camino para reconectar, sostener acuerdos y cuidar los vínculos que sostienen la vida familiar.",
  },
  {
    icon: GraduationCap,
    audience: "Misión Docentes",
    method: "Método FARO",
    to: "/mision-docentes" as const,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    accent: "from-indigo-50 to-white",
    description:
      "Herramientas para acompañar el aula desde la claridad, el propósito y la presencia consciente.",
  },
  {
    icon: Sparkles,
    audience: "Misión Adolescentes",
    method: "Método HACKEA",
    to: "/mision-adolescentes" as const,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    accent: "from-emerald-50 to-white",
    description:
      "Hackea el algoritmo: entiende cómo funcionan las apps por dentro y recupera tu atención, tu tiempo y tu autonomía.",
  },
  {
    icon: UserRound,
    audience: "Misión Adultos",
    method: "Método DECIDE",
    to: "/mision-adultos" as const,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    accent: "from-indigo-50 to-white",
    description:
      "Pequeñas decisiones conscientes para cuidar lo importante y avanzar con serenidad y foco.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#fdf9f4] text-slate-900">
      <Navbar />

      {/* HERO — split editorial con foto cálida */}
      <section className="relative overflow-hidden">
        {/* fondos cálidos */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #fef3ec 0%, #fdf9f4 55%, #ffffff 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-rose-200 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-200 opacity-30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8">
          {/* Columna texto */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-indigo-700 shadow-sm backdrop-blur">
              <Sun className="h-3.5 w-3.5" />
              Tecnología cálida · Desarrollo humano
            </span>

            <h1
              className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-[var(--color-brand-ink)] sm:text-5xl md:text-[3.5rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              La tecnología puede hacer{" "}
              <span
                className="text-[var(--color-brand-violet)]"
                style={{ fontFamily: "Satisfy, cursive", fontWeight: 400 }}
              >
                mucho más
              </span>{" "}
              que captar tu atención.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Diseñamos experiencias digitales que te ayudan a detenerte, recordar lo que
              realmente quieres cuidar y construir, mediante pequeñas decisiones conscientes,
              un camino que sientas como propio.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              {PILARES.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  <span>{p}</span>
                  {i < PILARES.length - 1 ? (
                    <Heart className="h-3 w-3 fill-[var(--color-brand-coral)] text-[var(--color-brand-coral)]" />
                  ) : null}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href="#misiones"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg"
              >
                Explorar misiones
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/plataforma"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-6 py-3 text-sm font-medium text-[var(--color-brand-ink)] backdrop-blur transition-colors hover:border-indigo-300 hover:bg-white"
              >
                <Compass className="h-4 w-4 text-[var(--color-brand-violet)]" />
                Conocer BRÚJULA®
              </a>
            </div>

            <p
              className="mt-8 text-lg text-slate-500 sm:text-xl"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Desarrollamos capacidades para que decidas tu propio camino.
            </p>
          </div>

          {/* Columna imagen + tarjeta flotante */}
          <div className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/60 via-rose-200/40 to-indigo-100/40 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] border border-white/60 shadow-2xl ring-1 ring-black/5">
                <img
                  src={heroFamily}
                  alt="Familia compartiendo un momento cálido alrededor de la mesa"
                  width={1280}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-4 max-w-[19rem] rounded-2xl border border-indigo-100 bg-white/95 p-5 shadow-xl backdrop-blur sm:-left-8 sm:-bottom-8">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Heart className="h-4 w-4 fill-current" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Principio de presencia
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Antes de una pantalla, una mirada. Antes de una regla, un vínculo. El entorno
                  cuida las 24 horas.
                </p>
              </div>

              {/* Chip superior */}
              <div className="absolute -top-4 right-4 hidden rounded-full border border-indigo-200 bg-white/95 px-4 py-2 text-xs font-medium text-indigo-700 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Basado en evidencia · Sin alarmismo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIONES */}
      <section id="misiones" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -top-24 right-1/4 -z-0 h-72 w-72 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-80 w-80 rounded-full bg-rose-100 opacity-40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Misiones
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Un método para cada camino.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Cuatro experiencias diseñadas para acompañar momentos y decisiones distintas de la
              vida.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MISIONES.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.audience}
                  to={m.to}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b ${m.accent} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg`}
                >
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${m.iconBg} ${m.iconColor} shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {m.audience}
                  </p>
                  <h3
                    className="mt-1 text-lg text-[var(--color-brand-ink)]"
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {m.method}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 transition-colors group-hover:text-indigo-800">
                    Conocer misión
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANIFIESTO cálido */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-rose-50 to-indigo-50">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
            Nuestro compromiso
          </p>
          <h2
            className="mt-4 font-serif text-3xl leading-tight tracking-tight text-[var(--color-brand-ink)] sm:text-4xl md:text-[2.75rem]"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            Antes de una pantalla,{" "}
            <span
              className="text-[var(--color-brand-violet)]"
              style={{ fontFamily: "Satisfy, cursive", fontWeight: 400 }}
            >
              una mirada
            </span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Creemos que la tecnología puede ser un lugar cálido: un espacio para reencontrarse,
            para elegir con intención y para cuidar lo que importa. No prometemos magia:
            acompañamos, día a día, el desarrollo de tu autonomía.
          </p>
          <div className="mt-10">
            <a
              href="/nosotros"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Conocer nuestra historia
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
