import styles from "./Skills.module.css";

export default function Skills({ skillsData }) {
    return (
    <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills</h2>

        {skillsData.map((categoryItem) => (
        <div key={categoryItem.category} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{categoryItem.category}</h3>

            <ul className={styles.skillList}>
            {categoryItem.skills.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                {skill.name}
                </li>
            ))}
            </ul>
        </div>
        ))}
    </section>
);
}
