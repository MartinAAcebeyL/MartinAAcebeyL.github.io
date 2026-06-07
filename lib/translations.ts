export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      community: 'Community',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    // Hero
    hero: {
      greeting: 'Hi, I\'m',
      role: 'Backend & AI Engineer',
      subtitle: 'Building high-availability Python microservices and integrating AI that generates measurable impact',
      description: '4+ years designing and optimizing distributed backends in HealthTech, HRTech and Logistics.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      availability: 'Available for remote projects',
      location: 'Cochabamba, Bolivia',
      metrics: {
        accuracy: { value: '70%', label: 'AI Accuracy Boost', context: 'RAG in production' },
        requests: { value: '10k+', label: 'Requests/day', context: '99.5% uptime' },
        experience: { value: '4+', label: 'Years of experience', context: 'Backend & AI' },
      },
    },
    // About
    about: {
      title: 'About Me',
      journey: 'I started building web applications for local businesses in Bolivia — four projects delivered, zero tolerance for missed deadlines. That led me to lead a team of five distributed developers across three time zones for a U.S. startup, where I understood that quality software isn\'t just clean code: it\'s measurable impact on real systems.',
      current: 'Today I work at Envíame (Santiago, remote) as a Backend & AI Engineer. I implemented RAG architectures with ADK and LangChain that improved our internal systems accuracy by 70%, and reduced latency between microservices by 25% by migrating to gRPC. My niche is the intersection between robust backends and applied AI: I don\'t just build the system, I make it smart.',
      community: 'I organize and speak at Python community events — PyConChile 2025, PyDay La Paz 2024 — and competed in ACM-ICPC ranking among the top 90 in LATAM. The technical community isn\'t extra: it\'s where I learn fastest.',
      metrics: {
        years: { value: '4+', label: 'Years of experience', sublabel: 'Backend & AI engineer' },
        // accuracy: { value: '70%', label: 'AI Accuracy Improvement', sublabel: 'RAG with ADK · Envíame' },
        // uptime: { value: '99.5%', label: 'Guaranteed uptime', sublabel: '+10,000 req/day · DEVOCAMP' },
      },
    },
    // Skills
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I work with',
    },
    // Projects
    projects: {
      title: 'Featured Projects',
      subtitle: 'Recent work and experiments',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    // Experience
    experience: {
      title: 'Work Experience',
      subtitle: 'Professional journey',
      present: 'Present',
      team: 'Team: ',
    },
    // Experience locations (per company)
    experienceLocations: {
      enviame: 'Santiago, Chile (Remote)',
      devocamp: 'Weehawken, New Jersey, USA (Remote)',
      usfx: 'Sucre, Bolivia',
      freelancer: 'Bolivia',
    },
    // Experience role details (per company role, used as slides)
    experienceRoles: {
      enviameAiEngineer: {
        role: 'Backend Developer → AI Engineer',
        periodLabel: 'October 2023 – Present',
        duration: '2 years 8 months',
        industry: 'Logistics / eCommerce',
        achievements: [
          'Developed and maintained critical microservices handling integrations with third-party APIs including Amazon Selling Partner API and Mercado Libre API for automated order synchronization.',
          'Led the adoption of AI technologies (RAG architectures with ADK and LangChain), improving response accuracy in internal systems by 70%.',
          'Built autonomous AI agents using the RAG strategy with ADK (Agent Development Kit) to automate internal operations that previously required daily manual intervention.',
          'Optimized inter-microservice communication by implementing gRPC, reducing network latency by 25% and increasing GCP resource utilization by 50%.',
          'Mentored 3 junior developers in Python best practices, code reviews, and system design, accelerating their professional growth.',
          'Implemented CI/CD pipelines with Docker and Bitbucket Pipelines, reducing production errors by 50%.',
          'Conducted extensive testing and automation to ensure system scalability and stability.',
        ],
      },
      devocampLead: {
        role: 'Team Lead',
        periodLabel: 'February 2023 – August 2023',
        duration: '7 months',
        industry: 'HealthTech / HRTech',
        achievements: [
          'Led a team of 5 backend developers across 3 time zones, ensuring continuous sprint delivery.',
          'Boosted team productivity by 25% through mentoring sessions, code reviews, and coding standards guidelines.',
          'Implemented automation pipelines that reduced delivery cycle time by 20%.',
          'Acted as the technical point of contact between backend, frontend, and product teams.',
        ],
      },
      devocampPython: {
        role: 'Python Back End Developer',
        periodLabel: 'July 2022 – October 2023',
        duration: '1 year 4 months',
        industry: 'HealthTech',
        achievements: [
          'Developed a medical management platform processing 10,000+ daily requests with 99.5% uptime.',
          'Improved MySQL query performance by 30% through ORM optimization, strategic indexing, and redesign of critical queries.',
          'Managed integrations with healthcare system APIs ensuring HIPAA compliance and secure data exchange.',
          'Collaborated with cross-functional teams maintaining alignment with sprint goals.',
        ],
      },
      devocampNode: {
        role: 'Node.js Back-end Developer',
        periodLabel: 'February 2023 – May 2023',
        duration: '4 months',
        industry: 'HRTech',
        achievements: [
          'Built the backend of the recruitment platform with Node.js and Express, managing job postings, applications, and hiring workflows.',
          'Designed and implemented RESTful APIs with authentication, authorization, and data validation.',
          'Reduced API response times by 35% by implementing caching strategies.',
          'Integrated with external job boards and ATS (Applicant Tracking Systems) for automatic candidate synchronization.',
        ],
      },
      teachingAssistant: {
        role: 'Teaching Assistant — Databases',
        periodLabel: 'March 2023 – November 2023',
        duration: '9 months',
        industry: 'Education',
        achievements: [
          'Guided 60+ students through advanced database concepts: normalization, query optimization, transactions, and indexing.',
          'Improved SQL query performance for 10+ students by an average of 40% through personalized optimization techniques.',
          'Designed and graded 15+ practical exercises on advanced SQL, stored procedures, triggers, and DB design patterns.',
          'Led hands-on workshops on MySQL administration, backup strategies, and performance tuning.',
        ],
      },
      freelancerFullstack: {
        role: 'Full-Stack Developer',
        periodLabel: 'December 2021 – July 2022',
        duration: '8 months',
        industry: 'Multiple local sectors',
        achievements: [
          'Delivered 4 end-to-end web applications with 100% client satisfaction and 6 months of post-launch support.',
          'Reduced manual workflows by 60% by digitizing critical processes for local businesses.',
          'Designed PostgreSQL database architectures from scratch with normalized schemas and queries optimized for sub-second response times.',
          'Managed the full deployment lifecycle on Linux VPS servers: Nginx configuration, SSL certificates, and monitoring.',
        ],
      },
    },
    // Community
    community: {
      title: 'Publications & Community',
      subtitle: 'Talks, articles, and community engagement',
      talks: 'Talks & Events',
      viewSlides: 'View Slides',
      viewRecording: 'View Recording',
      publications: 'Publications',
      viewArticle: 'Read Article',
      viewVideo: 'Watch Video',
    },
    // Social
    social: {
      title: 'Connect with Me',
      subtitle: 'Find me on these platforms',
      followers: 'followers',
      repos: 'repositories',
      stars: 'stars',
      rating: 'rating',
      problems: 'problems solved',
    },
    // Contact
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'I\'m available for backend projects, RAG implementations, and technical consulting',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      twitter: 'Twitter',
      sendMessage: 'Send Message',
    },
    // Publications descriptions
    publicationDescriptions: {
      ragAdk: 'Talk on RAG architectures with ADK and LangChain for production systems.',
      highAvailability: 'Presentation on designing scalable and resilient Python backends.',
      restVsGrpc: 'Technical comparison between REST and gRPC architectures with real use cases.',
      voiceInterface: 'How to implement voice interfaces with AI to improve user experience.',
      pastSelf: 'Reflections on a programming career: lessons learned and advice for beginners.',
    },
    // Education
    education: {
      label: 'Education',
      degree: 'Software Engineering',
      distinction: 'Graduation with Distinction',
    },
    // Community items
    communityItems: {
      pyconchile: {
        role: 'Speaker',
        desc: 'Talk on RAG architectures with ADK and LangChain for production systems.',
      },
      pyday: {
        role: 'Speaker',
        desc: 'Presentation on Python for high-availability backends.',
      },
      acmicpc: {
        role: 'Top 90 LATAM',
        desc: 'International algorithmic programming competition. Top 90 in Latin America, Top 50 Bolivia.',
      },
      mention: {
        role: 'UMSS',
        desc: 'Academic honor mention at Universidad Mayor de San Simón, Cochabamba.',
      },
    },
    // Community section labels
    communityLabels: {
      certifications: 'Certifications',
      communityParticipation: 'Community Participation',
    },
    // Footer
    footer: {
      builtWith: 'Built with',
      and: 'and',
      allRightsReserved: 'All rights reserved',
    },
  },
  es: {
    // Navegación
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      community: 'Comunidad',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    // Hero
    hero: {
      greeting: 'Hola, soy',
      role: 'Ingeniero Backend & IA',
      subtitle: 'Construyo microservicios Python de alta disponibilidad e integro IA que genera impacto medible',
      description: '4+ años diseñando y optimizando backends distribuidos en HealthTech, HRTech y Logistics.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      location: 'Cochabamba, Bolivia',
      metrics: {
        accuracy: { value: '70%', label: 'Mejora en precisión IA', context: 'RAG en producción' },
        requests: { value: '10k+', label: 'Requests/día', context: '99.5% uptime' },
        experience: { value: '4+', label: 'Años de experiencia', context: 'Backend & AI' },
      },
    },
    // Sobre mí
    about: {
      title: 'Sobre Mí',
      journey: 'Empecé construyendo aplicaciones web para negocios locales en Bolivia — cuatro proyectos entregados, cero tolerancia a los plazos incumplidos. Eso me llevó a liderar un equipo de cinco developers distribuidos en tres zonas horarias para una startup de EE.UU., donde entendí que el software de calidad no es solo código limpio: es impacto medible en sistemas reales.',
      current: 'Hoy trabajo en Envíame (Santiago, remoto) como Backend & AI Engineer. Implementé arquitecturas RAG con ADK y LangChain que mejoraron la precisión de nuestros sistemas internos en 70%, y reduje la latencia entre microservicios en 25% migrando a gRPC. Mi nicho es la intersección entre backends robustos y IA aplicada: no solo construyo el sistema, lo hago inteligente.',
      community: 'Organizo y hablo en eventos de la comunidad Python — PyConChile 2025, PyDay La Paz 2024 — y competí en ACM-ICPC quedando entre los 90 mejores de LATAM. La comunidad técnica no es un extra: es donde aprendo más rápido.',
      metrics: {
        years: { value: '4+', label: 'Años de experiencia', sublabel: 'Backend & AI' },
        accuracy: { value: '70%', label: 'Mejora en precisión IA', sublabel: 'RAG con ADK · Envíame' },
        uptime: { value: '99.5%', label: 'Uptime garantizado', sublabel: '+10,000 req/día · DEVOCAMP' },
      },
    },
    // Habilidades
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías y herramientas con las que trabajo',
    },
    // Proyectos
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Trabajo reciente y experimentos',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
    },
    // Experiencia
    experience: {
      title: 'Experiencia Laboral',
      subtitle: 'Trayectoria profesional',
      present: 'Presente',
      team: 'Equipo: ',
    },
    // Ubicaciones de experiencia (por empresa)
    experienceLocations: {
      enviame: 'Santiago, Chile (Remoto)',
      devocamp: 'Weehawken, Nueva Jersey, EE.UU. (Remoto)',
      usfx: 'Sucre, Bolivia',
      freelancer: 'Bolivia',
    },
    // Detalles de roles de experiencia (por rol de empresa, usados como slides)
    experienceRoles: {
      enviameAiEngineer: {
        role: 'Backend Developer → AI Engineer',
        periodLabel: 'Octubre 2023 – Presente',
        duration: '2 años 8 meses',
        industry: 'Logistics / eCommerce',
        achievements: [
          'Desarrollé y mantuve microservicios críticos manejando integraciones con APIs de terceros incluyendo Amazon Selling Partner API y Mercado Libre API para sincronización automatizada de órdenes.',
          'Lideré adopción de tecnologías AI (arquitecturas RAG con ADK y LangChain) mejorando la precisión de respuestas en sistemas internos en 70%.',
          'Construí agentes autónomos de IA usando la estrategia RAG con ADK (Agent Development Kit) para automatizar operaciones internas que requerían intervención manual diaria.',
          'Optimicé comunicación entre microservicios implementando gRPC, reduciendo latencia de red en 25% e incrementando utilización de recursos en GCP en 50%.',
          'Mentoré a 3 junior developers en Python best practices, code reviews y system design, acelerando su progresión profesional.',
          'Implementé pipelines de CI/CD con Docker y Bitbucket Pipelines, reduciendo errores de producción en 50%.',
          'Condujo pruebas extensivas y automatización para garantizar escalabilidad y estabilidad del sistema.',
        ],
      },
      devocampLead: {
        role: 'Team Lead',
        periodLabel: 'Febrero 2023 – Agosto 2023',
        duration: '7 meses',
        industry: 'HealthTech / HRTech',
        achievements: [
          'Lideré un equipo de 5 backend developers distribuidos en 3 zonas horarias garantizando entrega continua de sprints.',
          'Aceleré la productividad del equipo en 25% mediante sesiones de mentoring, code reviews y guías de estándares de código.',
          'Implementé pipelines de automatización que redujeron el ciclo de entrega en 20%.',
          'Actué como punto de contacto técnico entre equipos de backend, frontend y producto.',
        ],
      },
      devocampPython: {
        role: 'Python Back End Developer',
        periodLabel: 'Julio 2022 – Octubre 2023',
        duration: '1 año 4 meses',
        industry: 'HealthTech',
        achievements: [
          'Desarrollé plataforma de gestión médica que procesaba +10,000 peticiones diarias con 99.5% de uptime.',
          'Mejoré el rendimiento de queries MySQL en 30% mediante optimización de ORM, indexación estratégica y rediseño de consultas críticas.',
          'Gestioné integraciones con APIs de sistemas de salud garantizando compliance HIPAA y seguridad en el intercambio de datos.',
          'Colaboré con equipos cross-funcionales manteniendo alineación con sprint goals.',
        ],
      },
      devocampNode: {
        role: 'Node.js Back-end Developer',
        periodLabel: 'Febrero 2023 – Mayo 2023',
        duration: '4 meses',
        industry: 'HRTech',
        achievements: [
          'Construí el backend de la plataforma de reclutamiento con Node.js y Express, gestionando publicaciones de empleo, aplicaciones y flujos de contratación.',
          'Diseñé e implementé APIs RESTful con autenticación, autorización y validación de datos.',
          'Reduje tiempos de respuesta de la API en 35% implementando estrategias de caching.',
          'Integré con job boards externos y ATS (Applicant Tracking Systems) para sincronización automática de candidatos.',
        ],
      },
      teachingAssistant: {
        role: 'Teaching Assistant — Bases de Datos',
        periodLabel: 'Marzo 2023 – Noviembre 2023',
        duration: '9 meses',
        industry: 'Educación',
        achievements: [
          'Guié a 60+ estudiantes en conceptos avanzados de bases de datos: normalización, optimización de queries, transacciones e indexación.',
          'Mejoré el rendimiento de queries SQL de 10+ estudiantes en un promedio de 40% mediante técnicas de optimización personalizadas.',
          'Diseñé y evalué 15+ ejercicios prácticos de SQL avanzado, stored procedures, triggers y patrones de diseño de BD.',
          'Dirigí workshops prácticos sobre administración MySQL, estrategias de backup y performance tuning.',
        ],
      },
      freelancerFullstack: {
        role: 'Full-Stack Developer',
        periodLabel: 'Diciembre 2021 – Julio 2022',
        duration: '8 meses',
        industry: 'Múltiples sectores locales',
        achievements: [
          'Entregué 4 aplicaciones web end-to-end con 100% de satisfacción del cliente y soporte post-lanzamiento durante 6 meses.',
          'Reduje flujos manuales en 60% digitalizando procesos críticos de negocios locales.',
          'Diseñé arquitecturas de bases de datos PostgreSQL desde cero con schemas normalizados y queries optimizados para respuesta sub-segundo.',
          'Gestioné el ciclo completo de deployment en servidores VPS Linux: configuración Nginx, certificados SSL y monitoreo.',
        ],
      },
    },
    // Comunidad
    community: {
      title: 'Presentaciones y Comunidad',
      subtitle: 'Charlas, artículos y participación en la comunidad',
      talks: 'Charlas & Eventos',
      viewSlides: 'Ver Slides',
      viewRecording: 'Ver Grabación',
      publications: 'Publicaciones',
      viewArticle: 'Leer Artículo',
      viewVideo: 'Ver Video',
    },
    // Social
    social: {
      title: 'Conéctate Conmigo',
      subtitle: 'Encuéntrame en estas plataformas',
      followers: 'seguidores',
      repos: 'repositorios',
      stars: 'estrellas',
      rating: 'rating',
      problems: 'problemas resueltos',
    },
    // Contacto
    contact: {
      title: 'Trabajemos Juntos',
      subtitle: 'Estoy disponible para proyectos backend, implementaciones RAG y consultoría técnica',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      twitter: 'Twitter',
      sendMessage: 'Enviar Mensaje',
    },
    // Descripciones de publicaciones
    publicationDescriptions: {
      ragAdk: 'Charla sobre arquitecturas RAG con ADK y LangChain para sistemas de producción.',
      highAvailability: 'Presentación sobre diseño de backends Python escalables y resilientes.',
      restVsGrpc: 'Comparativa técnica entre arquitecturas REST y gRPC con casos de uso reales.',
      voiceInterface: 'Cómo implementar interfaces de voz con IA para mejorar la experiencia de usuario.',
      pastSelf: 'Reflexiones sobre la carrera en programación: lecciones aprendidas y consejos para principiantes.',
    },
    // Educación
    education: {
      label: 'Educación',
      degree: 'Ingeniería de Software',
      distinction: 'Graduación por Excelencia',
    },
    // Elementos de comunidad
    communityItems: {
      pyconchile: {
        role: 'Speaker',
        desc: 'Charla sobre arquitecturas RAG con ADK y LangChain para sistemas de producción.',
      },
      pyday: {
        role: 'Speaker',
        desc: 'Presentación sobre Python para backends de alta disponibilidad.',
      },
      acmicpc: {
        role: 'Top 90 LATAM',
        desc: 'Competencia internacional de programación algorítmica. Top 90 de Latinoamérica, Top 50 Bolivia.',
      },
      mention: {
        role: 'UMSS',
        desc: 'Mención de honor académica en la Universidad Mayor de San Simón, Cochabamba.',
      },
    },
    // Etiquetas sección comunidad
    communityLabels: {
      certifications: 'Certificaciones',
      communityParticipation: 'Participación Comunitaria',
    },
    // Footer
    footer: {
      builtWith: 'Construido con',
      and: 'y',
      allRightsReserved: 'Todos los derechos reservados',
    },
  },
} as const;
