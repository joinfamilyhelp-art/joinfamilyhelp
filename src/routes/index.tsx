import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Heart, Users, GraduationCap, Sparkles, UserRound } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoAsset from "@/assets/family-help-logo.png.asset.json";

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
    description:
      "Un camino para reconectar, sostener acuerdos y cuidar los vínculos que sostienen la vida familiar.",
  },
  {
    icon: GraduationCap,
    audience: "Misión Docentes",
    method: "Método FARO",
    to: "/mision-docentes" as const,
    description:
      "Herramientas para acompañar el aula desde la claridad, el propósito y la presencia consciente.",
  },
  {
    icon: Sparkles,
    audience: "Misión Jóvenes",
    method: "Método DECIDE",
    to: "/mision-jovenes" as const,
    description:
      "Un espacio para detenerse, elegir con intención y construir un camino propio, paso a paso.",
  },
  {
    icon: UserRound,
    audience: "Misión Adultos",
    method: "Método DECIDE",
    to: "/mision-adultos" as const,
    description:
      "Pequeñas decisiones conscientes para cuidar lo importante y avanzar con serenidad y foco.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, var(--color-brand-mist) 0%, #ffffff 55%, #ffffff 100%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <img
              src={logoAsset.url}
              alt="Family Help — escudo con manos y corazón"
              width={120}
              height={120}
              className="mb-8 h-24 w-24 object-contain sm:h-28 sm:w-28"
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-[--color-brand-mist] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[--color-brand-indigo]">
              <span className="h-1.5 w-1.5 rounded-full bg-[--color-brand-coral]" />
              Tecnología al servicio del desarrollo humano
            </span>

            <h1
              className="mt-8 font-serif text-3xl leading-[1.15] tracking-tight text-[--color-brand-ink] sm:text-5xl md:text-[3.25rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              La tecnología puede hacer{" "}
              <span
                className="text-[--color-brand-violet]"
                style={{ fontFamily: "Satisfy, cursive", fontWeight: 400 }}
              >
                mucho más
              </span>{" "}
              que captar tu atención.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Diseñamos experiencias digitales que te ayudan a detenerte, recordar lo que
              realmente quieres cuidar y construir, mediante pequeñas decisiones conscientes,
              un camino que sientas como propio.
            </p>

            {/* Pilares */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              {PILARES.map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  <span>{p}</span>
                  {i < PILARES.length - 1 ? (
                    <Heart className="h-3 w-3 fill-[--color-brand-coral] text-[--color-brand-coral]" />
                  ) : null}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#misiones"
                className="inline-flex items-center gap-2 rounded-full bg-[--color-brand-ink] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[--color-brand-indigo] hover:shadow-md"
              >
                Explorar misiones
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#brujula"
                className="inline-flex items-center gap-2 rounded-full border border-[--color-brand-mist] bg-white px-6 py-3 text-sm font-medium text-[--color-brand-ink] transition-colors hover:border-[--color-brand-violet-soft]"
              >
                <Compass className="h-4 w-4 text-[--color-brand-violet]" />
                Conocer BRÚJULA®
              </a>
            </div>

            <p
              className="mt-10 text-lg text-slate-500 sm:text-xl"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Desarrollamos capacidades para que decidas tu propio camino.
            </p>
          </div>
        </div>
      </section>

      {/* IDENTIDAD Y MANIFIESTO */}
      <section id="nosotros" className="border-t border-[--color-brand-mist] bg-[--color-brand-mist]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[--color-brand-violet]">
              Identidad y manifiesto
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Una empresa. Un primer sistema.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Family Help */}
            <article className="flex flex-col rounded-3xl border border-white bg-white p-8 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-10">
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--color-brand-mist] text-[--color-brand-indigo]">
                <Heart className="h-5 w-5 fill-[--color-brand-coral] text-[--color-brand-coral]" />
              </div>
              <h3
                className="text-2xl text-[--color-brand-ink]"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                Family Help
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Somos una empresa dedicada a crear tecnología al servicio del desarrollo humano.
                Nuestra convicción es firme: la tecnología debe fortalecer la capacidad de las
                personas para decidir y actuar conscientemente, nunca reemplazarla.
              </p>
            </article>

            {/* BRÚJULA */}
            <article
              id="brujula"
              className="relative flex flex-col overflow-hidden rounded-3xl border border-[--color-brand-violet-soft]/40 p-8 text-white shadow-md sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brand-ink) 0%, var(--color-brand-indigo) 55%, var(--color-brand-violet) 100%)",
              }}
            >
              <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Primer producto
              </span>
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                <Compass className="h-5 w-5" />
              </div>
              <h3
                className="text-2xl"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                BRÚJULA®
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Es la primera expresión de nuestra visión. No es únicamente una microapp aislada;
                es el primer sistema desarrollado por Family Help para acompañar a las personas a
                recuperar la capacidad de detenerse, recordar lo que quieren cuidar y avanzar con
                claridad, un paso a la vez.
              </p>
              <a
                href="https://app.familyhelp.com/brujula"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[--color-brand-ink] transition-all hover:bg-white/90"
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[--color-brand-violet]">
              Misiones
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
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
                  className="group flex flex-col rounded-2xl border border-[--color-brand-mist] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[--color-brand-violet-soft]/50 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[--color-brand-mist] text-[--color-brand-indigo]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {m.audience}
                  </p>
                  <h3
                    className="mt-1 text-lg text-[--color-brand-ink]"
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {m.method}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[--color-brand-violet] transition-colors group-hover:text-[--color-brand-indigo]">
                    Conocer misión
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
