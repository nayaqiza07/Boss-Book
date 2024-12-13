import { CloseSquare } from "react-iconly";
import Button from "@/components/Atoms/Button/Button";

const Modal = (props) => {
  const { openModal, closeModal, children } = props;
  return (
    <div
      onClick={closeModal}
      className={`fixed z-10 inset-0 flex justify-center items-center transition-all ${
        openModal ? "visible bg-black/20 backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-fit p-6 bg-white border rounded-xl shadow transition-all ${
          openModal ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { closeModal, title } = props;
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-medium">{title}</h2>

      <span className="cursor-pointer transition duration-200 hover:scale-105">
        <CloseSquare
          onClick={closeModal}
          set="bulk"
          size={35}
          secondaryColor="#fff2e2"
          primaryColor="#1c1d22"
        />
      </span>
    </div>
  );
};

const Body = (props) => {
  const { children } = props;
  return (
    <div className="mt-7 flex justify-between items-center">{children}</div>
  );
};

const Footer = (props) => {
  const { closeModal, text, type } = props;
  return (
    <div className="flex justify-center gap-3">
      <Button
        type="button"
        variant="primaryOutline"
        size="md"
        onClick={closeModal}
      >
        Cancel
      </Button>
      <Button type={type} variant="primary" size="md" onClick={closeModal}>
        {text}
      </Button>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
