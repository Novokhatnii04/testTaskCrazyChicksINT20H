import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Імпортуйте useSelector
import styles from "./styles.module.css";
import sliderImg from "@images/flag.png";
import PriceDrop from "./PriceDrop";
import Modal from "../../Components/Modal/index";
import AddBid from "./modalBid";
import Question from "../Question/question";
import Timer from "./timer";
import Chat from "../../Components/Chat/index";
import Loader from "../../Components/Loader/loader";
import photo1 from '@images/photo1.png'
import photo2 from '@images/photo2.png'
import photo3 from '@images/photo3.png'

function Slot() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://lequiledev.zapto.org:8001/auction/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(`items ${result}`);
          setIsLoaded(true);
          setItems(result);
          setSlotPhoto(result.img)
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  // console.log(window.location.href);

  // const selectedCard = useSelector((state) => state.selectedCard);

  let lastBid = items?.price;
  let timerCount = items?.timerCount;
  let idLot = id;
  let startDate = items?.startDate;
  let lotName = items?.name;
  let description = items?.description;
  let url = items?.img;

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

  const [selectedPhoto, setSlotPhoto] = useState(url);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const slotPhoto = [url, photo1, photo2, photo3];
  const handlePhotoClick = (index) => {
    const newSlotPhoto = [...slotPhoto];
    const selectedPhoto = newSlotPhoto[index];
    setSlotPhoto(selectedPhoto);
  };

  const handlePlaceBidClick = () => {
    if (selectedPrice) {
      setIsModalVisible(!isModalVisible);

      console.log("startDate")
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
              <Timer days={timerCount} startDate={startDate} />
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
              <AddBid
                close={handlePlaceBidClick}
                stateModal={0}
                selectedPrice={selectedPrice}
                id={id}
              />
            </Modal>
          )}
        </div>
      ) : (
        <Loader />
      )}

      <Chat newArray={items?.comments} id={id} />
    </React.Fragment>
  );
}
export default Slot;
