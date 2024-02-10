import React, { useEffect } from "react";
import Card from "../Card/card";

const CardsGrid = ({ data }) => {
  return (
    <div className="cards_grid__wrapper">
      {data.map((el, index) => {
        return (
          <div key={index}>
            <Card data={el} />
          </div>
        );
      })}
    </div>
  );
};

export default CardsGrid;
