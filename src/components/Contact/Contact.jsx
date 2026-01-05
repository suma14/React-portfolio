// export default function Contact({method, detail, link}) {
//     return (
//         <li>
//             {method}: <a href={link}>{detail}</a>
//         </li>
//     );
// }
import styles from "./Contacts.module.css";

const icons = {
  Email: "✉️",
  Phone: "📞",
  LinkedIn: "💼"
};

export default function Contact({ method, detail, link }) {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>{icons[method]}</div>

      <div className={styles.text}>
        <span className={styles.method}>{method}</span>
        <a
          href={link}
          className={styles.link}
          target={method === "LinkedIn" ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {detail}
        </a>
      </div>
    </li>
  );
}

