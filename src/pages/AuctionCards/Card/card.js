import React from "react";
import sliderImg from "@images/flag.png";
import styles from "./card.module.css";

function SlotCard({ data, isActive }) {
  const { price, title, desc } = data;

  const cardClasses = isActive
    ? `${styles["slider-card"]} ${styles.active}`
    : `${styles["slider-card"]}`;
  const photoClasses = isActive
    ? `${styles["slider-photo"]} ${styles.active}`
    : `${styles["slider-photo"]}`;

  return (
    <div className={cardClasses}>
      <div
        className={photoClasses}
        style={{ backgroundImage: `url(${sliderImg})` }}
      ></div>
      <div className={styles["newest-info-block"]}>
        <div className={styles["newest-text-block"]}>
          <div className={styles["newest-grey-text"]}>{desc}</div>
          <div className={styles["newest-black-text"]}>{title}</div>
        </div>
        <div className={styles["newest-bottom-info"]}>
          <div className={styles["newest-price"]}>
            {price} $<div className={styles["newest-grey-text"]}>Last bid</div>
          </div>
          <div className={styles["newest-button"]}>Details</div>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
