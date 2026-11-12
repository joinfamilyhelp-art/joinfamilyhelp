import { Fragment } from "react";
import { Brain, Ear, Sprout, Compass, ArrowRight, Heart } from "lucide-react";

export const RUTA_FAMILY_HELP = [
  {
    label: "Comprender",
    icon: Brain,
    antes: "Antes de juzgar.",
    texto: "Observar y descubrir qué está pasando.",
  },
  {
    label: "Escuchar",
    icon: Ear,
    antes: "Antes de reaccionar.",
    texto: "Reconocer necesidades, emociones y perspectivas.",
  },
  {
    label: "Diseñar",
    icon: Sprout,
    antes: "Antes de disciplinar.",
    texto: "Crear alternativas, entornos y acuerdos posibles.",
  },
  {
    label: "Elegir",
    icon: Compass,
    antes: "Con intención.",
    texto: "Decidir cómo queremos vivir y relacionarnos con la tecnología.",
  },
];

/** Ruta oficial Family Help: Comprender → Escuchar → Diseñar → Elegir. */
export function RutaFamilyHelp({
  className = "",
  detailed = false,
}: {
  className?: string;
  detailed?: boolean;
}) {
  if (detailed) {
    return (
      <ol className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
        {RUTA_FAMILY_HELP.map(({ label, icon: Icon, antes, texto }) => (
          <li
            key={label}
            className="rounded-2xl border border-white bg-white/85 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 bg-background text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              {label}
            </h3>
            <p className="mt-2 text-sm font-semibold text-[var(--color-brand-clay)]">{antes}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-brand-clay)]">{texto}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className={`flex items-start justify-center gap-2 sm:gap-4 ${className}`}>
      {RUTA_FAMILY_HELP.map(({ label, icon: Icon }, i) => (
        <Fragment key={label}>
          {i > 0 && <ArrowRight aria-hidden className="mt-4 h-5 w-5 shrink-0 text-primary/70" />}
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 bg-background text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <span className="text-xs font-bold text-primary sm:text-sm">{label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

/** Separador con corazón. */
export function DivisorCorazon({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} role="separator">
      <span className="h-px flex-1 bg-primary/50" />
      <Heart aria-hidden className="h-6 w-6 fill-[var(--color-brand-coral,#FF7F50)] text-[var(--color-brand-coral,#FF7F50)]" />
      <span className="h-px flex-1 bg-primary/50" />
    </div>
  );
}
