import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain,
  Ear,
  Compass,
  Zap,
  ShieldCheck,
  Wrench,
  HandHeart,
  ChevronDown,
  MessageCircle,
  Mic,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import escuchandoAudio from "@/assets/escuchando-audio.jpg";

export const Route = createFileRoute("/mision-conexion")({
  head: () => ({
    meta: [
      { title: "Misión Conexión — 3 Días para Transformar la Dinámica Digital en Casa | Family Help" },
      {
        name: "description",
        content:
          "Misión gratuita por WhatsApp: 3 días para recuperar la paz y la conexión en casa sin quitar pantallas ni entrar en peleas. Píldoras de audio breves y al grano, micro-acciones diarias.",
      },
      { property: "og:title", content: "Misión Conexión — 3 Días para Transformar la Dinámica Digital en Casa" },
      {
        property: "og:description",
        content:
          "Una experiencia práctica por WhatsApp con píldoras de audio breves y al grano y micro-acciones diarias diseñadas para la vida real. Sin culpas, sin prohibiciones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MisionConexionPage,
});

const MISION_URL = "https://app.joinfamilyhelp.com/mision-conexion";

const DIAS = [
  {
    dia: "Día 1",
    titulo: "COMPRENDER",
    matiz: "(Sin juzgar)",
    icono: Brain,
    audio: "Entiende qué pasa en el cerebro de tus hijos y por qué no es terquedad, es biología.",
    accion: "Observa el entorno digital de tu hogar sin regañar ni imponer.",
  },
  {
    dia: "Día 2",
    titulo: "ESCUCHAR Y DISEÑAR",
    matiz: "(Sin pelear)",
    icono: Ear,
    audio: "Abre una conversación sin defensas y ajusta el entorno físico.",
    accion:
      "Define la primera 'Zona Libre de Pantallas' en casa (ej. la mesa o las habitaciones de noche).",
  },
  {
    dia: "Día 3",
    titulo: "ELEGIR",
    matiz: "(Sin prohibir)",
    icono: Compass,
    audio: "Transforma la dinámica para construir autonomía y criterio en tus hijos.",
    accion: "Acuerda el primer compromiso mutuo para el fin de semana.",
  },
];

const VALORES = [
  {
    icono: Zap,
    titulo: "100% Adaptado a tu tiempo",
    texto:
      "Formato WhatsApp con píldoras de audio breves y al grano que puedes escuchar mientras vas al trabajo.",
  },
  {
    icono: ShieldCheck,
    titulo: "Cero Culpa",
    texto: "No buscamos culpables ni juzgamos cómo has criado hasta hoy.",
  },
  {
    icono: Wrench,
    titulo: "Criterio sobre Reglas",
    texto: "No te pedimos quitar teléfonos; te enseñamos a rediseñar el entorno.",
  },
  {
    icono: HandHeart,
    titulo: "Acompañamiento",
    texto: "No estás solo/a, miles de familias están haciendo este mismo proceso.",
  },
];

const FAQS = [
  {
    q: "¿Tengo que conectarme a una hora específica?",
    a: "No, recibes píldoras de audio y recursos en tu WhatsApp para escucharlos cuando tengas un par de minutos libres.",
  },
  {
    q: "¿Tengo que quitarle el celular a mi hijo?",
    a: "Para nada. La Misión trabaja en el entorno y en la comunicación, no en la prohibición.",
  },
];

function CapturaForm({ compact = false }: { compact?: boolean }) {
  const [nombre, setNombre] = useState("");
  const [whats, setWhats] = useState("");
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (nombre.trim()) params.set("nombre", nombre.trim());
    if (whats.trim()) params.set("whatsapp", whats.trim());
    const url = params.size ? `${MISION_URL}?${params.toString()}` : MISION_URL;
    window.open(url, "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-2xl border border-[var(--color-brand-moss)]/30 bg-[var(--color-brand-moss-soft)] p-5 text-left">
        <p className="flex items-center gap-2 font-semibold text-[var(--color-brand-moss)]">
          <CheckCircle2 className="h-5 w-5" /> ¡Listo! Te estamos redirigiendo a la Misión Conexión.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Si no se abrió automáticamente,{" "}
          <a
            href={MISION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-brand-clay)] underline"
          >
            toca aquí para continuar
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
        aria-label="Tu nombre"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
      />
      <input
        type="tel"
        value={whats}
        onChange={(e) => setWhats(e.target.value)}
        placeholder="Tu WhatsApp (ej. +57 300 123 4567)"
        aria-label="Tu número de WhatsApp"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20"
      />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-terracotta)] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[var(--color-brand-terracotta)]/30 transition hover:translate-y-[-1px] hover:bg-[var(--color-brand-clay)]"
      >
        <MessageCircle className="h-5 w-5 transition group-hover:scale-110" />
        Únete gratis a la Misión Conexión por WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500">
        Sin spam. 100% enfocado en tu tranquilidad familiar.
      </p>
    </form>
  );
}

function MisionConexionPage() {
  return (
    <div className="bg-[var(--color-brand-cream)] text-slate-800">
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--color-brand-terracotta-soft)]/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-brand-moss-soft)] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-terracotta-soft)]/40 px-4 py-1.5 text-xs font-bold tracking-wide text-[var(--color-brand-clay)] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Misión Gratuita por WhatsApp • 3 Días
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
              3 días para recuperar la paz y la conexión en casa{" "}
              <span className="text-[var(--color-brand-clay)]">
                sin quitar pantallas ni entrar en peleas.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Una experiencia práctica por WhatsApp con píldoras de audio breves y al grano y
              micro-acciones diarias diseñadas para la vida real.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {[
                "Píldoras de audio breves y al grano directo en tu WhatsApp",
                "Micro-acciones aplicables desde el día 1",
                "Sin culpas, sin sermones, sin prohibiciones inútiles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[var(--color-brand-sand)] bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8">
            <h2 className="font-display text-xl font-bold text-slate-900">
              Empieza tu Misión hoy
            </h2>
            <p className="mt-1 mb-5 text-sm text-slate-500">
              Déjanos tu nombre y tu WhatsApp para enviarte el Día 1.
            </p>
            <CapturaForm />
          </div>
        </div>
      </section>

      {/* 2. CRONOGRAMA 3 DÍAS */}
      <section className="bg-[var(--color-brand-sand)]/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-widest text-[var(--color-brand-clay)] uppercase">
              La promesa del reto
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 md:text-4xl">
              Un paso pequeño por día. Un cambio grande en casa.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DIAS.map((d, i) => (
              <div
                key={d.dia}
                className="group relative rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-brand-terracotta)]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--color-brand-terracotta-soft)]/40 px-3 py-1 text-xs font-bold text-[var(--color-brand-clay)]">
                    {d.dia}
                  </span>
                  <d.icono className="h-7 w-7 text-[var(--color-brand-terracotta)] transition group-hover:scale-110" />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-slate-900">
                  {d.titulo} <span className="text-sm font-semibold text-slate-500">{d.matiz}</span>
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-[var(--color-brand-cream)] p-4">
                    <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[var(--color-brand-clay)] uppercase">
                      <Mic className="h-3.5 w-3.5" /> Píldora de audio
                    </p>
                    <p className="mt-1.5 text-sm text-slate-600">{d.audio}</p>
                  </div>
                  <div className="rounded-xl bg-[var(--color-brand-moss-soft)] p-4">
                    <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[var(--color-brand-moss)] uppercase">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Micro-acción
                    </p>
                    <p className="mt-1.5 text-sm text-slate-600">{d.accion}</p>
                  </div>
                </div>
                {i < DIAS.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 hidden h-6 w-6 -translate-y-1/2 text-[var(--color-brand-terracotta-soft)] md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ FUNCIONA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-widest text-[var(--color-brand-clay)] uppercase">
              Sección de valor
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 md:text-4xl">
              ¿Por qué funciona la Misión Conexión?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALORES.map((v) => (
              <div
                key={v.titulo}
                className="flex gap-4 rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-terracotta-soft)]/40">
                  <v.icono className="h-6 w-6 text-[var(--color-brand-clay)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{v.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ / OBJECIONES */}
      <section className="bg-[var(--color-brand-sand)]/60 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-3xl font-extrabold text-slate-900">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[var(--color-brand-sand)] bg-white p-5 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-brand-terracotta)] transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-brand-terracotta-soft)]/30 via-transparent to-[var(--color-brand-moss-soft)]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl leading-snug font-extrabold text-slate-900 md:text-4xl">
            El cambio en tu hogar no empieza con un sermón,{" "}
            <span className="text-[var(--color-brand-clay)]">empieza con un clic.</span>
          </h2>
          <div className="mx-auto mt-8 max-w-md rounded-3xl border border-[var(--color-brand-sand)] bg-white p-6 shadow-xl shadow-slate-900/5">
            <CapturaForm compact />
          </div>
        </div>
      </section>

      {/* STICKY CTA (móvil y desktop) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-brand-sand)] bg-white/95 p-3 backdrop-blur md:p-4">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">
          <a
            href={MISION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-terracotta)] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[var(--color-brand-terracotta)]/30 transition hover:bg-[var(--color-brand-clay)] md:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            Comenzar la Misión Conexión Ahora
          </a>
        </div>
      </div>
      {/* Espaciador para que el sticky no tape el footer */}
      <div className="h-20" aria-hidden="true" />
    </div>
  );
}
