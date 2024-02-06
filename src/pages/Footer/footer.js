import React from "react";
import styles from "./styles.module.css";
import footerImg from "@images/footer.jpeg";
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
          <div className={styles.upperTitle}>DONATE TO UKRAINE ARMY FUNDRAISER</div>
          <Button text={"Donate"} link={"https://savelife.in.ua/en/donate-en/#donate-army-card-monthly" } />
          <div className={styles.upperDescr}>
          The Charity Foundation "Come Back Alive" regularly and timely reports on its activities to all benefactors, state bodies and Ukrainian society.
          </div>
        </div>
        <FooterBottom />
      </div>
    </React.Fragment>
  );
}

export default Footer;
