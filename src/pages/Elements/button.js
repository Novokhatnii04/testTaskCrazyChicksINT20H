import React from "react";
import "./styles.css";

const Button = ({ text, isResponsive, link }) => {
  const buttonClassName = isResponsive ? "button-element responsive" : "button-element";

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <React.Fragment>
      <button className={buttonClassName} onClick={handleClick}>
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;