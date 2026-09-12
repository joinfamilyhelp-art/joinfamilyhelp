import { db as supabase } from "@/lib/db";

export type ContactoInput = {
  origen: string;
  nombre: string;
  correo?: string | null;
  telefono?: string | null;
  organizacion?: string | null;
  audiencia?: string | null;
  asistentes?: number | null;
  interes?: string | null;
  mensaje?: string | null;
};

const limpiar = (valor?: string | null) => {
  const texto = (valor ?? "").trim();
  return texto.length > 0 ? texto.slice(0, 2000) : null;
};

/**
 * Guarda el contacto en la base de datos. Nunca interrumpe el flujo del
 * usuario: si falla, solo se registra en consola y el envío por WhatsApp sigue.
 */
export async function guardarContacto(input: ContactoInput): Promise<void> {
  try {
    const { error } = await supabase.from("contactos").insert({
      origen: input.origen,
      nombre: limpiar(input.nombre) ?? "Sin nombre",
      correo: limpiar(input.correo),
      telefono: limpiar(input.telefono),
      organizacion: limpiar(input.organizacion),
      audiencia: limpiar(input.audiencia),
      asistentes:
        typeof input.asistentes === "number" && Number.isFinite(input.asistentes)
          ? input.asistentes
          : null,
      interes: limpiar(input.interes),
      mensaje: limpiar(input.mensaje),
    });
    if (error) console.error("No se pudo guardar el contacto:", error.message);
  } catch (error) {
    console.error("No se pudo guardar el contacto:", error);
  }
}

export const ESTADOS = ["nuevo", "contactado", "en proceso", "cerrado", "descartado"] as const;
export type EstadoContacto = (typeof ESTADOS)[number];
