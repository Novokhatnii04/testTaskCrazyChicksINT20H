import React from "react";
import "./styles.css";

  const ScrollAd = ({ top, right, bottom, left,  rotate, background, textColour }) => {
  const saleItems = Array.from({ length: 20 }, (_, index) => (
    <React.Fragment key={index}>
      <div className="scroll-sale-text" style={{color: `var(${textColour})`}}>SALE</div>
      <div className="scroll-square" />
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <div className="scroll-sale-block">
        <div className="scroll-container">{saleItems}</div>
      </div>
      <div className="scroll-sale-block-white" >
        <div className="scroll-container">{saleItems}</div>
      </div>
    </React.Fragment>
  );
}


export default ScrollAd;

