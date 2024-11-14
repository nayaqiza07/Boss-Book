import { HiOutlineDownload } from "react-icons/hi";
import { Modal } from ".";

export const ModalInvoice = ({ openModalInvoice, setOpenModalInvoice }) => {
  return (
    <Modal
      openModal={openModalInvoice}
      onCloseModal={() => setOpenModalInvoice(false)}
    >
      <div className="w-80 h-60">
        {/* Head Modal Invoice Start */}
        <h2>#Invoice Number</h2>
        {/* Head Modal Invoice End */}

        {/* Content Modal Invoice Start */}
        <div className="flex flex-col flex-1 border">
          <h1>Content</h1>
        </div>
        {/* Content Modal Invoice End */}

        {/* Footer Modal Invoice Start */}
        <div className="flex justify-between content-end mt-5 border">
          <button className="flex items-center text-primary_100 gap-3">
            <HiOutlineDownload size={20} />
            Download Invoice
          </button>

          <button
            onClick={() => setOpenModalInvoice(false)}
            className="border-2 border-primary_100 text-primary_100 px-[16px] py-[17px] rounded-xl"
          >
            Cancel
          </button>
        </div>
        {/* Footer Modal Invoice End */}
      </div>
    </Modal>
  );
};
