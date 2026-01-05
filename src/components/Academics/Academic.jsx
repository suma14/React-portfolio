// export default function Academic({img, title, university, period, place, description}) {
//   return (
//     <li>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h3>{university}</h3>
//       <h2>{period}</h2>
//       <h2>{place}</h2>
//       <p>{description}</p>
//     </li>
//   );
// }
import styles from './Academics.module.css';

export default function Academic({
  img,
  title,
  university,
  period,
  place,
  description,
}) {
  return (
    <li className={styles.card}>
      <img
        src={img}
        alt={`${title} at ${university}`}
        className={styles.icon}
      />

      <h3 className={styles.degree}>{title}</h3>

      <h4 className={styles.university}>{university}</h4>

      <div className={styles.meta}>
        <span>{period}</span>
        <span className={styles.separator}>•</span>
        <span>{place}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </li>
  );
}
