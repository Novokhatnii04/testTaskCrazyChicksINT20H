import styles from "./MainHeader.module.css";
import mainImg from "../../../assets/HeaderImg/main-header.png";
import RunningString from "./RunningString";
import SpinningCircle from "./SpinningCircle";
import useLanguage from "../../../Hooks/useLanguage";


const MainHeader = () => {
   return (
      <div className={styles.container}>
         <img src={mainImg} className={styles["background-main"]} />
         <div className={styles["title-wrapper"]}>
            <h1>{useLanguage("Create with VaruBy")}</h1>
            <p>
               The best platform where you can sell, buy, to be inspire and to
               inspire.
            </p>
         </div>
         <button className={styles["btn-catalog_main"]}>Catalog</button>
         <div className={styles.stripe}>
            <RunningString />
         </div>
         <div className={styles.circle}>
            <SpinningCircle />
         </div>
      </div>
   );
};

export default MainHeader;
