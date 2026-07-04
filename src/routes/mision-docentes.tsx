import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Focus, Users } from "lucide-react";
import { MissionLayout } from "@/components/MissionLayout";

export const Route = createFileRoute("/mision-docentes")({
  head: () => ({
    meta: [
      { title: "Misión Docentes — Método FARO | Family Help" },
      {
        name: "description",
        content:
          "Del estado de distracción al estado de enfoque. Método FARO: herramientas para docentes que quieren recuperar la atención del aula.",
      },
      { property: "og:title", content: "Misión Docentes — Método FARO" },
      {
        property: "og:description",
        content: "Transforma tu aula: del estado de distracción al estado de enfoque.",
      },
    ],
  }),
  component: MisionDocentes,
});

const TARJETAS = [
  {
    icon: ClipboardList,
    title: "Acuerdo de Aula de Clases",
    body: "Un documento vivo para pactar con tus estudiantes cómo entran, salen y usan los dispositivos. Reduce la fricción diaria y devuelve autoridad sin autoritarismo.",
  },
  {
    icon: Focus,
    title: "Gestión del Foco",
    body: "Micro-protocolos de inicio y cierre de clase, señales de atención y rutinas de 3 minutos que reactivan la concentración del grupo.",
  },
  {
    icon: Users,
    title: "Rol del maestro-faro",
    body: "Herramientas para que dejes de competir con el algoritmo y pases a ser el punto de referencia que orienta, sostiene y ordena la mirada del aula.",
  },
];

function MisionDocentes() {
  return (
    <MissionLayout
      tone="emerald"
      audience="Misión Docentes"
      method="Método FARO"
      headline={
        <>
          Transforma tu aula: del estado de distracción <br className="hidden sm:block" />
          al estado de enfoque.
        </>
      }
      subheadline="Un método para docentes que ya no quieren competir con las notificaciones. Recupera la atención del grupo con protocolos claros, acuerdos vivos y una nueva forma de estar frente a la clase."
      ctaLabel="Adquirir Misión Docentes en Hotmart"
      problem={{
        eyebrow: "El problema",
        title: "El aula perdió el foco. Y tú lo notas cada día.",
        body: (
          <>
            <p>
              Cabezas gachas, miradas partidas, conversaciones que se rompen en cinco minutos.
              El aula compite —en desventaja— con plataformas diseñadas por miles de ingenieros
              para capturar la atención.
            </p>
            <p>
              No necesitas prohibir. Necesitas un <strong>sistema</strong>: un método claro y
              repetible para que tu clase vuelva a tener centro.
            </p>
          </>
        ),
      }}
      what={{
        eyebrow: "Qué es",
        title: "Método FARO: orientar, no perseguir.",
        body: (
          <>
            <p>
              FARO transforma tu rol: dejas de ser el que apaga incendios de atención y pasas a
              ser el punto fijo que ordena la mirada del grupo. Sin gritar. Sin desgastarte.
            </p>
            <p>
              Está diseñado para docentes reales, con grupos numerosos, tiempo limitado y ganas
              de volver a disfrutar la clase.
            </p>
          </>
        ),
      }}
      extra={
        <>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Contenido central
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[var(--color-brand-ink)] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Herramientas para el aula, listas para el lunes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TARJETAS.map((c) => {
              const I = c.icon;
              return (
                <article
                  key={c.title}
                  className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
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
        </>
      }
      includes={[
        { title: "Guía Método FARO (PDF)", description: "El sistema completo para docentes." },
        { title: "Acuerdo de Aula editable", description: "Adaptable por nivel y edad." },
        { title: "Rituales de inicio y cierre", description: "Protocolos de 3 minutos." },
        { title: "Banco de señales de atención", description: "Alternativas al 'silencio, por favor'." },
        { title: "Sesión formativa en video", description: "El método aplicado paso a paso." },
        { title: "Comunidad de docentes", description: "Comparte prácticas con otros maestros." },
      ]}
      closing="Vuelve a ser el faro del aula."
    />
  );
}
