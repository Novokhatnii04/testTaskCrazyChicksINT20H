import React, { useState } from "react";
import styles from "./styles.module.css";

const PriceDropdown = ({lastBid, onPriceChange}) => {
  const [selectedPrice, setSelectedPrice] = useState(""); 

  const handleChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
    if (onPriceChange) {
      onPriceChange(price);
    }
  };

  const bidValues = [2, 3, 4, 5];
  const bidOptions = bidValues.map((multiplier) => {
    const bidValue = lastBid * multiplier;
    return (
      <option key={multiplier} value={bidValue}>${bidValue}</option>
    );
  });

  return (
    <div>
      <label className={styles.dropTitle} htmlFor="price">Select an amount of bid:</label>
      <select id="price" value={selectedPrice} onChange={handleChange}>
        <option value="">----</option>
        {bidOptions}
      </select>
      {selectedPrice && <p>Selected bid: ${selectedPrice}</p>}
    </div>
  );
}

export default PriceDropdown;
