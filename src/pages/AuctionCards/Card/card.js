import React from "react";
import sliderImg from "@images/flag.png";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCard } from "../../../Components/Store/store";

function SlotCard({ data, isActive }) {
  const { id, price, title, desc } = data;
  const dispatch = useDispatch();

  const cardClasses = isActive
    ? `${styles["slider-card"]} ${styles.active}`
    : `${styles["slider-card"]}`;
  const photoClasses = isActive
    ? `${styles["slider-photo"]} ${styles.active}`
    : `${styles["slider-photo"]}`;

  const handleDetailsClick = () => {
    // console.log("sfsfsfsf", data);
    dispatch(selectCard(data));
  };

  return (
    <div className={cardClasses}>
      <div
        className={photoClasses}
        style={{ backgroundImage: `url(${sliderImg})` }}
      ></div>
      <div className={styles["newest-info-block"]}>
        <div className={styles["newest-text-block"]}>
          <div className={styles["newest-grey-text"]}>
            {desc.length > 20 ? `${desc.substring(0, 20)}...` : desc}
          </div>
          <div className={styles["newest-black-text"]}>{title}</div>
        </div>
        <div className={styles["newest-bottom-info"]}>
          <div className={styles["newest-price"]}>
            {price} $<div className={styles["newest-grey-text"]}>Last bid</div>
          </div>
          <Link to={`/slot/${id}`} style={{ textDecoration: "none" }}>
            <div
              className={styles["newest-button"]}
              onClick={handleDetailsClick}
            >
              Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
