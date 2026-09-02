/**
 * Public marketing content exposed through the MCP server.
 * Everything here is already published on the website — no private data.
 */

export type Mission = {
  slug: string;
  name: string;
  method: string;
  audience: string;
  path: string;
  headline: string;
  summary: string;
  problem: string;
  includes: string[];
  cta: string;
};

export const MISSIONS: Mission[] = [
  {
    slug: "ninos",
    name: "Misión Niños 3-11",
    method: "AURA®",
    audience: "Padres y madres de niños de 3 a 11 años",
    path: "/mision-ninos",
    headline: "Crea un ambiente de calma en casa y reduce las rabietas por pantallas sin caer en peleas ni gritos.",
    summary:
      "Un método para padres de niños pequeños basado en anticipación, juego real, entornos de calma y acompañamiento empático. Sin prohibiciones agresivas.",
    problem:
      "Las rabietas al apagar la pantalla, las negociaciones interminables y la culpa de los padres. Los niños pequeños necesitan estructura predecible y alternativas vivas, no gritos.",
    includes: [
      "Guía Método AURA® (PDF)",
      "Audios de 60 segundos por WhatsApp",
      "Guía visual de rutinas para niños",
      "Plantilla de avisos visuales",
      "Ideas de juego real por edades",
      "Comunidad de padres",
    ],
    cta: "Sumarme a la Misión AURA por WhatsApp",
  },
  {
    slug: "familias",
    name: "Misión Familias",
    method: "PUENTE®",
    audience: "Padres, madres y cuidadores",
    path: "/mision-familias",
    headline: "Reconecta con tus hijos en la era de los algoritmos.",
    summary:
      "Un método práctico para bajar la tensión por pantallas en casa, acordar límites sin gritos y volver a mirarse a los ojos, sin culpa y sin sermones.",
    problem:
      "Peleas por el tiempo de pantalla y comidas en silencio. No es falta de amor: es falta de un sistema que traduzca lo que quieres cuidar en acuerdos y rutinas sostenibles.",
    includes: [
      "Guía Método PUENTE® (PDF)",
      "Acuerdo Familiar Imprimible",
      "Planner Familiar de Atención",
      "Kit de conversaciones difíciles",
      "Rituales de reconexión",
      "Acceso a la comunidad",
    ],
    cta: "Adquirir Misión Familias en Hotmart",
  },
  {
    slug: "docentes",
    name: "Misión Docentes",
    method: "FARO®",
    audience: "Docentes y equipos educativos",
    path: "/mision-docentes",
    headline: "Transforma tu aula: del estado de distracción al estado de enfoque.",
    summary:
      "Un método para docentes que ya no quieren competir con las notificaciones. Recupera la atención del grupo con protocolos claros y acuerdos vivos.",
    problem:
      "El aula compite en desventaja con plataformas diseñadas para capturar la atención. No se trata de prohibir, sino de tener un sistema claro y repetible.",
    includes: [
      "Guía Método FARO® (PDF)",
      "Acuerdo de Aula editable",
      "Rituales de inicio y cierre",
      "Banco de señales de atención",
      "Sesión formativa en video",
      "Comunidad de docentes",
    ],
    cta: "Adquirir Misión Docentes en Hotmart",
  },
  {
    slug: "adolescentes",
    name: "Misión Adolescentes",
    method: "HACKEA®",
    audience: "Adolescentes y jóvenes",
    path: "/mision-adolescentes",
    headline: "Hackea el algoritmo antes de que el algoritmo te hackee a ti.",
    summary:
      "Una misión por niveles para entender cómo funciona el diseño persuasivo, recuperar la atención y decidir con criterio propio.",
    problem:
      "Un adolescente promedio recibe cerca de 237 notificaciones al día. El córtex prefrontal, que regula el autocontrol, no termina de desarrollarse hasta los 25 años: no es terquedad, es biología.",
    includes: [
      "Guía Método HACKEA® por niveles",
      "Reto de 7 días para recuperar el control",
      "Mi Acuerdo Personal HACKEA®",
      "Tácticas anti-scroll infinito",
      "Guion para negociar con tu familia",
      "Comunidad de jóvenes",
    ],
    cta: "Comenzar Misión Adolescentes",
  },
  {
    slug: "adultos",
    name: "Misión Adultos",
    method: "DECIDE®",
    audience: "Adultos y profesionales",
    path: "/mision-adultos",
    headline: "Construye una rutina intencional: atención, bienestar y productividad.",
    summary:
      "Un plan de micro-acciones diarias para salir de la infoxicación, recuperar el foco profundo y volver a sentir que tu día lo diriges tú.",
    problem:
      "No es falta de voluntad: es un sistema que compite por tu atención. La infoxicación es una carga cognitiva que apaga la claridad, la energía y el bienestar.",
    includes: [
      "Método DECIDE® Adultos (PDF)",
      "Plan diario imprimible",
      "Protocolo anti-infoxicación",
      "Bloques de foco profundo",
      "Journal 3 líneas",
      "Mi Acuerdo Personal DECIDE®",
    ],
    cta: "Comenzar Misión Adultos",
  },
];

export const BRUJULA = {
  tagline: "Desarrollamos capacidades para que decidas tu propio camino.",
  conviction:
    "El desarrollo humano no depende de grandes decisiones, sino de miles de pequeñas decisiones conscientes tomadas cada día. La tecnología no debe reemplazar la capacidad humana de decidir: debe fortalecerla.",
  hierarchy: [
    "Family Help",
    "Filosofía",
    "Modelo de Desarrollo Humano",
    "Sistema BRÚJULA®",
    "Métodos (AURA®, PUENTE®, HACKEA®, FARO®, DECIDE®)",
    "Experiencias (Misiones, App, Coach IA, Comunidad, Recursos)",
  ],
  cycle: [
    "Impulso",
    "Microfricción Intencional®",
    "Pausa Consciente®",
    "Recuerdo",
    "Decisión consciente",
    "Acción",
    "Reflexión",
    "Desarrollo de capacidades",
  ],
  concepts: {
    "Microfricción Intencional®":
      "Pequeño momento diseñado para interrumpir el piloto automático y devolver a la persona la oportunidad de pensar antes de actuar. No es un obstáculo ni una restricción.",
    "Pausa Consciente®":
      "El espacio que abre la microfricción, donde la persona puede recordar lo que realmente quiere cuidar y decidir con mayor intención.",
    "Círculos de Cuidado":
      "Hacen visible aquello que la persona desea cuidar, y orientan sus decisiones cotidianas.",
    "Ecosistema BRÚJULA®":
      "Family Help → BRÚJULA® → Misiones, App, Coach IA, Comunidad, Recursos y nuevas experiencias.",
  },
  ecosystem: [
    { name: "Misiones", description: "Guías prácticas por público: niños 3-11, familias, adolescentes, docentes y adultos." },
    { name: "App BRÚJULA®", description: "Bitácora, radar de atención y microfricciones intencionales en el día a día." },
    { name: "Coach IA", description: "Acompañamiento conversacional que ayuda a detenerse y decidir con intención." },
    { name: "Comunidad", description: "Familias, docentes y personas caminando el mismo proceso." },
    { name: "Recursos", description: "Biblioteca abierta de artículos y herramientas basadas en evidencia." },
  ],
} as const;

export const SITE = {
  name: "Family Help",
  tagline: "Tecnología al servicio del desarrollo humano.",
  website: "https://joinfamilyhelp.lovable.app",
  platform: "https://app.joinfamilyhelp.com",
  notice:
    "Sitio informativo y de marketing. Las misiones se distribuyen y cobran a través de Hotmart. No garantizan resultados mágicos: son sistemas de acompañamiento diario para el desarrollo de la autonomía personal.",
  pages: [
    { path: "/", title: "Inicio" },
    { path: "/mision-familias", title: "Misión Familias — Método PUENTE®" },
    { path: "/mision-docentes", title: "Misión Docentes — Método FARO®" },
    { path: "/mision-adolescentes", title: "Misión Adolescentes — Método HACKEA®" },
    { path: "/mision-ninos", title: "Misión Niños 3-11 — Método AURA®" },
    { path: "/mision-adultos", title: "Misión Adultos — Método DECIDE®" },
    { path: "/plataforma", title: "Plataforma BRÚJULA®" },
    { path: "/comunidad", title: "Comunidad" },
    { path: "/recursos", title: "Recursos — Biblioteca abierta" },
    { path: "/nosotros", title: "Nosotros" },
    { path: "/privacidad", title: "Política de privacidad" },
    { path: "/terminos", title: "Términos y condiciones" },
  ],
} as const;
