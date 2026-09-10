// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/nosotros" },
      { path: "/mision-familias" },
      { path: "/mision-docentes" },
      { path: "/mision-adultos" },
      { path: "/mision-adolescentes" },
      { path: "/mision-ninos" },
      { path: "/mision-conexion" },
      { path: "/plataforma" },
      { path: "/comunidad" },
      { path: "/recursos" },
      { path: "/acompanamiento-profesional" },
      { path: "/charlas-y-talleres" },
      { path: "/privacidad" },
      { path: "/terminos" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  // Preset de nitro para servidor Node (cPanel + Passenger).
  // Debe ir en el nivel superior: el wrapper de Lovable lee `nitro`, no `vite.nitro`.
  // Dentro del entorno de Lovable el preset se fuerza a cloudflare-module para
  // el preview; en un build fuera de Lovable genera .output/server/index.mjs.
  nitro: { preset: "node-server" },
  vite: {
    plugins: [mcpPlugin()],
  },
});
