import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import bg from "../assets/bg-laptop-cropped.jpg";

import { AnimatePresence } from "framer-motion";

const Root = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <AnimatePresence>
        {modalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <Header openModal={open} />
      <div className="bg">
        <img className="bg__img" src={bg} alt="bg image" />
      </div>
      <Outlet />
    </>
  );
};

export default Root;
