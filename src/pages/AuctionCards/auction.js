import React from "react";
import CardsMenu from "./cardsMenu/cardsMenu";
import "./auction.sass";

const AuctionCards = () => {
  return (
    <>
      <div id="cards_auction__wrapper" className="animated">
        <div className="cards_auction__title">
          <span>Active auctions</span>
        </div>
        <CardsMenu />
      </div>
    </>
  );
};

export default AuctionCards;
