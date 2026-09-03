import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Radar,
  BookOpen,
  Trophy,
  Handshake,
  Compass,
  ArrowLeft,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildWhatsAppUrl } from "@/lib/whatsapp";


export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma BRÚJULA® — Ecosistema | Family Help" },
      {
        name: "description",
        content:
          "Un sistema de acompañamiento diario para tu atención y autonomía. Conoce Coach IA, Radar, Bitácora, Retos y Acuerdos dentro de BRÚJULA®.",
      },
      { property: "og:title", content: "Plataforma BRÚJULA® — Family Help" },
      {
        property: "og:description",
        content:
          "Mucho más que una aplicación: un sistema de acompañamiento diario para tu atención y autonomía.",
      },
    ],
  }),
  component: Plataforma,
});

const BRUJULA_CTA_URL = buildWhatsAppUrl(
  "Hola, quiero conocer más sobre la Plataforma BRÚJULA® de Family Help.",
);


const FEATURES = [
  {
    icon: Bot,
    name: "Coach IA",
    tagline: "Preguntas que abren, no respuestas que cierran.",
    body: "Tu asistente reflexivo dentro de la app. Te acompaña a procesar el día con preguntas conscientes, no directivas, para que las decisiones sigan siendo tuyas.",
  },
  {
    icon: Radar,
    name: "Radar",
    tagline: "Visualiza a dónde se va tu energía.",
    body: "Una herramienta interactiva de autoconciencia para medir hacia dónde apunta tu enfoque: relaciones, trabajo, descanso, cuerpo, propósito.",
  },
  {
    icon: BookOpen,
    name: "Bitácora",
    tagline: "Un lugar tranquilo para volver a ti.",
    body: "Espacio privado de diario y reflexión diaria. Notas, gratitudes y aprendizajes que consolidan lo que vives, sin métricas de vanidad.",
  },
  {
    icon: Trophy,
    name: "Retos y XP",
    tagline: "Gamificación humana, no competitiva.",
    body: "Pequeños pasos diarios que suman experiencia. Celebras avances reales sin rankings ni presión, porque el único puntaje que importa es el tuyo.",
  },
  {
    icon: Handshake,
    name: "Sistema de Acuerdos",
    tagline: "El núcleo digital de tus compromisos.",
    body: "Aquí quedan firmados y vivos los acuerdos que sostienes: familiares, escolares o personales. Siempre a mano cuando la vida los pone a prueba.",
  },
];

function Plataforma() {
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
        <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-emerald-100 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -top-16 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-100 opacity-40 blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[var(--color-brand-ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mt-8 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-mist)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-indigo)]">
              <Compass className="h-3.5 w-3.5" />
              Plataforma BRÚJULA®
            </span>
            <h1
              className="mt-6 max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight text-[var(--color-brand-ink)] sm:text-5xl md:text-[3.25rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Mucho más que una aplicación.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Un sistema de acompañamiento diario para tu{" "}
              <span
                className="text-[var(--color-brand-violet)]"
                style={{ fontFamily: "Satisfy, cursive" }}
              >
                atención y autonomía
              </span>
              .
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={BRUJULA_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-ink)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[var(--color-brand-indigo)] hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>

              <a
                href="#tour"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-brand-ink)] hover:border-slate-300"
              >
                Recorrer el ecosistema
              </a>
            </div>
          </div>

          {/* Mock preview panel */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative rounded-3xl border border-[var(--color-brand-mist)] bg-white p-2 shadow-xl">
              <div className="rounded-[1.25rem] bg-gradient-to-br from-slate-50 to-white p-8 sm:p-12">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-terracotta-soft" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    wa.me/573243654332
                  </span>

                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Radar del día", value: "Foco 72%", tone: "bg-indigo-50 text-indigo-700" },
                    { label: "Bitácora", value: "3 entradas esta semana", tone: "bg-emerald-50 text-emerald-700" },
                    { label: "Reto activo", value: "Cargador fuera del cuarto", tone: "bg-rose-50 text-rose-700" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {s.label}
                      </p>
                      <p className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${s.tone}`}>
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Coach IA
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    ¿Qué mereció tu mejor atención hoy? ¿A qué le diste tiempo sin haberlo elegido?
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Vista previa ilustrativa del ecosistema BRÚJULA®.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="tour" className="relative overflow-hidden border-t border-[var(--color-brand-mist)] bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-violet)]">
              Recorrido por el ecosistema
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-brand-ink)] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Cinco piezas, un mismo propósito.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Cada módulo está diseñado para acompañarte sin capturarte. Ninguna notificación
              adictiva. Ninguna métrica de vanidad.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              const featured = i === 0;
              return (
                <article
                  key={f.name}
                  className={`group flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    featured
                      ? "border-transparent text-white shadow-md sm:col-span-2 lg:col-span-1"
                      : "border-[var(--color-brand-mist)] bg-white shadow-sm hover:border-[var(--color-brand-violet-soft)]/60"
                  }`}
                  style={
                    featured
                      ? {
                          background:
                            "linear-gradient(135deg, var(--color-brand-ink) 0%, var(--color-brand-indigo) 55%, var(--color-brand-violet) 100%)",
                        }
                      : undefined
                  }
                >
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                      featured
                        ? "bg-white/15 text-white backdrop-blur"
                        : "bg-[var(--color-brand-mist)] text-[var(--color-brand-indigo)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={`text-xl ${featured ? "text-white" : "text-[var(--color-brand-ink)]"}`}
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm italic ${
                      featured ? "text-white/80" : "text-[var(--color-brand-violet)]"
                    }`}
                    style={{ fontFamily: "Satisfy, cursive", fontStyle: "normal" }}
                  >
                    {f.tagline}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      featured ? "text-white/85" : "text-slate-600"
                    }`}
                  >
                    {f.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="border-t border-[var(--color-brand-mist)] bg-[var(--color-brand-mist)]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-xl sm:px-12 sm:py-16"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand-ink) 0%, var(--color-brand-indigo) 55%, var(--color-brand-violet) 100%)",
            }}
          >
            <Sparkles className="mx-auto h-6 w-6 text-white/80" />
            <h2
              className="mt-5 font-serif text-3xl tracking-tight sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              ¿Listo para activar tu Brújula?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Da el primer paso hacia una vida digital más consciente. Tu atención vuelve a ser
              tuya.
            </p>
            <a
              href={BRUJULA_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[var(--color-brand-ink)] shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
