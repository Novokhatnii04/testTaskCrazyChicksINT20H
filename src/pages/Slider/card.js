import React from "react";
import "./styles.css";
import sliderImg from "@images/flag.png";
import { Link } from "react-router-dom";

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
            <Link to={"/slot"} style={{ textDecoration: "none" }}>
          <div className="newest-button">
            Details</div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
