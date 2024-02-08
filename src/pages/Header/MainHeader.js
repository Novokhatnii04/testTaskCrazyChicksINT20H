import styles from "./MainHeader.module.css";
import firstSectionImg from "../../assets/HeaderImg/first_img.png";
import RunningString from "./RunningString";

const MainHeader = () => {
   return (
      <div className={styles.container}>
         <section className={styles.first}>
            <h1>Welcome to our Charity Auction</h1>
            <div className={styles["wrapper_text-button"]}>
               <p>
                  The best platform where you can create auctions or support
                  others
               </p>
               <button>Auctions</button>
            </div>
            <img src={firstSectionImg} />
         </section>
         <section className={styles.second} />
         <div className={styles.stripe}>{<RunningString />}</div>
      </div>
   );
};

export default MainHeader;
