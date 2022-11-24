import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-modalBg"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
}

// className="absolute top-[15vh] left-[25%] w-full max-w-[48.75rem] bg-white z-30 text-center rounded-[1.25rem]"
