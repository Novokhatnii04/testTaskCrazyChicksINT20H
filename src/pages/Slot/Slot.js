import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Імпортуйте useSelector
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import test2 from "@images/test2.png";
import test from "@images/test.png";
import test1 from "@images/test1.png";
import PriceDrop from "./PriceDrop";
import Modal from "../../Components/Modal/index";
import AddBid from "./modalBid";
import Question from "../Question/question";
import Timer from "./timer";
import Chat from "../../Components/Chat/index";
import Loader from "../../Components/Loader/loader";

function Slot() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://lequiledev.zapto.org:8001/auction/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // console.log(window.location.href);

  const selectedCard = useSelector((state) => state.selectedCard);

  let lastBid = selectedCard.price;
  let timerCount = selectedCard.timerCount;
  let idLot = id;
  let startDate = selectedCard.date;
  let lotName = selectedCard.name;
  let description = selectedCard.description;

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
  };

  const slotPhoto = [sliderImg, test2, test, test1];
  const handlePhotoClick = (index) => {
    const newSlotPhoto = [...slotPhoto];
    const selectedPhoto = newSlotPhoto[index];
    setSlotPhoto(selectedPhoto);
  };

  const handlePlaceBidClick = () => {
    if (selectedPrice) {
      setIsModalVisible(!isModalVisible);
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
      {items ? (
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
              <div className={styles.name}>{lotName}</div>
              <div className={styles.descrText}>{description}</div>
              {/* <Timer days={timerCount} startDate={startDate} /> */}
              <div className={styles.bottomInfo}>
                <div className={styles.price}>
                  {lastBid} $
                  <div
                    className={styles.greyText}
                    onClick={handlePlaceBidClick}
                  >
                    Last bid
                  </div>
                </div>
                <PriceDrop
                  lastBid={lastBid}
                  onPriceChange={handlePriceChange}
                />
              </div>
              <div className={styles.greyText}>
                Bid history
                <br />
                {/* Time: {new Date(startDate).toLocaleString()}, Bid: {lastBid} */}
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
            <Modal close={handlePlaceBidClick}>
              <AddBid close={handlePlaceBidClick} state={0} />
            </Modal>
          )}
        </div>
      ) : (
        <Loader />
      )}
      <Chat />
    </React.Fragment>
  );
}
export default Slot;
