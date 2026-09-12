import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { supabase as supabaseLovable } from "@/integrations/supabase/client";

/**
 * Cliente de base de datos del sitio.
 *
 * Si existen las variables VITE_SUPABASE_EXTERNAL_URL y
 * VITE_SUPABASE_EXTERNAL_ANON_KEY (definidas en `.env.local` o en el hosting),
 * el sitio se conecta al proyecto Supabase propio de Family Help.
 * Si no existen, sigue usando la base gestionada por Lovable Cloud.
 */
const externalUrl = import.meta.env["VITE_SUPABASE_EXTERNAL_URL"] as string | undefined;
const externalKey = import.meta.env["VITE_SUPABASE_EXTERNAL_ANON_KEY"] as string | undefined;

export const usandoSupabasePropio = Boolean(externalUrl && externalKey);

export const db = usandoSupabasePropio
  ? createClient<Database>(externalUrl!, externalKey!, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : supabaseLovable;
