import styles from "./MainHeader.module.css";
import firstSectionImg from "../../assets/HeaderImg/first_img.png";
import RunningString from "./RunningString";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className={`${styles.container} animated`}>
      <section className={styles.first}>
        <h1>Welcome to our Charity Auction</h1>
        <div className={styles["wrapper_text-button"]}>
          <p>
            The best platform where you can create auctions or support others
          </p>
          <Link to="/auction" >
            <button>Auctions</button>
          </Link>
        </div>
        <img src={firstSectionImg} style={{ borderRadius: '40px' }}/>
      </section>
      <section className={styles.second} />
      <div className={styles.stripe}>{<RunningString />}</div>
    </div>
  );
};

export default MainHeader;
