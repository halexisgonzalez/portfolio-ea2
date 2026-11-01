import type { ReactNode } from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className={`bg-grid ${styles.empty}`} role="status">
      <div className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 0V2m3 3V2m3 3V2M9 22v-3m3 3v-3m3 3v-3M5 9H2m3 3H2m3 3H2m20-6h-3m3 3h-3m3 3h-3"
          />
        </svg>
      </div>
      <p className={styles.title}>{title}</p>
      {description ? <p className={styles.description}>{description}</p> : null}
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}
