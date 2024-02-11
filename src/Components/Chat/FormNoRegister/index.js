import { useState } from "react";
import styles from "./form.module.css";
import Button from "../../Button";
import { notifySucess, notifyError } from "../../../notify/index";

const FormNoRegister = ({ close }) => {
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
  const [desc, setDesc] = useState({
    value: "",
    isValid: true,
  });

  const handleSubmit = (e) => {
    const { value: valueName, isValid: isValidName } = name;
    const { value: valueSurName, isValid: isValidSurName } = surname;
    const { value: valuePhone, isValid: isValidPhone } = phone;
    const { value: valueDesc, isValid: isValidDesc } = desc;
    e.preventDefault();
    if (isValidName && isValidSurName && isValidPhone && isValidDesc) {
      const state = {
        name: valueName,
        surname: valueSurName,
        phone: valuePhone,
        desc: valueDesc,
      };
      console.log(state);
      close();
      notifySucess(
        "Your comment has been added successfully! After it is processed by a moderator, you will see it with others together."
      );
      reset();
    } else {
      notifyError("Fill in all the fields carefully!");
    }
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
    setDesc({
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
      case "desc":
        setName({
          value: value,
          isValid: /^(?=\s*\S)(.{3,300})$/.test(value),
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.boxForm}>
      <div className={styles.boxText}>
        <p className={styles.boltText}>Ви ще не зареєстровані?</p>
        <p className={styles.otherText}>
          Щоб залишити коментарій , потрібно декілька данних про вас!
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
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

        <label className={styles.label}>
          <p>
            Description
            {!desc.isValid && <span className={styles.redValidate}>*</span>}
          </p>
          {!desc.isValid && (
            <p className={styles.redValidate}>
              No less than 3 and no more than 300 characters.
            </p>
          )}
          <input
            className={styles.input}
            required=" "
            value={desc.value}
            onChange={(e) => handleChangeValue(setDesc, e.target)}
            name="desc"
            type="text"
            placeholder="Your message..."
          />
        </label>

        <Button big={false} text="Відправити" />
        {/* <button>Відправити</button> */}
      </form>
    </div>
  );
};

export default FormNoRegister;
