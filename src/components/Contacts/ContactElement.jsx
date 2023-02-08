import React from "react";
import styles from "./Contacts.module.scss";

const ContactElement = ({ obj }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_header}>Contacts</div>
      {obj.map((item, index) => (
        <div key={index} className={styles.item_info}>
          <div className={styles.item_text}>{item.text}</div>
          <a href={item.href} target="_blank" className={styles.item_linkName}>
            {item.linkName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactElement;
