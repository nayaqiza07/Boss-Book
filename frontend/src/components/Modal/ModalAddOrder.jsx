import { HiOutlineX } from "react-icons/hi";
import { Modal } from ".";
import { SelectClient } from "../Select/SelectClient";
import { SelectStatus } from "../Select/SelectStatus";

export const ModalAddOrder = ({ openModalOrder, setOpenModalOrder }) => {
  return (
    <Modal
      openModal={openModalOrder}
      onCloseModal={() => setOpenModalOrder(false)}
    >
      <div className="w-72">
        {/* Header Start */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Create New Order</h2>
          <button className="bg-secondary_30 rounded-lg w-8 h-8">
            <HiOutlineX
              onClick={() => setOpenModalOrder(false)}
              size={20}
              className="mx-auto"
            />
          </button>
        </div>
        {/* Header End */}

        {/* Content Start */}
        <div className="mt-7">
          <div className="flex justify-between">
            <h5 className="font-medium text-night_30">Order Detail</h5>
            <h5 className="font-medium text-primary_100">#Order Num</h5>
          </div>

          <div className="mt-7">
            <SelectClient />
            <SelectStatus />
          </div>
        </div>
        {/* Content End */}

        {/* Footer Start */}
        {/* Footer End */}
      </div>
    </Modal>
  );
};
