import { siteConfig } from './site';

export const whatsappMessage = encodeURIComponent(
  '¡Hola Kharma Solutions! Tengo un proyecto en mente y me gustaría cotizar.'
);

export const whatsappLink = `https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`;

export const contactChannels = [
  {
    icon: 'whatsapp',
    title: '¡Chat en vivo por WhatsApp!',
    subtitle: 'Respuesta en menos de 15 minutos',
    href: whatsappLink,
    external: true,
  },
  {
    icon: 'phone',
    title: 'Asesoría telefónica',
    subtitle: 'Lunes a Sabado 9 AM - 6 PM',
    href: `tel:${siteConfig.phone}`,
    external: false,
  },
  {
    icon: 'email',
    title: 'Correo profesional',
    subtitle: 'Respuesta en 24 horas hábiles',
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
];