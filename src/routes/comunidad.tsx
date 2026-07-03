import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Quote, Users, GraduationCap, UserRound, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    meta: [
      { title: "Comunidad — Muro de Transformación | Family Help" },
      {
        name: "description",
        content:
          "Un muro tranquilo, sin feeds ni notificaciones. Historias reales de familias, docentes y adultos que recuperaron su atención.",
      },
      { property: "og:title", content: "Comunidad Family Help" },
      {
        property: "og:description",
        content: "Un muro tranquilo con historias reales de transformación.",
      },
    ],
  }),
  component: Comunidad,
});

type Tone = "sky" | "emerald" | "rose";

const TONE: Record<Tone, { bg: string; chip: string; icon: string }> = {
  sky: { bg: "bg-sky-50", chip: "bg-sky-100 text-sky-800", icon: "text-sky-700" },
  emerald: {
    bg: "bg-emerald-50",
    chip: "bg-emerald-100 text-emerald-800",
    icon: "text-emerald-700",
  },
  rose: { bg: "bg-rose-50", chip: "bg-rose-100 text-rose-800", icon: "text-rose-700" },
};

const TESTIMONIOS: {
  quote: string;
  name: string;
  role: string;
  tag: string;
  tone: Tone;
  icon: typeof Users;
}[] = [
  {
    quote:
      "El método PUENTE nos devolvió las cenas sin pantallas. Mis hijos volvieron a conversar.",
    name: "Carolina M.",
    role: "Madre de 2 adolescentes",
    tag: "Misión Familias",
    tone: "sky",
    icon: Users,
  },
  {
    quote:
      "Implementar el método FARO redujo la dispersión en el aula notablemente. Los chicos cuidan su atención de forma autónoma.",
    name: "Javier R.",
    role: "Profesor de Secundaria",
    tag: "Misión Docentes",
    tone: "emerald",
    icon: GraduationCap,
  },
  {
    quote:
      "La Bitácora y el Radar me hicieron ver cuánto tiempo perdía de manera inconsciente. Recuperé el control de mi jornada.",
    name: "Andrés D.",
    role: "Diseñador Independiente",
    tag: "Misión Adultos",
    tone: "rose",
    icon: UserRound,
  },
];

function Comunidad() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, var(--color-brand-mist) 0%, #ffffff 65%, #ffffff 100%)",
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
              <Sparkles className="h-3.5 w-3.5" />
              Muro de transformación
            </span>
            <h1
              className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-[--color-brand-ink] sm:text-5xl md:text-[3.25rem]"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Historias reales,{" "}
              <span
                className="text-[--color-brand-violet]"
                style={{ fontFamily: "Satisfy, cursive" }}
              >
                sin ruido
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Un espacio limpio para inspirar confianza a través de la experiencia de otros.
              Sin feeds infinitos, sin notificaciones, sin métricas de vanidad. Solo personas
              que decidieron recuperar su atención.
            </p>
          </div>
        </div>
      </section>

      {/* WALL */}
      <section className="border-t border-[--color-brand-mist] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {TESTIMONIOS.map((t) => {
              const tone = TONE[t.tone];
              const Icon = t.icon;
              return (
                <article
                  key={t.name}
                  className={`rounded-2xl border border-[--color-brand-mist] ${tone.bg} p-7 shadow-sm`}
                >
                  <Quote className={`h-6 w-6 ${tone.icon}`} />
                  <p className="mt-4 text-base leading-relaxed text-slate-800">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/70 pt-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon className={`h-5 w-5 ${tone.icon}`} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[--color-brand-ink]">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                  <span
                    className={`mt-5 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tone.chip}`}
                  >
                    {t.tag}
                  </span>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-16 max-w-xl text-center text-sm italic text-slate-500">
            Este muro se actualiza con calma. Sin infinite scroll. Sin ansiedad.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[--color-brand-mist] bg-[--color-brand-mist]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2
            className="font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            ¿Y si la próxima historia fuera la tuya?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Elige una misión y da el primer paso hoy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/mision-familias"
              className="rounded-full bg-[--color-brand-ink] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[--color-brand-indigo]"
            >
              Misión Familias
            </Link>
            <Link
              to="/mision-docentes"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[--color-brand-ink] shadow-sm transition-all hover:-translate-y-0.5"
            >
              Misión Docentes
            </Link>
            <Link
              to="/mision-jovenes"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[--color-brand-ink] shadow-sm transition-all hover:-translate-y-0.5"
            >
              Misión Jóvenes
            </Link>
            <Link
              to="/mision-adultos"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[--color-brand-ink] shadow-sm transition-all hover:-translate-y-0.5"
            >
              Misión Adultos
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[--color-brand-mist] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Family Help®. Tecnología al servicio del desarrollo humano.
        </div>
      </footer>
    </div>
  );
}
