import { Modal } from ".";
import { HiOutlineX } from "react-icons/hi";

export const ModalAddClient = ({ openModalClient, setOpenModalClient }) => {
  return (
    <Modal
      openModal={openModalClient}
      onCloseModal={() => setOpenModalClient(false)}
    >
      <div className="w-72">
        {/* Header Start */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Add New Client</h2>
          <button className="bg-secondary_30 rounded-lg w-8 h-8">
            <HiOutlineX
              onClick={() => setOpenModalClient(false)}
              size={20}
              className="mx-auto"
            />
          </button>
        </div>
        {/* Header End */}

        {/* Content Start */}
        <div className="mt-7">
          <h5 className="text-night_30 font-medium">Client Information</h5>
          <input
            type="text"
            placeholder="Name"
            className="w-full mt-7 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />

          <input
            type="text"
            placeholder="Email"
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
          <input
            type="text"
            placeholder="+62"
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
        </div>
        {/* Content End */}

        {/* Footer Start */}
        <div className="flex gap-3 mt-11">
          <button
            onClick={() => setOpenModalClient(false)}
            className="w-full px-[16px] py-[17px] text-xl rounded-xl border-2 border-primary_100 text-primary_100  "
          >
            Cancel
          </button>
          <button className="w-full px-[16px] py-[17px] text-xl rounded-xl border-2 border-primary_100  bg-primary_100 text-white ">
            Add
          </button>
        </div>
        {/* Footer End */}
      </div>
    </Modal>
  );
};
