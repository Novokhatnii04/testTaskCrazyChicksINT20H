import React from "react";
import "./styles.css";
import sliderImg from "@images/flag.png";

function SlotCard({  isActive }) {
  const cardClasses = isActive
    ? "slider-card active"
    : "slider-card";
  const photoClasses = isActive
    ? `slider-photo active`
    : `slider-photo`;

  return (
    <div className={cardClasses}>
      <div
        className={photoClasses}
        style={{ backgroundImage: `url(${sliderImg})` }}
      >
      </div>
      <div className="newest-info-block">
        <div className="newest-text-block">
          <div className="newest-grey-text">Description</div>
          <div className="newest-black-text">Name</div>
        </div>
        <div className="newest-bottom-info">
          <div className="newest-price">20 $
          <div className="newest-grey-text">Last bid</div></div>
          <div className="newest-button">Details</div>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
