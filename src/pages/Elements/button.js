import React from "react";
import "./styles.css";

const Button = ({ text, link }) => {

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <React.Fragment>
      <button className="button-element" onClick={handleClick}>
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;