import Button from "@/components/Atoms/Button/Button";
import { Cancel01Icon } from "hugeicons-react";

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
      <Button size="close" onClick={closeModal} variant="close">
        <Cancel01Icon size={24} />
      </Button>
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
  const { closeModal, text } = props;
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
      <Button type="submit" variant="primary" size="md" onClick={closeModal}>
        {text}
      </Button>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
