import React from "react";
import styles from "./button.module.css";

const Button = ({ text, handleClick, big = true }) => {
  return (
    <React.Fragment>
      <button
        className={big ? styles.buttonElementBig : styles.buttonElement}
        onClick={handleClick}
      >
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;
