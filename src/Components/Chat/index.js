import { useEffect, useState } from "react";
import Button from "../Button";
import UserImg from "../UserImg";
import styles from "./chat.module.css";
import Modal from "../Modal";
import FormNoRegister from "./FormNoRegister";

// const newArray = [
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Qssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     text: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 1,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Essdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss вввввввввввввввввввввв вввввввввввввввввв в вввввввв фіі ввввввввв іііііі вввввввввв фффффффф вввввввв",
//     id: 2,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Rssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 3,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Zssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 4,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Zssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 5,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Zssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 6,
//   },
//   {
//     name: "Loldsdsdsdsdsdsdsds",
//     surname: "Zssdsdsdsd",
//     date: "12.05.1999",
//     phone: "380956025385",
//     desc: "tredsd sd sdsddd ddddddddd sssssssssss ssssssssssssss",
//     id: 7,
//   },
// ];

const ChatComponent = ({ newArray = [], id }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {}, []);

  let indexOfLastItem;
  let indexOfFirstItem;
  let currentItems;
  let totalPages;
  let showNextButton;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  indexOfLastItem = currentPage * itemsPerPage;
  indexOfFirstItem = indexOfLastItem - itemsPerPage;
  currentItems =
    newArray?.length > 0
      ? newArray?.slice(indexOfFirstItem, indexOfLastItem)
      : [];
  totalPages = Math.ceil(newArray?.length / 5);
  showNextButton = currentPage < totalPages;

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
        {newArray?.length > 0 &&
          currentItems.map(({ nameOfCommentator, time, text, id }, index) => (
            <li key={id} className={styles.item}>
              <div className={styles.infoBoxUser}>
                <UserImg name={nameOfCommentator} />
                <div className={styles.boxName}>
                  <p className={styles.name}>{nameOfCommentator}</p>
                  <p className={styles.date}>
                    {new Date(time).toLocaleString()}
                  </p>
                </div>
              </div>

              <p className={index % 2 ? styles.descBlue : styles.descYelow}>
                {text}
              </p>
            </li>
          ))}
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
        {newArray?.length > 0 && (
          <p className={styles.currentPage}>{currentPage}</p>
        )}

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
          <FormNoRegister close={toggleModal} id={id} />
        </Modal>
      )}
    </div>
  );
};

export default ChatComponent;
