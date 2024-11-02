/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
export const Modal = ({ open, onCLose, children }) => {
  return (
    <div
      onClick={onCLose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white border rounded-lg shadow p-5 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacit-0"
        }`}
      >
        <button
          onClick={onCLose}
          className="absolute top-2 right-2 p-1 rounded-lg bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};
