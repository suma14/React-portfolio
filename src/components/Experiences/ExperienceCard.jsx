import styles from "./Experiences.module.css";

export default function ExperienceCard({
  img,
  role,
  company,
  period,
  location,
  description,
}) {
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <img
          src={img}
          alt={`${role} at ${company}`}
          className={styles.logo}
        />

        <div>
          <h3 className={styles.role}>{role}</h3>
          <h4 className={styles.company}>{company}</h4>
        </div>
      </div>

      <div className={styles.meta}>
        <span>{period}</span>
        <span className={styles.separator}>•</span>
        <span>{location}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </li>
  );
}
