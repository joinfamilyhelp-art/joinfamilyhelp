CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE OR REPLACE FUNCTION public.is_team_member(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id
  )
$$;

CREATE POLICY "Los perfiles se ven a sí mismos" ON public.profiles
  FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Cada quien crea su perfil" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Cada quien edita su perfil" ON public.profiles
  FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE POLICY "Ver mis roles o admin ve todos" ON public.user_roles
  FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.contactos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  origen TEXT NOT NULL,
  nombre TEXT NOT NULL,
  correo TEXT,
  telefono TEXT,
  organizacion TEXT,
  audiencia TEXT,
  asistentes INTEGER,
  interes TEXT,
  mensaje TEXT,
  estado TEXT NOT NULL DEFAULT 'nuevo',
  notas TEXT
);
GRANT INSERT ON public.contactos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contactos TO authenticated;
GRANT ALL ON public.contactos TO service_role;
ALTER TABLE public.contactos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar un formulario" ON public.contactos
  FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "El equipo ve los contactos" ON public.contactos
  FOR SELECT TO authenticated USING (public.is_team_member(auth.uid()));
CREATE POLICY "El equipo actualiza los contactos" ON public.contactos
  FOR UPDATE TO authenticated
  USING (public.is_team_member(auth.uid()))
  WITH CHECK (public.is_team_member(auth.uid()));
CREATE POLICY "Los administradores eliminan contactos" ON public.contactos
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX contactos_created_at_idx ON public.contactos (created_at DESC);
CREATE INDEX contactos_estado_idx ON public.contactos (estado);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER contactos_set_updated_at
  BEFORE UPDATE ON public.contactos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();