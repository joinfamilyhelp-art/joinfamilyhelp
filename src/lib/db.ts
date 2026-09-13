import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

/**
 * Cliente único del Supabase propio de Family Help.
 * La clave publishable/anon es pública y solo permite lo autorizado por RLS.
 */
const externalUrl =
  (import.meta.env["VITE_SUPABASE_EXTERNAL_URL"] as string | undefined) ??
  "https://ujxxoagfdrkgbssutjnn.supabase.co";
const externalKey =
  (import.meta.env["VITE_SUPABASE_EXTERNAL_ANON_KEY"] as string | undefined) ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqeHhvYWdmZHJrZ2Jzc3V0am5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjY3MjgsImV4cCI6MjEwNDgwMjcyOH0.Yg-gbZmUy3R3d0PDCtTWy5Pzt1AbUKsmysq2bmTNQFk";

export const usandoSupabasePropio = true;

export const db = createClient<Database>(externalUrl, externalKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
