import { createPortal } from "react-dom";
import { useEffect } from "react";
import styles from "./modal.module.css";

const modalRoot = document.querySelector(`#modal-root`);

const Modal = ({ close, children }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      close();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  });

  return createPortal(
    <div onClick={handleBackdropClick} className={styles.boxBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={close} className={styles.exit}>
          &#x2715;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
