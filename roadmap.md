# Tareas

- [x] Alinear despliegue con Cloudflare Workers externo (`joinfamilyhelpw`) vía GitHub — wrangler.jsonc ya apunta a ese nombre.
- [ ] Usuario: en Cloudflare, añadir `joinfamilyhelp.com` y `www.joinfamilyhelp.com` como Custom Domain del Worker `joinfamilyhelpw` y quitar los registros A/TXT de Lovable.
- [ ] Usuario: en Cloudflare Workers Builds, comando de despliegue `npm run deploy` y variables `VITE_SUPABASE_EXTERNAL_URL` / `VITE_SUPABASE_EXTERNAL_ANON_KEY`.
- [ ] Pendiente del usuario: enlace de pago externo de Membresía VIP (Hotmart u otra) para reemplazar el fallback de WhatsApp.
