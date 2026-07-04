import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoAsset from "@/assets/family-help-logo.png.asset.json";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Nuestra convicción | Family Help" },
      {
        name: "description",
        content:
          "El manifiesto de Family Help: tecnología al servicio del desarrollo humano. La tecnología debe fortalecer la capacidad de decidir, nunca reemplazarla.",
      },
      { property: "og:title", content: "Nuestra convicción — Family Help" },
      {
        property: "og:description",
        content: "Tecnología al servicio del desarrollo humano.",
      },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, var(--color-brand-mist) 0%, #ffffff 55%, #ffffff 100%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[var(--color-brand-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mt-14 flex flex-col items-center text-center">
            <img
              src={logoAsset.url}
              alt="Family Help"
              width={96}
              height={96}
              className="h-20 w-20 object-contain"
            />
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-mist)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-indigo)]">
              Manifiesto Family Help
            </span>
            <h1
              className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-[var(--color-brand-ink)] sm:text-5xl md:text-[3.5rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Nuestra Convicción
            </h1>
            <p
              className="mt-6 text-xl text-[var(--color-brand-violet)]"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Tecnología al servicio del desarrollo humano.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-slate-50">
        <article className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-7 text-lg leading-[1.85] text-slate-700 sm:text-[1.2rem]">
            <p className="first-letter:mr-2 first-letter:float-left first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-[var(--color-brand-ink)]">
              Family Help es una empresa dedicada a crear tecnología al servicio del desarrollo
              humano.
            </p>
            <p>
              Nuestro propósito es diseñar experiencias digitales que ayuden a las personas a
              desarrollar capacidades humanas fundamentales para construir un camino que sientas
              como propio.
            </p>
            <p>
              <span
                className="font-serif text-[var(--color-brand-ink)]"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                BRÚJULA®
              </span>{" "}
              es la primera expresión de esa visión. No es únicamente una microapp. Es el primer
              sistema desarrollado por Family Help para acompañar a las personas a recuperar la
              capacidad de detenerse, recordar lo que quieren cuidar y avanzar con claridad, un
              paso a la vez.
            </p>
            <p>
              En el futuro, Family Help podrá desarrollar nuevos productos que respondan a otras
              necesidades humanas, manteniendo siempre la misma convicción:
            </p>
          </div>

          <blockquote
            className="mt-14 border-l-4 border-[var(--color-brand-violet)] pl-6 font-serif text-2xl leading-relaxed text-[var(--color-brand-ink)] sm:text-3xl"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
          >
            "La tecnología debe fortalecer la capacidad de las personas para decidir y actuar
            conscientemente, nunca reemplazarla."
          </blockquote>

          <div className="mt-16 flex flex-col items-center border-t border-[var(--color-brand-mist)] pt-10 text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">— El equipo</p>
            <p
              className="mt-3 text-3xl text-[var(--color-brand-violet)]"
              style={{ fontFamily: "Satisfy, cursive" }}
            >
              Family Help
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
}
