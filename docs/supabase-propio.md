# Pasar Family Help a tu propio Supabase

Hoy la base de datos está vacía (0 contactos, 0 usuarios), así que el cambio es limpio:
no hay que migrar información, solo crear la estructura en tu cuenta y apuntar el sitio ahí.

## 1. Crea el proyecto

1. Entra a https://supabase.com y crea una cuenta.
2. Crea un proyecto nuevo (elige la región más cercana a Colombia: `us-east-1`).
3. Guarda la contraseña de la base de datos en un lugar seguro.

## 2. Crea las tablas

1. En tu proyecto, abre **SQL Editor → New query**.
2. Copia y pega todo el contenido de `docs/supabase-propio-esquema.sql`.
3. Pulsa **Run**. Debe terminar sin errores.

Esto crea:

- `contactos` — todas las solicitudes de los formularios del sitio.
- `profiles` — datos básicos de cada cuenta del equipo.
- `user_roles` — permisos (`admin` / `staff`).
- Las reglas de seguridad: cualquier visitante puede enviar un formulario,
  pero solo el equipo puede ver o editar los contactos.

## 3. Activa el acceso por correo y contraseña

En **Authentication → Providers → Email**: activado.
Desactiva "Confirm email" solo si quieres que las cuentas entren de inmediato.

## 4. Datos de conexión

En **Project Settings → API** copia:

- **Project URL** (por ejemplo `https://xxxx.supabase.co`)
- **anon / publishable key**

Envíamelos y dejo el sitio conectado a tu proyecto. La clave `service_role` **no** me la envíes ni la pongas en el sitio.

## 5. Crear el primer administrador

Después de conectar, crea tu cuenta en `/acceso` y ejecuta en el SQL Editor:

```sql
insert into public.user_roles (user_id, role)
select id, 'admin' from auth.users where email = 'TU-CORREO@ejemplo.com';
```

Desde ahí ya puedes dar acceso al resto del equipo repitiendo la consulta con `'staff'`.

## 6. Cómo queda conectado el sitio

El sitio ya está preparado: usa tu proyecto en cuanto existan estas dos variables.

- Local: copia `.env.local.ejemplo` como `.env.local` y completa la clave anon.
- Cloudflare Pages: Settings → Environment variables, agrega las mismas dos.

```
VITE_SUPABASE_EXTERNAL_URL=https://ujxxoagfdrkgbssutjnn.supabase.co
VITE_SUPABASE_EXTERNAL_ANON_KEY=<tu clave anon>
```

Sin esas variables el sitio sigue usando la base de Lovable Cloud, así que no hay riesgo de quedarse sin servicio durante el cambio.
