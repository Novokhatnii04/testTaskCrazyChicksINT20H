import React, { useState } from "react";
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import sliderImg1 from "@images/footer.jpeg";
import test from "@images/test.png";
import test1 from "@images/test1.png";
import test2 from "@images/test2.png";
import PriceDrop from "./PriceDrop"
import ModalWindow from "./modal";

function Slot() {
  let lastBid = 20;
  const [slotPhoto, setSlotPhoto] = useState([sliderImg, sliderImg1, test, test1, test2]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // Состояние для отображения модального окна

  const handlePriceChange = (price) => {
    setSelectedPrice(price); 
    console.log(price);
  };

  const handlePhotoClick = (index) => {
    const newSlotPhoto = [...slotPhoto];
    const selectedPhoto = newSlotPhoto[index];
    newSlotPhoto[index] = newSlotPhoto[0];
    newSlotPhoto[0] = selectedPhoto;
    setSlotPhoto(newSlotPhoto);
  };

  const handlePlaceBidClick = () => {
    if (!selectedPrice) { // Проверяем, является ли выбранная цена числом
      setIsModalVisible(true); // Показываем модальное окно
    }
  };

  const smallSliderPhotos = slotPhoto.slice(1).map((src, index) => (
    <div
      key={index}
      className={styles.smallSliderPhoto}
      style={{ backgroundImage: `url(${src})` }}
      onClick={() => handlePhotoClick(index + 1)} 
    ></div>
  ));

  return (
<div className={`${styles.slotCard} animate`}>
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
              {lastBid} $<div className={styles.greyText}>Last bid</div>
            </div>
            <PriceDrop lastBid={lastBid} onPriceChange={handlePriceChange} />
            <div className={styles.button} onClick={handlePlaceBidClick}>Place Bid</div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalWindow onClose={() => setIsModalVisible(false)} />}
    </div>
  );
}

export default Slot;
