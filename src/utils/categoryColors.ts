import type { ProjectCategory } from '../types/portfolio';

/**
 * One accent color per category, used only as a small identifying dot on
 * badges so the UI stays legible instead of turning into a rainbow.
 */
const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  'Amplificadores realimentados': '#7c8cff',
  'Amplificadores de potencia': '#fb7185',
  Osciladores: '#a78bfa',
  'Filtros activos': '#35d0c9',
  'Fuentes de alimentación': '#f6ad55',
  Audio: '#e879f9',
  Radiofrecuencia: '#60a5fa',
  Instrumentación: '#4ade80',
  Otros: '#9ba0b4',
};

export function getCategoryColor(category: ProjectCategory): string {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.Otros;
}
