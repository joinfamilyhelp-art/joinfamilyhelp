import { defineTool } from "@lovable.dev/mcp-js";
import { SITE } from "../content";

export default defineTool({
  name: "get_site_info",
  title: "Get site info and pages",
  description:
    "Get general public information about Family Help: tagline, website, platform URL, distribution notice and the full list of published pages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      `${SITE.name} — ${SITE.tagline}`,
      `Sitio: ${SITE.website}`,
      `Plataforma: ${SITE.platform}`,
      "",
      SITE.notice,
      "",
      "Páginas:",
      ...SITE.pages.map((p) => `  · ${p.path} — ${p.title}`),
    ].join("\n");

    return {
      content: [{ type: "text" as const, text }],
      structuredContent: {
        name: SITE.name,
        tagline: SITE.tagline,
        website: SITE.website,
        platform: SITE.platform,
        notice: SITE.notice,
        pages: SITE.pages,
      },
    };
  },
});
