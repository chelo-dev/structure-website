export interface About {
    icon: string
    title: string,
    description: string
}

export const about: About[] = [
    {
        icon: 'quality',
        title: 'Atención personalizada',
        description:
            'Cada proyecto recibe dedicación total. Trabajamos de cerca contigo para entender tu visión y convertirla en realidad.',
    },
    {
        icon: 'rocket',
        title: 'Entrega en tiempo récord',
        description:
            'Los tiempos de entrega son nuestra fortaleza. Tu sitio web estará listo cuando lo necesites, sin sacrificar calidad.',
    },
    {
        icon: 'design',
        title: 'Diseños únicos',
        description:
            'Nada de plantillas genéricas. Cada proyecto se diseña desde cero para reflejar la identidad de tu marca.',
    },
    {
        icon: 'code',
        title: 'Tu proyecto, tu código',
        description:
            'Al finalizar, recibes el código fuente completo de tu sitio. Tú pagaste por él, es totalmente tuyo.',
    },
    {
        icon: 'shield',
        title: '1 año gratis de hosting + dominio',
        description:
            'Incluimos un año de hosting + dominio gratis. Pasando el año tiene tiene un costo el cual puede variar.',
    },
    {
        icon: 'check',
        title: 'Sin preocupaciones',
        description:
            'Nos encargamos de todo: dominio, hosting, configuración y puesta en línea. Tú solo enfócate en tu negocio.',
    },
];

export interface Stats {
    number: string,
    label: string
}

export const stats: Stats[] = [
    { number: '4+', label: 'Años de experiencia' },
    { number: '40+', label: 'Proyectos entregados' },
    { number: '3', label: 'Revisiones sin costo' },
    { number: '1 año', label: 'Hosting + dominio gratis' },
];
