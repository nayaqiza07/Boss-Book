import FormInput from "@components/Atoms/Form/FormInput";

const Modal = ({ openModal, onCloseModal, title, btnText }) => {
  return (
    <div
      onClick={onCloseModal}
      className={`fixed z-10 inset-0 flex justify-center items-center transition-all ${
        openModal ? "visible backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-fit px-6 py-7 bg-white border rounded-xl shadow transition-all ${
          openModal ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header Start */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">{title}</h2>
          <button
            onClick={onCloseModal}
            className="bg-secondary_30 rounded-lg w-8 h-8"
          >
            X
          </button>
        </div>
        {/* Header End */}

        {/* FORM Start */}
        <div className="mt-7">
          <FormInput type="text" name="nama" placeholder="Nama" />
          <FormInput type="number" name="jumlah" placeholder="Jumlah" />
        </div>
        {/* FORM End */}

        {/* Footer Start */}
        <div className="flex justify-center gap-3 mt-11">
          <button
            type="button"
            onClick={onCloseModal}
            className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 text-primary_100 lg:w-44"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={onCloseModal}
            className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 bg-primary_100 text-white lg:w-44"
          >
            {btnText}
          </button>
        </div>
        {/* Footer End*/}
      </div>
    </div>
  );
};

export default Modal;
