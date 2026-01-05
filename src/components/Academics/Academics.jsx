

import { ACADEMICS } from '../../data.js';
import Academic from './Academic.jsx';
import styles from './Academics.module.css';

export default function Academics() {
  return (
    <section className={styles.academics}>
      <h2 className={styles.sectionTitle}>Academics</h2>

      <ul className={styles.grid}>
        {ACADEMICS.map((item) => (
          <Academic key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}