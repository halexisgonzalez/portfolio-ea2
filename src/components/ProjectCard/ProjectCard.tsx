import { Link } from 'react-router-dom';
import { getStudentsForProject } from '../../data';
import type { Project } from '../../types/portfolio';
import { joinNames } from '../../utils/format';
import { CategoryBadge } from '../CategoryBadge/CategoryBadge';
import { ProjectArt } from '../ProjectArt/ProjectArt';
import { TechnologyBadge } from '../TechnologyBadge/TechnologyBadge';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const students = getStudentsForProject(project);

  return (
    <article className={`card card-hoverable ${styles.card}`}>
      <Link to={`/projects/${project.id}`} className={styles.media}>
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <ProjectArt project={project} />
        )}
        {project.featured ? <span className={styles.featuredTag}>Destacado</span> : null}
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          <div className={styles.categories}>
            {project.categories.map((category) => (
              <CategoryBadge key={category} category={category} />
            ))}
          </div>
          <span className={styles.year}>{project.year}</span>
        </div>

        <h3 className={styles.title}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </h3>

        {students.length > 0 ? (
          <p className={styles.authors}>{joinNames(students)}</p>
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
              className="btn btn-secondary btn-small"
            >
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-small"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
