// src/data/services.ts
export interface Service {
  icon: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    icon: 'web',
    slug: 'desarrollo-web',
    title: 'Sitios web profesionales para negocios',
    description:
      'Creo sitios web modernos, rápidos y adaptados a la identidad de cada negocio.',
    longDescription:
      'Creo sitios web modernos, rápidos y adaptados a la identidad de cada negocio. Desde una landing page hasta un sitio corporativo con blog, cada proyecto se construye pensando en velocidad, SEO y conversión.',
    features: [
      'Landing pages',
      'Sitios corporativos',
      'Catálogos de productos',
      'Blogs',
      'Sitios administrables',
      'SEO técnico básico',
      'Integración con redes sociales',
      'Botón de WhatsApp directo',
    ],
    cta: 'Conocer servicio',
    whatsappMessage: '¡Hola Angel! Me interesa el servicio de Desarrollo de Sitios Web. ¿Podrías darme más información?',
  },
  {
    icon: 'system',
    slug: 'sistemas-administrativos',
    title: 'Convierte procesos manuales en sistemas',
    description:
      'Si actualmente administras información mediante Excel, hojas de cálculo o procesos manuales, puedo desarrollar un sistema adaptado a tu operación.',
    longDescription:
      'Si actualmente administras información mediante Excel, hojas de cálculo o procesos manuales, puedo desarrollar un sistema web adaptado a tu operación para centralizar datos, usuarios y reportes.',
    features: [
      'Inventarios',
      'Clientes',
      'Ventas',
      'Productos',
      'Usuarios y permisos',
      'Reportes',
      'Paneles administrativos',
      'APIs',
      'Integraciones',
    ],
    cta: 'Cuéntame qué necesitas',
    whatsappMessage: '¡Hola Angel! Me interesa el servicio de Sistemas Administrativos. ¿Podrías darme más información?',
  },
  {
    icon: 'custom',
    slug: 'desarrollo-personalizado',
    title: '¿Necesitas algo diferente?',
    description: 'No todos los proyectos caben dentro de un paquete.',
    longDescription:
      'No todos los proyectos caben dentro de un paquete. Si tienes una idea, un proceso que quieres automatizar o necesitas conectar diferentes herramientas, podemos analizarlo y desarrollar una solución a medida.',
    features: [
      'Análisis de tu proceso actual',
      'Automatización de tareas repetitivas',
      'Conexión entre herramientas (APIs)',
      'Software a medida sin plantillas',
    ],
    cta: 'Hablar sobre mi proyecto',
    whatsappMessage: '¡Hola Angel! Tengo un proyecto que no encaja en un paquete estándar. Me gustaría platicarlo contigo.',
  },
];
