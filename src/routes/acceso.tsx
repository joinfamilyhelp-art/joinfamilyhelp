import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogIn, Loader2 } from "lucide-react";
import { db as supabase } from "@/lib/db";

export const Route = createFileRoute("/acceso")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Acceso del equipo | Family Help" },
      {
        name: "description",
        content:
          "Ingreso privado para el equipo de Family Help al panel de contactos y solicitudes.",
      },
      { property: "og:title", content: "Acceso del equipo | Family Help" },
      {
        property: "og:description",
        content: "Ingreso privado al panel interno de Family Help.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccesoPage,
});

function AccesoPage() {
  const navigate = useNavigate();
  const [modo, setModo] = useState<"entrar" | "crear">("entrar");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/panel" });
    });
  }, [navigate]);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setAviso(null);
    setCargando(true);
    try {
      if (modo === "crear") {
        const { data, error: err } = await supabase.auth.signUp({
          email: correo.trim(),
          password: clave,
          options: {
            emailRedirectTo: `${window.location.origin}/panel`,
            data: { full_name: nombre.trim() },
          },
        });
        if (err) throw err;
        if (!data.session) {
          setAviso(
            "Te enviamos un correo de confirmación. Ábrelo para activar tu cuenta.",
          );
          return;
        }
        navigate({ to: "/panel" });
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({
          email: correo.trim(),
          password: clave,
        });
        if (err) throw err;
        navigate({ to: "/panel" });
      }
    } catch (err) {
      const mensaje = err instanceof Error ? err.message : "Algo salió mal.";
      setError(
        mensaje.includes("Invalid login credentials")
          ? "Correo o contraseña incorrectos."
          : mensaje.includes("already registered")
            ? "Ese correo ya tiene una cuenta. Inicia sesión."
            : mensaje,
      );
    } finally {
      setCargando(false);
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-[var(--color-brand-sand)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20";

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[var(--color-brand-cream)] px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-[var(--color-brand-sand)] bg-white p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
          Uso interno
        </p>
        <h1 className="mt-2 text-2xl font-bold text-[var(--color-brand-ink)]">
          {modo === "entrar" ? "Acceso del equipo" : "Crear cuenta del equipo"}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-brand-clay)]">
          Panel privado de contactos y solicitudes de Family Help.
        </p>

        <form onSubmit={enviar} className="mt-6 space-y-4">
          {modo === "crear" ? (
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
                Nombre completo
              </span>
              <input
                type="text"
                required
                maxLength={100}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={inputCls}
              />
            </label>
          ) : null}
          <label className="block">
            <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
              Correo
            </span>
            <input
              type="email"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[var(--color-brand-ink)]">
              Contraseña
            </span>
            <input
              type="password"
              required
              minLength={6}
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className={inputCls}
            />
          </label>

          {error ? (
            <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
              {error}
            </p>
          ) : null}
          {aviso ? (
            <p className="rounded-xl bg-[var(--color-brand-moss-soft)] px-4 py-2.5 text-sm font-medium text-[var(--color-brand-moss)]">
              {aviso}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={cargando}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[var(--color-brand-clay)] disabled:opacity-60"
          >
            {cargando ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <LogIn className="h-5 w-5" />
            )}
            {modo === "entrar" ? "Entrar" : "Crear cuenta"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setModo(modo === "entrar" ? "crear" : "entrar");
            setError(null);
            setAviso(null);
          }}
          className="mt-5 w-full text-center text-sm font-medium text-[var(--color-brand-clay)] underline"
        >
          {modo === "entrar"
            ? "¿Eres parte del equipo y aún no tienes cuenta? Crear cuenta"
            : "Ya tengo cuenta, iniciar sesión"}
        </button>
      </div>
    </div>
  );
}
