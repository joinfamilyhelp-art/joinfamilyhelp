import { Fragment } from "react";
import { Brain, Ear, Sprout, Compass, ArrowRight, Heart } from "lucide-react";

const PASOS = [
  { label: "Comprender", icon: Brain },
  { label: "Escuchar", icon: Ear },
  { label: "Diseñar", icon: Sprout },
  { label: "Elegir", icon: Compass },
];

/** Ruta oficial Family Help: Comprender → Escuchar → Diseñar → Elegir. */
export function RutaFamilyHelp({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-start justify-center gap-2 sm:gap-4 ${className}`}>
      {PASOS.map(({ label, icon: Icon }, i) => (
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
