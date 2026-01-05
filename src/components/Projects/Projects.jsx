import Project from "./Project.jsx";
import { PROJECTS } from "../../data.js";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <ul className={styles.grid}>
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
}
