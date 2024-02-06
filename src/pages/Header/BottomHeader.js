import styles from "./BottomHeader.module.css";
import img from "../../../assets/HeaderImg/three-stripe.svg";
import heartImg from "../../../assets/HeaderImg/heart-icon.svg";
import trashImg from "../../../assets/HeaderImg/trash-icon.svg";
import profileImg from "../../../assets/HeaderImg/profile-icon.svg";
import logoBlack from "../../../assets/HeaderImg/VaruBy-black.png";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className={styles.container}>
      <button className={styles.catalog}>
        <img className={styles.logo} src={logoBlack} />
        <img src={img} />
        <p>Catalog</p>
      </button>
      <input
        type="text"
        className={styles["search-input"]}
        placeholder="Search"
      />
      <div className={styles.icons}>
        <button className={styles.icon}>
          <img src={heartImg} />
        </button>
        <button className={styles.icon}>
          <img src={trashImg} />
        </button>
        <Link to={"/signup"}>
          <button className={styles.icon}>
            <img src={profileImg} />
          </button>
        </Link>
      </div>
      <button className={styles["create-post"]}>Create a post</button>
    </div>
  );
};

export default BottomHeader;
