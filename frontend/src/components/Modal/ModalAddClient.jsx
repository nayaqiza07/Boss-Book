import { useState } from "react";
import { Modal } from ".";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";

export const ModalAddClient = ({ openModalClient, setOpenModalClient }) => {
  // Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    setOpenModalClient(false);
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
  };

  return (
    <Modal
      openModal={openModalClient}
      onCloseModal={() => setOpenModalClient(false)}
    >
      <div className="max-w-72">
        {/* Header Start */}
        <HeaderModal
          setOpenModal={setOpenModalClient}
          title={"Add New Client"}
        />
        {/* Header End */}

        {/* Content Start */}
        {/* <form> */}
        <div className="mt-7 max-h-96 overflow-y-auto lg:max-h-fit">
          <h5 className="text-night_30 font-medium">Client Information</h5>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-7 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
          <textarea
            type="textarea"
            placeholder="Address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mt-6 px-4 py-[16.5px] rounded-lg focus:outline-none focus:bg-[#E9ECF8]/90 bg-[#EFF1F9]/60 text-[#5E6366]  transition-colors"
          />
        </div>
        {/* Content End */}

        {/* Footer Start */}
        <ButtonModal
          setOpenModal={setOpenModalClient}
          handleSubmit={handleSubmit}
          text={<span>Add</span>}
        />
        {/* Footer End */}
        {/* </form> */}
      </div>
    </Modal>
  );
};
