import React, { useState } from "react";
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import sliderImg1 from "@images/footer.jpeg";
import test from "@images/test.png";
import test1 from "@images/test1.png";
import PriceDrop from "./PriceDrop";
import ModalWindow from "./modal";
import Question from "../Question/question";
import Timer from "./timer";
import Chat from "../../Components/Chat/index";

function Slot() {
  let lastBid = 20;
  let timerCount = 3;
  let idLot = 1;
  let startDate="2024-02-14T12:30:00";

  const questionInfo = [
    {
      title: "Payment",
      desc: "Accepted forms of payment: American Express, Discover, MasterCard, Paypal, Visa, Wire Transfer",
    },
    {
      title: "Shipping",
      desc: "Buyer pays shipping charges.",
    },
    {
      title: "Can I cancel a bid?",
      desc: "You cannot cancel a bid once it has been submitted.",
    },
  ];

  const [selectedPhoto, setSlotPhoto] = useState(sliderImg);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <div className={`${styles.slotCard} animated`}>
        <div className={styles.title}>Lot # {idLot}</div>
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
            <div className={styles.name}>Name</div>
            <div className={styles.descrText}>
              Blalala lalala lalal lalal lalalalalla lalalala lalalal lalalal
              lalalala lalal lalalalalaBlalala lalala lalal lalal lalalalalla
              lalalala lalalal lalalal lalalala lalal lalalalala Blalala lalala
              lalal lalal lalalalalla lalalala lalalal lalalal lalalala lalal
              lalalalalaBlalala lalala lalal lalal lalalalalla
            </div>
            <Timer days={timerCount} startDate={startDate}/>
            <div className={styles.bottomInfo}>
              <div className={styles.price}>
                {lastBid} $<div className={styles.greyText}>Last bid</div>
              </div>
              <PriceDrop lastBid={lastBid} onPriceChange={handlePriceChange} />
            </div>
            <div className={styles.button} onClick={handlePlaceBidClick}>
              Place Bid
            </div>
          </div>
        </div>
        <div className={styles.question}>
          <Question data={questionInfo} />
        </div>
        {isModalVisible && (
          <ModalWindow onClose={() => setIsModalVisible(false)} />
        )}
      </div>
      <Chat />
    </React.Fragment>
  );
}

export default Slot;
