import { Link } from 'react-router-dom';
import { courseInfo, institution, siteConfig } from '../../config/site';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { to: '/projects', label: 'Proyectos' },
  { to: '/students', label: 'Estudiantes' },
  { to: '/years', label: 'Cohortes' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.institution}>
          <span className={styles.logoBadge}>
            <img
              src={`${import.meta.env.BASE_URL}${institution.logo}`}
              alt={institution.logoAlt}
              className={styles.logo}
              width={800}
              height={276}
            />
          </span>
          <p className={styles.description}>
            Portfolio académico histórico de los Trabajos Finales Integradores de{' '}
            {courseInfo.subject}.
          </p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Cátedra</h2>
          <ul>
            <li>{courseInfo.subject}</li>
            <li>{courseInfo.program}</li>
            <li>{courseInfo.professor}</li>
            <li>
              <a href={`mailto:${courseInfo.contactEmail}`}>{courseInfo.contactEmail}</a>
            </li>
          </ul>
        </div>

        <nav className={styles.column} aria-label="Navegación del pie de página">
          <h2 className={styles.columnTitle}>Explorar</h2>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href={siteConfig.repositoryUrl} target="_blank" rel="noopener noreferrer">
                Repositorio en GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          &copy; {currentYear} {siteConfig.name} · {institution.name}
        </p>
      </div>
    </footer>
  );
}
