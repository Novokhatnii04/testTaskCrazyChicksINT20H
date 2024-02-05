import React from "react";
import "./styles.css";

function TextBlock() {
  return (
    <React.Fragment>
     <div className="text-block-wrapper">
      <div className="mission-text">Our mission statement</div>
      <div className="mission-text-left">Help our army, while creating cool auctions and also supporting other auctions</div>
     </div>
    </React.Fragment>
  );
}

export default TextBlock;
