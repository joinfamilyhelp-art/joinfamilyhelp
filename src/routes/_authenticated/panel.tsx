import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Download,
  Inbox,
  Loader2,
  LogOut,
  RefreshCw,
  Search,
  ShieldAlert,
  Trash2,
} from "lucide-react";
import { db as supabase } from "@/lib/db";
import { ESTADOS } from "@/lib/contactos";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/panel")({
  head: () => ({
    meta: [
      { title: "Panel de contactos | Family Help" },
      {
        name: "description",
        content:
          "Panel interno de Family Help para revisar y dar seguimiento a las solicitudes recibidas desde el sitio.",
      },
      { property: "og:title", content: "Panel de contactos | Family Help" },
      {
        property: "og:description",
        content: "Seguimiento interno de solicitudes y contactos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PanelPage,
});

type Contacto = {
  id: string;
  created_at: string;
  origen: string;
  nombre: string;
  correo: string | null;
  telefono: string | null;
  organizacion: string | null;
  audiencia: string | null;
  asistentes: number | null;
  interes: string | null;
  mensaje: string | null;
  estado: string;
  notas: string | null;
};

const COLORES: Record<string, string> = {
  nuevo: "bg-[var(--color-brand-terracotta-soft)] text-[var(--color-brand-clay)]",
  contactado: "bg-[var(--color-brand-mist)] text-[var(--color-brand-ink)]",
  "en proceso": "bg-[var(--color-brand-violet-soft)] text-[var(--color-brand-violet)]",
  cerrado: "bg-[var(--color-brand-moss-soft)] text-[var(--color-brand-moss)]",
  descartado: "bg-slate-100 text-slate-500",
};

function PanelPage() {
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const [esAdmin, setEsAdmin] = useState(false);
  const [tieneAcceso, setTieneAcceso] = useState<boolean | null>(null);
  const [errorAcceso, setErrorAcceso] = useState<string | null>(null);
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroOrigen, setFiltroOrigen] = useState("todos");
  const [correoUsuario, setCorreoUsuario] = useState("");

  const cargar = useCallback(async () => {
    setCargando(true);
    setErrorAcceso(null);
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData.user;
    setCorreoUsuario(user?.email ?? "");
    if (userError || !user) {
      setTieneAcceso(false);
      setCargando(false);
      return;
    }
    const { data: roles, error: rolesError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id);
    if (rolesError) {
      console.error("No se pudieron consultar los permisos del equipo", rolesError);
      setErrorAcceso(
        "No fue posible consultar tus permisos. Revisa que las reglas de acceso estén completas en tu base de datos.",
      );
      setTieneAcceso(false);
      setCargando(false);
      return;
    }
    const listaRoles = (roles ?? []).map((r) => r.role as string);
    setEsAdmin(listaRoles.includes("admin"));
    if (listaRoles.length === 0) {
      setTieneAcceso(false);
      setCargando(false);
      return;
    }
    setTieneAcceso(true);
    const { data, error: contactosError } = await supabase
      .from("contactos")
      .select("*")
      .order("created_at", { ascending: false });
    if (contactosError) {
      console.error("No se pudieron cargar los contactos", contactosError);
      setErrorAcceso(
        "Tu cuenta está autorizada, pero no fue posible cargar los contactos. Revisa los permisos de la tabla contactos.",
      );
      setCargando(false);
      return;
    }
    setContactos((data ?? []) as Contacto[]);
    setCargando(false);
  }, []);

  useEffect(() => {
    void cargar();
  }, [cargar]);

  const origenes = useMemo(
    () => Array.from(new Set(contactos.map((c) => c.origen))).sort(),
    [contactos],
  );

  const visibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return contactos.filter((c) => {
      if (filtroEstado !== "todos" && c.estado !== filtroEstado) return false;
      if (filtroOrigen !== "todos" && c.origen !== filtroOrigen) return false;
      if (!q) return true;
      return [c.nombre, c.correo, c.telefono, c.organizacion, c.mensaje, c.interes]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q));
    });
  }, [contactos, busqueda, filtroEstado, filtroOrigen]);

  const actualizar = async (id: string, cambios: Partial<Contacto>) => {
    setContactos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...cambios } : c)),
    );
    await supabase.from("contactos").update(cambios).eq("id", id);
  };

  const eliminar = async (id: string) => {
    if (!window.confirm("¿Eliminar este contacto de forma permanente?")) return;
    setContactos((prev) => prev.filter((c) => c.id !== id));
    await supabase.from("contactos").delete().eq("id", id);
  };

  const exportar = () => {
    const columnas: (keyof Contacto)[] = [
      "created_at",
      "origen",
      "nombre",
      "correo",
      "telefono",
      "organizacion",
      "audiencia",
      "asistentes",
      "interes",
      "mensaje",
      "estado",
      "notas",
    ];
    const escapar = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [
      columnas.join(","),
      ...visibles.map((c) => columnas.map((k) => escapar(c[k])).join(",")),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `contactos-family-help-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const salir = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/acceso" });
  };

  const inputCls =
    "rounded-xl border border-[var(--color-brand-sand)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-brand-ink)] outline-none focus:border-[var(--color-brand-terracotta)] focus:ring-2 focus:ring-[var(--color-brand-terracotta)]/20";

  if (cargando) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--color-brand-cream)]">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--color-brand-terracotta)]" />
      </div>
    );
  }

  if (tieneAcceso === false) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--color-brand-cream)] px-4">
        <div className="max-w-md rounded-3xl border border-[var(--color-brand-sand)] bg-white p-8 text-center shadow-sm">
          <ShieldAlert className="mx-auto h-10 w-10 text-[var(--color-brand-terracotta)]" />
          <h1 className="mt-4 text-xl font-bold text-[var(--color-brand-ink)]">
            Tu cuenta aún no tiene acceso
          </h1>
          <p className="mt-2 text-sm text-[var(--color-brand-clay)]">
            {errorAcceso ? (
              errorAcceso
            ) : (
              <>
                Creaste la cuenta <strong>{correoUsuario}</strong>, pero un
                administrador debe habilitarte antes de ver los contactos.
              </>
            )}
          </p>
          <Button
            onClick={salir}
            variant="outline"
            className="mt-6 rounded-full"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand-terracotta)]">
              Panel interno
            </p>
            <h1 className="mt-2 text-2xl font-bold text-[var(--color-brand-ink)] sm:text-3xl">
              Contactos y solicitudes
            </h1>
            <p className="mt-1 text-sm text-[var(--color-brand-clay)]">
              {contactos.length} en total · {visibles.length} visibles ·{" "}
              {correoUsuario}
              {esAdmin ? " (administrador)" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => void cargar()}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-sand)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-mist)]"
            >
              <RefreshCw className="h-4 w-4" /> Actualizar
            </button>
            <button
              onClick={exportar}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-sand)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-brand-clay)] hover:bg-[var(--color-brand-mist)]"
            >
              <Download className="h-4 w-4" /> Exportar
            </button>
            <button
              onClick={salir}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-terracotta)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-brand-clay)]"
            >
              <LogOut className="h-4 w-4" /> Salir
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-brand-clay)]/60" />
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre, correo, teléfono u organización"
              className={`${inputCls} w-full pl-10`}
            />
          </div>
          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className={inputCls}
          >
            <option value="todos">Todos los estados</option>
            {ESTADOS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <select
            value={filtroOrigen}
            onChange={(e) => setFiltroOrigen(e.target.value)}
            className={inputCls}
          >
            <option value="todos">Todos los orígenes</option>
            {origenes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {visibles.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-[var(--color-brand-sand)] bg-white p-12 text-center">
            <Inbox className="mx-auto h-10 w-10 text-[var(--color-brand-clay)]/50" />
            <p className="mt-3 font-semibold text-[var(--color-brand-ink)]">
              Aún no hay contactos que coincidan
            </p>
            <p className="mt-1 text-sm text-[var(--color-brand-clay)]">
              Cada formulario enviado desde el sitio aparecerá aquí
              automáticamente.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {visibles.map((c) => (
              <article
                key={c.id}
                className="rounded-2xl border border-[var(--color-brand-sand)] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-[var(--color-brand-ink)]">
                        {c.nombre}
                      </h2>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${COLORES[c.estado] ?? "bg-slate-100 text-slate-600"}`}
                      >
                        {c.estado}
                      </span>
                      <span className="rounded-full bg-[var(--color-brand-mist)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-brand-clay)]">
                        {c.origen}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-brand-clay)]/80">
                      {new Date(c.created_at).toLocaleString("es-CO")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={c.estado}
                      onChange={(e) =>
                        void actualizar(c.id, { estado: e.target.value })
                      }
                      className={inputCls}
                    >
                      {ESTADOS.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                    {esAdmin ? (
                      <button
                        onClick={() => void eliminar(c.id)}
                        aria-label="Eliminar contacto"
                        className="rounded-full p-2.5 text-[var(--color-brand-clay)] hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["Correo", c.correo],
                    ["Teléfono", c.telefono],
                    ["Organización", c.organizacion],
                    ["Audiencia", c.audiencia],
                    ["Asistentes", c.asistentes?.toString() ?? null],
                    ["Interés", c.interes],
                  ]
                    .filter(([, v]) => Boolean(v))
                    .map(([k, v]) => (
                      <div key={k as string}>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-clay)]/70">
                          {k}
                        </dt>
                        <dd className="text-[var(--color-brand-ink)]">{v}</dd>
                      </div>
                    ))}
                </dl>

                {c.mensaje ? (
                  <p className="mt-4 rounded-xl bg-[var(--color-brand-mist)]/60 px-4 py-3 text-sm text-[var(--color-brand-clay)]">
                    {c.mensaje}
                  </p>
                ) : null}

                <label className="mt-4 block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-clay)]/70">
                    Notas internas
                  </span>
                  <textarea
                    rows={2}
                    defaultValue={c.notas ?? ""}
                    onBlur={(e) => {
                      if (e.target.value !== (c.notas ?? ""))
                        void actualizar(c.id, { notas: e.target.value });
                    }}
                    placeholder="Escribe el seguimiento aquí…"
                    className={`${inputCls} mt-1.5 w-full resize-none`}
                  />
                </label>

                <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                  {c.telefono ? (
                    <a
                      href={`https://wa.me/${c.telefono.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-brand-moss)] underline"
                    >
                      Escribir por WhatsApp
                    </a>
                  ) : null}
                  {c.correo ? (
                    <a
                      href={`mailto:${c.correo}`}
                      className="text-[var(--color-brand-clay)] underline"
                    >
                      Enviar correo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
