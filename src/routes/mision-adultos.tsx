import { createFileRoute } from "@tanstack/react-router";
import { Sunrise, Sun, Moon } from "lucide-react";
import { MissionLayout } from "@/components/MissionLayout";

export const Route = createFileRoute("/mision-adultos")({
  head: () => ({
    meta: [
      { title: "Misión Adultos — Método DECIDE | Family Help" },
      {
        name: "description",
        content:
          "Construye una rutina intencional: atención, bienestar y productividad. Método DECIDE aplicado a la vida profesional adulta.",
      },
      { property: "og:title", content: "Misión Adultos — Método DECIDE" },
      {
        property: "og:description",
        content: "Construye una rutina intencional: atención, bienestar y productividad.",
      },
    ],
  }),
  component: MisionAdultos,
});

const BLOQUES = [
  {
    icon: Sunrise,
    tag: "Mañana",
    title: "Arrancar sin ruido",
    items: [
      "20 minutos sin pantallas al despertar.",
      "Definir 1 tarea que importa (no 10).",
      "Notificaciones en silencio hasta la primera hora productiva.",
    ],
  },
  {
    icon: Sun,
    tag: "Mediodía",
    title: "Bloques de foco reales",
    items: [
      "2 bloques de 90 min con el móvil fuera del alcance.",
      "Pausas activas de 5 min entre bloques.",
      "Comer sin scroll. Sin excepciones esta semana.",
    ],
  },
  {
    icon: Moon,
    tag: "Noche",
    title: "Cerrar con intención",
    items: [
      "Cargador fuera del dormitorio.",
      "3 líneas de journal: qué cuidé hoy, qué aprendí, qué suelto.",
      "30 minutos sin luz azul antes de dormir.",
    ],
  },
];

function MisionAdultos() {
  return (
    <MissionLayout
      tone="rose"
      audience="Misión Adultos"
      method="Método DECIDE"
      headline={
        <>
          Construye una rutina intencional: <br className="hidden sm:block" />
          atención, bienestar y productividad.
        </>
      }
      subheadline="Un plan de micro-acciones diarias para salir de la infoxicación, recuperar el foco profundo y volver a sentir que tu día lo diriges tú."
      ctaLabel="Comenzar Misión Adultos"
      ctaMessage="Hola, quiero comenzar la Misión Adultos con el Método DECIDE®."

      problem={{
        eyebrow: "El problema",
        title: "Trabajas todo el día. Y sientes que no hiciste nada.",
        body: (
          <>
            <p>
              200 correos, 40 chats, 12 pestañas abiertas y una sensación constante de estar
              atrás. La infoxicación no es un adjetivo: es una carga cognitiva que apaga tu
              claridad, tu energía y —a la larga— tu bienestar.
            </p>
            <p>
              No necesitas otra app de productividad. Necesitas un <strong>método</strong> para
              decidir mejor, con menos ruido.
            </p>
          </>
        ),
      }}
      what={{
        eyebrow: "Qué es",
        title: "Método DECIDE para adultos: menos ruido, más vida.",
        body: (
          <>
            <p>
              Un sistema pensado para profesionales y adultos con vidas complejas. No te añade
              tareas: te ayuda a quitar. Y a poner atención en lo que sí sostiene tu bienestar
              y tu trabajo.
            </p>
            <p>
              Se aplica en semanas, no en años. En micro-acciones, no en revoluciones.
            </p>
          </>
        ),
      }}
      extra={
        <>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
              Plan de acción diario
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-brand-ink)] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Micro-acciones para tu día, de mañana a noche
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOQUES.map((b) => {
              const I = b.icon;
              return (
                <article
                  key={b.tag}
                  className="flex flex-col rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                    <I className="h-5 w-5" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-700">
                    {b.tag}
                  </p>
                  <h3
                    className="mt-1 text-lg text-[var(--color-brand-ink)]"
                    style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
                  >
                    {b.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </>
      }
      includes={[
        { title: "Método DECIDE Adultos (PDF)", description: "Sistema completo para tu semana." },
        { title: "Plan diario imprimible", description: "Mañana, mediodía y noche en una hoja." },
        { title: "Protocolo anti-infoxicación", description: "Correo, chats y notificaciones bajo control." },
        { title: "Bloques de foco profundo", description: "Cómo diseñar 90 minutos que rinden." },
        { title: "Journal 3 líneas", description: "Cierre diario en 2 minutos." },
        { title: "Comunidad de adultos", description: "Rutinas reales de personas reales." },
      ]}
      closing="Dirige tu día. No lo sobrevivas."
    />
  );
}
