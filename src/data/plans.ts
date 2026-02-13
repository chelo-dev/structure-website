// src/data/plans.ts
export interface Plan {
  name: string;
  slug: string;
  price: string;
  currency: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  whatsappMessage: string;
}

export const plans: Plan[] = [
  {
    name: 'Kit Inicial Web',
    slug: 'kit-inicial',
    price: '4,999',
    currency: 'MXN',
    description: 'Ideal para emprendedores y negocios que quieren dar el primer paso en internet con una presencia profesional.',
    features: [
      '1 página principal + hasta 5 secciones',
      'Diseño personalizado y único',
      'Optimizado para celulares y tablets',
      'Dominio .COM.MX gratis por 1 año',
      'Hosting rápido + SSL de seguridad',
      '3 correos profesionales',
      'Integración con redes sociales',
      'Botón de WhatsApp directo',
      'SEO básico configurado',
      '3 revisiones sin costo',
    ],
    cta: 'Empezar ahora',
    popular: false,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Kit Inicial Web de $4,999 MXN. ¿Podrían darme más información?',
  },
  {
    name: 'Web Profesional',
    slug: 'web-profesional',
    price: '9,999',
    currency: 'MXN',
    description: 'Para negocios que necesitan una presencia digital completa con múltiples páginas y funcionalidades avanzadas.',
    features: [
      'Hasta 8 páginas personalizadas',
      'Diseño premium a medida',
      'Formulario de contacto avanzado',
      'Dominio .COM.MX + hosting premium',
      '5 correos corporativos',
      'Almacenamiento SSD + SSL',
      'Blog integrado listo para publicar',
      'Google Analytics configurado',
      'SEO optimizado en todas las páginas',
      'Soporte prioritario vía WhatsApp',
      '1 año de mantenimiento incluido',
    ],
    cta: '¡Quiero crecer!',
    popular: true,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Web Profesional de $9,999 MXN. ¿Podrían darme más información?',
  },
  {
    name: 'Web Administrable',
    slug: 'web-administrable',
    price: '19,999',
    currency: 'MXN',
    description: 'Para empresas que necesitan control total de su sitio con un panel de administración personalizado.',
    features: [
      'Hasta 15 páginas principales',
      'Panel de control personalizado',
      'Gestión de usuarios y roles',
      'Blog integrado + editor de posts',
      'Base de datos de contactos exportable',
      'Estadísticas de tráfico en tiempo real',
      'Dominio + hosting premium + SSL',
      '10 correos corporativos',
      'SEO avanzado + Google Search Console',
      'Capacitación para administrar tu sitio',
      'Soporte prioritario 24/7',
      '1 año de mantenimiento incluido',
    ],
    cta: 'Control total',
    popular: false,
    whatsappMessage: '¡Hola Kharma Solutions! Me interesa el plan Web Administrable de $19,999 MXN. ¿Podrían darme más información?',
  },
];