import { defineTool } from "@lovable.dev/mcp-js";
import { BRUJULA } from "../content";

export default defineTool({
  name: "get_brujula_model",
  title: "Get the BRÚJULA® model",
  description:
    "Explain the Family Help philosophy and the BRÚJULA® system: the conceptual hierarchy, the decision cycle (Impulso → Microfricción Intencional® → Pausa Consciente® → Decisión consciente → Acción), its registered concepts and the ecosystem pieces.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      BRUJULA.tagline,
      "",
      `Convicción: ${BRUJULA.conviction}`,
      "",
      `Jerarquía: ${BRUJULA.hierarchy.join(" → ")}`,
      "",
      `Ciclo BRÚJULA®: ${BRUJULA.cycle.join(" → ")}`,
      "",
      "Conceptos:",
      ...Object.entries(BRUJULA.concepts).map(([k, v]) => `  · ${k}: ${v}`),
      "",
      "Ecosistema:",
      ...BRUJULA.ecosystem.map((e) => `  · ${e.name}: ${e.description}`),
    ].join("\n");

    return {
      content: [{ type: "text" as const, text }],
      structuredContent: {
        tagline: BRUJULA.tagline,
        conviction: BRUJULA.conviction,
        hierarchy: BRUJULA.hierarchy,
        cycle: BRUJULA.cycle,
        concepts: BRUJULA.concepts,
        ecosystem: BRUJULA.ecosystem,
      },
    };
  },
});
