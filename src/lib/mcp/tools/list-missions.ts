import { defineTool } from "@lovable.dev/mcp-js";
import { MISSIONS } from "../content";

export default defineTool({
  name: "list_missions",
  title: "List missions",
  description:
    "List the four BRÚJULA® missions published on the Family Help site, with their method, audience and page path.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = MISSIONS.map((m) => ({
      slug: m.slug,
      name: m.name,
      method: m.method,
      audience: m.audience,
      path: m.path,
      headline: m.headline,
    }));
    return {
      content: [
        {
          type: "text" as const,
          text: items
            .map((m) => `${m.name} — Método ${m.method} (${m.slug})\n  Público: ${m.audience}\n  ${m.headline}\n  Página: ${m.path}`)
            .join("\n\n"),
        },
      ],
      structuredContent: { missions: items },
    };
  },
});
