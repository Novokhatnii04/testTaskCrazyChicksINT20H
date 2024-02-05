import React from "react";
import styles from "./styles.module.css";
import footerImg from "@images/footerImg.png";
import Button from "../Elements/button";
import FooterBottom from "./footer-bottom";

function Footer() {
  return (
    <React.Fragment>
      <div
        className={styles.footerWrapper}
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className={styles.upperInfo}>
          <div className={styles.upperTitle}>SUBSCRIBE</div>
          <div className={styles.upperDescr}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.upperInput}
              placeholder="Enter your email"
            ></input>
            <Button text={"Subscribe"} />
          </div>
        </div>
        <FooterBottom />
      </div>
    </React.Fragment>
  );
}

export default Footer;
