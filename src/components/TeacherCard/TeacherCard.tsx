import type { Teacher } from '../../config/site';
import styles from './TeacherCard.module.css';

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className={`card card-hoverable ${styles.card}`}>
      <div className={styles.photoFrame}>
        <img
          className={styles.photo}
          src={`${import.meta.env.BASE_URL}${teacher.photo}`}
          alt={`${teacher.title} ${teacher.name}`}
          width={640}
          height={800}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{teacher.title}</span>
        <h3 className={styles.name}>{teacher.name}</h3>
      </div>
    </article>
  );
}
