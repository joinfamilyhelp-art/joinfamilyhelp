import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Heart, Users, GraduationCap, Sparkles, UserRound } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  component: Home,
});

const MISIONES = [
  {
    icon: Users,
    audience: "Misión Familias",
    method: "Método PUENTE",
    description:
      "Un camino para reconectar, sostener acuerdos y cuidar los vínculos que sostienen la vida familiar.",
    accent: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: GraduationCap,
    audience: "Misión Docentes",
    method: "Método FARO",
    description:
      "Herramientas para acompañar el aula desde la claridad, el propósito y la presencia consciente.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    audience: "Misión Jóvenes",
    method: "Método DECIDE",
    description:
      "Un espacio para detenerse, elegir con intención y construir un camino propio, paso a paso.",
    accent: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: UserRound,
    audience: "Misión Adultos",
    method: "Método DECIDE",
    description:
      "Pequeñas decisiones conscientes para cuidar lo importante y avanzar con serenidad y foco.",
    accent: "text-rose-500",
    bg: "bg-rose-50",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Tecnología al servicio del desarrollo humano
            </span>

            <h1 className="mt-8 font-serif text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              La tecnología puede hacer{" "}
              <span className="italic text-indigo-700">mucho más</span> que captar tu atención.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Diseñamos experiencias digitales que te ayudan a detenerte, recordar lo que
              realmente quieres cuidar y construir, mediante pequeñas decisiones conscientes,
              un camino que sientas como propio.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#misiones"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-900 hover:shadow-md"
              >
                Explorar misiones
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#brujula"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                <Compass className="h-4 w-4 text-sky-600" />
                Conocer BRÚJULA®
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIDAD Y MANIFIESTO */}
      <section id="nosotros" className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Identidad y manifiesto
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Una empresa. Un primer sistema.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Family Help */}
            <article className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 sm:p-10">
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900">Family Help</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Somos una empresa dedicada a crear tecnología al servicio del desarrollo humano.
                Nuestra convicción es firme: la tecnología debe fortalecer la capacidad de las
                personas para decidir y actuar conscientemente, nunca reemplazarla.
              </p>
            </article>

            {/* BRÚJULA */}
            <article
              id="brujula"
              className="relative flex flex-col rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-sm sm:p-10"
            >
              <span className="absolute right-6 top-6 rounded-full bg-indigo-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Primer producto
              </span>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-slate-900">BRÚJULA®</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Es la primera expresión de nuestra visión. No es únicamente una microapp aislada;
                es el primer sistema desarrollado por Family Help para acompañar a las personas a
                recuperar la capacidad de detenerse, recordar lo que quieren cuidar y avanzar con
                claridad, un paso a la vez.
              </p>
              <a
                href="https://app.familyhelp.com/brujula"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
              >
                Acceder a BRÚJULA®
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* MISIONES */}
      <section id="misiones" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Misiones
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-900 sm:text-4xl">
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
                <article
                  key={m.audience}
                  className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
                >
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${m.bg} ${m.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {m.audience}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-slate-900">{m.method}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400">
                    Próximamente
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Family Help®. Tecnología al servicio del desarrollo
            humano.
          </p>
          <p className="text-sm text-slate-500">
            Desarrollamos capacidades para que decidas tu propio camino.
          </p>
        </div>
      </footer>
    </div>
  );
}
