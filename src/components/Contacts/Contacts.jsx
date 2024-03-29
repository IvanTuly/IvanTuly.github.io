import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";

import styles from "./Contacts.module.scss";
import ContactElement from "./ContactElement";
import axios from "axios";
import { AppContext } from "../../App";

const info = [
  {
    header: "Contacts",
    obj: [
      {
        text: "Phone: ",
        linkName: "+358 46 969 0800",
        href: "tel:+358469690800",
      },
      {
        text: "Email: ",
        linkName: "ivantuly@gmail.com",
        href: "mailto:ivantuly@gmail.com",
      },
      {
        text: "Telegram:",
        linkName: "Mtb1ker",
        href: "https://t.me/+79956303010",
      },
      {
        text: "WhatsApp: ",
        linkName: "+79112553010",
        href: "https://wa.me/79112553010",
      },
      {
        text: "LinkedIn: ",
        linkName: "ivan Tulchinskii",
        href: "https://www.linkedin.com/in/ivan-tulchinskii-28bb8821b/",
      },
      {
        text: "GitHub:",
        linkName: "IvanTuly",
        href: "https://github.com/IvanTuly",
      },
    ],
  },
];

const Contacts = () => {
  const { contactsData } = React.useContext(AppContext);

  // console.log(contactsData);
  // console.log(info);

  return (
    <>
      <Title title={"My Contacts"} />
      <motion.div
        className="pageinfo"
        style={{
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className={styles.items}>
          <ContactElement obj={contactsData} />
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;

// {
//   contactsData.map((obj, index) => (
//     <>
//       {console.log(obj)}
//       {/* <ContactElement key={index} {...obj} /> */}
//     </>
//   ));
// }
