import { getStudentsForProject } from '../data';
import { PROJECT_CATEGORIES } from '../types/portfolio';
import type { Project, ProjectCategory } from '../types/portfolio';

export interface ProjectFilterState {
  year: number | 'all';
  category: ProjectCategory | 'all';
  technology: string | 'all';
  query: string;
}

export const defaultProjectFilters: ProjectFilterState = {
  year: 'all',
  category: 'all',
  technology: 'all',
  query: '',
};

/** URL query keys, e.g. `/projects?categoria=Computer%20Vision&anio=2025`. */
const PARAM_KEYS = {
  year: 'anio',
  category: 'categoria',
  technology: 'tecnologia',
  query: 'q',
} as const;

/**
 * Reads the filters from the URL so a filtered view can be shared or
 * bookmarked, and survives the browser's back button. Unknown values fall
 * back to the defaults.
 */
export function filtersFromSearchParams(params: URLSearchParams): ProjectFilterState {
  const year = Number(params.get(PARAM_KEYS.year));
  const category = params.get(PARAM_KEYS.category);

  return {
    year: Number.isInteger(year) && year > 0 ? year : 'all',
    category: PROJECT_CATEGORIES.includes(category as ProjectCategory)
      ? (category as ProjectCategory)
      : 'all',
    technology: params.get(PARAM_KEYS.technology) || 'all',
    query: params.get(PARAM_KEYS.query) ?? '',
  };
}

/** Inverse of `filtersFromSearchParams`; default values are left out of the URL. */
export function filtersToSearchParams(filters: ProjectFilterState): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.year !== 'all') params.set(PARAM_KEYS.year, String(filters.year));
  if (filters.category !== 'all') params.set(PARAM_KEYS.category, filters.category);
  if (filters.technology !== 'all') params.set(PARAM_KEYS.technology, filters.technology);
  if (filters.query) params.set(PARAM_KEYS.query, filters.query);
  return params;
}

/** Link to the projects page pre-filtered by a single category. */
export function projectsByCategoryPath(category: ProjectCategory): string {
  return `/projects?${filtersToSearchParams({ ...defaultProjectFilters, category })}`;
}

/** Applies year/category/technology filters plus a free-text search, client-side. */
export function filterProjects(
  projects: Project[],
  filters: ProjectFilterState,
): Project[] {
  const query = filters.query.trim().toLowerCase();

  return projects.filter((project) => {
    if (filters.year !== 'all' && project.year !== filters.year) return false;
    if (filters.category !== 'all' && !project.categories.includes(filters.category)) {
      return false;
    }
    if (
      filters.technology !== 'all' &&
      !project.technologies.includes(filters.technology)
    ) {
      return false;
    }

    if (query) {
      const students = getStudentsForProject(project);
      const haystack = [
        project.name,
        project.description,
        ...project.categories,
        ...project.technologies,
        ...students.map((s) => s.name),
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });
}

export function filterStudentsByName<T extends { name: string }>(
  students: T[],
  query: string,
): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return students;
  return students.filter((s) => s.name.toLowerCase().includes(normalized));
}
