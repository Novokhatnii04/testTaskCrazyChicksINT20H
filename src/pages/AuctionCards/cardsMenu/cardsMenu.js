import React from "react";
import FilterIcon from "@images/filterIcon.svg";
import CardsGrid from "./cardsGrid";

const _cardsData = [
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
  {
    title: "Popla",
  },
];

const cardsMenu = () => {
  return (
    <>
      <div className="cards_auction__length">
        <div>
          <span>Results : {_cardsData.length}</span>
          <div>
            <button className="cards_filter__button">
              <span>Filter</span>
              <img src={FilterIcon} />
            </button>
          </div>
        </div>
        <span></span>
      </div>
      <CardsGrid data={_cardsData} />
    </>
  );
};

export default cardsMenu;
