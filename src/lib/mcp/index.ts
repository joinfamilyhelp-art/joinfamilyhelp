import { defineMcp } from "@lovable.dev/mcp-js";
import listMissions from "./tools/list-missions";
import getMission from "./tools/get-mission";
import getBrujulaModel from "./tools/get-brujula-model";
import getSiteInfo from "./tools/get-site-info";

export default defineMcp({
  name: "family-help-hub",
  title: "Family Help Hub",
  version: "0.1.0",
  instructions:
    "Public, read-only tools for the Family Help marketing site. Use `list_missions` and `get_mission` for the four BRÚJULA® missions (PUENTE®, FARO®, HACKEA®, DECIDE®), `get_brujula_model` for the Family Help philosophy and decision cycle, and `get_site_info` for general site information and the page map. All content is already published on the website; there is no user data.",
  tools: [listMissions, getMission, getBrujulaModel, getSiteInfo],
});
