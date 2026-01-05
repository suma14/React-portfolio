// import Contact from "./Contact/Contact.jsx";
// import { CONTACT_INFO } from "../data.js";

// export default function Contacts(){
//     return (
//         <section id="contact-info">
//             <h2>Contact Information</h2>
//             <ul>
//             {CONTACT_INFO.map((contact) => (
//                 <Contact
//                     key={contact.method}
//                     method={contact.method}
//                     detail={contact.detail}
//                     link={
//                     contact.method === 'Email' ? `mailto:${contact.detail}`
//                         : contact.method === 'Phone' ? `tel:${contact.detail}`
//                         : `https://${contact.detail}`
//                     }
//                 />
//                 ))}
//             </ul>
//         </section>
//     );
// }
import Contact from "./Contact.jsx";
import { CONTACT_INFO } from "../../data.js";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.title}>Contact</h2>

      <ul className={styles.list}>
        {CONTACT_INFO.map((contact) => (
          <Contact
            key={contact.method}
            method={contact.method}
            detail={contact.detail}
            link={
              contact.method === "Email"
                ? `mailto:${contact.detail}`
                : contact.method === "Phone"
                ? `tel:${contact.detail}`
                : `https://${contact.detail}`
            }
          />
        ))}
      </ul>
    </section>
  );
}
