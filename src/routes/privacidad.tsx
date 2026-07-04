import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Family Help" },
      {
        name: "description",
        content:
          "Cómo Family Help trata y protege los datos personales de quienes usan nuestro sitio y nuestras misiones digitales.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[var(--color-brand-ink)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
        <h1
          className="mt-10 font-serif text-4xl tracking-tight text-[var(--color-brand-ink)] sm:text-5xl"
          style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
        >
          Política de privacidad
        </h1>
        <p className="mt-6 text-sm text-slate-500">
          Esta página es un texto de referencia editable, mantenido por Family Help. El
          contenido definitivo será publicado por el equipo legal.
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-slate-700 sm:text-lg">
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-ink)]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              1. Responsable del tratamiento
            </h2>
            <p className="mt-3">
              Family Help es responsable del tratamiento de los datos personales recogidos a
              través de este sitio y de las misiones digitales asociadas.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-ink)]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              2. Datos que recopilamos
            </h2>
            <p className="mt-3">
              Recopilamos únicamente los datos necesarios para responder a tus solicitudes,
              enviarte contenido si lo autorizas y mejorar la experiencia del sitio.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-ink)]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              3. Pagos y distribución
            </h2>
            <p className="mt-3">
              Las compras de nuestras misiones se procesan a través de Hotmart, quien actúa como
              plataforma de distribución y procesamiento de pagos con sus propias políticas de
              privacidad.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-ink)]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              4. Tus derechos
            </h2>
            <p className="mt-3">
              Puedes solicitar acceso, rectificación o supresión de tus datos escribiéndonos a
              nuestro canal oficial de contacto.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
