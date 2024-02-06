import React from "react";
import sliderImg from "@images/flag.png";
import styles from "./card.module.css";

function SlotCard({ isActive, title }) {
  const cardClasses = isActive
    ? `${styles["slider-card"]} ${styles.active}`
    : `${styles["slider-card"]}`;
  const photoClasses = isActive
    ? `${styles["slider-photo"]} ${styles.active}`
    : `${styles["slider-photo"]}`;

  return (
    <div className={cardClasses} clas>
      <div
        className={photoClasses}
        style={{ backgroundImage: `url(${sliderImg})` }}
      ></div>
      <div className={styles["newest-info-block"]}>
        <div className={styles["newest-text-block"]}>
          <div className={styles["newest-grey-text"]}>Description</div>
          <div className={styles["newest-black-text"]}>{title}</div>
        </div>
        <div className={styles["newest-bottom-info"]}>
          <div className={styles["newest-price"]}>
            20 $<div className={styles["newest-grey-text"]}>Last bid</div>
          </div>
          <div className={styles["newest-button"]}>Details</div>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
