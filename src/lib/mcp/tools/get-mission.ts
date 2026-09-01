import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { MISSIONS } from "../content";

export default defineTool({
  name: "get_mission",
  title: "Get mission details",
  description:
    "Get the full public detail of one BRÚJULA® mission: headline, the problem it addresses, what it includes and its call to action.",
  inputSchema: {
    slug: z
      .string()
      .describe("Mission slug: familias, docentes, adolescentes or adultos."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const key = slug.trim().toLowerCase();
    const mission = MISSIONS.find((m) => m.slug === key);
    if (!mission) {
      throw new ToolError(
        `Unknown mission "${slug}". Available slugs: ${MISSIONS.map((m) => m.slug).join(", ")}.`,
      );
    }
    const text = [
      `${mission.name} — Método ${mission.method}`,
      `Público: ${mission.audience}`,
      `Página: ${mission.path}`,
      "",
      mission.headline,
      "",
      mission.summary,
      "",
      `El problema: ${mission.problem}`,
      "",
      "Qué incluye:",
      ...mission.includes.map((i) => `  · ${i}`),
      "",
      `CTA: ${mission.cta}`,
    ].join("\n");

    return {
      content: [{ type: "text" as const, text }],
      structuredContent: { mission },
    };
  },
});
