import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Zap, Target, Brain } from "lucide-react";
import { MissionLayout } from "@/components/MissionLayout";

export const Route = createFileRoute("/mision-adolescentes")({
  head: () => ({
    meta: [
      { title: "Misión Adolescentes — Método HACKEA | Family Help" },
      {
        name: "description",
        content:
          "Hackea el algoritmo: retoma el control de tu atención. Método HACKEA para adolescentes que quieren autonomía real frente a las pantallas.",
      },
      { property: "og:title", content: "Misión Adolescentes — Método HACKEA" },
      {
        property: "og:description",
        content: "Hackea el algoritmo: retoma el control de tu atención.",
      },
    ],
  }),
  component: MisionAdolescentes,
});

const RETOS = [
  { day: "Día 01", title: "Observa tu día", body: "Mide cuánto tiempo pasas realmente en cada app. Sin juicio, con datos reales." },
  { day: "Día 02", title: "Notificaciones a dieta", body: "Apaga todo lo que no sea humano. Reactiva solo lo que decidas conscientemente." },
  { day: "Día 03", title: "Home screen intencional", body: "Rediseña tu pantalla para que abras primero lo que tú eliges, no lo que el diseño te empuja." },
  { day: "Día 04", title: "Modo enfoque · 90 min", body: "Un bloque diario para algo que te importe: crear, estudiar, entrenar." },
  { day: "Día 05", title: "Feed clean-up", body: "Deja de seguir lo que te hunde. Sigue lo que te sube el nivel." },
  { day: "Día 06", title: "Haz algo que construya", body: "Dedica tiempo a una habilidad o proyecto que te acerque a quien quieres llegar a ser." },
  { day: "Día 07", title: "Decide cómo quieres vivir", body: "Elige tres reglas propias para tu relación con las pantallas la próxima semana." },
];

function MisionAdolescentes() {
  return (
    <MissionLayout
      tone="indigo"
      audience="Misión Adolescentes"
      method="Método HACKEA"
      headline={
        <>
          Hackea el algoritmo: <br className="hidden sm:block" />
          retoma el control de tu atención.
        </>
      }
      subheadline="No es falta de voluntad. Es un sistema diseñado para ganarte. Aprende cómo funcionan por dentro las apps que usas todos los días y toma decisiones que te devuelvan tu tiempo, tu foco y tu autonomía."
      ctaLabel="Unirme a Misión Adolescentes"
      ctaMessage="Hola, quiero unirme a la Misión Adolescentes con el Método HACKEA®."

      problem={{
        eyebrow: "Lo que nadie te contó",
        title: "El feed no es tuyo. Está optimizado para ti, no por ti.",
        body: (
          <>
            <p>
              Cada scroll, cada notificación, cada auto-play está diseñado por equipos enteros
              cuyo trabajo es mantenerte dentro. Un adolescente promedio recibe cerca de 237
              notificaciones al día. No eres débil: estás jugando contra un sistema entrenado
              para ganar.
            </p>
            <p>
              Tu córtex prefrontal —la parte del cerebro que regula el autocontrol— no termina
              de desarrollarse hasta los 25 años. La buena noticia: cuando entiendes las reglas,
              dejas de ser el producto y pasas a ser el jugador.
            </p>
          </>
        ),
      }}
      what={{
        eyebrow: "Qué es",
        title: "Método HACKEA: elegir en un mundo diseñado para que no elijas.",
        body: (
          <>
            <p>
              HACKEA es un sistema pensado para adolescentes que quieren pasar del piloto
              automático a las decisiones conscientes. No es un detox de una semana. Es un
              músculo que se entrena en 7 días y se sostiene toda la vida.
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
              { icon: Cpu, title: "Entiende el algoritmo", body: "Cómo se construye tu feed y por qué te muestra exactamente lo que te muestra." },
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                Retos prácticos
              </p>
              <h2
                className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-brand-ink)] sm:text-4xl"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                7 días para hackear tu semana
              </h2>
            </div>
            <ul className="mx-auto mt-10 max-w-3xl divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
              {RETOS.map((r) => (
                <li key={r.day} className="flex gap-5 p-5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-mono font-semibold text-blue-700">
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
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm">
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
        { title: "Método HACKEA (video + PDF)", description: "El sistema completo en formato adolescente." },
        { title: "Reto de 7 días", description: "Un movimiento concreto para cada día de la semana." },
        { title: "Journal digital", description: "3 preguntas al día, 2 minutos." },
        { title: "Guía anti-algoritmo", description: "Cómo funciona por dentro cada app." },
        { title: "Playlist de foco", description: "Bandas sonoras para tu bloque de 90 min." },
        { title: "Comunidad de adolescentes", description: "Un espacio seguro para compartir avances." },
      ]}
      closing="Tu tiempo, tu energía y tu mente valen demasiado como para regalárselos gratis a una app. Deja de ser el producto. Sé el jugador."
    />
  );
}
