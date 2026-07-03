import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import imgBienestar from "@/assets/articles/bienestar-digital.jpg";
import imgPuente from "@/assets/articles/metodo-puente.jpg";
import imgAula from "@/assets/articles/foco-aula.jpg";
import imgAtencion from "@/assets/articles/economia-atencion.jpg";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos — Biblioteca abierta | Family Help" },
      {
        name: "description",
        content:
          "Ideas y herramientas para construir tu propio camino: bienestar digital, vínculos familiares, educación y hábitos conscientes.",
      },
      { property: "og:title", content: "Recursos Family Help" },
      {
        property: "og:description",
        content: "Ideas y herramientas para construir tu propio camino.",
      },
    ],
  }),
  component: Recursos,
});

const ARTICULOS = [
  {
    category: "Bienestar Digital",
    tone: "bg-indigo-100 text-indigo-800",
    title:
      "Cómo el diseño adictivo de las apps captura la atención de tus hijos.",
    excerpt:
      "Detrás de cada scroll hay decisiones de diseño pensadas para retener. Entenderlas es el primer paso para elegir con conciencia.",
    image: imgBienestar,
  },
  {
    category: "Vínculos Familiares",
    tone: "bg-sky-100 text-sky-800",
    title:
      "El Método PUENTE: pasos prácticos para pactar acuerdos de pantallas en casa.",
    excerpt:
      "Un mapa concreto para sentarse en familia y transformar la tensión por pantallas en compromisos claros y sostenibles.",
    image: imgPuente,
  },
  {
    category: "Educación",
    tone: "bg-emerald-100 text-emerald-800",
    title: "Recuperar el foco en el aula: el desafío del docente moderno.",
    excerpt:
      "Cómo pasar de perseguir la atención a orientarla. Estrategias y protocolos para volver a poner centro en la clase.",
    image: imgAula,
  },
  {
    category: "Hábitos",
    tone: "bg-rose-100 text-rose-800",
    title:
      "La economía de la atención: ¿por qué nos cuesta tanto detenernos?",
    excerpt:
      "Una mirada breve al modelo de negocio que compite por tu tiempo, y a las decisiones cotidianas que devuelven tu foco.",
    image: imgAtencion,
  },
];

function Recursos() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, var(--color-brand-mist) 0%, #ffffff 60%, #ffffff 100%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[--color-brand-ink]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[--color-brand-mist] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[--color-brand-indigo]">
              Biblioteca abierta
            </span>
            <h1
              className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-[--color-brand-ink] sm:text-5xl md:text-[3.25rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Ideas y herramientas para{" "}
              <span
                className="text-[--color-brand-violet]"
                style={{ fontFamily: "Satisfy, cursive" }}
              >
                construir tu propio camino
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Artículos breves, prácticos y sin ruido. Léelos con calma, con un café, sin
              notificaciones.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="border-t border-[--color-brand-mist] bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {ARTICULOS.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[--color-brand-mist] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={a.image}
                    alt=""
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${a.tone}`}
                  >
                    {a.category}
                  </span>
                  <h2
                    className="mt-4 text-xl leading-snug text-[--color-brand-ink]"
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {a.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {a.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[--color-brand-indigo] transition-colors hover:text-[--color-brand-ink]"
                  >
                    Leer artículo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
