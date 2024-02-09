import styles from "./topHeader.module.css";
import logoImg from "../../assets/HeaderImg/LOGO.png";
import heartImg from "../../assets/HeaderImg/heart-icon.svg";
import profileImg from "../../assets/HeaderImg/profile-icon.svg";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <button style={{ background: "none" }} className={styles.logo_btn}>
          <img className={styles.logo} src={logoImg} />
        </button>
      </Link>
      <div className={styles["sidebar-menu"]}>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Text</p>
        </a>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Partners</p>
        </a>
        <a href="#" className={styles["sidebar-item"]}>
          <p>Help</p>
        </a>
      </div>

      <div className={styles.icons}>
        <Link to={"/createslot"}>
          <button className={styles.icon}>
            <span style={{ textTransform: "uppercase" }}>create slot</span>
            <img src={heartImg} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
