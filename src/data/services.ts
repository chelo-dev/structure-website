export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: 'web',
    title: 'Diseño y Desarrollo Web',
    description:
      'Creamos sitios web profesionales, rápidos y visualmente impactantes que reflejan la identidad de tu marca y conectan con tus clientes.',
    features: [
      'Landing pages de alto impacto',
      'Sitios web corporativos',
      'Blogs administrables',
      'Optimización SEO incluida',
    ],
  },
  {
    icon: 'custom',
    title: 'Sistemas Web a la Medida',
    description:
      'Desarrollamos plataformas de administración personalizadas para que gestiones tu negocio desde cualquier lugar, sin depender de plantillas genéricas.',
    features: [
      'Paneles de administración',
      'Gestión de clientes y datos',
      'Reportes y estadísticas',
      'Acceso desde cualquier dispositivo',
    ],
  },
  {
    icon: 'social',
    title: 'Integración con Redes Sociales',
    description:
      'Conectamos tu sitio web con Facebook, Instagram, WhatsApp y más para que recibas mensajes y pedidos directamente desde tus redes.',
    features: [
      'Botón de WhatsApp directo',
      'Feed de Instagram integrado',
      'Links a todas tus redes',
      'Formularios de contacto inteligentes',
    ],
  },
  {
    icon: 'hosting',
    title: 'Dominio y Hosting por 1 Año',
    description:
      'Publica tu sitio sin preocupaciones. Incluimos dominio .COM.MX y hosting premium gratis el primer año con soporte técnico especializado.',
    features: [
      'Dominio .COM.MX incluido',
      'Hosting premium de alto rendimiento',
      'Certificado SSL de seguridad',
      'Soporte técnico incluido',
    ],
  },
];