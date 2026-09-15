import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  Crown,
  Ear,
  Gift,
  HeartHandshake,
  Percent,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VIP_PRECIO, VIP_PRECIO_DETALLE, vipUrl } from "@/lib/membresia";

export const Route = createFileRoute("/membresia-vip")({
  head: () => ({
    meta: [
      { title: "Membresía VIP | Acompañamiento continuo — Family Help" },
      {
        name: "description",
        content:
          "Membresía VIP de Family Help por 19 USD al mes: recursos nuevos cada semana, sala de escucha semanal en vivo, acompañamiento grupal permanente y descuentos en sesiones personalizadas.",
      },
      { property: "og:title", content: "Membresía VIP | Family Help" },
      {
        property: "og:description",
        content:
          "Recursos semanales, sala de escucha en vivo, comunidad acompañada y descuentos en acompañamiento personalizado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MembresiaVipPage,
});

const BENEFICIOS = [
  {
    icono: Gift,
    titulo: "Primer acompañamiento personalizado incluido",
    texto:
      "Tu primera sesión 1 a 1 con un profesional de Family Help está incluida al iniciar. Conoces tu caso, defines prioridades y sales con un plan concreto.",
  },
  {
    icono: Wrench,
    titulo: "Recursos y herramientas premium",
    texto:
      "Biblioteca completa de guías, acuerdos listos para imprimir, guiones de conversación y microrretos según la edad de tus hijos o de tu grupo.",
  },
  {
    icono: Ear,
    titulo: "Sala de escucha semanal en vivo",
    texto:
      "Un encuentro por videollamada para contar lo que está pasando en casa o en el aula y salir con un siguiente paso concreto.",
  },
  {
    icono: HeartHandshake,
    titulo: "Acompañamiento grupal permanente",
    texto:
      "Comunidad privada moderada por el equipo: preguntas entre semana, casos reales y respuestas del equipo Family Help.",
  },
  {
    icono: Percent,
    titulo: "Descuentos en acompañamiento personalizado",
    texto:
      "Después de tu primera sesión incluida, accedes a tarifa preferencial en sesiones 1 a 1 con nuestros profesionales mientras tu membresía esté activa.",
  },
  {
    icono: Users,
    titulo: "Cupo prioritario en misiones y talleres",
    texto:
      "Entras primero a la Misión Conexión y a los talleres abiertos, sin costo adicional cuando el cupo lo permite.",
  },
  {
    icono: Sparkles,
    titulo: "Biblioteca y grabaciones",
    texto:
      "Acceso a todas las salas grabadas y al archivo completo de recursos de meses anteriores.",
  },
  {
    icono: BookOpenCheck,
    titulo: "Recursos nuevos cada semana",
    texto:
      "Cada semana sumamos guías, retos y contenido fresco adaptado a lo que la comunidad necesita.",
  },
];

const PARA_QUIEN = [
  "Familias que ya intentaron reglas y castigos y quieren otra forma.",
  "Docentes que necesitan ideas aplicables el lunes siguiente.",
  "Quien prefiere acompañamiento continuo en vez de un curso suelto.",
];

const FAQS = [
  {
    q: "¿Me puedo retirar cuando quiera?",
    r: "Sí. Es un cobro mensual y puedes cancelarlo en cualquier momento; conservas el acceso hasta el final del mes pagado.",
  },
  {
    q: "¿Y si no puedo asistir a la sala de escucha?",
    r: "Cada sesión queda grabada en la biblioteca de la membresía y puedes dejar tu caso por escrito para que lo abordemos.",
  },
  {
    q: "¿La membresía reemplaza el acompañamiento 1 a 1?",
    r: "No. Es el acompañamiento continuo del día a día; si necesitas un proceso personalizado, la membresía te da una tarifa preferencial.",
  },
];

function MembresiaVipPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-brand-ink)]">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--color-brand-terracotta)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[var(--color-brand-violet)]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              <Crown className="h-4 w-4" />
              Membresía VIP
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              No es un curso más. Es tener el equipo al lado todas las semanas.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Recursos nuevos cada semana, una sala de escucha en vivo para
              contar lo que está pasando y una comunidad que no juzga. Todo por
              menos de lo que cuesta una sesión suelta.
            </p>
            <ul className="mt-6 space-y-2">
              {PARA_QUIEN.map((p) => (
                <li key={p} className="flex items-start gap-2 text-white/85">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand-terracotta)]" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/95 p-8 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-terracotta)]">
              Plan mensual
            </p>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-[var(--color-brand-ink)]">
                {VIP_PRECIO}
              </span>
            </p>
            <p className="mt-1 text-sm text-[var(--color-brand-clay)]">
              {VIP_PRECIO_DETALLE}
            </p>
            <a
              href={vipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)] hover:shadow-md"
            >
              Quiero mi membresía VIP
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-xs text-[var(--color-brand-clay)]">
              Pago seguro. Puedes cancelar cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-terracotta)]">
              Qué incluye
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-brand-ink)] sm:text-4xl">
              Todo lo que recibes cada mes
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFICIOS.map((b) => (
              <article
                key={b.titulo}
                className="rounded-2xl border border-[var(--color-brand-sand)] bg-[var(--color-brand-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-terracotta)]/12 text-[var(--color-brand-terracotta)]">
                  <b.icono className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[var(--color-brand-ink)]">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                  {b.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-brand-sand)]">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold text-[var(--color-brand-ink)] sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-white/60 bg-white p-6"
              >
                <h3 className="font-semibold text-[var(--color-brand-ink)]">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-clay)]">
                  {f.r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--color-brand-ink)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Empieza esta semana, no el próximo año
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            La próxima sala de escucha ya tiene fecha. Únete y llega con tu caso.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={vipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-clay)]"
            >
              Unirme por {VIP_PRECIO} al mes
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/acompanamiento-profesional"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              Ver acompañamiento 1 a 1
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
