import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const HOTMART_URL = "#hotmart-checkout-placeholder";

type Tone = "sky" | "emerald" | "indigo" | "rose";

const TONE: Record<
  Tone,
  { bg: string; chip: string; accent: string; ring: string; grad: string }
> = {
  sky: {
    bg: "bg-sky-50",
    chip: "bg-sky-100 text-sky-800",
    accent: "text-sky-700",
    ring: "ring-sky-200",
    grad: "linear-gradient(135deg,#0c4a6e 0%,#0369a1 55%,#0284c7 100%)",
  },
  emerald: {
    bg: "bg-emerald-50",
    chip: "bg-emerald-100 text-emerald-800",
    accent: "text-emerald-700",
    ring: "ring-emerald-200",
    grad: "linear-gradient(135deg,#064e3b 0%,#047857 55%,#059669 100%)",
  },
  indigo: {
    bg: "bg-indigo-50",
    chip: "bg-indigo-100 text-indigo-800",
    accent: "text-indigo-700",
    ring: "ring-indigo-200",
    grad:
      "linear-gradient(135deg, var(--color-brand-ink) 0%, var(--color-brand-indigo) 55%, var(--color-brand-violet) 100%)",
  },
  rose: {
    bg: "bg-rose-50",
    chip: "bg-rose-100 text-rose-800",
    accent: "text-rose-700",
    ring: "ring-rose-200",
    grad: "linear-gradient(135deg,#4c0519 0%,#9f1239 55%,#e11d48 100%)",
  },
};

export type MissionSection = {
  eyebrow: string;
  title: string;
  body: ReactNode;
};

export type MissionInclude = {
  title: string;
  description: string;
};

export type MissionLayoutProps = {
  tone: Tone;
  audience: string;
  method: string;
  headline: ReactNode;
  subheadline: string;
  ctaLabel: string;
  problem: MissionSection;
  what: MissionSection;
  includes: MissionInclude[];
  extra?: ReactNode;
  closing?: string;
};

export function MissionLayout(props: MissionLayoutProps) {
  const t = TONE[props.tone];
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className={`relative overflow-hidden ${t.bg}`}>
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-100 opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -top-16 right-0 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[--color-brand-ink]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <span
            className={`mt-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${t.chip}`}
          >
            {props.audience} · {props.method}
          </span>

          <h1
            className="mt-6 font-serif text-3xl leading-[1.15] tracking-tight text-[--color-brand-ink] sm:text-5xl md:text-[3.25rem]"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            {props.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            {props.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={HOTMART_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[--color-brand-ink] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[--color-brand-indigo] hover:shadow-lg"
            >
              <ShoppingBag className="h-4 w-4" />
              {props.ctaLabel}
            </a>
            <a
              href="#incluye"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-[--color-brand-ink] hover:border-slate-300"
            >
              Ver qué incluye
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${t.accent}`}>
            {props.problem.eyebrow}
          </p>
          <h2
            className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            {props.problem.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {props.problem.body}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className={`${t.bg} border-y border-slate-100`}>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${t.accent}`}>
            {props.what.eyebrow}
          </p>
          <h2
            className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            {props.what.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {props.what.body}
          </div>
        </div>
      </section>

      {/* EXTRA (custom UI block per mission) */}
      {props.extra ? (
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">{props.extra}</div>
        </section>
      ) : null}

      {/* INCLUDES */}
      <section id="incluye" className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${t.accent}`}>
              Qué incluye
            </p>
            <h2
              className="mt-3 font-serif text-3xl tracking-tight text-[--color-brand-ink] sm:text-4xl"
              style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
            >
              Todo lo que recibes al unirte
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {props.includes.map((it) => (
              <li
                key={it.title}
                className={`flex gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ring-1 ${t.ring} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <span
                  className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${t.chip}`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[--color-brand-ink]">{it.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{it.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: t.grad }} />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-white sm:px-6 lg:px-8">
          <h2
            className="font-serif text-3xl tracking-tight sm:text-4xl"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
          >
            {props.closing ?? "Da el primer paso hoy."}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Un método claro, materiales listos para usar y un acompañamiento pensado para que
            avances con calma y foco.
          </p>
          <a
            href={HOTMART_URL}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[--color-brand-ink] shadow-lg transition-all hover:-translate-y-0.5"
          >
            <ShoppingBag className="h-4 w-4" />
            {props.ctaLabel}
          </a>
          <p className="mt-4 text-xs text-white/70">
            Pago seguro procesado por Hotmart · Garantía de 7 días
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
