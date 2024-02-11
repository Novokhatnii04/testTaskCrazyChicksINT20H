import React, { useEffect } from "react";
import "./styles.css";
import sliderImg from "@images/flag.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCard } from "../../Components/Store/store";

function SlotCard({ isActive, data }) {
  const dispatch = useDispatch();
  const { id, price, name, description, img } = data;

  const validateName = (name) => {
    if (name.length > 25) {
      return name.slice(0, 25) + "...";
    } else {
      return name;
    }
  };


  const handleDetailsClick = () => {
    dispatch(selectCard(data));
  };

  const truncatedDesc =
    description.length > 20
      ? `${description.substring(0, 20)}...`
      : description;

  const cardClasses = isActive ? "slider-card active" : "slider-card";
  const photoClasses = isActive ? `slider-photo active` : `slider-photo`;

  const postCurrentIdCard = () => {
    fetch(`http://lequiledev.zapto.org:8001/auction/GetId/${id}`, {
      method: "POST",
    });
  };

  return (
    <div className={cardClasses}>
      <img src={img}  className={photoClasses}/>
      <div className="newest-info-block">
        <div className="newest-text-block">
          <div className="newest-grey-text">{truncatedDesc}</div>
          <div className="newest-black-text">{validateName(name)}</div>
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
            <button className="newest-button" onClick={postCurrentIdCard}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;
