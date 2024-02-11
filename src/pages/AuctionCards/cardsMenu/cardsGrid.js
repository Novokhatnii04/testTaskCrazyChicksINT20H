import React, { useEffect } from "react";
import Card from "../Card/card";

const CardsGrid = ({ data  }) => {
  return (
    <div className="cards_grid__wrapper">
      {_data.map((el) => {
        return (
          <div key={index}>
            <Card data={el}/>
          </div>
        );
      })}
    </div>
  );
};

export default CardsGrid;
