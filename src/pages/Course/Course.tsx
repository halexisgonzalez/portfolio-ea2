import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import { courseInfo, department, teachers, tfiSteps } from '../../config/site';
import styles from './Course.module.css';

const FACTS = [
  { label: 'Nivel', value: courseInfo.level },
  { label: 'Régimen', value: courseInfo.regime },
  { label: 'Carga horaria', value: `${courseInfo.weeklyHours} hs cátedra / semana` },
  { label: 'Carrera', value: courseInfo.program },
];

export function Course() {
  return (
    <>
      <section className={`bg-grid ${styles.hero}`}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="eyebrow">La materia</span>
            <h1 className={styles.title}>{courseInfo.subject}</h1>
            <p className={styles.summary}>{courseInfo.summary}</p>
            <div className={styles.actions}>
              <a
                href={courseInfo.syllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5ZM12 11v5.17l-2.09-2.08-1.41 1.41L12 19l3.5-3.5-1.41-1.41L12 16.17V11Z"
                  />
                </svg>
                Programa (PDF)
              </a>
              <a
                href={courseInfo.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Página en el departamento
              </a>
            </div>
          </div>

          <a
            href={department.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.departmentLogo}
            title={department.name}
          >
            <img
              src={`${import.meta.env.BASE_URL}${department.logo}`}
              alt={department.logoAlt}
              width={320}
              height={259}
            />
          </a>
        </div>
      </section>

      <section className={styles.factsSection}>
        <dl className={`container ${styles.facts}`}>
          {FACTS.map((fact) => (
            <div key={fact.label} className={`card ${styles.fact}`}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className={`container ${styles.columns}`}>
          <div>
            <span className="eyebrow">Contenidos mínimos</span>
            <h2 className={styles.sectionTitle}>Qué se estudia</h2>
            <ol className={styles.contents}>
              {courseInfo.contents.map((item, index) => (
                <li key={item} className={styles.contentItem}>
                  <span className={styles.contentNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <span className="eyebrow">Objetivos</span>
            <h2 className={styles.sectionTitle}>Al finalizar el cursado</h2>
            <ul className={styles.objectives}>
              {courseInfo.objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Trabajo Final Integrador</span>
              <h2>Del preproyecto al laboratorio</h2>
              <p>{courseInfo.subject} es la materia integradora del nivel.</p>
            </div>
          </div>
          <ol className={styles.steps}>
            {tfiSteps.map((step, index) => (
              <li key={step.title} className={`card ${styles.step}`}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="docentes">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Cátedra</span>
              <h2>Equipo docente</h2>
            </div>
          </div>
          <div className={styles.teachers}>
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.name} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
