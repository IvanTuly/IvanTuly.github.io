import React from "react";
import styles from "../Portfolio.module.scss";
import ArrowIcon from "./ArrowIcon";
import ArrowIconLeft from "./ArrowIconLeft";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? `${styles.btn_slide} ${styles.next}`
          : `${styles.btn_slide} ${styles.prev}`
      }
    >
      {direction === "next" ? <ArrowIcon /> : <ArrowIconLeft />}
    </button>
  );
}
