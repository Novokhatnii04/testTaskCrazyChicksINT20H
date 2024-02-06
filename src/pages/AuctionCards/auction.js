import React from "react";
import CardsMenu from "./cardsMenu/cardsMenu";
import "./auction.sass";
import Footer from "../Footer/footer";

const AuctionCards = () => {
  return (
    <>
      <section className="header"></section>
      <div id="cards_auction__wrapper">
        <div className="cards_auction__title">
          <span>Active auctions</span>
        </div>
        <CardsMenu />
        <Footer />
      </div>
    </>
  );
};

export default AuctionCards;
