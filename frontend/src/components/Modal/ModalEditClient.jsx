import { useEffect, useState } from "react";
import { Modal } from ".";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";
// import { updateClient } from "../../api/clientApi";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const ModalEditClient = ({ openModalEdit, setOpenModalEdit }) => {
  // Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();
  // const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getClientById();
  }, []);

  const getClientById = async () => {
    const response = await axios.get(`${apiUrl}/clients/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setAddress(response.data.address);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await updateClient(id, name, email, phone, address);
  //     navigate(`/client`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Modal
      openModal={openModalEdit}
      onCloseModal={() => setOpenModalEdit(false)}
    >
      <div className="max-w-72">
        {/* Header Start */}
        <HeaderModal setOpenModal={setOpenModalEdit} title={"Edit Client"} />
        {/* Header End */}

        {/* Content Start */}
        {/* <form onSubmit={handleSubmit}> */}
        <div className="mt-7 max-h-96 overflow-y-auto lg:max-h-fit">
          <h5 className="text-night_30 font-medium">Client Information {id}</h5>
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
            type="number"
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
        <ButtonModal setOpenModal={setOpenModalEdit} text={<span>Save</span>} />
        {/* Footer End */}
        {/* </form> */}
      </div>
    </Modal>
  );
};
