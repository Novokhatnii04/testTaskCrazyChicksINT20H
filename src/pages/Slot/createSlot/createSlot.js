import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../../../Components/Modal/index";
import AddBid from "../modalBid";
import PriceDrop from "../PriceDrop";
import Timer from "../timer";

function UISlot() {
  let startDate = new Date();

  const [slotData, setSlotData] = useState({
    slotname: "", // Змінено name на slotname
    description: "",
    startingBid: "",
    auctionDuration: "",
    photos: [],
    url: "",
  });
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    startingBid: "",
    auctionDuration: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlotData({ ...slotData, [name]: value });
    // Reset validation error message
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  // const handlePhotoUpload = (e) => {
  //   const files = e.target.files;
  //   const maxPhotos = 4;
  //   if (files.length > maxPhotos) {
  //     alert(`You can upload a maximum of ${maxPhotos} photos.`);
  //     return;
  //   }
  //   const urls = Array.from(files).map((file) => URL.createObjectURL(file));
  //   setSlotData({ ...slotData, photos: urls });
  // };

  const handlePlaceBidClick = () => {
    const { name, description, startingBid, auctionDuration, photos, url } =
      slotData;
    const errors = {};

    // Validation
    if (!name || name.length < 3 || name.length > 20) {
      errors.name = "Name must be between 3 and 20 characters.";
    }
    if (!startingBid || isNaN(startingBid)) {
      errors.startingBid = "Starting bid must be a number.";
    }
    if (!auctionDuration || isNaN(auctionDuration) || auctionDuration > 5) {
      errors.auctionDuration = "Maximum auction duration 5 days.";
    }
    if (!description || description.length > 360) {
      errors.description = "Description must be less than 360 characters.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    } else {
      setIsModalVisible(!isModalVisible);
    }

    // все в кучу, щоб відправити на бек
    const formData = {
      name,
      description,
      startingBid,
      auctionDuration,
      photos,
      url,
    };
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
              className={`${styles.lotTitle} ${
                validationErrors.name && styles.errorInput
              }`}
              placeholder="Lot Title"
              required
            />
            {validationErrors.name && (
              <p className={styles.errorMessage}>{validationErrors.name}</p>
            )}
            <input
              type="number"
              name="startingBid"
              value={slotData.startingBid}
              onChange={handleInputChange}
              className={`${styles.lotTitle} ${
                validationErrors.name && styles.errorInput
              }`}
              placeholder="Starting Bid ($)"
              required
            />
            {validationErrors.startingBid && (
              <p className={styles.errorMessage}>
                {validationErrors.startingBid}
              </p>
            )}
            <input
              type="number"
              name="auctionDuration"
              value={slotData.auctionDuration}
              className={`${styles.lotTitle} ${
                validationErrors.name && styles.errorInput
              }`}
              onChange={handleInputChange}
              placeholder="Auction Duration (in days)"
              required
            />
            {validationErrors.auctionDuration && (
              <p className={styles.errorMessage}>
                {validationErrors.auctionDuration}
              </p>
            )}
          </div>
          <textarea
            name="description"
            value={slotData.description}
            onChange={handleInputChange}
            className={styles.description}
            placeholder="Description (up to 360 characters)"
            required
          />
          {validationErrors.description && (
            <p className={styles.errorMessage}>
              {validationErrors.description}
            </p>
          )}
          <div className={styles.photoWrapper}>
            {/* <input
              type="text"
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
            </div> */}
            <input
              name="url"
              value={slotData.url}
              onChange={handleInputChange}
              type="text"
              multiple
              required
              placeholder="URL your image"
              style={{ width: "100%", height: "25px", border: "none" }}
            />
            <div className={styles.smallSliderPhotosWrapper}>
              {smallSliderPhotos}
            </div>
          </div>
          <div className={styles.button} onClick={handlePlaceBidClick}>
            SUBMIT
          </div>
        </div>
        <div className={styles.displayBlock}>
          <div className={styles.name}>{slotData.name}</div>
          <div className={styles.descrText}>{slotData.description}</div>
          {slotData.auctionDuration && (
            <Timer days={slotData.auctionDuration} startDate={startDate} />
          )}
          {slotData.startingBid && (
            <div className={styles.bottomInfo}>
              <div className={styles.price}>
                {slotData.startingBid} $
                <div className={styles.greyText}>Last bid</div>
              </div>
              <PriceDrop lastBid={slotData.startingBid} />
            </div>
          )}
        </div>
      </div>
      {isModalVisible && (
        <Modal close={handlePlaceBidClick}>
          <AddBid
            close={handlePlaceBidClick}
            stateModal={1}
            formData={slotData}
          />
        </Modal>
      )}
    </div>
  );
}

export default UISlot;
