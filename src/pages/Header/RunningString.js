import styles from "./RunningString.module.css";
import { data } from "./dataHeader";

const runningString = Array(6)
   .fill()
   .map((_, index) => (
      <div key={index}>
         {Object.values(data).map((item, innerIndex) => (
            <span className={styles["running-text_wrapper"]} key={innerIndex}>
               <div>{item.text}</div>
               <img src={item.img} />
            </span>
         ))}
      </div>
   ));

const RunningString = () => {
   return (
      <>
         <div className={styles.root}>
            <div>{runningString}</div>
         </div>
      </>
   );
};

export default RunningString;
