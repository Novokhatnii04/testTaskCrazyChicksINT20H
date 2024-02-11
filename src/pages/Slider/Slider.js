import React, { useState, useEffect } from "react";
import "./styles.css";
import arrow from "@images/arrowIcon.svg";
import Card from "./card";
import Points from "./points";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(1);
  const [sliderSmall, setsliderSmall] = useState(false);
  const [sliderMeduim, setsliderMeduim] = useState(false);


  let data = [
    {
      id:1,
      title: "Popla",
      timerCount: 2,
      price: 234,
      desc: "sdsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdadadsdsdsdada",
      date: "2024-02-14T12:30:00",
    },
    {
      id:2,
      title: "Popla",
      timerCount: 3,
      price: 1234,
      desc: "sdsdsdsdada",
      date: "2024-02-14T12:30:00",
    },
    {
      id:3,
      title: "Popla",
      timerCount: 2,
      price: 3234,
      desc: "sdsdsdsdada",
      date: "2024-02-14T12:30:00",
    }] 

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 937px)").matches;
      setsliderSmall(isSmallScreen);
      const isMeduimScreen = window.matchMedia("(max-width: 1427px)").matches;
      if (isSmallScreen) {
        cardWidth = 328;
        setsliderMeduim(false);
      }
      setsliderMeduim(isMeduimScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setActive((active) => (active === 3 ? 1 : active + 1));
    if (sliderSmall) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    } else if (sliderMeduim) {
      if (active === 2) return;
      else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
      }
    }
  };

  const prevSlide = () => {
    setActive((active) => (active === 1 ? 3 : active - 1));
    if (sliderSmall) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    } else if (sliderMeduim) {
      if (active === 2) return;
      else {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
      }
    }
  };

  const renderVisibleCards = () => {
    const visibleCards = [];
  
    data.forEach((el, index) => {
      const isActive = index === (active - 1);
      visibleCards.push(<Card key={el.id} isActive={isActive} data={el}/>);
    });
  
    return visibleCards;
  };
  

  let cardWidth;
  if (sliderSmall) {
    cardWidth = 328;
  } else {
    cardWidth = 366;
  }

  const transformValue = -currentIndex * cardWidth + "px";

  return (
    <div
      className="newest-content-wrapper"
    >
      <div className="newest-title">Trending lots</div>
      <div className="slider-container">
        {!sliderSmall && (
          <>
            <button className="prev-button" onClick={prevSlide}>
              <img className="newest-arrow-left" src={arrow} />
            </button>
          </>
        )}
        <div className="visible-slider-zone">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(${transformValue})` }}
          >
            {renderVisibleCards()}
          </div>
        </div>
        {!sliderSmall && (
          <>
            <button className="next-button" onClick={nextSlide}>
              <img className="newest-arrow-right" src={arrow} />
            </button>
          </>
        )}
        {sliderSmall && (
          <>
            <div className="button-group">
              <button className="prev-button" onClick={prevSlide}>
                <img className="newest-arrow-left" src={arrow} />
              </button>
              <div className="newest-carrd-point">
                <Points state={active} />
              </div>
              <button className="next-button" onClick={nextSlide}>
                <img className="newest-arrow-right" src={arrow} />
              </button>
            </div>
          </>
        )}
      </div>
      {!sliderSmall && (
        <>
          <div className="newest-carrd-point">
            <Points state={active} />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
