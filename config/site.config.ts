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

  // ─── Publicaciones y Presentaciones ──────────────────────────
  publications: [
    {
      type: 'talk',
      title: 'Arquitecturas RAG con ADK y LangChain',
      event: 'PyConChile 2025',
      date: '2025',
      description: 'Charla sobre arquitecturas RAG con ADK y LangChain para sistemas de producción.',
      videoUrl: '#', // Placeholder - agregar URL real
      slidesUrl: '#', // Placeholder - agregar URL real
      thumbnail: '🎤',
    },
    {
      type: 'talk',
      title: 'Python para backends de alta disponibilidad',
      event: 'PyDay La Paz 2024',
      date: '2024',
      description: 'Presentación sobre diseño de backends Python escalables y resilientes.',
      videoUrl: '#', // Placeholder - agregar URL real
      slidesUrl: '#', // Placeholder - agregar URL real
      thumbnail: '🎤',
    },
    {
      type: 'article',
      title: 'Building Production-Ready RAG Systems',
      platform: 'Medium',
      date: '2025',
      description: 'Technical deep-dive into RAG architecture patterns and best practices.',
      url: '#', // Placeholder - agregar URL real de Medium
      thumbnail: '📝',
    },
  ],

  // ─── Comunidad y Logros ──────────────────────────────────────
  community: [
    {
      type: 'competition',
      title: 'ACM-ICPC LATAM',
      role: 'Top 90 LATAM',
      description: 'Competencia internacional de programación algorítmica. Top 90 de Latinoamérica, Top 50 Bolivia.',
      year: '2023',
      icon: '🏆',
    },
    {
      type: 'award',
      title: 'Mención de Honor',
      role: 'UMSS',
      description: 'Mención de honor académica en la Universidad Mayor de San Simón, Cochabamba.',
      year: '2022',
      icon: '⭐',
    },
  ],

  // ─── Redes Sociales Stats (para sección Social) ──────────────
  socialStats: {
    github: {
      repos: '50+',
      stars: '100+',
    },
    leetcode: {
      problems: '200+',
      rating: 'Top 10%',
    },
    codeforces: {
      rating: '1400+',
    },
  },
};

export default siteConfig;
