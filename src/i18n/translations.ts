import { LanguageCode } from '../types';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    printing: string;
    careers: string;
    contact: string;
    getQuote: string;
    search: string;
    coreServices: string;
    printingBranding: string;
    printingSubtitle: string;
    costEstimator: string;
    freeConsultation: string;
    selectLanguage: string;
    popularServices: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    watchShowreel: string;
    statProjects: string;
    statClients: string;
    statSatisfaction: string;
    statAwards: string;
  };
  intro: {
    badge: string;
    heading: string;
    desc1: string;
    desc2: string;
    yearsExcellence: string;
    activeProjects: string;
    globalTeam: string;
    renderHours: string;
    viewShowreel: string;
    exploreServices: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  services: {
    badge: string;
    heading: string;
    subtitle: string;
    viewService: string;
    viewAllServices: string;
    requestQuote: string;
    exploreTitle: string;
  };
  portfolio: {
    badge: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    viewDetails: string;
    watchVideo: string;
    noProjects: string;
    client: string;
    duration: string;
    year: string;
  };
  printing: {
    badge: string;
    heading: string;
    subtitle: string;
    exploreDivision: string;
    courierHeading: string;
    courierDesc: string;
    repHeading: string;
    repDesc: string;
    chatWhatsApp: string;
    specsTitle: string;
    requestQuoteTitle: string;
  };
  process: {
    badge: string;
    heading: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    step6Title: string;
    step6Desc: string;
  };
  industries: {
    badge: string;
    heading: string;
    subtitle: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subtitle: string;
    verifiedReview: string;
  };
  faq: {
    badge: string;
    heading: string;
    subtitle: string;
    searchPlaceholder: string;
  };
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    service: string;
    budget: string;
    details: string;
    detailsPlaceholder: string;
    submit: string;
    submitting: string;
    successMsg: string;
    ourOffices: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    newsletterTitle: string;
    newsletterSub: string;
    newsletterPlaceholder: string;
    subscribe: string;
    subscribed: string;
    rights: string;
    privacyPolicy: string;
    termsOfService: string;
    cookieSettings: string;
  };
  common: {
    close: string;
    back: string;
    next: string;
    submit: string;
    loading: string;
    estimatedCost: string;
    bookConsultation: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      printing: 'Printing Services',
      careers: 'Careers',
      contact: 'Contact',
      getQuote: 'Get Quote',
      search: 'Search',
      coreServices: 'Our Core Studio Services',
      printingBranding: 'Printing & Custom Branding',
      printingSubtitle: 'Digital, Large Format, Merchandise & 3D',
      costEstimator: 'Project Cost Estimator',
      freeConsultation: 'Get Free Consultation',
      selectLanguage: 'Select Language',
      popularServices: 'Popular Services',
    },
    hero: {
      badge: 'Next-Gen Animation & Visual Effects Studio',
      titlePart1: 'We Turn Ideas Into',
      titleHighlight: 'Stunning Visual Experiences',
      subtitle: 'Global full-service animation, 3D CGI, character design, and cutting-edge visual effects studio trusted by forward-thinking brands, game studios, and filmmakers.',
      watchShowreel: 'Watch Showreel',
      statProjects: 'Projects Completed',
      statClients: 'Global Brand Clients',
      statSatisfaction: 'Client Satisfaction',
      statAwards: 'International Awards',
    },
    intro: {
      badge: 'Who We Are',
      heading: 'Crafting Iconic Visual Stories for Brands & Entertainment',
      desc1: 'AA Animations is an award-winning creative studio delivering state-of-the-art 3D CGI, 2D animation, motion graphics, and visual effects.',
      desc2: 'From photorealistic product showcases to immersive cinematic universes, our team blends technical precision with creative artistry.',
      yearsExcellence: 'Years of Excellence',
      activeProjects: 'Active Productions',
      globalTeam: 'Global Artists & Engineers',
      renderHours: 'Render Hours Delivered',
      viewShowreel: 'View Showreel',
      exploreServices: 'Explore Services',
      pillar1Title: 'High-Fidelity 3D CGI',
      pillar1Desc: 'Photorealistic asset creation, physics simulations, and cinematic lighting.',
      pillar2Title: 'End-to-End Production',
      pillar2Desc: 'Concept art, storyboarding, modeling, rigging, animation, sound, and final delivery.',
      pillar3Title: 'Global Scalability',
      pillar3Desc: 'Distributed rendering farms and collaborative pipelines for tight commercial deadlines.',
    },
    services: {
      badge: 'What We Do',
      heading: 'World-Class Animation & Creative Production',
      subtitle: 'Explore our specialized production departments tailored to elevate your visual storytelling.',
      viewService: 'Explore Service',
      viewAllServices: 'View All Studio Services',
      requestQuote: 'Request a Custom Quote',
      exploreTitle: 'Specialized Capabilities',
    },
    portfolio: {
      badge: 'Our Showreel & Work',
      heading: 'Our Portfolio',
      subtitle: 'Browse our latest commercial releases, 3D character animations, cinematic game trailers, and motion graphics.',
      filterAll: 'All Projects',
      viewDetails: 'Discover More',
      watchVideo: 'Watch Video',
      noProjects: 'No projects found matching the selected filter.',
      client: 'Client',
      duration: 'Duration',
      year: 'Year',
    },
    printing: {
      badge: 'Comprehensive Solutions',
      heading: 'Industrial Printing & Custom Merchandising Division',
      subtitle: 'High-definition offset, digital, large-format UV printing, luxury packaging, and custom brand merchandise delivered globally.',
      exploreDivision: 'Explore Division',
      courierHeading: 'Worldwide Doorstep Delivery',
      courierDesc: 'Tracked DHL & FedEx express courier shipping to 150+ countries with custom duty handling.',
      repHeading: 'Need Guidance? Our Representative is Here to Help',
      repDesc: 'Connect directly with our print engineering specialists via WhatsApp or consultation call for immediate assistance.',
      chatWhatsApp: 'Chat on WhatsApp',
      specsTitle: 'Technical Specifications',
      requestQuoteTitle: 'Request Print Quote',
    },
    process: {
      badge: 'Our Proven Workflow',
      heading: 'From Concept to Render: How We Collaborate',
      subtitle: 'A seamless, transparent 6-step production pipeline engineered to ensure timely delivery, creative excellence, and total alignment.',
      step1Title: 'Discovery & Creative Brief',
      step1Desc: 'We analyze your brand goals, target demographic, visual tone, and project requirements.',
      step2Title: 'Concept Art & Storyboarding',
      step2Desc: 'Visual framing, character concept sketches, and sequential storyboarding to map the narrative.',
      step3Title: '3D Modeling & Rigging',
      step3Desc: 'High-poly asset creation, skeletal deformation rigging, and procedural material generation.',
      step4Title: 'Animation & Lighting',
      step4Desc: 'Keyframe choreography, motion capture integration, cinematic cameras, and volumetric lighting.',
      step5Title: 'VFX & Sound Design',
      step5Desc: 'Particle simulations, compositing, color grading, sound effects, and musical mastering.',
      step6Title: 'Final Render & Multi-Format Delivery',
      step6Desc: 'Ultra-high bitrate 4K/8K master delivery optimized for broadcast, social, and web.',
    },
    industries: {
      badge: 'Sectors & Expertise',
      heading: 'Tailored Animation for Global Industries',
      subtitle: 'From B2B fintech motion branding to biomedical 3D MOA animations and AAA game trailers, we tailor our pipeline to sector-specific requirements.',
    },
    testimonials: {
      badge: 'Client Endorsements',
      heading: 'Loved by Directors, Founders & Producers Worldwide',
      subtitle: 'Read reviews from creative leaders, marketing teams, and producers who trust AA Animations for high-impact visual content.',
      verifiedReview: 'Verified Client',
    },
    faq: {
      badge: 'Got Questions?',
      heading: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about starting an animation or VFX production with AA Animations.',
      searchPlaceholder: 'Search questions...',
    },
    contact: {
      badge: 'Get In Touch',
      heading: "Let's Bring Your Vision to Life",
      subtitle: 'Reach our creative producers directly. Average response time under 1 hour during business hours.',
      formTitle: 'Project Inquiry Form',
      formSubtitle: 'Fill out your specs for a free consultation and itemized quote.',
      name: 'Your Full Name',
      namePlaceholder: 'e.g. Alexander Vance',
      email: 'Email Address',
      emailPlaceholder: 'e.g. alex@company.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+1 (555) 000-0000',
      service: 'Service Required',
      budget: 'Estimated Budget',
      details: 'Project Details & Vision',
      detailsPlaceholder: 'Describe your vision, target duration, deadline, and reference styles...',
      submit: 'Submit Project Inquiry',
      submitting: 'Sending Inquiry...',
      successMsg: 'Thank you! Your project inquiry has been received. Our senior producer will contact you within 1 business hour.',
      ourOffices: 'Studio Locations & Contact Points',
    },
    footer: {
      tagline: 'Next-generation animation, visual effects, and high-precision commercial printing studio serving global enterprises and creative leaders.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Animation Services',
      newsletterTitle: 'Subscribe to AA Animations Insider',
      newsletterSub: 'Receive monthly breakdown videos, Unreal Engine 5 tips, CGI tutorials, and studio production news.',
      newsletterPlaceholder: 'Enter your business email...',
      subscribe: 'Subscribe',
      subscribed: 'Thank you! You are now subscribed to our newsletter.',
      rights: '©2016 - all rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookieSettings: 'Cookie Settings',
    },
    common: {
      close: 'Close',
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      loading: 'Loading...',
      estimatedCost: 'Estimated Production Cost',
      bookConsultation: 'Book Free Strategy Call',
    },
  },
  ES: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      portfolio: 'Portafolio',
      printing: 'Servicios de Impresión',
      careers: 'Carreras',
      contact: 'Contacto',
      getQuote: 'Cotizar',
      search: 'Buscar',
      coreServices: 'Nuestros Servicios de Estudio',
      printingBranding: 'Impresión y Branding Personalizado',
      printingSubtitle: 'Digital, Gran Formato, Merchandising y 3D',
      costEstimator: 'Calculadora de Costos',
      freeConsultation: 'Consulta Gratuita',
      selectLanguage: 'Seleccionar Idioma',
      popularServices: 'Servicios Populares',
    },
    hero: {
      badge: 'Estudio de Animación y Efectos Visuales de Nueva Generación',
      titlePart1: 'Transformamos Ideas en',
      titleHighlight: 'Experiencias Visuales Asombrosas',
      subtitle: 'Estudio global de animación 3D CGI, diseño de personajes y efectos visuales de vanguardia en el que confían marcas pioneras, estudios de videojuegos y cineastas.',
      watchShowreel: 'Ver Showreel',
      statProjects: 'Proyectos Realizados',
      statClients: 'Clientes Globales',
      statSatisfaction: 'Satisfacción del Cliente',
      statAwards: 'Premios Internacionales',
    },
    intro: {
      badge: 'Quiénes Somos',
      heading: 'Creando Historias Visuales Icónicas para Marcas y Entretenimiento',
      desc1: 'AA Animations es un estudio creativo galardonado que ofrece animación 3D CGI de última generación, animación 2D, motion graphics y efectos visuales.',
      desc2: 'Desde muestras fotorrealistas de productos hasta universos cinematográficos inmersivos, nuestro equipo fusiona precisión técnica con maestría artística.',
      yearsExcellence: 'Años de Excelencia',
      activeProjects: 'Producciones Activas',
      globalTeam: 'Artistas e Ingenieros Globales',
      renderHours: 'Horas de Render Entregadas',
      viewShowreel: 'Ver Showreel',
      exploreServices: 'Explorar Servicios',
      pillar1Title: '3D CGI de Alta Fidelidad',
      pillar1Desc: 'Creación de activos fotorrealistas, simulaciones físicas e iluminación cinematográfica.',
      pillar2Title: 'Producción de Principio a Fin',
      pillar2Desc: 'Arte conceptual, guiones gráficos, modelado, rigging, animación y entrega final.',
      pillar3Title: 'Escalabilidad Global',
      pillar3Desc: 'Granjas de renderizado distribuidas para cumplir plazos comerciales exigentes.',
    },
    services: {
      badge: 'Qué Hacemos',
      heading: 'Animación de Clase Mundial y Producción Creativa',
      subtitle: 'Explore nuestros departamentos especializados para elevar su narrativa visual a otro nivel.',
      viewService: 'Explorar Servicio',
      viewAllServices: 'Ver Todos los Servicios',
      requestQuote: 'Solicitar Cotización',
      exploreTitle: 'Capacidades Especializadas',
    },
    portfolio: {
      badge: 'Nuestros Trabajos',
      heading: 'Nuestro Portafolio',
      subtitle: 'Explore nuestros últimos lanzamientos comerciales, animación de personajes 3D y trailers cinematográficos.',
      filterAll: 'Todos los Proyectos',
      viewDetails: 'Descubrir Más',
      watchVideo: 'Ver Video',
      noProjects: 'No se encontraron proyectos con el filtro seleccionado.',
      client: 'Cliente',
      duration: 'Duración',
      year: 'Año',
    },
    printing: {
      badge: 'Soluciones Integrales',
      heading: 'División de Impresión Industrial y Merchandising Personalizado',
      subtitle: 'Impresión offset de alta definición, digital, UV de gran formato, packaging de lujo y merchandising con entrega global.',
      exploreDivision: 'Explorar División',
      courierHeading: 'Entrega Mundial a Domicilio',
      courierDesc: 'Envíos exprés rastreados por DHL y FedEx a más de 150 países con gestión aduanera.',
      repHeading: '¿Necesita Asesoría? Nuestro Representante Está Listo Para Ayudarle',
      repDesc: 'Comuníquese directamente con nuestros ingenieros de impresión por WhatsApp o llamada para asistencia inmediata.',
      chatWhatsApp: 'Chatear por WhatsApp',
      specsTitle: 'Especificaciones Técnicas',
      requestQuoteTitle: 'Solicitar Cotización de Impresión',
    },
    process: {
      badge: 'Flujo de Trabajo Comprobado',
      heading: 'Del Concepto al Render: Cómo Colaboramos',
      subtitle: 'Un proceso de producción transparente de 6 pasos diseñado para garantizar excelencia creativa y puntualidad.',
      step1Title: 'Descubrimiento y Briefing Creativo',
      step1Desc: 'Analizamos los objetivos de su marca, público objetivo y requerimientos visuales.',
      step2Title: 'Arte Conceptual y Guion Gráfico',
      step2Desc: 'Bocetos de personajes, encuadres visuales y storyboards para estructurar la historia.',
      step3Title: 'Modelado 3D y Rigging',
      step3Desc: 'Modelado de alta densidad poligonal, rigging esqueletal y texturizado procedimental.',
      step4Title: 'Animación e Iluminación',
      step4Desc: 'Coreografía de fotogramas clave, cámaras cinematográficas e iluminación volumétrica.',
      step5Title: 'VFX y Diseño de Sonido',
      step5Desc: 'Simulaciones de partículas, composición, corrección de color y masterización de audio.',
      step6Title: 'Render Final y Entrega Multiformato',
      step6Desc: 'Entrega máster en 4K/8K de altísima calidad optimizada para cine, TV y medios digitales.',
    },
    industries: {
      badge: 'Sectores y Experiencia',
      heading: 'Animación a Medida para Industrias Globales',
      subtitle: 'Desde fintech B2B hasta animaciones biomédicas 3D y trailers de videojuegos AAA, adaptamos nuestro flujo a sus necesidades.',
    },
    testimonials: {
      badge: 'Testimonios de Clientes',
      heading: 'La Confianza de Directores y Productores en Todo el Mundo',
      subtitle: 'Conozca las opiniones de líderes creativos que confían en AA Animations para contenido visual de alto impacto.',
      verifiedReview: 'Cliente Verificado',
    },
    faq: {
      badge: '¿Preguntas Frecuentes?',
      heading: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesita saber para comenzar su producción de animación o VFX con AA Animations.',
      searchPlaceholder: 'Buscar preguntas...',
    },
    contact: {
      badge: 'Contáctenos',
      heading: 'Hagamos Realidad Su Visión',
      subtitle: 'Hable directamente con nuestros productores. Tiempo promedio de respuesta menor a 1 hora.',
      formTitle: 'Formulario de Consulta de Proyecto',
      formSubtitle: 'Complete sus especificaciones para recibir una cotización detallada y consulta sin costo.',
      name: 'Nombre Completo',
      namePlaceholder: 'p. ej. Carlos Mendoza',
      email: 'Correo Electrónico',
      emailPlaceholder: 'carlos@empresa.com',
      phone: 'Teléfono / WhatsApp',
      phonePlaceholder: '+34 600 000 000',
      service: 'Servicio Requerido',
      budget: 'Presupuesto Estimado',
      details: 'Detalles y Visión del Proyecto',
      detailsPlaceholder: 'Describa su visión, duración deseada, plazos de entrega y estilos de referencia...',
      submit: 'Enviar Consulta de Proyecto',
      submitting: 'Enviando...',
      successMsg: '¡Gracias! Hemos recibido su consulta. Nuestro productor se comunicará con usted en breve.',
      ourOffices: 'Ubicaciones de Estudio y Contacto',
    },
    footer: {
      tagline: 'Estudio de animación de nueva generación, efectos visuales e impresión comercial de alta precisión para empresas y creadores globales.',
      quickLinks: 'Enlaces Rápidos',
      servicesTitle: 'Servicios de Animación',
      newsletterTitle: 'Suscríbase a AA Animations Insider',
      newsletterSub: 'Reciba análisis mensuales, tutoriales de CGI y noticias de producción directamente en su correo.',
      newsletterPlaceholder: 'Ingrese su correo electrónico...',
      subscribe: 'Suscribirse',
      subscribed: '¡Gracias! Ya está suscrito a nuestro boletín.',
      rights: '©2016 - todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      cookieSettings: 'Configuración de Cookies',
    },
    common: {
      close: 'Cerrar',
      back: 'Atrás',
      next: 'Siguiente',
      submit: 'Enviar',
      loading: 'Cargando...',
      estimatedCost: 'Costo Estimado de Producción',
      bookConsultation: 'Reservar Consulta Gratuita',
    },
  },
  FR: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      portfolio: 'Portfolio',
      printing: 'Services d\'Impression',
      careers: 'Carrières',
      contact: 'Contact',
      getQuote: 'Devis',
      search: 'Recherche',
      coreServices: 'Nos Services de Studio',
      printingBranding: 'Impression & Branding Personnalisé',
      printingSubtitle: 'Numérique, Grand Format, Goodies & 3D',
      costEstimator: 'Estimateur de Coûts',
      freeConsultation: 'Consultation Gratuite',
      selectLanguage: 'Sélectionner la Langue',
      popularServices: 'Services Populaires',
    },
    hero: {
      badge: 'Studio d\'Animation et d\'Effets Visuels Nouvelle Génération',
      titlePart1: 'Nous Transformons les Idées en',
      titleHighlight: 'Expériences Visuelles Éblouissantes',
      subtitle: 'Studio mondial d\'animation 3D CGI, de conception de personnages et d\'effets visuels de pointe au service des marques audacieuses et des créateurs de contenu.',
      watchShowreel: 'Voir le Showreel',
      statProjects: 'Projets Réalisés',
      statClients: 'Clients Internationaux',
      statSatisfaction: 'Satisfaction Client',
      statAwards: 'Prix Internationaux',
    },
    intro: {
      badge: 'Qui Sommes-Nous',
      heading: 'Façonner des Récits Visuels Emblématiques pour les Marques et le Cinéma',
      desc1: 'AA Animations est un studio créatif primé fournissant une animation 3D CGI de pointe, de l\'animation 2D, du motion design et des effets visuels.',
      desc2: 'Des présentations de produits photoréalistes aux univers cinématiques immersifs, notre équipe allie rigueur technique et virtuosité artistique.',
      yearsExcellence: 'Années d\'Excellence',
      activeProjects: 'Productions en Cours',
      globalTeam: 'Artistes & Ingénieurs Mondiaux',
      renderHours: 'Heures de Rendu Livrées',
      viewShowreel: 'Voir le Showreel',
      exploreServices: 'Découvrir les Services',
      pillar1Title: '3D CGI Haute Fidélité',
      pillar1Desc: 'Création d\'actifs photoréalistes, simulations physiques et éclairage cinématographique.',
      pillar2Title: 'Production de Bout en Bout',
      pillar2Desc: 'Concept art, storyboarding, modélisation, rigging, animation et livraison finale.',
      pillar3Title: 'Évolutivité Mondiale',
      pillar3Desc: 'Fermes de rendu distribuées pour respecter les délais commerciaux les plus stricts.',
    },
    services: {
      badge: 'Nos Domaines d\'Expertise',
      heading: 'Animation Haut de Gamme & Production Créative',
      subtitle: 'Explorez nos départements spécialisés conçus pour sublimer votre narration visuelle.',
      viewService: 'Explorer le Service',
      viewAllServices: 'Voir Tous les Services',
      requestQuote: 'Demander un Devis',
      exploreTitle: 'Compétences Spécialisées',
    },
    portfolio: {
      badge: 'Nos Réalisations',
      heading: 'Notre Portfolio',
      subtitle: 'Découvrez nos dernières campagnes publicitaires, animations de personnages 3D et bandes-annonces cinématiques.',
      filterAll: 'Tous les Projets',
      viewDetails: 'Découvrir Plus',
      watchVideo: 'Regarder la Vidéo',
      noProjects: 'Aucun projet ne correspond au filtre sélectionné.',
      client: 'Client',
      duration: 'Durée',
      year: 'Année',
    },
    printing: {
      badge: 'Solutions Complètes',
      heading: 'Division Impression Industrielle & Merchandising Personnalisé',
      subtitle: 'Impression offset haute définition, numérique, UV grand format, packaging de luxe et merchandising livrés partout dans le monde.',
      exploreDivision: 'Explorer la Division',
      courierHeading: 'Livraison Mondiale à Domicile',
      courierDesc: 'Expédition express suivie par DHL et FedEx vers plus de 150 pays avec gestion des douanes.',
      repHeading: 'Besoin de Conseils ? Notre Conseiller est à Votre Écoute',
      repDesc: 'Contactez directement nos spécialistes en impression via WhatsApp ou appel pour une assistance immédiate.',
      chatWhatsApp: 'Discuter sur WhatsApp',
      specsTitle: 'Spécifications Techniques',
      requestQuoteTitle: 'Demander un Devis d\'Impression',
    },
    process: {
      badge: 'Notre Méthodologie',
      heading: 'Du Concept au Rendu : Notre Processus Collaboratif',
      subtitle: 'Un pipeline de production en 6 étapes clair et transparent pour assurer perfection créative et ponctualité.',
      step1Title: 'Découverte & Cahier des Charges',
      step1Desc: 'Nous analysons les objectifs de votre marque, votre audience et vos exigences artistiques.',
      step2Title: 'Concept Art & Storyboarding',
      step2Desc: 'Esquisses de personnages, cadrages et storyboards séquentiels pour poser la narration.',
      step3Title: 'Modélisation 3D & Rigging',
      step3Desc: 'Création d\'actifs 3D haute définition, squelettage et matériaux procéduraux.',
      step4Title: 'Animation & Éclairage',
      step4Desc: 'Chorégraphie de mouvement, caméras cinématographiques et éclairage volumétrique.',
      step5Title: 'VFX & Design Sonore',
      step5Desc: 'Simulations de particules, compositing, étalonnage des couleurs et mixage audio.',
      step6Title: 'Rendu Final & Livraison Multi-Formats',
      step6Desc: 'Livraison de masters 4K/8K ultra-haute qualité optimisés pour diffusion TV, cinéma et digital.',
    },
    industries: {
      badge: 'Secteurs & Savoir-Faire',
      heading: 'Animation Sur Mesure pour les Industries Mondiales',
      subtitle: 'Du motion design pour la fintech B2B aux animations biomédicales 3D et trailers de jeux AAA, nous adaptons chaque projet.',
    },
    testimonials: {
      badge: 'Témoignages Clients',
      heading: 'Recommandé par des Directeurs et Producteurs du Monde Entier',
      subtitle: 'Découvrez les retours de nos clients qui font confiance à AA Animations pour donner vie à leurs idées.',
      verifiedReview: 'Client Vérifié',
    },
    faq: {
      badge: 'Questions Fréquentes',
      heading: 'Foire Aux Questions',
      subtitle: 'Tout ce que vous devez savoir pour lancer votre projet d\'animation ou VFX avec AA Animations.',
      searchPlaceholder: 'Rechercher une question...',
    },
    contact: {
      badge: 'Contactez-Nous',
      heading: 'Donnons Vie à Votre Vision',
      subtitle: 'Contactez directement nos producteurs. Temps de réponse moyen de moins d\'une heure en journée.',
      formTitle: 'Formulaire de Demande de Projet',
      formSubtitle: 'Renseignez vos détails pour une consultation gratuite et un devis personnalisé.',
      name: 'Votre Nom Complet',
      namePlaceholder: 'ex. Thomas Durand',
      email: 'Adresse E-mail',
      emailPlaceholder: 'thomas@entreprise.fr',
      phone: 'Téléphone / WhatsApp',
      phonePlaceholder: '+33 6 00 00 00 00',
      service: 'Service Requis',
      budget: 'Budget Estimé',
      details: 'Détails du Projet et Vision',
      detailsPlaceholder: 'Décrivez votre projet, la durée souhaitée, les délais et les références visuelles...',
      submit: 'Envoyer la Demande',
      submitting: 'Envoi en cours...',
      successMsg: 'Merci ! Votre demande a été reçue. Notre producteur vous contactera très rapidement.',
      ourOffices: 'Nos Studios & Points de Contact',
    },
    footer: {
      tagline: 'Studio d\'animation nouvelle génération, effets visuels et impression commerciale de haute précision pour entreprises et créateurs mondiaux.',
      quickLinks: 'Liens Rapides',
      servicesTitle: 'Services d\'Animation',
      newsletterTitle: 'Abonnez-vous à AA Animations Insider',
      newsletterSub: 'Recevez chaque mois nos analyses de production, tutoriels CGI et actualités du studio.',
      newsletterPlaceholder: 'Entrez votre adresse e-mail...',
      subscribe: 'S\'abonner',
      subscribed: 'Merci ! Vous êtes maintenant inscrit à notre newsletter.',
      rights: '©2016 - tous droits réservés.',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions Générales d\'Utilisation',
      cookieSettings: 'Paramètres des Cookies',
    },
    common: {
      close: 'Fermer',
      back: 'Retour',
      next: 'Suivant',
      submit: 'Envoyer',
      loading: 'Chargement...',
      estimatedCost: 'Coût Estimé de Production',
      bookConsultation: 'Réserver un Appel Stratégique',
    },
  },
  DE: {
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      printing: 'Druckdienste',
      careers: 'Karriere',
      contact: 'Kontakt',
      getQuote: 'Angebot',
      search: 'Suchen',
      coreServices: 'Unsere Kernleistungen',
      printingBranding: 'Druck & Individuelles Branding',
      printingSubtitle: 'Digital, Großformat, Merchandise & 3D',
      costEstimator: 'Kostenrechner',
      freeConsultation: 'Kostenlose Beratung',
      selectLanguage: 'Sprache Auswählen',
      popularServices: 'Beliebte Leistungen',
    },
    hero: {
      badge: 'Next-Gen Animations- und VFX-Studio',
      titlePart1: 'Wir verwandeln Ideen in',
      titleHighlight: 'atemberaubende visuelle Erlebnisse',
      subtitle: 'Weltweites Full-Service-Studio für 3D-CGI, Charakterdesign und visuelle Effekte – geschätzt von visionären Marken, Spielestudios und Filmemachern.',
      watchShowreel: 'Showreel ansehen',
      statProjects: 'Abgeschlossene Projekte',
      statClients: 'Globale Markenkunden',
      statSatisfaction: 'Kundenzufriedenheit',
      statAwards: 'Internationale Auszeichnungen',
    },
    intro: {
      badge: 'Wer Wir Sind',
      heading: 'Ikonische visuelle Geschichten für Marken und Entertainment',
      desc1: 'AA Animations ist ein preisgekröntes Kreativstudio für erstklassige 3D-CGI, 2D-Animationen, Motion Graphics und visuelle Effekte.',
      desc2: 'Von fotorealistischen Produktvisualisierungen bis hin zu immersiven Filmwelten verbindet unser Team technische Präzision mit meisterhafter Kunstfertigkeit.',
      yearsExcellence: 'Jahre Exzellenz',
      activeProjects: 'Laufende Produktionen',
      globalTeam: 'Globale Künstler & Ingenieure',
      renderHours: 'Gerenderte Stunden',
      viewShowreel: 'Showreel ansehen',
      exploreServices: 'Leistungen entdecken',
      pillar1Title: 'High-End 3D-CGI',
      pillar1Desc: 'Fotorealistische Assets, physikalische Simulationen und filmische Beleuchtung.',
      pillar2Title: 'End-to-End-Produktion',
      pillar2Desc: 'Konzeptkunst, Storyboarding, Modeling, Rigging, Animation und finale Auslieferung.',
      pillar3Title: 'Globale Skalierbarkeit',
      pillar3Desc: 'Verteilte Renderfarmen für anspruchsvollste kommerzielle Lieferfristen.',
    },
    services: {
      badge: 'Unsere Leistungen',
      heading: 'Erstklassige Animation & Kreativproduktion',
      subtitle: 'Entdecken Sie unsere spezialisierten Abteilungen für außergewöhnliche visuelle Inszenierungen.',
      viewService: 'Leistung ansehen',
      viewAllServices: 'Alle Leistungen anzeigen',
      requestQuote: 'Angebot anfordern',
      exploreTitle: 'Spezialisierte Fachbereiche',
    },
    portfolio: {
      badge: 'Unsere Arbeiten',
      heading: 'Unser Portfolio',
      subtitle: 'Entdecken Sie unsere aktuellen Werbespots, 3D-Charakteranimationen und Kinotrailer.',
      filterAll: 'Alle Projekte',
      viewDetails: 'Mehr Entdecken',
      watchVideo: 'Video ansehen',
      noProjects: 'Keine Projekte für den gewählten Filter gefunden.',
      client: 'Kunde',
      duration: 'Dauer',
      year: 'Jahr',
    },
    printing: {
      badge: 'Ganzheitliche Lösungen',
      heading: 'Industrielle Druckerei & Individuelles Merchandising',
      subtitle: 'Hochauflösender Offset-, Digital- und UV-Großformatdruck, Luxusverpackungen und Merchandise mit weltweiter Lieferung.',
      exploreDivision: 'Bereich erkunden',
      courierHeading: 'Weltweite Direktlieferung',
      courierDesc: 'Verfolgter Expressversand via DHL & FedEx in über 150 Länder inklusive Zollabwicklung.',
      repHeading: 'Brauchen Sie Beratung? Unser Experte hilft Ihnen gerne',
      repDesc: 'Sprechen Sie direkt mit unseren Druckspezialisten per WhatsApp oder Telefonat für sofortige Unterstützung.',
      chatWhatsApp: 'Per WhatsApp chatten',
      specsTitle: 'Technische Spezifikationen',
      requestQuoteTitle: 'Druckangebot anfordern',
    },
    process: {
      badge: 'Bewährter Workflow',
      heading: 'Vom Konzept zum Render: So arbeiten wir zusammen',
      subtitle: 'Ein transparenter 6-stufiger Produktionsprozess für höchste Qualität, Termintreue und kreative Exzellenz.',
      step1Title: 'Discovery & Kreativ-Briefing',
      step1Desc: 'Wir analysieren Ihre Markenidentität, Zielgruppe und visuellen Anforderungen.',
      step2Title: 'Concept Art & Storyboarding',
      step2Desc: 'Charakterentwürfe, Kameraeinstellungen und Sequenz-Storyboards für eine klare Dramaturgie.',
      step3Title: '3D-Modeling & Rigging',
      step3Desc: 'High-Poly-Modellierung, Skelett-Rigging und prozedurales Texturieren.',
      step4Title: 'Animation & Lighting',
      step4Desc: 'Präzise Keyframe-Animation, Motion Capture, filmische Kameras und volumetrisches Licht.',
      step5Title: 'VFX & Sounddesign',
      step5Desc: 'Partikelsimulationen, Compositing, Color Grading und professionelles Audiomastering.',
      step6Title: 'Finales Rendering & Multi-Format-Lieferung',
      step6Desc: 'Auslieferung in 4K/8K Masterqualität optimiert für TV, Kino und digitale Medien.',
    },
    industries: {
      badge: 'Branchen & Expertise',
      heading: 'Maßgeschneiderte Animationen für globale Industrien',
      subtitle: 'Von B2B-Fintech bis hin zu medizinischen 3D-Visualisierungen und AAA-Gaming-Trailern.',
    },
    testimonials: {
      badge: 'Kundenstimmen',
      heading: 'Geschätzt von Regisseuren, Gründern und Produzenten weltweit',
      subtitle: 'Erfahren Sie, wie unsere Kunden mit AA Animations visuelle Maßstäbe setzen.',
      verifiedReview: 'Verifizierter Kunde',
    },
    faq: {
      badge: 'Häufige Fragen',
      heading: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie über den Start Ihrer Animations- oder VFX-Produktion mit AA Animations wissen müssen.',
      searchPlaceholder: 'Fragen durchsuchen...',
    },
    contact: {
      badge: 'Kontakt',
      heading: 'Lassen Sie uns Ihre Vision verwirklichen',
      subtitle: 'Kontaktieren Sie unsere Produzenten direkt. Durchschnittliche Antwortzeit unter 1 Stunde.',
      formTitle: 'Projektanfrage',
      formSubtitle: 'Geben Sie Ihre Projektdaten ein für eine unverbindliche Beratung und ein detailliertes Angebot.',
      name: 'Vollständiger Name',
      namePlaceholder: 'z.B. Maximilian Weber',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'maximilian@unternehmen.de',
      phone: 'Telefon / WhatsApp',
      phonePlaceholder: '+49 170 0000000',
      service: 'Gewünschte Leistung',
      budget: 'Geschätztes Budget',
      details: 'Projektdetails & Vision',
      detailsPlaceholder: 'Beschreiben Sie Ihr Projekt, gewünschte Dauer, Deadlines und Referenzen...',
      submit: 'Anfrage absenden',
      submitting: 'Wird gesendet...',
      successMsg: 'Vielen Dank! Ihre Anfrage ist eingegangen. Unser Produzent wird sich in Kürze bei Ihnen melden.',
      ourOffices: 'Studio-Standorte & Kontakt',
    },
    footer: {
      tagline: 'Next-Gen Animations-, VFX- und Akzidenzdruckstudio für internationale Unternehmen und Kreative.',
      quickLinks: 'Schnelllinks',
      servicesTitle: 'Animationsleistungen',
      newsletterTitle: 'AA Animations Insider abonnieren',
      newsletterSub: 'Erhalten Sie monatliche Einblicke, Unreal Engine 5 Tipps und Studio-News.',
      newsletterPlaceholder: 'Geschäftliche E-Mail eingeben...',
      subscribe: 'Abonnieren',
      subscribed: 'Vielen Dank! Sie sind jetzt für unseren Newsletter angemeldet.',
      rights: '©2016 - alle Rechte vorbehalten.',
      privacyPolicy: 'Datenschutzerklärung',
      termsOfService: 'Nutzungsbedingungen',
      cookieSettings: 'Cookie-Einstellungen',
    },
    common: {
      close: 'Schließen',
      back: 'Zurück',
      next: 'Weiter',
      submit: 'Absenden',
      loading: 'Wird geladen...',
      estimatedCost: 'Geschätzte Produktionskosten',
      bookConsultation: 'Kostenlosen Strategietermin buchen',
    },
  },
  AR: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      printing: 'خدمات الطباعة',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      getQuote: 'طلب عرض سعر',
      search: 'بحث',
      coreServices: 'خدمات الاستوديو الرئيسية',
      printingBranding: 'الطباعة والهوية التجارية',
      printingSubtitle: 'رقمية، مقاسات كبيرة، هدايا دعائية وثلاثية الأبعاد',
      costEstimator: 'حاسبة التكلفة',
      freeConsultation: 'استشارة مجانية',
      selectLanguage: 'اختر اللغة',
      popularServices: 'أبرز الخدمات',
    },
    hero: {
      badge: 'استوديو الجيل القادم للرسوم المتحركة والمؤثرات البصرية',
      titlePart1: 'نحوّل الأفكار الملهمة إلى',
      titleHighlight: 'تجارب بصرية مذهلة وخالدة',
      subtitle: 'استوديو عالمي متكامل لإنتاج الرسوم المتحركة ثلاثية الأبعاد CGI، وتصميم الشخصيات، والمؤثرات البصرية الفائقة الموثوق بها من قبل كبرى العلامات واستوديوهات الألعاب العالمية.',
      watchShowreel: 'مشاهدة العرض التقديمي',
      statProjects: 'مشروع منجز',
      statClients: 'عميل دولي',
      statSatisfaction: 'نسبة رضا العملاء',
      statAwards: 'جوائز دولية',
    },
    intro: {
      badge: 'من نحن',
      heading: 'صياغة قصص بصرية أيقونية للعلامات التجارية والسينما',
      desc1: 'استوديو AA Animations الإبداعي الحائز على جوائز يقدم أحدث تقنيات الرسوم المتحركة ثلاثية الأبعاد CGI وثنائية الأبعاد والموشن جرافيكس والمؤثرات البصرية.',
      desc2: 'من استعراض المنتجات بواقعية متناهية إلى العوالم السينمائية الغامرة، يجمع فريقنا بين الدقة الهندسية والابتكار الفني.',
      yearsExcellence: 'سنوات من التميز',
      activeProjects: 'إنتاجات جارية',
      globalTeam: 'فنانون ومهندسون عالميون',
      renderHours: 'ساعات تصيير منجزة',
      viewShowreel: 'مشاهدة العرض',
      exploreServices: 'استكشاف الخدمات',
      pillar1Title: 'رسوم ثلاثية الأبعاد فائقة الدقة',
      pillar1Desc: 'ابتكار أصول واقعية ومحاكاة فيزيائية وإضاءة سينمائية متطورة.',
      pillar2Title: 'إنتاج شامل من البداية للنهاية',
      pillar2Desc: 'رسم المفاهيم، لوحات القصة، النمذجة، التحريك، والمؤثرات الصوتية.',
      pillar3Title: 'قدرة إنتاجية عالمية',
      pillar3Desc: 'مزارع تصيير حوسبية متطورة تلبي أكثر المواعيد الزمنية التجارية حساسية.',
    },
    services: {
      badge: 'ماذا نقدم',
      heading: 'رسوم متحركة عالمية وإنتاج إبداعي استثنائي',
      subtitle: 'استكشف أقسام الإنتاج المتخصصة لدينا والمصممة للارتقاء بقصتك البصرية إلى آفاق جديدة.',
      viewService: 'استكشف الخدمة',
      viewAllServices: 'عرض جميع الخدمات',
      requestQuote: 'طلب عرض سعر مخصص',
      exploreTitle: 'الإمكانات والخبرات المتخصصة',
    },
    portfolio: {
      badge: 'معرض الأعمال',
      heading: 'معرض أعمالنا',
      subtitle: 'تصفح أحدث إعلاناتنا التجارية، ورسوم الشخصيات ثلاثية الأبعاد، وعروض الألعاب السينمائية.',
      filterAll: 'جميع المشاريع',
      viewDetails: 'اكتشف المزيد',
      watchVideo: 'مشاهدة الفيديو',
      noProjects: 'لم يتم العثور على مشاريع تطابق الفلتر المحدد.',
      client: 'العميل',
      duration: 'المدة',
      year: 'السنة',
    },
    printing: {
      badge: 'حلول متكاملة',
      heading: 'قسم الطباعة الصناعية والهوية التجارية المخصصة',
      subtitle: 'طباعة أوفست ورقمية فائقة الوضوح، طباعة UV للمقاسات الكبيرة، تغليف فاخر، وهدايا ترويجية مع توصيل دولي سريع.',
      exploreDivision: 'استكشف القسم',
      courierHeading: 'توصيل دولي حتى باب منزلك أو مقر شركتك',
      courierDesc: 'شحن سريع عبر DHL وFedEx لأكثر من 150 دولة مع إنهاء الإجراءات الجمركية.',
      repHeading: 'هل تحتاج إلى استشارة؟ ممثلنا جاهز لمساعدتك فورا',
      repDesc: 'تواصل مباشرة مع مهندسي الطباعة عبر واتساب أو الاتصال للحصول على مساعدة وتوصيات سريعة.',
      chatWhatsApp: 'تحدث عبر واتساب',
      specsTitle: 'المواصفات الفنية',
      requestQuoteTitle: 'طلب عرض سعر للطباعة',
    },
    process: {
      badge: 'منهجية العمل المعتمدة',
      heading: 'من الفكرة إلى التصيير النهائي: كيف نتعاون معكم',
      subtitle: 'مسار إنتاجي شفاف ودقيق مكون من 6 مراحل لضمان أعلى مستويات الإتقان والإبداع والالتزام التام بالمواعيد.',
      step1Title: 'الاستكشاف والملخص الإبداعي',
      step1Desc: 'ندرس أهداف علامتك والجمهور المستهدف والنبرة البصرية للمشروع.',
      step2Title: 'رسم المفاهيم ولوحات القصة',
      step2Desc: 'تخطيط المشاهد وتصميم الشخصيات ورسم لوحة القصة لتحديد مسار السرد.',
      step3Title: 'النمذجة ثلاثية الأبعاد والتحريك الهيكلي',
      step3Desc: 'بناء الأصول ثلاثية الأبعاد وتجهيز الهيكل العظمي والمواد الواقعية.',
      step4Title: 'التحريك والإضاءة السينمائية',
      step4Desc: 'تصميم الحركة والتقاط الحركة والكاميرات السينمائية والإضاءة الحجمية.',
      step5Title: 'المؤثرات البصرية والهندسة الصوتية',
      step5Desc: 'محاكاة الجزيئات والتركيب وتصحيح الألوان والمكساج الصوتي الاحترافي.',
      step6Title: 'التصيير والتسليم بصيغ متعددة',
      step6Desc: 'تسليم النسخ الأصلية بدقة 4K/8K مهيأة للعرض التلفزيوني والسينمائي والرقمي.',
    },
    industries: {
      badge: 'القطاعات والخبرات',
      heading: 'رسوم متحركة مخصصة لمختلف القطاعات العالمية',
      subtitle: 'من التقنية المالية إلى الرسوم الطبية ثلاثية الأبعاد وعروض الألعاب الضخمة.',
    },
    testimonials: {
      badge: 'آراء وتقييمات العملاء',
      heading: 'موثوق به من قبل المخرجين والمنتجين ورواد الأعمال حول العالم',
      subtitle: 'تعرف على تجارب شركائنا وقادة التسويق الذين اعتمدوا على استوديوهاتنا لتحقيق إنجازات بصرية متميزة.',
      verifiedReview: 'عميل موثق',
    },
    faq: {
      badge: 'أسئلة شائعة',
      heading: 'الأسئلة الأكثر تكراراً',
      subtitle: 'كل ما تحتاج لمعرفته حول بدء إنتاج الرسوم المتحركة أو المؤثرات البصرية مع AA Animations.',
      searchPlaceholder: 'ابحث في الأسئلة...',
    },
    contact: {
      badge: 'تواصل معنا',
      heading: 'دعنا نحول رؤيتك إلى واقع ملموس',
      subtitle: 'تواصل مع المنتجين المباشرين لدينا. متوسط وقت الرد أقل من ساعة واحدة خلال أوقات العمل.',
      formTitle: 'نموذج طلب المشروع',
      formSubtitle: 'أدخل تفاصيل مشروعك للحصول على استشارة مجانية وعرض سعر مفصل.',
      name: 'الاسم الكامل',
      namePlaceholder: 'مثال: أحمد المنصوري',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'ahmed@company.com',
      phone: 'الهاتف / واتساب',
      phonePlaceholder: '+971 50 000 0000',
      service: 'الخدمة المطلوبة',
      budget: 'الميزانية التقديرية',
      details: 'تفاصيل ورؤية المشروع',
      detailsPlaceholder: 'اشرح فكرة المشروع، والمدة المطلوبة، والموعد النهائي، والمراجع البصرية...',
      submit: 'إرسال طلب المشروع',
      submitting: 'جاري الإرسال...',
      successMsg: 'شكراً لك! تم استلام طلبك بنجاح وسيتواصل معك أحد كبار منتجينا خلال ساعة واحدة.',
      ourOffices: 'مواقع الاستوديوهات ونقاط التواصل',
    },
    footer: {
      tagline: 'استوديو رائد للرسوم المتحركة والمؤثرات البصرية والطباعة التجارية الدقيقة لخدمة الشركات والمبدعين حول العالم.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدمات الرسوم المتحركة',
      newsletterTitle: 'اشترك في نشرة AA Animations',
      newsletterSub: 'احصل على مقاطع كواليس شهرية، ودروس Unreal Engine 5، وأحدث أخبار الإنتاج.',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني...',
      subscribe: 'اشتراك',
      subscribed: 'شكراً لك! لقد تم اشتراكك في النشرة الإخبارية بنجاح.',
      rights: '©2016 - جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
      cookieSettings: 'إعدادات الكوكيز',
    },
    common: {
      close: 'إغلاق',
      back: 'رجوع',
      next: 'التالي',
      submit: 'إرسال',
      loading: 'جاري التحميل...',
      estimatedCost: 'التكلفة الإنتاجية التقديرية',
      bookConsultation: 'حجز جلسة استشارية مجانية',
    },
  },
  JP: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      portfolio: 'ポートフォリオ',
      printing: '印刷サービス',
      careers: '採用情報',
      contact: 'お問い合わせ',
      getQuote: 'お見積もり',
      search: '検索',
      coreServices: 'スタジオの主要サービス',
      printingBranding: '印刷＆カスタムブランディング',
      printingSubtitle: 'デジタル、大判UV、グッズ＆3D造形',
      costEstimator: '費用シミュレーター',
      freeConsultation: '無料相談を申し込む',
      selectLanguage: '言語を選択',
      popularServices: '人気のサービス',
    },
    hero: {
      badge: '次世代アニメーション＆VFXスタジオ',
      titlePart1: 'あらゆるアイデアを最高の',
      titleHighlight: '圧倒的な視覚体験へと昇華',
      subtitle: '世界の先進企業、ゲームスタジオ、映像クリエイターから信頼される、3D CGI、キャラクターデザイン、最先端VFXの総合制作スタジオ。',
      watchShowreel: 'ショーリールを見る',
      statProjects: '制作実績数',
      statClients: '世界的な提携ブランド',
      statSatisfaction: '顧客満足度',
      statAwards: '国際アワード受賞歴',
    },
    intro: {
      badge: '私たちについて',
      heading: 'ブランドとエンターテインメントに心震える視覚的物語を',
      desc1: 'AA Animations は、最高峰の3D CGI、2Dアニメーション、モーショングラフィックス、視覚効果を提供する受賞歴あるクリエイティブスタジオです。',
      desc2: 'フォトリアルな製品プロモーションから没入感あふれるシネマティック映像まで、高度な技術と芸術的センスを融合させます。',
      yearsExcellence: '年の実績',
      activeProjects: '進行中プロジェクト',
      globalTeam: '世界各地のトップクリエイター',
      renderHours: '総レンダリング時間',
      viewShowreel: 'ショーリールを見る',
      exploreServices: 'サービスを見る',
      pillar1Title: '超高精細 3D CGI',
      pillar1Desc: 'フォトリアルなモデル制作、物理シミュレーション、シネマティックなライティング。',
      pillar2Title: '一気通貫のプロダクション',
      pillar2Desc: 'コンセプトアート、絵コンテ、モデリング、リギング、アニメーション、音響、納品まで完全対応。',
      pillar3Title: 'グローバルな制作力',
      pillar3Desc: '分散型レンダーファームにより、タイトな商用スケジュールでも確実な品質と納期を保証。',
    },
    services: {
      badge: 'サービス内容',
      heading: '世界水準のアニメーション＆クリエイティブ制作',
      subtitle: 'お客様のビジョンを最高品質で具現化する専門部門のラインナップをご覧ください。',
      viewService: 'サービス詳細',
      viewAllServices: '全サービスを見る',
      requestQuote: 'お見積もりを依頼',
      exploreTitle: '専門制作領域',
    },
    portfolio: {
      badge: '制作実績',
      heading: 'ポートフォリオ',
      subtitle: '最新のコマーシャル映像、3Dキャラクターアニメーション、シネマティック予告編、モーショングラフィックスをご覧ください。',
      filterAll: 'すべてのプロジェクト',
      viewDetails: 'さらに詳しく',
      watchVideo: '動画を再生',
      noProjects: '該当するプロジェクトが見つかりませんでした。',
      client: 'クライアント',
      duration: '時間',
      year: '年度',
    },
    printing: {
      badge: '包括的なソリューション',
      heading: '産業用印刷＆カスタムブランディング部門',
      subtitle: '高精細オフセット印刷、デジタル印刷、大判UV印刷、高級パッケージ、カスタムグッズを世界各国へお届けします。',
      exploreDivision: '部門を見る',
      courierHeading: '世界各国へスピーディにお届け',
      courierDesc: 'DHLおよびFedExによる追跡付き国際速達便で150カ国以上へ安全にお届けします。',
      repHeading: 'ご不明な点はお気軽にご相談ください',
      repDesc: 'WhatsAppやオンライン相談にて専任のプリンティングエンジニアが迅速にご案内します。',
      chatWhatsApp: 'WhatsAppで相談',
      specsTitle: '技術仕様',
      requestQuoteTitle: '印刷見積もりを依頼',
    },
    process: {
      badge: '制作フロー',
      heading: 'コンセプトから完成まで：共創プロセス',
      subtitle: '透明性の高い6段階のパイプラインにより、高品質な作品を予定通りにお届けします。',
      step1Title: 'ヒアリング＆要件定義',
      step1Desc: 'ブランドのゴール、ターゲット層、トーン＆マナーを綿密に分析します。',
      step2Title: 'コンセプトアート＆絵コンテ',
      step2Desc: '構図設計、キャラクター原案、絵コンテ作成を通じてストーリーの骨子を固めます。',
      step3Title: '3Dモデリング＆リギング',
      step3Desc: 'ハイポリゴンモデリング、骨格リギング、高度なプロシージャルマテリアル設定。',
      step4Title: 'アニメーション＆ライティング',
      step4Desc: 'キーフレーム付け、モーションキャプチャ統合、シネマティックカメラワークと照明設計。',
      step5Title: 'VFX＆サウンドデザイン',
      step5Desc: 'パーティクル演出、コンポジット、カラーグレーディング、効果音と楽曲マスタリング。',
      step6Title: '最終レンダリング＆納品',
      step6Desc: 'テレビ放映、劇場、WEB配信に最適化された4K/8Kマスターデータでの納品。',
    },
    industries: {
      badge: '対応業界',
      heading: 'グローバル産業に特化した映像制作',
      subtitle: 'FinTechモーショングラフィックスから医療3D映像、AAAゲームトレイラーまで幅広く対応します。',
    },
    testimonials: {
      badge: 'お客様の声',
      heading: '世界中のディレクターやプロデューサーからの信頼',
      subtitle: 'AA Animations の技術力と表現力を評価してくださったお客様のレビューをご紹介します。',
      verifiedReview: '認証クライアント',
    },
    faq: {
      badge: 'よくある質問',
      heading: 'FAQ（よくあるご質問）',
      subtitle: '制作のご依頼や進行に関する基本的な疑問にお答えします。',
      searchPlaceholder: '質問を検索...',
    },
    contact: {
      badge: 'お問い合わせ',
      heading: 'あなたのビジョンをカタチに',
      subtitle: '専任プロデューサーへ直接ご連絡いただけます。営業時間内は平均1時間以内に返答いたします。',
      formTitle: 'プロジェクトご相談フォーム',
      formSubtitle: 'ご要件をご入力いただければ、無料相談とお見積もりをご案内します。',
      name: 'お名前',
      namePlaceholder: '例: 田中 太郎',
      email: 'メールアドレス',
      emailPlaceholder: 'tanaka@company.co.jp',
      phone: '電話番号 / WhatsApp',
      phonePlaceholder: '03-0000-0000',
      service: 'ご希望のサービス',
      budget: 'ご予算',
      details: 'プロジェクト概要・ご要望',
      detailsPlaceholder: '企画内容、想定尺、納期、参考動画などをご自由にご記入ください...',
      submit: '問い合わせを送信する',
      submitting: '送信中...',
      successMsg: 'お問い合わせありがとうございます。担当プロデューサーより迅速にご連絡いたします。',
      ourOffices: 'スタジオ拠点＆連絡先',
    },
    footer: {
      tagline: '次世代アニメーション、VFX、高精度商用印刷で世界中の企業とクリエイターを支援する総合スタジオ。',
      quickLinks: 'クイックリンク',
      servicesTitle: 'アニメーションサービス',
      newsletterTitle: 'AA Animations ニュースレター',
      newsletterSub: 'メイキング解説やCGIチュートリアル、最新ニュースを定期的にお届けします。',
      newsletterPlaceholder: 'メールアドレスを入力...',
      subscribe: '登録する',
      subscribed: 'ご登録ありがとうございます！ニュースレターをお届けします。',
      rights: '©2016 - 無断転載を禁じます。',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      cookieSettings: 'Cookie設定',
    },
    common: {
      close: '閉じる',
      back: '戻る',
      next: '次へ',
      submit: '送信',
      loading: '読み込み中...',
      estimatedCost: '概算制作費',
      bookConsultation: '無料オンライン相談を予約',
    },
  },
};
