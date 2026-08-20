// src/data/plans.ts
export interface Plan {
  name: string;
  slug: string;
  price: string;
  priceFrom?: boolean;
  currency: string;
  description: string;
  longDescription: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  adminInfo: string[];
  notIncluded: string;
  cta: string;
  popular: boolean;
  whatsappMessage: string;
}

export const HOURLY_RATE_MXN = 160;

export const plans: Plan[] = [
  {
    name: 'Kit Inicial Web',
    slug: 'kit-inicial',
    price: '7,500',
    currency: 'MXN',
    description: 'Ideal para emprendedores y negocios que quieren dar el primer paso en internet con una presencia profesional.',
    longDescription: 'Ideal para emprendedores y negocios que quieren dar el primer paso en internet con una presencia profesional, sin preocuparse por la parte técnica.',
    deliveryTime: '4 a 5 días',
    revisions: '3 revisiones máximas sin costo',
    features: [
      '1 página principal + hasta 5 secciones',
      'Diseño personalizado y único',
      'Optimizado para celulares y tablets',
      'Dominio incluido durante el primer año',
      'Hosting NVMe de alto rendimiento + SSL',
      '3 correos profesionales',
      'Integración con redes sociales',
      'Botón de WhatsApp directo',
      'SEO básico configurado',
      '3 revisiones sin costo dentro del tiempo de entrega',
    ],
    adminInfo: [
      'El hosting queda bajo mi administración; no se transfiere al cliente.',
      'El dominio sí es 100% propiedad del cliente desde el día uno.',
      'Al año, te aviso con anticipación que la renovación del dominio vence, para que decidas si continúas.',
      'Si en algún momento decides dejar de trabajar conmigo, te entrego el código fuente y la documentación que acredita que el dominio te pertenece (el hosting no, por ser infraestructura propia).',
    ],
    notIncluded: `Las revisiones son gratuitas solo dentro del tiempo de entrega (4 a 5 días) y hasta un máximo de 3. Cualquier modificación solicitada después de la entrega final tiene un costo extra por hora de trabajo: $${HOURLY_RATE_MXN} MXN/hora.`,
    cta: 'Empezar ahora',
    popular: false,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Kit Inicial Web de $7,500 MXN. ¿Podrían darme más información?',
  },
  {
    name: 'Web Profesional',
    slug: 'web-profesional',
    price: '16,000',
    currency: 'MXN',
    description: 'Para negocios que necesitan una presencia digital completa, con control total sobre su sitio desde el primer día.',
    longDescription: 'Para negocios que necesitan una presencia digital completa, con control total sobre su sitio desde el primer día.',
    deliveryTime: '5 a 7 días',
    revisions: '5 revisiones sin costo',
    features: [
      'Hasta 8 páginas personalizadas',
      'Diseño premium a medida',
      'Formulario de contacto avanzado',
      'Blog integrado listo para publicar',
      'Dominio incluido durante el primer año',
      'Hosting incluido durante el primer año',
      '5 correos corporativos',
      'Almacenamiento SSD/NVMe + SSL',
      'Google Analytics configurado',
      'SEO optimizado en todas las páginas',
      '5 revisiones sin costo dentro del tiempo de entrega',
    ],
    adminInfo: [
      'Te entrego el 100% de los accesos: dominio, hosting, correos y panel. Eres dueño de tu sitio desde la entrega.',
      'El primer año de hosting está cubierto dentro del precio. A partir del segundo año puedes renovarlo conmigo mediante una cuota anual, o migrarlo a donde prefieras con la documentación que te entrego.',
      'Te aviso con anticipación cuando el dominio y/o el hosting estén por vencer.',
    ],
    notIncluded: `Las revisiones son gratuitas solo dentro del tiempo de entrega (5 a 7 días) y hasta un máximo de 5. Cualquier modificación solicitada después de la entrega final tiene un costo extra por hora de trabajo: $${HOURLY_RATE_MXN} MXN/hora.`,
    cta: '¡Quiero crecer!',
    popular: true,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Web Profesional de $16,000 MXN. ¿Podrían darme más información?',
  },
  {
    name: 'Web Administrable',
    slug: 'web-administrable',
    price: '33,000',
    priceFrom: true,
    currency: 'MXN',
    description: 'Para empresas que necesitan control total de su sitio, con panel de administración propio para gestionarlo sin depender de un desarrollador.',
    longDescription: 'Para empresas que necesitan control total de su sitio, con un panel de administración propio y capacidad de gestionarlo sin depender de un desarrollador para el día a día. Este precio corresponde a un sistema básico (autenticación, roles y usuarios, catálogo de contactos, inventario, blog y estadísticas). Es un precio de entrada: crece según los módulos e integraciones que tu proyecto necesite, y se cotiza a la medida una vez definido el alcance.',
    deliveryTime: 'Tiempo variable según alcance del proyecto',
    revisions: '8 revisiones sin costo',
    features: [
      'Hasta 15 páginas principales',
      'Panel de control personalizado',
      'Gestión de usuarios y roles',
      'Blog integrado + editor de posts',
      'Base de datos de contactos exportable',
      'Estadísticas de tráfico en tiempo real',
      'Dominio incluido durante el primer año',
      'Hosting incluido durante el primer año',
      '10 correos corporativos',
      'SEO avanzado + Google Search Console',
      'Capacitación para administrar tu sitio',
      '8 revisiones sin costo dentro del tiempo de entrega',
    ],
    adminInfo: [
      'Mismo esquema que Web Profesional: entrega completa de accesos, eres dueño de tu sitio desde el día de la entrega.',
      'Primer año de dominio y hosting cubiertos en el precio; renovación opcional conmigo o migración libre a partir del segundo año, con toda la documentación en mano.',
      'Aviso anticipado antes del vencimiento de dominio y/o hosting.',
      'El precio mostrado es de entrada, para un sistema básico. Según los módulos, integraciones y necesidades específicas de tu negocio, se cotiza el alcance final antes de comenzar.',
    ],
    notIncluded: `Las revisiones son gratuitas solo dentro del tiempo de entrega acordado y hasta un máximo de 8. Cualquier modificación solicitada después de la entrega final tiene un costo extra por hora de trabajo: $${HOURLY_RATE_MXN} MXN/hora.`,
    cta: 'Control total',
    popular: false,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Web Administrable desde $33,000 MXN. ¿Podrían darme más información?',
  },
];
