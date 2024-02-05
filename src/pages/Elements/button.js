import React from "react";
import "./styles.css";

const Button = ({ text, isResponsive }) => {
  const buttonClassName = isResponsive ? "button-element responsive" : "button-element";

  return (
    <React.Fragment>
      <button className={buttonClassName}>
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;