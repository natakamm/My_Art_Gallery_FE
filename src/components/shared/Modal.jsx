import { Link } from "react-router-dom";
import styles from "../../styles/LoginModal.module.scss";
import { PiButterfly } from "react-icons/pi";
import Button2 from "./buttons/Button2";
const Modal = ({ isOpen, onClose, header, message, links }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 pt-8 pb-14 md:w-[400px] 2xl:w-[450px] relative rounded-2xl ${styles.loginModal}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-center items-center">
          <PiButterfly
            key="top-butterfly"
            color="white"
            size={40}
            className={`${styles.butterfly_modal}`}
          />

          <h1 className="text-white text-3xl font-medium mt-3">{header}</h1>
          <p className="text-white text-base mt-2">{message}</p>
          <div className={styles.line}></div>
        </div>

        {links && (
          <div className="mt-12 flex justify-evenly">
            {links.map((link, index) => (
              <div key={index}>
                <Button2 link={link.url} text={link.name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
