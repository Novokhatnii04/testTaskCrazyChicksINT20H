import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../../Components/Button/index";
import { notifySucess, notifyError } from "../../notify/index";

const AddBid = ({ close, stateModal, formData, selectedPrice, id }) => {
  const [name, setName] = useState({
    value: "",
    isValid: true,
  });
  const [surname, setSurname] = useState({
    value: "",
    isValid: true,
  });
  const [phone, setPhone] = useState({
    value: "",
    isValid: true,
  });

  const handleSubmit = (e) => {
    const { value: valueName, isValid: isValidName } = name;
    const { value: valueSurName, isValid: isValidSurName } = surname;
    const { value: valuePhone, isValid: isValidPhone } = phone;
    e.preventDefault();
    if (isValidName && isValidSurName && isValidPhone) {
      const state = {
        name: valueName,
        surname: valueSurName,
        phone: valuePhone,
        ...formData, // Додано дані з formData
      };

      const newState = {
        name: state.name,
        description: state.description,
        price: state.startingBid,
        img: state.url,
        timerCount: state.auctionDuration,
      };
      console.log(newState);
      if (stateModal === 0) {
        handleSendLot(newState);
      } else {
        const newState = {
          // name: valueName,
          // surname: valueSurName,
          // phone: valuePhone,
          newPrice: selectedPrice,
        };
        changeSlot(newState);
      }
      close();
      notifySucess("Thank you for your confirmation.");
      reset();
    } else {
      return;
    }
  };

  const changeSlot = (data) => {
    const url = `http://lequiledev.zapto.org:8001/auction/UpdatePrice/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSendLot = (data) => {
    const url = `http://lequiledev.zapto.org:8001/auction/Add`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const reset = () => {
    setName({
      value: "",
      isValid: true,
    });
    setSurname({
      value: "",
      isValid: true,
    });
    setPhone({
      value: "",
      isValid: true,
    });
  };

  const handleChangeValue = (setName, target) => {
    const { value, name } = target;

    switch (name) {
      case "name":
        setName({
          value: value,
          isValid: /^[a-zA-Zа-яА-ЯіІїЇґҐёЁъЪ]{3,20}$/.test(value),
        });
        return true;
      case "surname":
        setName({
          value: value,
          isValid: /^[a-zA-Zа-яА-ЯіІїЇґҐёЁъЪ]{3,20}$/.test(value),
        });
        break;
      case "phone":
        setName({
          value: value,
          isValid: /^380\d{9}$/.test(value),
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.boxForm}>
      <div className={styles.boxText}>
        {stateModal === 1 ? (
          <>
            <p className={styles.boltText}>Thank you for your lot.</p>
            <p className={styles.otherText}>
              Your auction lot will be published within a few minutes after
              confirmation.
            </p>
          </>
        ) : (
          <>
            <p className={styles.boltText}>Thank you for your bid.</p>
            <p className={styles.otherText}>
              Please leave your contact phone number. We will contact you in
              case of winning the auction.
            </p>
          </>
        )}
      </div>

      <form onSubmit={(e) => handleSubmit(e, formData)} className={styles.form}>
        <label className={styles.label}>
          <p>
            Name{!name.isValid && <span className={styles.redValidate}>*</span>}
          </p>
          {!name.isValid && (
            <p className={styles.redValidate}>
              The name must have at least 3 letters and no more than 20.
            </p>
          )}
          <input
            className={styles.input}
            required=" "
            onChange={(e) => handleChangeValue(setName, e.target)}
            value={name.value}
            name="name"
            type="text"
            placeholder="Name..."
          />
        </label>

        <label className={styles.label}>
          <p>
            Surname
            {!surname.isValid && <span className={styles.redValidate}>*</span>}
          </p>
          {!surname.isValid && (
            <p className={styles.redValidate}>
              The surname must have at least 3 letters and no more than 20.
            </p>
          )}
          <input
            className={styles.input}
            required=" "
            value={surname.value}
            onChange={(e) => handleChangeValue(setSurname, e.target)}
            name="surname"
            type="text"
            placeholder="Surname..."
          />
        </label>

        <label className={styles.label}>
          <p>
            Number Phone
            {!phone.isValid && <span className={styles.redValidate}>*</span>}
          </p>
          {!phone.isValid && (
            <p className={styles.redValidate}>
              Must start with 380 and have 12 digits
            </p>
          )}
          <input
            className={styles.input}
            required=" "
            value={phone.value}
            onChange={(e) => handleChangeValue(setPhone, e.target)}
            name="phone"
            type="number"
            placeholder="Your number phone..."
          />
        </label>

        <Button big={false} text="Confirm" />
        {/* <button>Confirm</button> */}
      </form>
    </div>
  );
};

export default AddBid;
