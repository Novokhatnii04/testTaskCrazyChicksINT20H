import React from "react";
import styles from "./styles.module.css";
import insta from "@images/insta.svg";
import facebook from "@images/facebook.svg";
import whatsup from "@images/whatsup.svg";
import mail from "@images/mail.svg";
import phone from "@images/phone.svg";
import Menu from "./menu";

function FooterBottom() {
  const cardIcons = [insta, facebook, whatsup, mail];
  const menu = [
    "Help",
    "Contact",
    "Privacy Policy",
    "Terms And Conditions",
    "Home",
    "About Us",
    "Services",
    "Partners",
    "Catalog",
    "New arrival",
    "Sale",
    "Profile",
  ];
  return (
    <React.Fragment>
      <div className={styles.bottomInfo}>
        <div className={styles.mainInfo}>
          <div className={styles.contacts}>
            <div className={styles.icons}>
              {cardIcons.map((image, index) => (
                <img
                  key={index}
                  className={styles.cardIcon}
                  src={image}
                  alt={`Card ${index + 1}`}
                />
              ))}
            </div>
            <div className={styles.button}>
              <img className={styles.phone} src={phone} />
              <div className={styles.buttonText}>Phone Number</div>
            </div>
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
        <div className={styles.payment}>
          <div className={styles.cards}>
          </div>
          <div className={styles.text}>2024 INT20H | Crazy Chickens Team</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FooterBottom;
