import type { CSSProperties } from 'react';
import type { Project } from '../../types/portfolio';
import { getCategoryColor } from '../../utils/categoryColors';
import styles from './ProjectArt.module.css';

interface ProjectArtProps {
  project: Pick<Project, 'name' | 'categories'>;
  size?: 'card' | 'large';
}

/**
 * Two-letter monogram from the project's name, e.g. "Travel Planner AI" → "TP".
 * Underscores count as spaces, so "ia_content_creator" → "IC".
 */
function getMonogram(name: string): string {
  return name
    .split(/[\s_]+/)
    .filter((word) => /^[\p{L}\p{N}]/u.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

/**
 * Generated cover for projects without an image: a monogram over soft blobs
 * tinted with the project's own category colors, so every card looks distinct.
 */
export function ProjectArt({ project, size = 'card' }: ProjectArtProps) {
  const [first, second] = project.categories.map(getCategoryColor);
  const style = { '--art-1': first, '--art-2': second ?? first } as CSSProperties;

  return (
    <span
      className={`bg-grid ${styles.art} ${size === 'large' ? styles.large : ''}`}
      style={style}
      aria-hidden="true"
    >
      <span className={styles.monogram}>{getMonogram(project.name)}</span>
    </span>
  );
}
