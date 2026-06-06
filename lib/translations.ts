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
