import React from "react";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      // onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-colors ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-md bg-neutral-100 p-4 pt-8 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 ml-auto text-xl text-neutral-500 duration-150 hover:scale-110 hover:text-neutral-400"
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
