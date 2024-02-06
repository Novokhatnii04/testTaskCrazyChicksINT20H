import React from "react";
import FilterIcon from "../../../assets/Images/filterIcon.svg";
import CardsGrid from "./cardsGrid";

const _lengthOfCards = 5;

const cardsMenu = () => {
  return (
    <>
      <div className="cards_auction__length">
        <div>
          <span>Results : {_lengthOfCards}</span>
          <div>
            <button className="cards_filter__button">
              <span>Filter</span>
              <img src={FilterIcon} />
            </button>
          </div>
        </div>
      </div>
      <CardsGrid />
    </>
  );
};

export default cardsMenu;
