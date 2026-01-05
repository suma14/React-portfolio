// import CoreConcept from "../Academics/Academic.jsx";
// import { EXPERIENCE } from "../../data.js";

// export default function Experiences(){
//     return (
//         <section id="core-concepts">
//             <h2>Experience</h2>
//             <ul>
//                 <CoreConcept {...EXPERIENCE[0]} />
//                 <CoreConcept {...EXPERIENCE[1]} />
//                 <CoreConcept {...EXPERIENCE[2]} />
//             </ul>
//         </section>
//         );
// }

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
