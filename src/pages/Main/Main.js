import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/header";
import TextBlock from "../SecondPageText/textBlock";
import Slider from "../Slider/Slider";
import Question from "../Question/question";
import "./styles.css";

function HomePage() {
  const questionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/question" && questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="global-wrapper animated">
        <TextBlock />
        <Slider />
        <div ref={questionRef}>
          <Question />
        </div>
      </div>
    </>
  );
}

export default HomePage;
