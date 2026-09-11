import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Baby,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Home,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { guardarContacto } from "@/lib/contactos";
import ninosJuegoReal from "@/assets/ninos-juego-real.jpg";


export const Route = createFileRoute("/mision-ninos")({
  head: () => ({
    meta: [
      { title: "Misión Niños 3-11 — Método AURA | Family Help" },
      {
        name: "description",
        content:
          "Método AURA para padres de niños de 3 a 11 años: reduce rabietas por pantallas con anticipación, juego real, entornos de calma y acompañamiento empático.",
      },
      { property: "og:title", content: "Misión Niños 3-11 — Método AURA | Family Help" },
      {
        property: "og:description",
        content:
          "Crea un ambiente de calma en casa sin peleas ni gritos. Micro-acciones de 3 días por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MisionNinos,
});

const AURA_MESSAGE = "Hola, quiero unirme a la Misión AURA para niños de 3 a 11 años.";

const AURA_PILARES = [
  {
    letra: "A",
    titulo: "Anticipar y Acordar",
    texto:
      "Pasa del «¡apaga eso ya!» a rutinas y avisos visuales que tu hijo pueda predecir sin entrar en ansiedad.",
    icono: Clock,
  },
  {
    letra: "U",
    titulo: "Unirse al Juego Real",
    texto:
      "Conecta con tu hijo proponiendo alternativas atractivas antes de pedirle que deje la pantalla.",
    icono: Users,
  },
  {
    letra: "R",
    titulo: "Regulaciones de Entorno",
    texto:
      "Diseña 'Zonas y Tiempos de Calma' en casa donde las pantallas simplemente no están presentes.",
    icono: Home,
  },
  {
    letra: "A",
    titulo: "Acompañar la Transición",
    texto:
      "Ayuda a tu hijo a procesar la frustración al apagar el dispositivo desde la empatía y la presencia.",
    icono: HeartHandshake,
  },
];

function CapturaAura({ compact = false }: { compact?: boolean }) {
  const [nombre, setNombre] = useState("");
  const [whats, setWhats] = useState("");
  const [enviado, setEnviado] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [AURA_MESSAGE];
    if (nombre.trim()) parts.push(`Soy ${nombre.trim()}.`);
    if (whats.trim()) parts.push(`Mi WhatsApp es ${whats.trim()}.`);
    void guardarContacto({
      origen: "Misión Niños (AURA®)",
      nombre,
      telefono: whats,
      interes: "Método AURA®",
    });
    window.open(buildWhatsAppUrl(parts.join(" ")), "_blank", "noopener,noreferrer");
    setEnviado(true);
  };


  if (enviado) {
    return (
      <div className="rounded-2xl border border-[var(--color-brand-moss)]/30 bg-[var(--color-brand-moss-soft)] p-5 text-left">
        <p className="flex items-center gap-2 font-semibold text-[var(--color-brand-moss)]">
          <CheckCircle2 className="h-5 w-5" /> ¡Listo! Te estamos redirigiendo a WhatsApp.
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Si no se abrió automáticamente,{" "}
          <a
            href={buildWhatsAppUrl(AURA_MESSAGE)}
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
        className="w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-[var(--color-brand-moss)] focus:ring-2 focus:ring-[var(--color-brand-moss)]/20"
      />
      <input
        type="tel"
        value={whats}
        onChange={(e) => setWhats(e.target.value)}
        placeholder="Tu WhatsApp (ej. +57 300 123 4567)"
        aria-label="Tu número de WhatsApp"
        className="w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-[var(--color-brand-moss)] focus:ring-2 focus:ring-[var(--color-brand-moss)]/20"
      />
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-moss)] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[var(--color-brand-moss)]/30 transition hover:translate-y-[-1px] hover:bg-[var(--color-brand-ink)]"
      >
        <MessageCircle className="h-5 w-5 transition group-hover:scale-110" />
        Sumarme a la Misión AURA por WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500">
        Sin spam. Pensado para la calma de tu familia.
      </p>
    </form>
  );
}

function MisionNinos() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--color-brand-terracotta-soft)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-brand-moss-soft)]/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-brand-clay)] hover:text-[var(--color-brand-ink)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-terracotta-soft)]/40 px-4 py-1.5 text-xs font-bold tracking-wide text-[var(--color-brand-clay)] uppercase">
              <Baby className="h-3.5 w-3.5" />
              Para Padres de Niños de 3 a 11 Años
            </span>

            <h1 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Crea un ambiente de calma en casa y reduce las rabietas por pantallas{" "}
              <span className="text-[var(--color-brand-clay)]">
                sin caer en peleas ni gritos.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Los niños no necesitan prohibiciones agresivas; necesitan anticipación, estructura
              amorosa y alternativas vivas en el mundo real.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {[
                "Acciones específicas para el día a día directo en tu WhatsApp",
                "Guía visual de rutinas para niños de 3 a 11 años",
                "Sin culpas, sin gritos, sin quitar pantallas a la fuerza",
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
              Empieza la Misión AURA hoy
            </h2>
            <p className="mt-1 mb-5 text-sm text-slate-500">
              Déjanos tu nombre y tu WhatsApp para enviarte el Día 1.
            </p>
            <CapturaAura />
          </div>
        </div>
      </section>

      {/* IMAGEN + PROMESA */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-brand-sand)] shadow-xl ring-1 ring-black/5">
              <img
                src={ninosJuegoReal}
                alt="Madre e hija pequeña dibujando juntas en el suelo del salón, sin pantallas"
                width={1280}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-[var(--color-brand-clay)] uppercase">
                La idea central
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-snug text-slate-900 md:text-4xl">
                Antes de pedirle a tu hijo que apague, ofrécele algo mejor que encender.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                El método AURA no lucha contra las pantallas. Construye alrededor de ellas un
                entorno predecible, afectivo y lleno de alternativas reales. Cuando el mundo fuera de
                la pantalla es también atractivo, la transición deja de ser una guerra.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "3 días", d: "de micro-acciones por WhatsApp" },
                  { t: "Acciones", d: "específicas para el día a día, aplicables a cualquier hora" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="rounded-2xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] p-5"
                  >
                    <p className="text-2xl font-extrabold text-[var(--color-brand-moss)]">{s.t}</p>
                    <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AURA GRID */}
      <section className="bg-[var(--color-brand-sand)]/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-widest text-[var(--color-brand-clay)] uppercase">
              El método AURA
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-slate-900 md:text-4xl">
              Cuatro pasos para transformar la dinámica digital en casa.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AURA_PILARES.map((pilar) => {
              const Icono = pilar.icono;
              return (
                <article
                  key={pilar.titulo}
                  className="group rounded-3xl border border-[var(--color-brand-sand)] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-brand-moss)]/10"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-moss-soft)] text-2xl font-extrabold text-[var(--color-brand-moss)]">
                      {pilar.letra}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-cream)] text-[var(--color-brand-clay)]">
                      <Icono className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-slate-900">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pilar.texto}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISIÓN WHATSAPP */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-brand-moss-soft)]/40 via-transparent to-[var(--color-brand-terracotta-soft)]/30" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-10 rounded-[2rem] border border-[var(--color-brand-sand)] bg-white p-8 shadow-xl shadow-slate-900/5 md:p-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-moss-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-brand-moss)]">
                <Sparkles className="h-3.5 w-3.5" />
                Misión por WhatsApp
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-slate-900 md:text-3xl">
                Misión AURA: 3 Días para Reducir las Rabietas y Recuperar la Calma en Casa
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Acciones específicas para el día a día por WhatsApp + Guía visual de rutinas para niños.
                Cada día un pilar del método aplicado a una situación real de tu hogar.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {[
                  "Día 1: Anticipar el final del tiempo de pantalla",
                  "Día 2: Preparar alternativas de juego real",
                  "Día 3: Acordar la primera Zona de Calma familiar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-moss)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--color-brand-cream)] p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-slate-900">Únete gratis</h3>
              <p className="mt-1 text-sm text-slate-500">
                Te enviamos el Día 1 directo a tu WhatsApp.
              </p>
              <div className="mt-5">
                <CapturaAura compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[var(--color-brand-ink)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            La calma de tu hogar empieza con una anticipación, no con un grito.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Tres días, una acción específica cada mañana y una micro-acción para probar con tu
            hijo esa misma tarde.
          </p>
          <a
            href={buildWhatsAppUrl(AURA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-moss)] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-sage)]"
          >
            <MessageCircle className="h-5 w-5" />
            Sumarme a la Misión AURA por WhatsApp
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}
