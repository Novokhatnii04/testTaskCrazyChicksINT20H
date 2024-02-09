import { useState } from "react";
import Button from "../Button";
import UserImg from "../UserImg";
import styles from "./chat.module.css";
import Modal from "../Modal";
import FormNoRegister from "./FormNoRegister";

const newArray = [
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Qssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 1,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Essdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss вввввввввввввввввввввв вввввввввввввввввв в вввввввв фіі ввввввввв іііііі вввввввввв фффффффф вввввввв",
    id: 2,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Rssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 3,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Zssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 4,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Zssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 5,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Zssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 6,
  },
  {
    name: "Loldsdsdsdsdsdsdsds",
    surname: "Zssdsdsdsd",
    date: "12.05.1999",
    phone: "380956025385",
    desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
    id: 7,
  },
];

const ChatComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newArray.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newArray.length / 5);
  const showNextButton = currentPage < totalPages;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.mainBoxPosition}>
      <h2 className={styles.title}>Reviews</h2>
      <Button text="Leave a review" handleClick={toggleModal} />

      <ul className={styles.boxList}>
        {newArray &&
          currentItems.map(
            ({ name, date, phone, desc, surname, id }, index) => (
              <li key={id} className={styles.item}>
                <div className={styles.infoBoxUser}>
                  <UserImg name={name} surname={surname} />
                  <div className={styles.boxName}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.date}>{date}</p>
                  </div>
                </div>

                <p className={index % 2 ? styles.descBlue : styles.descYelow}>
                  {desc}
                </p>
              </li>
            )
          )}
      </ul>
      <div className={styles.boxPagination}>
        {currentPage !== 1 && (
          <button
            className={[
              styles.navigationArrow,
              styles.navigationArrowLeft,
            ].join(" ")}
            onClick={handlePrevPage}
          >
            &#8592;
          </button>
        )}
        <p className={styles.currentPage}>{currentPage}</p>
        {showNextButton && (
          <button
            className={[
              styles.navigationArrow,
              styles.navigationArrowRight,
            ].join(" ")}
            onClick={handleNextPage}
          >
            &#8594;
          </button>
        )}
      </div>
      {showModal && (
        <Modal close={toggleModal}>
          <FormNoRegister />
        </Modal>
      )}
    </div>
  );
};

export default ChatComponent;
