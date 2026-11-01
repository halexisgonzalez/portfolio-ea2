import { Link, useParams } from 'react-router-dom';
import { CategoryBadge } from '../../components/CategoryBadge/CategoryBadge';
import { ProjectArt } from '../../components/ProjectArt/ProjectArt';
import { TechnologyBadge } from '../../components/TechnologyBadge/TechnologyBadge';
import { getProjectById, getStudentsForProject } from '../../data';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { NotFound } from '../NotFound/NotFound';
import styles from './ProjectDetail.module.css';

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;
  useDocumentTitle(project?.name ?? 'Proyecto no encontrado');

  if (!project) {
    return (
      <NotFound
        title="Proyecto no encontrado"
        description="El proyecto que buscás no existe o fue removido del portfolio."
      />
    );
  }

  const students = getStudentsForProject(project);

  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.media}>
          {project.image ? (
            <img src={project.image} alt="" />
          ) : (
            <ProjectArt project={project} size="large" />
          )}
        </div>

        <div className={styles.header}>
          <Link to="/projects" className={styles.back}>
            ← Volver a proyectos
          </Link>

          <div className={styles.badges}>
            {project.categories.map((category) => (
              <CategoryBadge key={category} category={category} />
            ))}
            <span className={styles.year}>Cohorte {project.year}</span>
            {project.featured ? (
              <span className={styles.featured}>Destacado</span>
            ) : null}
          </div>

          <h1 className={styles.title}>{project.name}</h1>

          {students.length > 0 ? (
            <div className={styles.authors}>
              <span className="text-muted">Autores:</span>
              {students.map((student, index) => (
                <span key={student.id}>
                  <Link to={`/students/${student.id}`} className={styles.authorLink}>
                    {student.name}
                  </Link>
                  {index < students.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          ) : null}

          <p className={styles.description}>{project.description}</p>

          <ul className={styles.techList}>
            {project.technologies.map((tech) => (
              <TechnologyBadge key={tech} technology={tech} as="li" />
            ))}
          </ul>

          <div className={styles.actions}>
            {project.repository ? (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ver repositorio
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
