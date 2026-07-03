import { createFileRoute } from "@tanstack/react-router";
import { FileText, CalendarCheck } from "lucide-react";
import { MissionLayout } from "@/components/MissionLayout";

export const Route = createFileRoute("/mision-familias")({
  head: () => ({
    meta: [
      { title: "Misión Familias — Método PUENTE | Family Help" },
      {
        name: "description",
        content:
          "Reconecta con tus hijos en la era de los algoritmos. Método PUENTE: un sistema práctico para reducir la tensión por pantallas en casa.",
      },
      { property: "og:title", content: "Misión Familias — Método PUENTE" },
      {
        property: "og:description",
        content: "Reconecta con tus hijos en la era de los algoritmos.",
      },
    ],
  }),
  component: MisionFamilias,
});

function MisionFamilias() {
  return (
    <MissionLayout
      tone="sky"
      audience="Misión Familias"
      method="Método PUENTE"
      headline={
        <>
          Reconecta con tus hijos <br className="hidden sm:block" />
          en la era de los algoritmos.
        </>
      }
      subheadline="Un método práctico para bajar la tensión por pantallas en casa, acordar límites sin gritos y volver a mirarse a los ojos, sin culpa y sin sermones."
      ctaLabel="Adquirir Misión Familias en Hotmart"
      problem={{
        eyebrow: "El problema",
        title: "El teléfono se sentó en la mesa. Y la conversación se fue.",
        body: (
          <>
            <p>
              Peleas por el tiempo de pantalla. Comidas en silencio. Hijos absorbidos por
              algoritmos diseñados para retener su atención más tiempo del que tú puedes dar.
            </p>
            <p>
              No es falta de amor. Es falta de un <strong>sistema</strong>. De un puente concreto
              que traduzca lo que quieres cuidar en acuerdos, rutinas y gestos cotidianos que
              todos puedan sostener.
            </p>
          </>
        ),
      }}
      what={{
        eyebrow: "Qué es",
        title: "Método PUENTE: del conflicto a los acuerdos.",
        body: (
          <>
            <p>
              PUENTE es un método guiado paso a paso para <strong>familias reales</strong>: con
              agendas apretadas, con hijos de distintas edades y con dispositivos que ya son
              parte de la casa.
            </p>
            <p>
              No te pide desconectar todo. Te enseña a diseñar una convivencia donde la
              tecnología sirva a la familia, y no al revés.
            </p>
          </>
        ),
      }}
      extra={
        <>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
              Dos pilares prácticos
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Lo que se lleva del método a tu mesa
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <h3
                className="text-xl text-[--color-brand-ink]"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                Acuerdo Familiar Imprimible
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Un documento visual para pactar límites en casa: horarios de pantalla, zonas
                libres, consecuencias claras y compromisos de los adultos. Se imprime, se firma,
                se pega en la nevera.
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-sky-300 bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Vista previa
                </p>
                <div className="mt-3 space-y-2 text-xs text-slate-600">
                  <p className="font-semibold text-[--color-brand-ink]">
                    Acuerdo Familiar · Familia ______
                  </p>
                  <p>· Lunes a viernes: sin pantallas hasta las 17:00.</p>
                  <p>· Cenas sin teléfono, para todos.</p>
                  <p>· Cargadores en la cocina a partir de las 21:00.</p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <h3
                className="text-xl text-[--color-brand-ink]"
                style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
              >
                Planner Familiar de Atención
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Un planificador semanal para diseñar momentos de conexión real: tiempos juntos,
                pausas sin pantalla y rituales que devuelven a la familia el control de su
                atención.
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-sky-300 bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Vista previa
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <li className="flex justify-between"><span>Lun · 19:00</span><span>Cena sin teléfonos</span></li>
                  <li className="flex justify-between"><span>Mié · 17:30</span><span>Paseo con los peques</span></li>
                  <li className="flex justify-between"><span>Sáb · 10:00</span><span>Mañana sin pantallas</span></li>
                </ul>
              </div>
            </article>
          </div>
        </>
      }
      includes={[
        { title: "Guía Método PUENTE (PDF)", description: "El camino completo, paso a paso." },
        { title: "Acuerdo Familiar Imprimible", description: "Plantilla editable e imprimible." },
        { title: "Planner Familiar de Atención", description: "Semanas listas para usar en casa." },
        { title: "Kit de conversaciones difíciles", description: "Frases y preguntas por edades." },
        { title: "Rituales de reconexión", description: "10 ideas breves para el día a día." },
        { title: "Acceso a la comunidad", description: "Otras familias caminando lo mismo." },
      ]}
      closing="Vuelvan a mirarse a los ojos."
    />
  );
}
