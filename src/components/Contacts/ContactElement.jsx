import React from "react";
import styles from "./Contacts.module.scss";

const ContactElement = ({ header, obj }) => {
  const clickOnLink = (link) => {
    console.log(link);

    if (link === "ivantuly@gmail.com") {
      <a href="mailto:vlad@webref.ru">Текст ссылки</a>;
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.item_header}>{header}</div>
      {obj.map((item, index) => (
        <div key={index} className={styles.item_info}>
          {console.log(item.link)}
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
