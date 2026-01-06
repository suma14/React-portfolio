import styles from "./Projects.module.css";

export default function Project({
  img,
  title,
  githubLink,
  university,
  period,
  place,
  description,
  technologies,
}) {
  return (
    <li className={styles.card}>
      {/* Clickable Image */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img src={img} alt={title} className={styles.image} />
      </a>

      {/* Clickable Title */}
      <h3 className={styles.title}>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {title}
        </a>
      </h3>

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
