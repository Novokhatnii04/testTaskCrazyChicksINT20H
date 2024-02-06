import React, { useState } from "react";
import styles from "./styles.module.css";

const ModalWindow = ({ onClose }) => {
  const [formData, setFormData] = useState({ phoneNumber: "", name: "" }); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // тут потом отправляем номер телефона в бд
    console.log("Submitted phone number:", formData.phoneNumber);
    console.log("Submitted name:", formData.name);
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Thank you for your bid. Please leave your contact phone number. We will contact you in case of winning the auction.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
