import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/80"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="z-30 absolute top-[3vh] lg:mx-[5%] mx-[2%] rounded-xl p-1 lg:p-5 shadow-lg w-[96%] lg:w-[90%] bg-neutral-100">
      {props.children}
    </div>
  );
};

const portaElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portaElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portaElement
      )}
    </>
  );
};

export default Modal;
