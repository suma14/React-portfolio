

import { EXPERIENCE } from "../../data.js";
import ExperienceCard from "./ExperienceCard.jsx";
import styles from "./Experiences.module.css";

export default function Experiences() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.sectionTitle}>Experience</h2>

      <ul className={styles.list}>
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={item.role} {...item} />
        ))}
      </ul>
    </section>
  );
}
