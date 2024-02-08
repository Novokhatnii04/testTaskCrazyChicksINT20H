import styles from "./topHeader.module.css";
import logoImg from "../../assets/HeaderImg/LOGO.png";
import heartImg from "../../assets/HeaderImg/heart-icon.svg";
import profileImg from "../../assets/HeaderImg/profile-icon.svg";
import { Link } from "react-router-dom";

const TopHeader = () => {
   return (
      <div className={styles.container}>
         <img className={styles.logo} src={logoImg} />
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
            <a href="#" className={styles["sidebar-item"]}>
               <p>Contacts</p>
            </a>
         </div>

         <div className={styles.icons}>
            <button className={styles.icon}>
               <img src={heartImg} />
            </button>
            <Link to={"/signup"}>
               <button className={styles.icon}>
                  <img src={profileImg} />
               </button>
            </Link>
         </div>
      </div>
   );
};

export default TopHeader;
