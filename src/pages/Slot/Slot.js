import React, { useState } from "react";
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import sliderImg1 from "@images/footer.jpeg";
import test from "@images/test.png";
import test1 from "@images/test1.png";
import test2 from "@images/test2.png";


function Slot() {
  const [slotPhoto, setSlotPhoto] = useState([sliderImg, sliderImg1, test, test1, test2]);

  const handlePhotoClick = (index) => {
    const newSlotPhoto = [...slotPhoto];
    const selectedPhoto = newSlotPhoto[index];
    newSlotPhoto[index] = newSlotPhoto[0];
    newSlotPhoto[0] = selectedPhoto;
    setSlotPhoto(newSlotPhoto);
  };

  const smallSliderPhotos = slotPhoto.slice(1).map((src, index) => (
    <div
      key={index}
      className={styles.smallSliderPhoto}
      style={{ backgroundImage: `url(${src})` }}
      onClick={() => handlePhotoClick(index + 1)} // Сдвигаем индекс на 1, так как мы начинаем с элемента slotPhoto[1]
    ></div>
  ));

  return (
    <div className={styles.sliderCard}>
      це буде сторінка одного слоту, потім втулимо її куди нам треба
      <div className={styles.title}>Name</div>
      <div className={styles.slotSection}>
        <div className={styles.photoWrapper}>
          <div
            className={styles.sliderPhoto}
            style={{ backgroundImage: `url(${slotPhoto[0]})` }}
          ></div>
          <div className={styles.smallSliderPhotosWrapper}>
            {smallSliderPhotos}
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.greyText}>
            Blalala lalala lalal lalal lalalalalla lalalala lalalal lalalal
            lalalala lalal lalalalalaBlalala lalala lalal lalal lalalalalla
            lalalala lalalal lalalal lalalala lalal lalalalala
          </div>
          <div className={styles.bottomInfo}>
            <div className={styles.price}>
              20 $<div className={styles.greyText}>Last bid</div>
            </div>
            <div className={styles.button}>Details</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slot;
