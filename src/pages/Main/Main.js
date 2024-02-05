import React from "react";
// import Header from "../Header/header";
import TextBlock from "../SecondPageText/textBlock";
import Slider from "../Slider/Slider";
import Question from "../Question/question";
import Footer from "../Footer/footer";
import "./styles.css";


function HomePage() {
  return (
    <>
    {/* <Header /> */}
    <div className="global-wrapper">
      <TextBlock />
      <Slider />
      <Question />
    </div>
      <Footer />
    </>
  );
}

export default HomePage;
