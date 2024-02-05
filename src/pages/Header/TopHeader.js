import styles from "./topHeader.module.css";
import logoImg from "../../../assets/HeaderImg/VaruBy.png";
import LanguageSwaper from "pages/components/language_buttons";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} />
      <div className={styles["sidebar-menu"]}>
        <a href="#" className={styles["sidebar-item"]}>
          <p>About us</p>
        </a>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Partners</p>
        </a>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Help</p>
        </a>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Services</p>
        </a>
      </div>
      <LanguageSwaper />
    </div>
  );
};

export default TopHeader;
