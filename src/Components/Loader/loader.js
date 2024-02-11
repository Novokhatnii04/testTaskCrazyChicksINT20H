import React from "react";
import styles from "./loader.module.css";

function loader() {
  return <div className={styles.spinner}></div>;
}

export default loader;
