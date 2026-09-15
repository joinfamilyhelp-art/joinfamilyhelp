import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Enlace externo de pago de la Membresía VIP (Hotmart u otra pasarela).
 * Mientras esté vacío, los botones llevan a WhatsApp para inscripción manual.
 */
export const VIP_CHECKOUT_URL = "";

export const VIP_PRECIO = "19 USD";
export const VIP_PRECIO_DETALLE = "al mes · cancela cuando quieras";

export const VIP_FALLBACK_URL = buildWhatsAppUrl(
  "Hola, quiero unirme a la Membresía VIP de Family Help (19 USD al mes).",
);

export const vipUrl = VIP_CHECKOUT_URL || VIP_FALLBACK_URL;
