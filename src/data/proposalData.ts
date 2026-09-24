// ============================================================
// proposalData.ts — Fuente única de verdad para precios,
// entregables y condiciones comerciales.
// Basado fielmente en: Propuesta_Comercial_Finanzas_Consulting_PDP_ESTRUCTURA_FINAL.docx
// ============================================================

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '573052339865';

export function getWhatsAppCustomLink(selectedPlanText?: string): string {
  const baseMessage = selectedPlanText
    ? `Hola Punto D' Partida, estuve revisando la propuesta estratégica para Finanzas Consulting y me interesa la siguiente configuración:\n\n${selectedPlanText}\n\nMe gustaría coordinar el inicio con el equipo.`
    : `Hola Punto D' Partida, estuve revisando la propuesta estratégica para Finanzas Consulting y me gustaría conversar sobre el siguiente paso.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseMessage)}`;
}

export const WHATSAPP_LINK = getWhatsAppCustomLink();

// ---- Navegación ----
export const NAV_ITEMS = [
  { label: '01. Objetivo', href: '#objetivo' },
  { label: '02. Estructura', href: '#estructura' },
  { label: '03. Ecosistema Digital', href: '#ecosistema' },
  { label: '04. Servicios Extra', href: '#complementarios' },
  { label: '05. Pymes Financiables', href: '#pymes' },
  { label: '06. Inversión & Simulador', href: '#inversion' },
  { label: '07. Equipo', href: '#equipo' },
  { label: '08. Requerimientos & Reglas', href: '#condiciones' },
  { label: '09. Siguiente Paso', href: '#contacto' },
] as const;

// ---- Track 1: Etapa Inicial Obligatoria ----
export const PROJECT_START = {
  tag: 'ETAPA INICIAL — CONSTRUCCIÓN ESTRATÉGICA + CONFIGURACIÓN',
  title: 'Primero construimos la base.',
  price: '$1.700.000',
  priceRaw: 1700000,
  priceSuffix: '+ IVA · Pago único · Obligatoria para Fase 1, 2 o 3',
  duration: '15–20 días hábiles',
  concept: 'Punto de partida obligatorio para organizar la base digital, perfiles, WhatsApp, accesos y estructura estratégica antes de iniciar cualquier fase mensual.',
  note: 'La Etapa Inicial es obligatoria para contratar Fase 1, Fase 2 o Fase 3. Si se inicia directamente en Fase 2 o Fase 3, la Etapa Inicial igualmente debe contratarse. No cuenta dentro de los seis (6) meses de permanencia mínima mensual.',
  deliverables: [
    { title: 'Análisis del Negocio & Oportunidades', desc: 'Análisis del negocio, públicos, posicionamiento, tono, oportunidades y objetivos.' },
    { title: 'Brief Estratégico & Ruta de Conversión', desc: 'Definición de pilares de contenido y ruta clara de conversión hacia el equipo comercial.' },
    { title: 'Revisión de Activos Digitales', desc: 'Auditoría y revisión de oportunidades en redes sociales, sitio web y publicidad.' },
    { title: 'Configuración de Canales Principales', desc: 'Configuración y optimización inicial de Facebook, Instagram, TikTok y LinkedIn.' },
    { title: 'Optimización de Perfiles & Enlaces', desc: 'Optimización de perfiles, biografías, imágenes, enlaces e información de contacto.' },
    { title: 'WhatsApp Business & Bienvenida', desc: 'Configuración/optimización de WhatsApp Business y mensaje automático de bienvenida.' },
    { title: 'LinkTree Profesional', desc: 'Creación y configuración de LinkTree centralizado.' },
    { title: 'Accesos & Lineamientos Iniciales', desc: 'Organización de accesos, entrega de lineamientos iniciales y reunión de recepción de insumos.' },
  ],
  timeline: [
    { step: '01', title: 'Recepción & Accesos', desc: 'Reunión de recepción de información, materiales y accesos' },
    { step: '02', title: 'Estrategia & Brief', desc: 'Definición de pilares de contenido y ruta de conversión' },
    { step: '03', title: 'Puesta a Punto Digital', desc: 'Optimización de redes, WhatsApp Business y LinkTree' },
    { step: '04', title: 'Lineamientos & Arranque', desc: 'Entrega de lineamientos e inicio de la fase mensual elegida' },
  ],
};

// ---- Fases Mensuales ----
export interface Phase {
  id: number;
  tag: string;
  code: string;
  name: string;
  concept: string;
  badge?: string;
  isRecommended?: boolean;
  price: string;
  priceRaw: number;
  priceSuffix: string;
  selectionNote: string;
  objective: string;
  channels: string[];
  keyHighlights: string[];
  includes: string[];
  audiovisual: string;
  metaAds: string;
  googleAds?: string;
  webManagement?: string;
  automationAI?: string;
  cta: string;
  ctaHref: string;
  additions: string[];
}

export const PHASES: Phase[] = [
  {
    id: 1,
    tag: 'FASE 1',
    code: '#fase-1-posicionamiento',
    name: 'Posicionamiento y Contenido',
    concept: 'Construimos presencia editorial, consistencia y reconocimiento de marca.',
    badge: 'Base Editorial',
    price: '$2.400.000',
    priceRaw: 2400000,
    priceSuffix: '+ IVA / mes',
    selectionNote: 'Se elige esta, o Fase 2, o Fase 3',
    objective: 'Construir presencia, consistencia editorial y reconocimiento de marca con contenido estratégico y producción constante.',
    channels: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn (orgánico)'],
    keyHighlights: [
      '3–4 contenidos principales por semana (hasta 4 reels/mes incluidos)',
      '4–6 historias por semana + 1 contenido especial/estacional',
      '1 jornada de producción audiovisual cada 2 meses (Medellín/AM, máx 6h)',
      'Gestión de Meta Ads: hasta 1 campaña activa',
    ],
    includes: [
      'Facebook, Instagram y TikTok; LinkedIn como canal complementario.',
      'Planeación mensual de contenidos.',
      '3–4 contenidos principales por semana; hasta 4 reels/mes incluidos dentro del volumen total.',
      '4–6 historias por semana + 1 contenido especial/estacional.',
      'Copywriting, diseño, edición, programación y publicación.',
      'Gestión de Meta Ads: hasta 1 campaña activa.',
      'Métricas mensuales básicas + recomendaciones.',
      'Edición de material audiovisual suministrado por el cliente.',
      '1 jornada de producción audiovisual cada 2 meses, en Medellín o Área Metropolitana, máximo 6 horas.',
    ],
    audiovisual: '1 jornada cada 2 meses (Medellín/AM, máx 6h) + edición de material suministrado',
    metaAds: 'Hasta 1 campaña activa configurada, monitoreada y optimizada',
    cta: 'Elegir Fase 1 — Posicionamiento',
    ctaHref: WHATSAPP_LINK,
    additions: [
      'Presencia activa en Facebook, Instagram, TikTok y LinkedIn',
      '3–4 contenidos semanales + hasta 4 reels/mes',
      '1 jornada audiovisual bimestral presencial (máx 6h)',
      'Gestión de 1 campaña activa en Meta Ads',
    ],
  },
  {
    id: 2,
    tag: 'FASE 2',
    code: '#fase-2-crecimiento-captacion',
    name: 'Contenido + Crecimiento + Captación',
    concept: 'Mayor intensidad de producción audiovisual y captación de oportunidades.',
    badge: 'Más Elegido · Recomendado',
    isRecommended: true,
    price: '$3.600.000',
    priceRaw: 3600000,
    priceSuffix: '+ IVA / mes',
    selectionNote: 'Se elige esta, o Fase 1, o Fase 3',
    objective: 'Escalar el volumen de contenido y potenciar la captación con producción audiovisual mensual presencial y pauta publicitaria avanzada.',
    channels: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'Meta Ads Avanzado'],
    keyHighlights: [
      '4–5 contenidos principales por semana (hasta 8 reels/mes incluidos)',
      '1 jornada de producción audiovisual MENSUAL (Medellín/AM, máx 6h)',
      'Gestión de Meta Ads: hasta 2 campañas activas (hasta 2 segmentaciones c/u)',
      'Banco de contenidos + mayor intensidad de historias',
    ],
    includes: [
      'Todo lo incluido en Fase 1, con mayor intensidad de producción y captación.',
      'Planeación mensual de contenidos y banco de contenidos.',
      '4–5 contenidos principales por semana; hasta 8 reels/mes incluidos dentro del volumen total.',
      'Mayor intensidad de historias según estrategia + banco de contenidos.',
      '1 jornada de producción audiovisual MENSUAL, en Medellín o Área Metropolitana, máximo 6 horas.',
      'Gestión de Meta Ads: hasta 2 campañas activas.',
      'Hasta 2 conjuntos de anuncios/segmentaciones por campaña.',
      'Configuración, monitoreo, optimización y seguimiento continuo.',
      'Métricas de contenido + Meta Ads y reporte mensual integrado.',
      'Recomendaciones estratégicas de optimización continua.',
    ],
    audiovisual: '1 jornada MENSUAL presencial (Medellín/AM, máx 6h) + banco de contenidos',
    metaAds: 'Hasta 2 campañas activas con hasta 2 conjuntos/segmentaciones cada una',
    cta: 'Elegir Fase 2 — Crecimiento y Captación',
    ctaHref: WHATSAPP_LINK,
    additions: [
      'Producción audiovisual MENSUAL presencial (en lugar de bimestral)',
      'Escala a 4–5 contenidos/sem y hasta 8 reels/mes',
      'Gestión de hasta 2 campañas activas en Meta Ads (2 segmentaciones c/u)',
      'Banco de contenidos y reporte integrado mensual',
    ],
  },
  {
    id: 3,
    tag: 'FASE 3',
    code: '#fase-3-ecosistema-total',
    name: 'Ecosistema Digital + Automatización',
    concept: 'Conectamos todo el ecosistema digital: Meta, Google Ads, Web, CRO e IA.',
    badge: 'Ecosistema Total',
    price: '$4.400.000',
    priceRaw: 4400000,
    priceSuffix: '+ IVA / mes',
    selectionNote: 'Se elige esta, o Fase 1, o Fase 2',
    objective: 'Integrar comunicación, captación multicanal (Meta + Google Ads), administración web, optimización de conversión y automatizaciones con IA.',
    channels: ['Meta (FB/IG)', 'TikTok', 'LinkedIn', 'Google Ads', 'Sitio Web', 'WhatsApp & IA'],
    keyHighlights: [
      'Todo lo de Fase 2 (4–5 contenidos/sem, hasta 8 reels, producción mensual)',
      'Gestión mensual de Google Ads incluida (una vez implementado)',
      'Administración mensual del sitio web y actualizaciones ordinarias',
      'Optimización de conversión (CRO) + automatizaciones e IA técnica',
    ],
    includes: [
      'Todo lo incluido en Fase 2.',
      'Planeación mensual de contenidos y gestión integral de canales.',
      '4–5 contenidos principales por semana; hasta 8 reels/mes incluidos dentro del volumen total.',
      '1 jornada de producción audiovisual mensual, en Medellín o Área Metropolitana, máximo 6 horas.',
      'Gestión de Meta Ads: hasta 2 campañas activas; hasta 2 conjuntos de anuncios/segmentaciones por campaña.',
      'Gestión mensual de Google Ads, una vez implementado y técnicamente disponible.',
      'Administración mensual del sitio web y actualizaciones ordinarias.',
      'Optimización de conversión y automatizaciones dentro del alcance técnico.',
      'Integraciones de IA sujetas a viabilidad técnica.',
      'Reporte integral del ecosistema + recomendaciones de optimización.',
    ],
    audiovisual: '1 jornada MENSUAL presencial (Medellín/AM, máx 6h)',
    metaAds: 'Hasta 2 campañas activas (hasta 2 segmentaciones c/u)',
    googleAds: 'Gestión mensual de Google Ads incluida',
    webManagement: 'Administración mensual del sitio web y cambios ordinarios',
    automationAI: 'Optimización de conversión (CRO), automatizaciones e integraciones IA',
    cta: 'Elegir Fase 3 — Ecosistema Total',
    ctaHref: WHATSAPP_LINK,
    additions: [
      'Gestión mensual de Google Ads incluida dentro del acompañamiento',
      'Administración mensual continua del sitio web',
      'Optimización de conversión (CRO) y automatizaciones de contacto',
      'Integraciones de Inteligencia Artificial (según viabilidad técnica)',
      'Reporte 360° del ecosistema digital completo',
    ],
  },
];

// ---- Tabla Comparativa de Fases ----
export interface ComparisonRow {
  feature: string;
  category: 'Contenido' | 'Audiovisual' | 'Publicidad' | 'Web & Tech' | 'Estrategia';
  phase1: string | boolean;
  phase2: string | boolean;
  phase3: string | boolean;
}

export const COMPARISON_MATRIX: ComparisonRow[] = [
  {
    feature: 'Canales principales gestionados',
    category: 'Contenido',
    phase1: 'FB, IG, TikTok + LinkedIn',
    phase2: 'FB, IG, TikTok + LinkedIn',
    phase3: 'FB, IG, TikTok, LinkedIn + Web',
  },
  {
    feature: 'Contenidos principales por semana',
    category: 'Contenido',
    phase1: '3–4 / semana',
    phase2: '4–5 / semana',
    phase3: '4–5 / semana',
  },
  {
    feature: 'Reels mensuales (dentro del volumen)',
    category: 'Contenido',
    phase1: 'Hasta 4 reels/mes',
    phase2: 'Hasta 8 reels/mes',
    phase3: 'Hasta 8 reels/mes',
  },
  {
    feature: 'Historias semanales',
    category: 'Contenido',
    phase1: '4–6 / semana',
    phase2: 'Mayor intensidad',
    phase3: 'Mayor intensidad',
  },
  {
    feature: 'Jornada audiovisual presencial (Medellín/AM)',
    category: 'Audiovisual',
    phase1: '1 cada 2 meses (6h máx)',
    phase2: '1 MENSUAL (6h máx)',
    phase3: '1 MENSUAL (6h máx)',
  },
  {
    feature: 'Banco de contenidos exclusivo',
    category: 'Audiovisual',
    phase1: false,
    phase2: true,
    phase3: true,
  },
  {
    feature: 'Gestión de Meta Ads (Facebook + Instagram)',
    category: 'Publicidad',
    phase1: 'Hasta 1 campaña activa',
    phase2: 'Hasta 2 campañas activas',
    phase3: 'Hasta 2 campañas activas',
  },
  {
    feature: 'Segmentaciones / conjuntos por campaña',
    category: 'Publicidad',
    phase1: '1 conjunto',
    phase2: 'Hasta 2 conjuntos',
    phase3: 'Hasta 2 conjuntos',
  },
  {
    feature: 'Gestión mensual de Google Ads incluida',
    category: 'Publicidad',
    phase1: false,
    phase2: false,
    phase3: true,
  },
  {
    feature: 'Administración y mantenimiento web mensual',
    category: 'Web & Tech',
    phase1: false,
    phase2: false,
    phase3: true,
  },
  {
    feature: 'Optimización de conversión (CRO) & Automatización',
    category: 'Web & Tech',
    phase1: false,
    phase2: false,
    phase3: true,
  },
  {
    feature: 'Integraciones de Inteligencia Artificial',
    category: 'Web & Tech',
    phase1: false,
    phase2: false,
    phase3: 'Sujeto a viabilidad técnica',
  },
  {
    feature: 'Reporte mensual integrado',
    category: 'Estrategia',
    phase1: 'Básico + Recomendaciones',
    phase2: 'Contenido + Meta Ads',
    phase3: 'Ecosistema Total 360°',
  },
];

// ---- Track 2: Campaña Pymes Financiables ----
export const PYMES_CAMPAIGN = {
  tag: 'PROPUESTA 02 — CAMPAÑA PYMES FINANCIABLES',
  title: 'Campaña Pymes Financiables',
  subtitle: 'Campaña puntual para producir, publicar y promocionar la iniciativa en Facebook e Instagram mediante Meta Ads.',
  price: '$3.800.000',
  priceRaw: 3800000,
  priceSuffix: '+ IVA · Campaña independiente',
  objective: 'Construir y ejecutar una campaña digital para posicionar el programa Pymes Financiables, educar a la audiencia y generar oportunidades comerciales.',
  channels: ['Facebook', 'Instagram', 'Meta Ads'],
  deliverables: [
    { title: '1 Jornada de Producción', desc: 'Producción audiovisual en Medellín o Área Metropolitana, máximo 6 horas.' },
    { title: 'Hasta 8 Reels / Videos', desc: 'Hasta 8 reels o piezas audiovisuales tipo reel producidas y editadas.' },
    { title: 'Aprox. 6 Piezas Gráficas / CTA', desc: 'Piezas gráficas y llamados a la acción de alto impacto.' },
    { title: '2 Carruseles Educativos', desc: 'Carruseles pedagógicos terminados con invitación directa a la campaña.' },
    { title: '1 Infografía Especial', desc: 'Pieza de valor conceptual para explicar el programa.' },
    { title: 'Copywriting Profesional', desc: 'Redacción y adaptación de textos a formatos de publicación.' },
    { title: 'Planeación & Calendario', desc: 'Organización del calendario de campaña y programación en FB e IG.' },
    { title: 'Gestión de Meta Ads', desc: '1 campaña principal con hasta 2 conjuntos de anuncios, monitoreo y reporte final.' },
  ],
  notIncluded: [
    'Inversión publicitaria (asumida directamente por Finanzas Consulting).',
    'Google Ads, TikTok Ads u otros canales adicionales.',
    'Community management permanente.',
    'Producciones o piezas adicionales fuera de lo pactado.',
    'Campañas independientes adicionales o estructuras publicitarias fuera del alcance.',
    'Atención, seguimiento o cierre comercial de leads.',
    'Impresión y servicios de terceros.',
  ],
  recommendationPDP: {
    title: 'Recomendación Estratégica PD’P',
    text: 'Si la campaña representa una puerta de entrada a una relación de largo plazo, recomendamos contratar también la Etapa Inicial ($1.700.000 + IVA). Esto permite organizar la base digital, accesos, perfiles, WhatsApp, lineamientos y estructura estratégica antes de escalar la comunicación y la pauta.',
    additionalPrice: '$1.700.000 + IVA · Pago único',
  },
  cta: 'Activar Campaña Pymes Financiables',
  ctaHref: WHATSAPP_LINK,
};

// ---- Servicios Complementarios e Independientes ----
export interface AdditionalService {
  id: string;
  tag: string;
  title: string;
  price: string;
  priceRaw: number;
  priceSuffix: string;
  type: 'Pago único';
  description: string;
  highlights: string[];
  scope: string[];
  disclaimer: string;
}

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'google-ads',
    tag: 'SERVICIO COMPLEMENTARIO',
    title: 'Implementación Google Ads',
    price: '$2.800.000',
    priceRaw: 2800000,
    priceSuffix: '+ IVA · Pago único · Complementario',
    type: 'Pago único',
    description: 'Configuración profesional, técnica y estratégica para posicionar la oferta en Google. No constituye una cuarta fase: puede contratarse junto con Fase 3 o de manera independiente.',
    highlights: [
      'Hasta 2 campañas iniciales con segmentaciones y anuncios',
      'Configuración técnica de conversiones y Google Analytics',
      'Preparación técnica para posterior gestión mensual en Fase 3',
    ],
    scope: [
      'Configuración profesional de cuenta, objetivos comerciales y conversiones.',
      'Vinculación con sitio web y activos digitales de Finanzas Consulting.',
      'Segmentación geográfica, por horarios, palabras clave y dispositivos.',
      'Hasta 2 campañas iniciales con sus respectivas segmentaciones y anuncios.',
      'Activos/extensiones disponibles según el objetivo comercial.',
      'Configuración de Google Analytics cuando aplique.',
      'Preparación técnica para posterior gestión mensual.',
    ],
    disclaimer: 'No incluye inversión publicitaria ni garantiza posiciones fijas, leads, ventas o resultados específicos.',
  },
  {
    id: 'web-ia',
    tag: 'SERVICIO COMPLEMENTARIO',
    title: 'Web + IA — Rediseño / Desarrollo',
    price: '$2.200.000',
    priceRaw: 2200000,
    priceSuffix: '+ IVA · Pago único · Complementario',
    type: 'Pago único',
    description: 'Rediseño web moderno, responsive y enfocado en conversión. Puede contratarse junto con Fase 3 o de manera independiente.',
    highlights: [
      'Arquitectura de información y diseño UX/UI responsive',
      'WhatsApp flotante, enlaces sociales y formularios de captación',
      'Búsqueda inteligente y chatbot/IA según viabilidad técnica',
    ],
    scope: [
      'Arquitectura de información, UX/UI y rediseño responsive multidispositivo.',
      'Organización de servicios, contenidos, imágenes, videos y llamados a la acción.',
      'Integración de WhatsApp flotante, enlaces sociales y formularios.',
      'Búsqueda inteligente y chatbot/IA sujetos a viabilidad técnica.',
      'Integraciones básicas y optimización de rutas de conversión.',
    ],
    disclaimer: 'Fase 3 contempla administración mensual y actualizaciones ordinarias del sitio, pero no nuevos desarrollos mayores. Hosting, dominio, correo corporativo, licencias, plugins, APIs, consumo de IA y servicios externos recurrentes son independientes.',
  },
];

// ---- Requerimientos Previos del Cliente (Sección 9) ----
export const CLIENT_REQUIREMENTS = [
  'Accesos y permisos a Facebook, Instagram, Meta Business Suite/Business Manager y cuenta publicitaria cuando aplique.',
  'Logo en formato adecuado y manual de marca, si existe.',
  'Fotos, videos y demás materiales disponibles.',
  'Información oficial y aprobada sobre productos, servicios, campañas y ofertas.',
  'URL, formulario o canal de WhatsApp destinado a conversión cuando aplique.',
  'Una persona responsable de aprobaciones y entrega oportuna de información.',
  'Disponibilidad de personas y locaciones necesarias para las jornadas de producción.',
  'Medio de pago habilitado para inversión publicitaria.',
];

// ---- Tabla Resumen de Inversión ----
export const INVESTMENT_SUMMARY = [
  { category: 'Etapa Inicial', label: 'Etapa Inicial — Propuesta 01', price: '$1.700.000', priceRaw: 1700000, suffix: '+ IVA · Pago único', note: 'Obligatoria para Fase 1, 2 o 3', highlight: true },
  { category: 'Acompañamiento Mensual', label: 'Fase 1 — Posicionamiento y Contenido', price: '$2.400.000', priceRaw: 2400000, suffix: '+ IVA / mes', note: 'Se elige esta o Fase 2 o Fase 3' },
  { category: 'Acompañamiento Mensual', label: 'Fase 2 — Contenido + Crecimiento + Captación', price: '$3.600.000', priceRaw: 3600000, suffix: '+ IVA / mes', note: 'Se elige esta o Fase 1 o Fase 3', recommended: true },
  { category: 'Acompañamiento Mensual', label: 'Fase 3 — Ecosistema Digital + Automatización', price: '$4.400.000', priceRaw: 4400000, suffix: '+ IVA / mes', note: 'Se elige esta o Fase 1 o Fase 2' },
  { category: 'Servicio Complementario', label: 'Implementación Google Ads', price: '$2.800.000', priceRaw: 2800000, suffix: '+ IVA · Pago único', note: 'Complementario · Se adiciona al contratarse' },
  { category: 'Servicio Complementario', label: 'Web + IA — Rediseño / Desarrollo', price: '$2.200.000', priceRaw: 2200000, suffix: '+ IVA · Pago único', note: 'Complementario · Se adiciona al contratarse' },
  { category: 'Campaña Independiente', label: 'Campaña Pymes Financiables', price: '$3.800.000', priceRaw: 3800000, suffix: '+ IVA · Campaña independiente', note: 'Independiente · Se adiciona al contratarse' },
];

// ---- Condiciones Contractuales y Alcance (Sección 9) ----
export interface ConditionItem {
  id: number;
  category: 'Etapa Inicial & Permanencia' | 'Inversión & Pauta' | 'Producción Audiovisual' | 'Alcance, Garantías & Exclusiones';
  title: string;
  detail: string;
}

export const CONDITIONS: ConditionItem[] = [
  {
    id: 1,
    category: 'Etapa Inicial & Permanencia',
    title: 'Etapa Inicial obligatoria para Propuesta 01',
    detail: 'La Etapa Inicial es obligatoria para contratar Fase 1, Fase 2 o Fase 3 de la Propuesta 01. Si se inicia directamente en Fase 2 o Fase 3, la Etapa Inicial igualmente debe contratarse.',
  },
  {
    id: 2,
    category: 'Etapa Inicial & Permanencia',
    title: 'Fases no acumulativas y permanencia mínima de 6 meses',
    detail: 'Las Fases 1, 2 y 3 son alternativas de acompañamiento mensual; no son acumulativas. La permanencia mínima del acompañamiento mensual es de seis (6) meses. La Etapa Inicial no cuenta dentro de ese período.',
  },
  {
    id: 3,
    category: 'Inversión & Pauta',
    title: 'Presupuesto publicitario asumido por el cliente',
    detail: 'La inversión publicitaria no está incluida en los honorarios. El presupuesto destinado a Meta Ads y Google Ads será asumido directamente por Finanzas Consulting y se definirá según la estrategia, objetivo y alcance de cada campaña.',
  },
  {
    id: 4,
    category: 'Producción Audiovisual',
    title: 'Jornadas en Medellín/AM y duración máxima de 6h',
    detail: 'Las jornadas de producción requieren coordinación previa y se desarrollan en Medellín o Área Metropolitana según el alcance indicado. Una jornada de producción tiene duración máxima de seis (6) horas.',
  },
  {
    id: 5,
    category: 'Producción Audiovisual',
    title: 'Entregables no acumulativos',
    detail: 'Contenidos y entregables corresponden al período contratado y no son acumulativos salvo acuerdo escrito.',
  },
  {
    id: 6,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Retrasos en información o materiales',
    detail: 'Retrasos en información, materiales, accesos, aprobaciones o disponibilidad pueden modificar el cronograma de ejecución.',
  },
  {
    id: 7,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Servicios y desarrollos adicionales',
    detail: 'Servicios, piezas, jornadas, desplazamientos, formatos, desarrollos, plataformas o funcionalidades adicionales se cotizan por separado.',
  },
  {
    id: 8,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Hosting, dominios, licencias y consumo de IA',
    detail: 'Hosting, dominio, correo corporativo, licencias, plugins, APIs, consumo de IA y servicios externos recurrentes no están incluidos salvo acuerdo expreso.',
  },
  {
    id: 9,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Obligaciones de medio y no de resultado',
    detail: 'Las estrategias y campañas son obligaciones de medio: no se garantizan ventas, leads, alcance, seguidores, conversiones o resultados comerciales específicos.',
  },
  {
    id: 10,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Cierre y atención comercial de leads',
    detail: 'La atención, seguimiento y cierre comercial de leads no están incluidos salvo contratación expresa.',
  },
  {
    id: 11,
    category: 'Alcance, Garantías & Exclusiones',
    title: 'Canales de comunicación acordados',
    detail: 'Las comunicaciones operativas y aprobaciones se gestionarán mediante los canales acordados con el equipo PD’P.',
  },
];

// ---- Equipo Multidisciplinario PD'P ----
export const TEAM_MEMBERS = [
  { role: 'Dirección Estratégica', icon: 'Compass' as const, note: 'Prioridades comerciales, ruta de conversión y visión de negocio' },
  { role: 'Diseño & Comunicación Visual', icon: 'Palette' as const, note: 'Identidad, piezas gráficas, infografías y formatos de alto impacto' },
  { role: 'Producción Audiovisual', icon: 'Video' as const, note: 'Jornadas de rodaje presenciales, dirección, reels y edición' },
  { role: 'Contenidos & Community', icon: 'MessageSquare' as const, note: 'Redacción editorial, copy y calendario' },
  { role: 'Publicidad Digital (Ads)', icon: 'Megaphone' as const, note: 'Estrategia de Meta Ads y Google Ads' },
  { role: 'Desarrollo Web & IA', icon: 'Code' as const, note: 'Arquitectura digital, web y automatizaciones' },
  { role: 'Coordinación de Proyecto', icon: 'Users' as const, note: 'Punto de contacto único y seguimiento' },
];

// ---- Ruta de Conversión ----
export const STRATEGY_STEPS = [
  { step: '01', title: 'POSICIONAR', desc: 'Hacer visible la autoridad y el conocimiento de la marca' },
  { step: '02', title: 'EDUCAR', desc: 'Generar valor con contenido útil, claro y accionable' },
  { step: '03', title: 'DEMOSTRAR', desc: 'Evidenciar experiencia y soluciones para el cliente' },
  { step: '04', title: 'CONECTAR', desc: 'Vincular redes con el sitio web, WhatsApp y canales' },
  { step: '05', title: 'CAPTAR', desc: 'Activar pauta dirigida a públicos calificados' },
  { step: '06', title: 'CONVERTIR', desc: 'Facilitar que el prospecto inicie la conversación' },
] as const;

// ---- Opciones de Fase para el Formulario ----
export const PHASE_OPTIONS = [
  'Propuesta 01 — Fase 1 (Posicionamiento y Contenido: $2.4M/mes)',
  'Propuesta 01 — Fase 2 (Contenido + Crecimiento: $3.6M/mes) [Recomendada]',
  'Propuesta 01 — Fase 3 (Ecosistema Digital + IA: $4.4M/mes)',
  'Propuesta 02 — Campaña Pymes Financiables ($3.8M)',
  'Propuesta 02 + Etapa Inicial ($3.8M + $1.7M) [Recomendación PD\'P]',
  'Implementación Google Ads ($2.8M)',
  'Web + IA — Rediseño / Desarrollo ($2.2M)',
  'Deseo una combinación personalizada de servicios',
];
