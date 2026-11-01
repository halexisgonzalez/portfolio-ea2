import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { courseInfo, department, institution, siteConfig } from '../../config/site';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/projects', label: 'Proyectos' },
  { to: '/students', label: 'Estudiantes' },
  { to: '/years', label: 'Cohortes' },
  { to: '/materia', label: 'La materia' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.brand}>
          <img
            className={styles.brandMark}
            src={`${import.meta.env.BASE_URL}${department.logo}`}
            alt=""
            width={320}
            height={259}
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{siteConfig.name}</span>
            <span className={styles.brandSub}>{courseInfo.subject}</span>
          </span>
        </NavLink>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <span className={styles.institutionLogo}>
            <img
              src={`${import.meta.env.BASE_URL}${institution.logo}`}
              alt={institution.name}
              title={institution.name}
              width={800}
              height={276}
            />
          </span>
          <a
            href={siteConfig.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-secondary btn-small ${styles.githubLink}`}
          >
            GitHub
          </a>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              {menuOpen ? (
                <path
                  fill="currentColor"
                  d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
                />
              ) : (
                <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
