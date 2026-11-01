import { Link } from 'react-router-dom';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { Oscilloscope } from '../../components/Oscilloscope/Oscilloscope';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import { YearCard } from '../../components/YearCard/YearCard';
import { courseInfo, institution, teachers, tfiSteps } from '../../config/site';
import { getFeaturedProjects, getYear, getYearStats, getPortfolioStats } from '../../data';
import styles from './Home.module.css';

const STAT_LABELS: Record<keyof ReturnType<typeof getPortfolioStats>, string> = {
  studentCount: 'estudiantes',
  projectCount: 'proyectos',
  technologyCount: 'tecnologías',
  categoryCount: 'áreas de aplicación',
};

export function Home() {
  const stats = getPortfolioStats();
  const featuredProjects = getFeaturedProjects();
  const yearStats = getYearStats();

  return (
    <>
      <section className={`bg-grid ${styles.hero}`}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} aria-hidden="true" />
              {courseInfo.program} · {institution.name}
            </span>
            <h1 className={styles.heroTitle}>
              Portfolio Académico de{' '}
              <span className={styles.heroHighlight}>Electrónica Aplicada II</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Trabajos Finales Integradores diseñados, construidos y medidos por
              estudiantes a lo largo de las distintas cohortes.
            </p>
            <div className={styles.heroActions}>
              <Link to="/projects" className="btn btn-primary">
                Explorar proyectos
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path fill="currentColor" d="M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3Z" />
                </svg>
              </Link>
              <Link to="/students" className="btn btn-secondary">
                Ver estudiantes
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Oscilloscope />
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {(Object.keys(STAT_LABELS) as (keyof typeof STAT_LABELS)[]).map((key) => (
            <div key={key} className={`card ${styles.statCard}`}>
              <span className={styles.statValue}>{String(stats[key]).padStart(2, '0')}</span>
              <span className={styles.statLabel}>{STAT_LABELS[key]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">El TFI</span>
              <h2>Del preproyecto al laboratorio</h2>
              <p>
                {courseInfo.subject} es la materia integradora: cada trabajo final es un
                dispositivo real, funcionando.
              </p>
            </div>
          </div>

          <ol className={styles.steps}>
            {tfiSteps.map((step, index) => (
              <li key={step.title} className={`card ${styles.step}`}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Cátedra</span>
              <h2>Equipo docente</h2>
              <p>
                {courseInfo.level} de {courseInfo.program} · régimen {courseInfo.regime.toLowerCase()}.
              </p>
            </div>
            <Link to="/materia" className="btn btn-secondary btn-small">
              Conocé la materia
            </Link>
          </div>

          <div className={styles.teachersGrid}>
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.name} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Proyectos</span>
              <h2>Proyectos destacados</h2>
              <p>Una selección de trabajos sobresalientes de nuestras cohortes.</p>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-small">
              Ver todos los proyectos
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Todavía no hay proyectos destacados"
              description="Marcá un proyecto con “featured: true” en los datos de la cohorte para que aparezca acá."
            />
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Cohortes</span>
              <h2>Año a año</h2>
              <p>Explorá el portfolio histórico de cada cohorte.</p>
            </div>
          </div>

          {yearStats.length > 0 ? (
            <div className={styles.yearsGrid}>
              {yearStats.map((year) => (
                <YearCard
                  key={year.year}
                  year={year.year}
                  studentCount={year.studentCount}
                  projectCount={year.projectCount}
                  materialUrl={getYear(year.year)?.materialUrl}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Todavía no hay cohortes cargadas"
              description="Agregá un archivo en src/data (por ejemplo 2027.json) para que aparezca acá."
            />
          )}
        </div>
      </section>
    </>
  );
}
