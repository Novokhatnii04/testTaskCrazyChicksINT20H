import React from "react";
import CardsMenu from "./cardsMenu/cardsMenu";
import "./auction.sass";
import TopHeader from "../Header/TopHeader";

const AuctionCards = () => {
  return (
    <>
      <TopHeader />
      <div id="cards_auction__wrapper">
        <div className="cards_auction__title">
          <span>Active auctions</span>
        </div>
        <CardsMenu />
      </div>
    </>
  );
};

export default AuctionCards;
