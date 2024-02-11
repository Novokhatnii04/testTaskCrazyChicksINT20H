import React from "react";
import "./styles.css";
import sliderImg from "@images/flag.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCard } from "../../Components/Store/store";

function SlotCard({ isActive, data }) {
  const dispatch = useDispatch();
  const { id, price, title, desc } = data;

  const handleDetailsClick = () => {
    dispatch(selectCard(data));
  };

  const truncatedDesc = desc.length > 20 ? `${desc.substring(0, 20)}...` : desc;

  const cardClasses = isActive ? "slider-card active" : "slider-card";
  const photoClasses = isActive ? `slider-photo active` : `slider-photo`;

  return (
    <div className={cardClasses}>
      <div
        className={photoClasses}
        style={{ backgroundImage: `url(${sliderImg})` }}
      ></div>
      <div className="newest-info-block">
        <div className="newest-text-block">
          <div className="newest-grey-text">
            {truncatedDesc}
          </div>
          <div className="newest-black-text">{title}</div>
        </div>
        <div className="newest-bottom-info">
          <div className="newest-price">
            {price} $<div className="newest-grey-text">Last bid</div>
          </div>
          <Link
            to={`/slot/${id}`}
            style={{ textDecoration: "none" }}
            onClick={handleDetailsClick}
          >
            <div className="newest-button">Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
