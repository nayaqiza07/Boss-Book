/* eslint-disable react/prop-types */
// import { IoMdClose } from "react-icons/io";
export const Modal = ({ openModal, onCloseModal, children }) => {
  return (
    <div
      onClick={onCloseModal}
      className={`fixed z-10 inset-0 flex justify-center items-center transition-colors ${
        openModal ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-fit px-4 py-3 bg-white border rounded-lg shadow transition-all ${
          openModal ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <button
          onClick={onClose}
          className="p-1 rounded-lg bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <IoMdClose />
        </button> */}
        {children}
      </div>
    </div>
  );
};
