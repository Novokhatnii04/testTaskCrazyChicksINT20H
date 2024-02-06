import React from "react";
import "./styles.css";
import whitePoint from "@images/whitePoint.svg";
import yellowPoint from "@images/yellowPoint.svg";

const Points = ({ state }) => {
  const generatePointImages = () => {
    const pointImages = [];

    if (!state) state = 5;

    for (let i = 1; i < state; i++) {
      pointImages.push(
        <img key={`whitePoint-${i}`} className="whitePoint" src={whitePoint} />
      );
    }

    pointImages.push(
      <img key="yellowPoint" className="yellowPoint" src={yellowPoint} />
    );

    for (let i = state; i < 3; i++) {
      pointImages.push(
        <img key={`whitePoint-${i}`} className="whitePoint" src={whitePoint} />
      );
    }

    return pointImages;
  };

  return <React.Fragment>{generatePointImages()}</React.Fragment>;
};

export default Points;
