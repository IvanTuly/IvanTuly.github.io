import React from "react";
import styles from "./Portfolio.module.scss";

const Counter = ({ currentPage, totalPages }) => {
  return (
    <div className={styles.page_counter}>
      <div className={styles.page}>—{currentPage}</div>
      <div className={styles.total_pages}>/{totalPages}</div>
    </div>
  );
};

export default Counter;
