import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
