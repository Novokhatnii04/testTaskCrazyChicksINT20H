import React, { useEffect } from "react";
import Card from "../Card/card";

const CardsGrid = ({ data: _data }) => {
  return (
    <div className="cards_grid__wrapper">
      {_data.map((el) => {
        return (
          <div>
            <Card title={el.title} />
          </div>
        );
      })}
    </div>
  );
};

export default CardsGrid;
