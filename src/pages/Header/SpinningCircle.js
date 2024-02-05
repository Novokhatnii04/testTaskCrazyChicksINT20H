import styles from "./SpinningCircle.module.css";
import svg from "../../../assets/HeaderImg/play.svg";

const SpinningCircle = () => {
   return (
      <div className={styles["wrapper-circle_text"]}>
         <svg viewBox="0 0 200 200" className={styles["link_svg"]}>
            <path
               id="link-circle"
               className={styles["link_path"]}
               d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
               stroke="none"
               fill="none"
            />

            <text className={styles["link_text"]}>
               <textPath href="#link-circle" stroke="none">
                  - Explore More - Explore More
               </textPath>
            </text>
         </svg>
         <img src={svg} />
      </div>
   );
};

export default SpinningCircle;
