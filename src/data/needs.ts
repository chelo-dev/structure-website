// src/data/needs.ts
export interface Need {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export const needs: Need[] = [
  {
    title: 'Necesito una página web',
    description: 'Quiero mostrar mi negocio, servicios y formas de contacto.',
    linkLabel: 'Desarrollo Web',
    href: '/servicios/desarrollo-web',
  },
  {
    title: 'Quiero automatizar mi negocio',
    description: 'Actualmente utilizo Excel, hojas de cálculo o procesos manuales.',
    linkLabel: 'Sistema Personalizado',
    href: '/servicios/sistemas-administrativos',
  },
];
