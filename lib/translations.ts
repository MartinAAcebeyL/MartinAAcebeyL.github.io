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
      community: 'I organize and speak at Python community events — PyCon Chile 2025, PyDay La Paz 2024 — and competed in ACM-ICPC ranking among the top 90 in LATAM. The technical community isn\'t extra: it\'s where I learn fastest.',
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
          'Developed and maintained critical microservices handling integrations with third-party APIs including Amazon Selling Partner API and Mercado Libre API.',
          'Drove adoption of AI technologies (RAG architectures with ADK, MCP and LangChain), improving response accuracy in internal systems by 70%.',
          'Built autonomous AI agents using RAG strategy with ADK (Agent Development Kit and MCP) to automate internal operations that previously required daily manual intervention.',
          'Optimized inter-microservice communication by implementing gRPC, reducing network latency by 25% and decreasing cloud resource utilization by 50%.',
          'Mentored 3 junior developers in Python best practices, accelerating their professional growth.',
          'Implemented CI/CD pipelines with Docker and Bitbucket Pipelines, reducing production errors.',
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
          'Participated in product definition with the PO, reporting work progress and validating technical requirements.',
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
          'Managed integrations with healthcare system APIs ensuring security in data exchange.',
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
          'Designed and graded 20+ practical exercises on advanced SQL, stored procedures, triggers, and DB design patterns.',
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
          'Managed the full deployment lifecycle on Linux VPS servers.',
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
      showMore: 'Show more',
      showLess: 'Show less',
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
    // Publication titles (only for titles that need translation)
    publicationTitles: {
      pastSelf: 'Things I\'d tell my past self',
    },
    // Project descriptions
    projectDescriptions: {
      grpcMicroservices: {
        title: 'gRPC Microservices Optimization',
        tagline: 'Refactoring inter-service communication: -25% latency, -50% GCP resource usage.',
        problem: 'Envíame\'s microservices communicated over REST with high JSON serialization overhead. Under peak load, latency was unacceptable and GCP resource usage was disproportionate to data volume.',
        solution: 'Strategic migration from REST to gRPC with Protocol Buffers: redefining service contracts, implementing bidirectional streaming where appropriate, and optimizing resource pooling on GCP.',
        results: [
          '-25% reduction in network latency',
          '-50% improvement in GCP resource utilization (direct cost reduction)',
          'Higher sustained throughput under peak load',
        ],
      },
      legalScraping: {
        title: 'Judicial Auction Scraper',
        tagline: 'Scraping system to monitor judicial auctions in Bolivia.',
        problem: 'Lawyers and asset buyers had to manually check the main judicial auction websites in Bolivia to spot new auctions, a slow and error-prone process.',
        solution: 'Web scraping project with Beautiful Soup and Selenium to extract information from the main judicial auction websites in Bolivia, automating data collection.',
        results: [
          'Automated collection of judicial auction data',
          'More efficient analysis of auction information',
          'Public repository with the full solution',
        ],
      },
      scheduleRecommendation: {
        title: 'Schedule Recommendation App',
        tagline: 'Web app to plan academic schedules without clashes between subjects.',
        problem: 'Students must manually build their class schedules every semester, which often leads to time conflicts between subjects and makes planning difficult.',
        solution: 'Web application that lets users create class schedules efficiently, optimizing course selection and ensuring a schedule free of time conflicts.',
        results: [
          'Generates schedules with no conflicts between subjects',
          'Significant improvement in the schedule management experience',
          'Public repository with the full solution',
        ],
      },
      whatsappAutomation: {
        title: 'WhatsApp Bulk Messaging Automation',
        tagline: 'Desktop tool to send bulk text and media messages via WhatsApp.',
        problem: 'Manually sending messages and media to multiple WhatsApp contacts or groups is slow and doesn\'t scale for campaigns or mass notifications.',
        solution: 'Desktop application that automates bulk sending of text and media messages via WhatsApp, on a schedule and at scale, using Selenium and the Drive API.',
        results: [
          'Bulk, scheduled sending of messages and media',
          'Scalable solution for campaigns and notifications',
          'Public repository with the full solution',
        ],
      },
      canchaWasi: {
        title: 'Cancha Wasi',
        tagline: 'Full-stack platform for booking sports courts, with its own backend and frontend.',
        problem: 'Sports court administrators manage bookings manually (WhatsApp, notebooks), causing overlaps and wasted time for both owners and customers.',
        solution: 'Development of a full-stack platform (CanchaWasiBack + cancha-wasi-front) that lets users see real-time availability and book courts, while admins manage schedules, prices, and bookings from their own panel.',
        results: [
          'Real-time booking system for multiple courts',
          'Independent admin panel for court owners',
          'Decoupled backend/frontend architecture, in active development',
        ],
      },
      smartBusinessAgent: {
        title: 'Conversational Business Agent',
        tagline: 'Chatbot that gives accurate answers based on a real company\'s information.',
        problem: 'Small and medium business owners need quick, reliable answers about their business without relying on manual reports or a technical team.',
        solution: 'Development of a conversational agent (chatbot) that provides accurate, relevant answers based on a real company\'s information, using natural language processing tools for smooth interactions.',
        results: [
          'Conversational agent able to answer questions using the business\'s own data',
          'Smooth interactions through natural language processing',
          'Architecture built on LangChain, n8n, and MCP',
        ],
      },
      proptechAgent: {
        title: 'PropTech Agent',
        tagline: 'AI agent for the real estate sector to automate property inquiries and processes.',
        problem: 'Real estate agencies and agents spend a lot of time answering repetitive questions about available properties, prices, and conditions.',
        solution: 'AI agent focused on the proptech domain that automates handling property inquiries, integrating catalog data and responding in natural language to potential clients.',
        results: [
          'Automation of frequent property inquiries',
          'Reduced response time to potential clients',
          'Experimental project in active development',
        ],
      },
      grpcPyconChile: {
        title: 'gRPC Performance Workshop — PyCon Chile 2025',
        tagline: 'Materials and code from the gRPC workshop given at PyCon Chile 2025.',
        problem: 'Many Python developers know REST but haven\'t worked with gRPC, a high-performance RPC framework key to efficient communication between services.',
        solution: 'Application focused on optimizing speed and data handling using gRPC to establish efficient, low-latency communication between services, presented as a workshop at PyCon Chile 2025.',
        results: [
          'Workshop delivered at PyCon Chile 2025',
          'Public repository with practical gRPC examples in Python',
          'Low-latency communication between services',
        ],
      },
      fastTodo: {
        title: 'Fast Todo',
        tagline: 'Task API with REST and GraphQL endpoints over the same domain, built with FastAPI.',
        problem: 'Comparing REST and GraphQL approaches in practice over the same data domain, to understand their differences in design, querying, and performance.',
        solution: 'Implementation of a task management (todo list) API with FastAPI, exposing the same domain through REST endpoints and a GraphQL schema, allowing both approaches to be compared under the same business rules.',
        results: [
          'Functional API with a dual interface: REST and GraphQL',
          'Public repository as a reference for both approaches with FastAPI',
          'Reusable base for experimenting with new FastAPI features',
        ],
      },
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
        title: 'PyCon Chile 2025',
        role: 'Workshop',
        desc: 'Workshop "Is a gRPC API synonymous with speed?" at PyCon Chile 2025, Viña del Mar.',
      },
      acmicpc: {
        title: 'ACM-ICPC LATAM',
        role: 'Top 90 LATAM',
        desc: 'International algorithmic programming competition. Top 90 in Latin America, Top 50 Bolivia.',
      },
      mention: {
        title: 'Honor Mention',
        role: 'USFX',
        desc: 'Academic honor mention at Universidad San Francisco Xavier de Chuquisaca.',
      },
      pythonSucreLead: {
        title: 'Python Sucre',
        role: 'Community Lead',
        desc: 'Lead organizer of the Python Sucre community, promoting Python adoption through talks and meetups.',
      },
      pythonSucreSummit: {
        title: 'Python Sucre Summit',
        role: 'Co-organizer',
        desc: 'Co-organized the Python Sucre Summit, a local event bringing together the Python community.',
      },
      pyconBolivia: {
        title: 'PyCon Bolivia',
        role: 'Contributor',
        desc: 'Contributed to the planning and execution of PyCon Bolivia 2022 and 2023.',
      },
      acmSucre: {
        title: 'ACM-Sucre',
        role: 'Active Member',
        desc: 'Active member of ACM-Sucre, a community focused on competitive programming.',
      },
      pyladiesCochabamba: {
        title: 'PyLadies Cochabamba',
        role: 'Active Member',
        desc: 'Active member of the PyLadies Cochabamba community.',
      },
      grpcPyday: {
        title: 'PyDay La Paz 2024',
        role: 'Speaker',
        desc: 'Talk on building fast, scalable applications with gRPC and Python, presented at PyDay La Paz 2024.',
      },
      pyConAltura: {
        title: 'PyCon con Altura',
        role: 'Speaker',
        desc: 'Talk on the before and after of landing your first job as a developer, sharing technical and career advice to help you save time and avoid common mistakes.',
      },
    },
    // Community section labels
    communityLabels: {
      certifications: 'Certifications',
      communityParticipation: 'Community Participation',
    },
    // Legend labels for the community snake
    communityTypes: {
      talk: 'talk',
      workshop: 'workshop',
      meetup: 'meetup',
      competition: 'competition',
      award: 'award',
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
      community: 'Organizo y hablo en eventos de la comunidad Python — PyCon Chile 2025, PyDay La Paz 2024 — y competí en ACM-ICPC quedando entre los 90 mejores de LATAM. La comunidad técnica no es un extra: es donde aprendo más rápido.',
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
          'Desarrollé y mantuve microservicios críticos manejando integraciones con APIs de terceros incluyendo Amazon Selling Partner API y Mercado Libre API.',
          'Impulsé adopción de tecnologías AI (arquitecturas RAG con ADK, MCP y LangChain) mejorando la precisión de respuestas en sistemas internos en 70%.',
          'Construí agentes autónomos de IA usando la estrategia RAG con ADK (Agent Development Kit y MCP) para automatizar operaciones internas que requerían intervención manual diaria.',
          'Optimicé comunicación entre microservicios implementando gRPC, reduciendo latencia de red en 25% y bajando la utilización de recursos de la nube en 50%.',
          'Mentoré a 3 junior developers en Python y buenas practicas, acelerando su progresión profesional.',
          'Implementé pipelines de CI/CD con Docker y Bitbucket Pipelines, reduciendo errores de producción.'
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
          'Participé en la definición del producto con el PO, reportando el progreso del trabajo y validando requisitos técnicos.',
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
          'Gestioné integraciones con APIs de sistemas de salud garantizando la seguridad en el intercambio de datos.',
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
          'Diseñé y evalué 20+ ejercicios prácticos de SQL avanzado, stored procedures, triggers y patrones de diseño de BD.',
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
          'Gestioné el ciclo completo de deployment en servidores VPS.',
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
      showMore: 'Ver más',
      showLess: 'Ver menos',
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
    // Títulos de publicaciones (solo los que requieren traducción)
    publicationTitles: {
      pastSelf: 'Cosas que le diría a mi yo del pasado',
    },
    // Descripciones de proyectos
    projectDescriptions: {
      grpcMicroservices: {
        title: 'Optimización de Microservicios con gRPC',
        tagline: 'Refactoring de comunicación entre microservicios: -25% latencia, -50% recursos en GCP.',
        problem: 'Los microservicios de Envíame se comunicaban vía REST con alto overhead de serialización JSON. Bajo carga pico, la latencia era inaceptable y el uso de recursos en GCP era desproporcionado al volumen de datos.',
        solution: 'Migración estratégica de REST a gRPC con Protocol Buffers: redefinición de contratos de servicio, implementación de streaming bidireccional donde correspondía, y optimización de resource pooling en GCP.',
        results: [
          '-25% reducción de latencia de red',
          '-50% mejora en utilización de recursos en GCP (reducción directa de costos)',
          'Mayor throughput sostenido bajo carga pico',
        ],
      },
      legalScraping: {
        title: 'Scraping de Remates Judiciales',
        tagline: 'Sistema de scraping para monitorear remates judiciales en Bolivia.',
        problem: 'Abogados y compradores de activos debían revisar manualmente las principales páginas de remates judiciales en Bolivia para detectar nuevas subastas, un proceso lento y propenso a errores.',
        solution: 'Proyecto de web scraping con Beautiful Soup y Selenium para extraer información de las principales páginas de remates judiciales en Bolivia, automatizando la recopilación de datos.',
        results: [
          'Automatización de la recopilación de datos de remates judiciales',
          'Análisis más eficiente de la información de subastas',
          'Repositorio público con la solución completa',
        ],
      },
      scheduleRecommendation: {
        title: 'Aplicación de Recomendación de Horarios',
        tagline: 'App web para planificar horarios académicos sin choques entre asignaturas.',
        problem: 'Los estudiantes deben armar manualmente sus horarios de clases cada semestre, lo que genera frecuentes conflictos de horario entre asignaturas y dificulta la planificación.',
        solution: 'Aplicación web que permite a los usuarios crear horarios de clases de manera eficiente, optimizando la selección de cursos y garantizando una distribución sin choques de horario.',
        results: [
          'Generación de horarios sin conflictos entre asignaturas',
          'Mejora significativa en la experiencia de gestión de horarios',
          'Repositorio público con la solución completa',
        ],
      },
      whatsappAutomation: {
        title: 'Automatización de Envío de Mensajes a WhatsApp',
        tagline: 'Herramienta de escritorio para enviar mensajes masivos y multimedia por WhatsApp.',
        problem: 'Enviar mensajes y contenido multimedia a múltiples contactos o grupos de WhatsApp de forma manual es lento y poco escalable para campañas o notificaciones masivas.',
        solution: 'Aplicación de escritorio que automatiza el envío masivo de mensajes de texto y multimedia a través de WhatsApp, de forma programada y escalable, usando Selenium y la API de Drive.',
        results: [
          'Envío masivo y programado de mensajes y multimedia',
          'Solución escalable para campañas y notificaciones',
          'Repositorio público con la solución completa',
        ],
      },
      canchaWasi: {
        title: 'Cancha Wasi',
        tagline: 'Plataforma full-stack para reserva de canchas deportivas, con backend y frontend propios.',
        problem: 'Los administradores de canchas deportivas gestionan reservas de forma manual (WhatsApp, cuadernos), generando solapamientos y pérdida de tiempo tanto para el dueño como para los clientes.',
        solution: 'Desarrollo de una plataforma full-stack (CanchaWasiBack + cancha-wasi-front) que permite a los usuarios ver disponibilidad en tiempo real y reservar canchas, mientras los administradores gestionan horarios, precios y reservas desde un panel propio.',
        results: [
          'Sistema de reservas en tiempo real para múltiples canchas',
          'Panel de administración independiente para dueños de canchas',
          'Arquitectura desacoplada backend/frontend en desarrollo activo',
        ],
      },
      smartBusinessAgent: {
        title: 'Agente Conversacional con Información Empresarial',
        tagline: 'Chatbot con respuestas precisas basadas en información real de una empresa.',
        problem: 'Los dueños de pequeños y medianos negocios necesitan respuestas rápidas y confiables sobre su negocio sin depender de reportes manuales o un equipo técnico.',
        solution: 'Desarrollo de un agente conversacional (chatbot) que proporciona respuestas precisas y relevantes basándose en información real de una empresa, usando herramientas de procesamiento de lenguaje natural para interacciones fluidas.',
        results: [
          'Agente conversacional capaz de responder sobre datos propios del negocio',
          'Interacciones fluidas mediante procesamiento de lenguaje natural',
          'Arquitectura basada en LangChain, n8n y MCP',
        ],
      },
      proptechAgent: {
        title: 'PropTech Agent',
        tagline: 'Agente de IA aplicado al sector inmobiliario para automatizar consultas y procesos de propiedades.',
        problem: 'Las inmobiliarias y agentes de bienes raíces dedican mucho tiempo a responder consultas repetitivas sobre propiedades disponibles, precios y condiciones.',
        solution: 'Agente de IA enfocado en el dominio proptech que automatiza la atención de consultas sobre propiedades, integrando datos de catálogo y respondiendo en lenguaje natural a clientes potenciales.',
        results: [
          'Automatización de consultas frecuentes sobre propiedades',
          'Reducción del tiempo de respuesta a clientes potenciales',
          'Proyecto experimental en desarrollo activo',
        ],
      },
      grpcPyconChile: {
        title: 'Mejora de Velocidad y Transmisión de Datos con gRPC',
        tagline: 'Material y código del taller de gRPC dictado en PyCon Chile 2025.',
        problem: 'Muchos desarrolladores Python conocen REST pero no han trabajado con gRPC, un framework RPC de alto rendimiento clave para comunicación eficiente entre servicios.',
        solution: 'Aplicación enfocada en optimizar la velocidad y el manejo de datos utilizando gRPC para establecer una comunicación eficiente y de baja latencia entre servicios, dictada como taller en PyCon Chile 2025.',
        results: [
          'Taller dictado en PyCon Chile 2025',
          'Repositorio público con ejemplos prácticos de gRPC en Python',
          'Comunicación de baja latencia entre servicios',
        ],
      },
      fastTodo: {
        title: 'Fast Todo',
        tagline: 'API de tareas con endpoints REST y GraphQL implementados sobre el mismo dominio con FastAPI.',
        problem: 'Comparar en la práctica los enfoques REST y GraphQL sobre un mismo dominio de datos, para entender sus diferencias de diseño, consultas y rendimiento.',
        solution: 'Implementación de una API de gestión de tareas (todo list) con FastAPI, exponiendo el mismo dominio mediante endpoints REST y un esquema GraphQL, permitiendo comparar ambos enfoques bajo las mismas reglas de negocio.',
        results: [
          'API funcional con doble interfaz: REST y GraphQL',
          'Repositorio público como referencia de ambos enfoques con FastAPI',
          'Base reutilizable para experimentar con nuevas features de FastAPI',
        ],
      },
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
        title: 'PyCon Chile 2025',
        role: 'Taller',
        desc: 'Taller "¿Una API gRPC es sinónimo de velocidad?" en PyCon Chile 2025, Viña del Mar.',
      },
      acmicpc: {
        title: 'ACM-ICPC LATAM',
        role: 'Top 90 LATAM',
        desc: 'Competencia internacional de programación algorítmica. Top 90 de Latinoamérica, Top 50 Bolivia.',
      },
      mention: {
        title: 'Mención de Honor',
        role: 'UMSS',
        desc: 'Mención de honor académica en la Universidad Mayor de San Simón, Cochabamba.',
      },
      pythonSucreLead: {
        title: 'Python Sucre',
        role: 'Community Lead',
        desc: 'Líder organizador de la comunidad Python Sucre, promoviendo la adopción de Python mediante charlas y meetups.',
      },
      pythonSucreSummit: {
        title: 'Python Sucre Summit',
        role: 'Co-organizador',
        desc: 'Co-organizador de la Python Sucre Summit, un evento local que reúne a la comunidad Python.',
      },
      pyconBolivia: {
        title: 'PyCon Bolivia',
        role: 'Colaborador',
        desc: 'Contribuí en la planificación y ejecución de PyCon Bolivia 2022 y 2023.',
      },
      acmSucre: {
        title: 'ACM-Sucre',
        role: 'Miembro Activo',
        desc: 'Miembro activo de la comunidad ACM-Sucre, dedicada a la programación competitiva.',
      },
      pyladiesCochabamba: {
        title: 'PyLadies Cochabamba',
        role: 'Miembro Activo',
        desc: 'Miembro activo de la comunidad PyLadies Cochabamba.',
      },
      grpcPyday: {
        title: 'PyDay La Paz 2024',
        role: 'Speaker',
        desc: 'Charla sobre cómo potenciar aplicaciones rápidas y escalables con gRPC y Python, presentada en PyDay La Paz 2024.',
      },
      pyConAltura: {
        title: 'PyCon con Altura',
        role: 'Speaker',
        desc: 'Charla sobre el antes y el después de conseguir tu primer empleo como programador, compartiendo consejos técnicos y de carrera para ahorrar tiempo y evitar errores comunes.',
      },
    },
    // Etiquetas sección comunidad
    communityLabels: {
      certifications: 'Certificaciones',
      communityParticipation: 'Participación Comunitaria',
    },
    // Etiquetas de leyenda para la serpiente de comunidad
    communityTypes: {
      talk: 'charla',
      workshop: 'taller',
      meetup: 'meetup',
      competition: 'competencia',
      award: 'premio',
    },
    // Footer
    footer: {
      builtWith: 'Construido con',
      and: 'y',
      allRightsReserved: 'Todos los derechos reservados',
    },
  },
} as const;
