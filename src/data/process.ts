// src/data/process.ts
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Cuéntame tu idea',
    description: 'Me explicas qué necesitas, qué problema quieres resolver y cómo funciona actualmente tu negocio.',
  },
  {
    number: '02',
    title: 'Analizamos la solución',
    description: 'Reviso tus necesidades y te propongo una solución acorde al alcance del proyecto.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    description: 'Construyo la solución y te mantengo informado durante el proceso.',
  },
  {
    number: '04',
    title: 'Pruebas y ajustes',
    description: 'Revisamos que todo funcione correctamente y realizamos los ajustes acordados.',
  },
  {
    number: '05',
    title: 'Publicación',
    description: 'Configuro el proyecto y lo dejo listo para comenzar a utilizarse.',
  },
  {
    number: '06',
    title: 'Soporte',
    description: 'Después de la entrega puedes solicitar mantenimiento, cambios o nuevas funcionalidades.',
  },
];
