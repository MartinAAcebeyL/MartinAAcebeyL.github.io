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
      description: '4+ years designing and optimizing distributed backends in HealthTech, HRTech and Logistics. Currently at Envíame (Chile), where I implemented RAG architectures with ADK and LangChain that improved internal systems accuracy by 70%. Speaker at PyConChile 2025.',
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
        years: { value: '4+', label: 'Years of experience', sublabel: 'Backend & AI' },
        accuracy: { value: '70%', label: 'AI Accuracy Improvement', sublabel: 'RAG with ADK · Envíame' },
        uptime: { value: '99.5%', label: 'Guaranteed uptime', sublabel: '+10,000 req/day · DEVOCAMP' },
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
      title: 'Community & Speaking',
      subtitle: 'I organize and speak at tech events',
      talks: 'Talks & Events',
      viewSlides: 'View Slides',
      viewRecording: 'View Recording',
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
      description: '4+ años diseñando y optimizando backends distribuidos en HealthTech, HRTech y Logistics. Actualmente en Envíame (Chile), donde implementé arquitecturas RAG con ADK y LangChain que mejoraron la precisión de sistemas internos en 70%. Speaker en PyConChile 2025.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      availability: 'Disponible para proyectos remotos',
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
      title: 'Comunidad y Charlas',
      subtitle: 'Organizo y participo en eventos técnicos',
      talks: 'Charlas & Eventos',
      viewSlides: 'Ver Slides',
      viewRecording: 'Ver Grabación',
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
    // Footer
    footer: {
      builtWith: 'Construido con',
      and: 'y',
      allRightsReserved: 'Todos los derechos reservados',
    },
  },
} as const;
