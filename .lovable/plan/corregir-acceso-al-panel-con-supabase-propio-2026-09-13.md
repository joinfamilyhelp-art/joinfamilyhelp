# Corregir acceso al panel con Supabase propio

## Objetivo
Eliminar la conexión alternativa a la base anterior para que el registro, el inicio de sesión y el panel usen siempre el Supabase propio de Family Help.

## Cambios
- Fijar el cliente del sitio al proyecto externo ya configurado, conservando la clave pública de conexión.
- Mostrar en el panel los errores reales de permisos o conexión, en lugar de confundirlos con una cuenta no autorizada.
- Verificar registro, inicio de sesión y lectura del rol con el mismo proyecto.

## Paso posterior
La cuenta actual deberá crearse nuevamente desde `/acceso`; después se ejecutará una sola consulta para asignarle el rol `admin`.
