import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Family Help" },
      {
        name: "description",
        content:
          "Condiciones de uso del sitio Family Help y de las misiones digitales distribuidas a través de Hotmart.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[--color-brand-ink]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
        <h1
          className="mt-10 font-serif text-4xl tracking-tight text-[--color-brand-ink] sm:text-5xl"
          style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}
        >
          Términos y condiciones
        </h1>
        <p className="mt-6 text-sm text-slate-500">
          Esta página es un texto de referencia editable, mantenido por Family Help. El
          contenido definitivo será publicado por el equipo legal.
        </p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-slate-700 sm:text-lg">
          <section>
            <h2 className="font-serif text-2xl text-[--color-brand-ink]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              1. Naturaleza del servicio
            </h2>
            <p className="mt-3">
              Family Help ofrece misiones digitales y la plataforma BRÚJULA® como sistemas de
              acompañamiento diario para el desarrollo de la autonomía personal. No sustituyen
              asesoría profesional cuando ésta sea necesaria.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[--color-brand-ink]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              2. Compra y distribución
            </h2>
            <p className="mt-3">
              Las misiones se comercializan a través de Hotmart, plataforma independiente que
              gestiona el proceso de pago, entrega y garantía comercial según sus términos.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[--color-brand-ink]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              3. Uso del contenido
            </h2>
            <p className="mt-3">
              El contenido descargable es de uso personal. No está permitida su redistribución
              comercial sin autorización previa por escrito.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[--color-brand-ink]" style={{ fontFamily: "Cinzel, serif", fontWeight: 500 }}>
              4. Sin promesas de resultados
            </h2>
            <p className="mt-3">
              Nuestras herramientas están diseñadas como sistemas de acompañamiento. No
              garantizan resultados automáticos: los avances dependen del uso constante y del
              contexto personal de cada usuario.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
