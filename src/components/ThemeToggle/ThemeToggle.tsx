import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-ea2:theme';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
      title={isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        {isLight ? (
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.36 6.36-1.06-1.06M6.7 6.7 5.64 5.64m12.72 0L17.3 6.7M6.7 17.3l-1.06 1.06" />
          </g>
        ) : (
          <path
            fill="currentColor"
            d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-4.454 0-8.06-3.606-8.06-8.06 0-1.301.307-2.53.852-3.62a.75.75 0 0 0-.917-1.028A10.06 10.06 0 0 0 2 10.5C2 16.299 6.701 21 12.5 21a10.06 10.06 0 0 0 9.892-8.24.75.75 0 0 0-1.65-.715Z"
          />
        )}
      </svg>
    </button>
  );
}
