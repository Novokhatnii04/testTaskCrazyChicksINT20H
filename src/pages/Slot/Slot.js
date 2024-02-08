import React, { useState } from "react";
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import sliderImg1 from "@images/footer.jpeg";
import test from "@images/test.png";
import test1 from "@images/test1.png";
import PriceDrop from "./PriceDrop";
import ModalWindow from "./modal";
import Timer from "./timer";

function Slot() {
  let lastBid = 20;
  let timerCount = 3;
  const [selectedPhoto, setSlotPhoto] = useState(sliderImg);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const auctionEndTime = Date.now() + timerCount * 24 * 60 * 60 * 1000;

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    console.log(price);
  };

  const slotPhoto = [sliderImg, sliderImg1, test, test1];
  const handlePhotoClick = (index) => {
    const newSlotPhoto = [...slotPhoto];
    const selectedPhoto = newSlotPhoto[index];
    setSlotPhoto(selectedPhoto);
  };

  const handlePlaceBidClick = () => {
    if (selectedPrice) {
      setIsModalVisible(true);
    }
  };

  const smallSliderPhotos = slotPhoto.map((src, index) => (
    <div
      key={index}
      className={styles.smallSliderPhoto}
      style={{ backgroundImage: `url(${src})` }}
      onClick={() => handlePhotoClick(index)}
    ></div>
  ));

  return (
    <React.Fragment>
      <div className={`${styles.slotCard} animate`}>
        <div className={styles.title}>Name</div>
        <div className={styles.slotSection}>
          <div className={styles.photoWrapper}>
            <div
              className={styles.sliderPhoto}
              style={{ backgroundImage: `url(${selectedPhoto})` }}
            ></div>
            <div className={styles.smallSliderPhotosWrapper}>
              {smallSliderPhotos}
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.descrText}>
              Blalala lalala lalal lalal lalalalalla lalalala lalalal lalalal
              lalalala lalal lalalalalaBlalala lalala lalal lalal lalalalalla
              lalalala lalalal lalalal lalalala lalal lalalalala
            </div>
            <Timer endTime={auctionEndTime} />
            <div className={styles.bottomInfo}>
              <div className={styles.price}>
                {lastBid} $<div className={styles.greyText}>Last bid</div>
              </div>
              <PriceDrop lastBid={lastBid} onPriceChange={handlePriceChange} />
              <div className={styles.button} onClick={handlePlaceBidClick}>
                Place Bid
              </div>
            </div>
          </div>
        </div>
        {isModalVisible && (
          <ModalWindow onClose={() => setIsModalVisible(false)} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Slot;
