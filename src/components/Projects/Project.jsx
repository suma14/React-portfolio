import styles from "./Projects.module.css";

export default function Project({
  img,
  title,
  university,
  period,
  place,
  description,
  technologies,
}) {
  return (
    <li className={styles.card}>
      <img src={img} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>

      <h4 className={styles.organization}>{university}</h4>

      <div className={styles.meta}>
        {period} • {place}
      </div>

      <p className={styles.description}>{description}</p>

      {technologies && (
        <ul className={styles.techList}>
          {technologies.map((tech) => (
            <li key={tech} className={styles.tech}>
              {tech}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
