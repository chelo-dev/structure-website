export const siteConfig = {
    name: 'Kharma Solutions',
    description: 'Soy Angel Paredes, desarrollador web independiente. Creo sitios web y sistemas administrativos personalizados para negocios y emprendedores.',
    tagline: 'Desarrollo Web & Sistemas a Medida',
    url: 'https://kharmasolutions.com',
    ogImage: '/og-image.svg',
    locale: 'es_MX',
    phone: '+527775944783',
    email: 'angelparedestorres.apt@gmail.com',
    address: {
        state: 'Morelos',
        country: 'México',
    },
    person: {
        name: 'Angel Paredes Torres',
        shortName: 'Angel Paredes',
        role: 'Desarrollador Web',
        specialty: 'Desarrollo Web & Sistemas a Medida',
    },
    social: {
        facebook: '',
        instagram: '',
    },
    nav: [
        { label: 'Inicio', href: '/#inicio' },
        { label: 'Sobre mí', href: '/sobre-mi' },
        { label: 'Servicios', href: '/#servicios' },
        { label: 'Precios', href: '/#planes' },
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