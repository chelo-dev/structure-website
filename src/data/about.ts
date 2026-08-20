export interface About {
    icon: string
    title: string,
    description: string
}

export const about: About[] = [
    {
        icon: 'check',
        title: 'Contacto directo conmigo',
        description:
            'No necesitas pasar por vendedores, intermediarios o departamentos de atención. Estoy directamente involucrado en tu proyecto.',
    },
    {
        icon: 'design',
        title: 'Desarrollo personalizado',
        description:
            'No se trata únicamente de elegir una plantilla y cambiar colores. Desarrollo la solución de acuerdo con las necesidades de cada proyecto.',
    },
    {
        icon: 'code',
        title: 'Código que puedes conservar',
        description:
            'El proyecto es tuyo. Al finalizar, recibes el código fuente correspondiente al desarrollo contratado.',
    },
    {
        icon: 'shield',
        title: 'Acompañamiento',
        description:
            'No desaparezco después de entregar el sitio. Puedo ayudarte con mantenimiento, actualizaciones y nuevas funcionalidades.',
    },
];
