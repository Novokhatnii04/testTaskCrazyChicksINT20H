import React from "react";
import Header from "../Header/header";
import TextBlock from "../SecondPageText/textBlock";
import Slider from "../Slider/Slider";
import Question from "../Question/question";
import "./styles.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className="global-wrapper animated">
        <TextBlock />
        <Slider />
        <Question />
      </div>
    </>
  );
}

export default HomePage;
