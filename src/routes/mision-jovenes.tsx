import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Zap, Target, Brain } from "lucide-react";
import { MissionLayout } from "@/components/MissionLayout";

export const Route = createFileRoute("/mision-jovenes")({
  head: () => ({
    meta: [
      { title: "Misión Jóvenes — Método DECIDE | Family Help" },
      {
        name: "description",
        content:
          "Hackea el algoritmo: retoma el control de tu atención. Método DECIDE para adolescentes y jóvenes que quieren autonomía real.",
      },
      { property: "og:title", content: "Misión Jóvenes — Método DECIDE" },
      {
        property: "og:description",
        content: "Hackea el algoritmo: retoma el control de tu atención.",
      },
    ],
  }),
  component: MisionJovenes,
});

const RETOS = [
  { day: "Día 01", title: "Auditoría de scroll", body: "Mide cuánto tiempo se lleva tu app favorita en 24 horas. Sin juicio, con datos." },
  { day: "Día 02", title: "Notificaciones a dieta", body: "Apaga todo lo que no sea humano. Reactiva solo lo que decidas conscientemente." },
  { day: "Día 03", title: "Home screen intencional", body: "Rediseña tu pantalla para que abras primero lo que tú eliges." },
  { day: "Día 04", title: "Modo enfoque · 90 min", body: "Un bloque diario para algo que te importe: crear, estudiar, entrenar." },
  { day: "Día 05", title: "Feed clean-up", body: "Deja de seguir lo que te hunde. Sigue lo que te sube el nivel." },
];

function MisionJovenes() {
  return (
    <MissionLayout
      tone="indigo"
      audience="Misión Jóvenes"
      method="Método DECIDE"
      headline={
        <>
          Hackea el algoritmo: <br className="hidden sm:block" />
          retoma el control de tu atención.
        </>
      }
      subheadline="No es magia, es diseño. Aprende cómo funcionan por dentro las apps que usas todos los días y toma decisiones que te devuelvan tu tiempo, tu foco y tu autonomía."
      ctaLabel="Unirme a Misión Jóvenes"
      problem={{
        eyebrow: "Lo que nadie te contó",
        title: "El feed no es tuyo. Está optimizado para ti, no por ti.",
        body: (
          <>
            <p>
              Cada scroll, cada notificación, cada auto-play está diseñado por equipos enteros
              cuyo trabajo es mantenerte dentro. No eres débil. Estás jugando contra un sistema
              entrenado para ganar.
            </p>
            <p>
              La buena noticia: cuando entiendes las reglas, dejas de ser el producto y pasas a
              ser el jugador.
            </p>
          </>
        ),
      }}
      what={{
        eyebrow: "Qué es",
        title: "Método DECIDE: elegir en un mundo diseñado para que no elijas.",
        body: (
          <>
            <p>
              DECIDE es un sistema de 6 pasos para pasar del piloto automático a las decisiones
              conscientes. No es un detox de una semana. Es un músculo que se entrena.
            </p>
            <p>
              Diseñado con lenguaje directo, ejercicios cortos y retos que puedes hacer con el
              teléfono en la mano.
            </p>
          </>
        ),
      }}
      extra={
        <>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Cpu, title: "Entiende el algoritmo", body: "Cómo se construye tu feed y por qué te muestra lo que te muestra." },
              { icon: Zap, title: "Recupera el impulso", body: "Rediseña gatillos, hábitos y recompensas para que jueguen a tu favor." },
              { icon: Target, title: "Decide con intención", body: "Rutinas cortas para elegir a qué le das tu atención, cada día." },
            ].map((c) => {
              const I = c.icon;
              return (
                <article
                  key={c.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-brand-violet-soft)] hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-ink)] text-white">
                    <I className="h-5 w-5" />
                  </div>
                  <h3
                    className="text-lg text-[var(--color-brand-ink)]"
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
                Retos prácticos
              </p>
              <h2
                className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-brand-ink)] sm:text-4xl"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                5 movimientos para arrancar la semana
              </h2>
            </div>
            <ul className="mx-auto mt-10 max-w-3xl divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
              {RETOS.map((r) => (
                <li key={r.day} className="flex gap-5 p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-mono font-semibold text-indigo-700">
                    {r.day.split(" ")[1]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-brand-ink)]">{r.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-700 shadow-sm">
                <Brain className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-brand-ink)]">
                  Sistema de reflexión personal
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Un journal digital breve, 3 preguntas al día, para ver cómo cambia tu semana
                  cuando decides tú, no el feed.
                </p>
              </div>
            </div>
          </div>
        </>
      }
      includes={[
        { title: "Método DECIDE (video + PDF)", description: "El sistema completo en formato joven." },
        { title: "Retos semanales", description: "Movimientos cortos para hacer hoy." },
        { title: "Journal digital", description: "3 preguntas al día, 2 minutos." },
        { title: "Guía anti-algoritmo", description: "Cómo funciona por dentro cada app." },
        { title: "Playlist de foco", description: "Bandas sonoras para tu bloque de 90 min." },
        { title: "Comunidad de jóvenes", description: "Un espacio para compartir avances." },
      ]}
      closing="Deja de ser el producto. Sé el jugador."
    />
  );
}
