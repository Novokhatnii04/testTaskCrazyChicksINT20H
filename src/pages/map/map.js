import React, { useState } from "react";
import styles from "./styles.module.css";
import map from "@images/map.png"

function Map() {
  return (
    <React.Fragment>
      <div className={styles.map} style={{ backgroundImage: `url(${map})` }}/>
    </React.Fragment>
  );
}

export default Map;
