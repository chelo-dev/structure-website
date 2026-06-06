export const siteConfig = {
    name: 'Kharma Solutions',
    description: 'Desarrollo profesional de sitios web, landing pages y sistemas web a medida. Impulsa tu negocio con presencia digital de alto impacto.',
    url: 'https://kharmasolutions.com',
    ogImage: '/og-image.svg',
    locale: 'es_MX',
    phone: '+527775944783',
    email: 'angelparedestorres.apt@gmail.com',
    address: {
        state: 'Morelos',
        country: 'México',
    },
    social: {
        facebook: '',
        instagram: '',
    },
    nav: [
        { label: 'Inicio', href: '/#inicio' },
        { label: 'Sobre', href: '/#sobre' },
        { label: 'Servicios', href: '/#servicios' },
        { label: 'Planes', href: '/#planes' },
        { label: 'Contacto', href: '/#contacto' },
    ],
    legal: [
        { label: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
        { label: 'Aviso Legal', href: '/aviso-legal' },
        { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
    ],
};

export const whatsappMessage = encodeURIComponent(
  '¡Hola Kharma Solutions! Me interesa conocer más sobre sus servicios de desarrollo web.'
);

export const whatsappLink = `https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`;

export const channels = [
  { name: 'WhatsApp', icon: '/images/channels/whatsapp.svg' },
  { name: 'Google', icon: '/images/channels/google.svg' },
  { name: 'Instagram', icon: '/images/channels/instagram.svg' },
  { name: 'Messenger', icon: '/images/channels/messenger.svg' },
  { name: 'Email', icon: '/images/channels/sms.svg' },
  { name: 'Telegram', icon: '/images/channels/telegram.svg' },
];