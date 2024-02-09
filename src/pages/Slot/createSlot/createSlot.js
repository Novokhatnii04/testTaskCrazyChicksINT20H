import React, { useState } from "react";
import styles from "./styles.module.css";
import ModalWindow from "../modal";
import PriceDrop from "../PriceDrop";
import Timer from "../timer";
import Button from "../../Elements/button";

function UISlot() {
  const [slotData, setSlotData] = useState({
    name: "",
    description: "",
    startingBid: "",
    auctionDuration: "",
    photos: [],
  });
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlotData({ ...slotData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setSlotData({ ...slotData, photos: urls });
  };

  const handlePlaceBidClick = () => {
    if (selectedPrice) {
      setIsModalVisible(true);
    }
  };

  const smallSliderPhotos = slotData.photos.map((src, index) => (
    <div
      key={index}
      className={styles.smallSliderPhoto}
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  ));

  return (
    <div className={`${styles.slotCard} animated`}>
      <div className={styles.title}>Lot Creation</div>
      <div className={styles.textarea}>
        We are immensely grateful for your initiative in creating a lot for the
        charity auction💓. All proceeds raised will be donated to the Ukrainian
        Armed Forces. To apply for publishing a lot for the auction, please fill
        in the following fields of the card:
      </div>
      <div className={styles.slotSection}>
        <div className={styles.inputBlock}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={slotData.name}
              onChange={handleInputChange}
              className={styles.lotTitle}
              placeholder="Lot Title"
              required
            />
            <input
              type="number"
              name="startingBid"
              value={slotData.startingBid}
              onChange={handleInputChange}
              className={styles.lotTitle}
              placeholder="Starting Bid ($)"
              required
            />
            <input
              type="number"
              name="auctionDuration"
              value={slotData.auctionDuration}
              className={styles.lotTitle}
              onChange={handleInputChange}
              placeholder="Auction Duration (in days)"
              required
            />
          </div>
          <textarea
            name="description"
            value={slotData.description}
            onChange={handleInputChange}
            className={styles.description}
            placeholder="Description (up to 360 characters)"
            required
          />
          <div className={styles.photoWrapper}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              required
            />
            <div className={styles.sliderPhoto}>
              {slotData.photos.length > 0 ? (
                <div
                  className={styles.sliderPhoto}
                  style={{ backgroundImage: `url(${slotData.photos[0]})` }}
                ></div>
              ) : (
                <div className={styles.sliderPhotoPlaceholder}>No Photo</div>
              )}
            </div>
            <div className={styles.smallSliderPhotosWrapper}>
              {smallSliderPhotos}
            </div>
          </div>
          <div className={styles.button} onClick={handlePlaceBidClick}>
            SUBMIT
          </div>
        </div>
        <div className={styles.displayBlock}>
          <Button text={"See My Lot"} />
          {/* <div className={styles.title}>{slotData.name}</div>
          <div className={styles.slotSection}>
            <div className={styles.photoWrapper}>
              <div
              className={styles.sliderPhoto}
              style={{ backgroundImage: `url(${slotData.photos})` }}
            ></div>
              <div className={styles.smallSliderPhotosWrapper}>
                {smallSliderPhotos}
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.descrText}>{slotData.description}</div>
              {slotData.auctionDuration && (
                <Timer endTime={slotData.auctionDuration} />
              )}
              <div className={styles.bottomInfo}>
                {slotData.startingBid && (
                  <div className={styles.price}>
                    {slotData.startingBid} $
                    <div className={styles.greyText}>Last bid</div>
                  </div>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {isModalVisible && (
        <ModalWindow onClose={() => setIsModalVisible(false)} />
      )}
    </div>
  );
}

export default UISlot;
