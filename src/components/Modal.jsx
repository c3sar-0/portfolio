import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import ghLogo from "../assets/gh-logo.svg";
import inLogo from "../assets/In-White-128.png";

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="modal"
      >
        <h1>Contact Me</h1>
        <div className="modal__socials">
          <a href="https://github.com/c3sar-0/" target="_blank">
            <img className="modal__icon" src={ghLogo} alt="gh logo" />
          </a>
          <a href="https://linkedin.com/in/c-calandria/" target="_blank">
            <img className="modal__icon" src={inLogo} alt="gh logo" />
          </a>
        </div>
        <p>aa4549807@gmail.com</p>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
