import type { SiteConfig } from "@/types";

const siteConfig: SiteConfig = {
  // ─── Identidad ───────────────────────────────────────────────
  name: "Martin Acebey",
  fullName: "Martin Andres Acebey Laime",
  role: "Backend & AI Engineer",
  tagline: "Construyo microservicios Python de alta disponibilidad e integro IA que genera impacto medible.",
  location: "Cochabamba, Bolivia",
  availability: true,
  availabilityLabel: "Disponible para proyectos remotos",

  // ─── SEO ─────────────────────────────────────────────────────
  siteUrl: "https://martinacebey.dev", // verificar / actualizar con URL real
  description:
    "Portfolio de Martin Acebey — Backend & AI Engineer con 4+ años de experiencia en Python, RAG, ADK y GCP. Especialista en microservicios escalables e IA aplicada.",
  keywords: [
    "python backend developer",
    "AI engineer LATAM",
    "RAG LangChain",
    "ADK agent developer",
    "microservices python",
    "FastAPI Django engineer",
    "remote developer Bolivia",
    "backend engineer Chile",
    "LLM engineer",
    "gRPC python",
  ],
  ogImage: "/og-image.png", // generar imagen 1200×630

  // ─── Redes Sociales & Contacto ───────────────────────────────
  contact: {
    email: "martinaacbyl2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/martinacebey-l",
    github: "https://github.com/MartinAAcebeyL",
    githubUsername: "MartinAAcebeyL",
    leetcode: "https://leetcode.com/u/MartinAAcebeyL/",
    codeforces: "https://codeforces.com/profile/martin2000",
    hackerrank: "https://www.hackerrank.com/profile/martinaacbyl2000",
    cvUrl: "/cv-martin-acebey.pdf",
  },

  // ─── Navegación ──────────────────────────────────────────────
  nav: [
    { label: "Sobre mí",       href: "#sobre-mi" },
    { label: "Habilidades",    href: "#habilidades" },
    { label: "Proyectos",      href: "#proyectos" },
    { label: "Experiencia",    href: "#experiencia" },
    { label: "Comunidad",      href: "#comunidad" },
    { label: "Contacto",       href: "#contacto" },
  ],

  // ─── Métricas destacadas (Hero / About) ──────────────────────
  metrics: [
    { value: "4+",    label: "Años de experiencia",    sub: "Backend & AI" },
    { value: "70%",   label: "Mejora en precisión IA", sub: "RAG · Envíame" },
    { value: "99.5%", label: "Uptime garantizado",     sub: "+10k req/día" },
  ],

  // ─── Features del sitio ──────────────────────────────────────
  features: {
    darkModeDefault: true,
    githubStatsWidget: true,
    animatedMetrics: true,
    blogSection: false,
  },

  // ─── Certificaciones y Educación ─────────────────────────────
  education: [
    {
      degree: "Ingeniería de Software",
      institution: "Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca",
      location: "Sucre, Bolivia",
      period: "2019 – 2023",
      distinction: "Graduación por Excelencia",
    },
  ],
  certifications: [
    { name: "SQL Certificate",                              issuer: null,    year: null, url: null },
    { name: "MongoDB CRUD Operations: Modifying Query Results", issuer: "MongoDB University", year: null, url: null },
    { name: "PyDay La Paz 2024 – Charlas Python",           issuer: "PyDay", year: 2024, url: null },
    { name: "Curso profesional de base de datos",           issuer: null,    year: null, url: null },
  ],
};

export default siteConfig;
