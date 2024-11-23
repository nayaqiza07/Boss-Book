import { useEffect } from "react";
import { Modal } from ".";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";
import { useParams, useNavigate } from "react-router-dom";
import { getClientById } from "../../api/clientApi";
import FormInput from "../Form/FormInput";
import FormTextarea from "../Form/FormTextarea";
import { updateClient } from "../../api/clientApi";

export const ModalEditClient = ({
  openModalEdit,
  setOpenModalEdit,
  client,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getClientById(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    console.log(data);

    updateClient(id, data.name, data.email, data.phone, data.address);

    navigate("/client");
  };

  // const getClientById = async () => {
  //   const response = await axios.get(`${apiUrl}/clients/${id}`);
  //   setName(response.data.name);
  //   setEmail(response.data.email);
  //   setPhone(response.data.phone);
  //   setAddress(response.data.address);
  // };

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
        <div className="mt-7 max-h-96 overflow-y-auto lg:max-h-fit">
          <h5 className="text-night_30 font-medium">
            Client Information #{id}
          </h5>
          <form onSubmit={handleSubmit} className="mt-7">
            <FormInput
              type="text"
              icon={false}
              name="name"
              placeholder="Name"
              defaultValue={client.name}
            />
            <FormInput
              type="text"
              icon={false}
              name="email"
              placeholder="Email"
              defaultValue={client.email}
            />
            <FormInput
              type="number"
              icon={false}
              name="phone"
              placeholder="Phone"
              defaultValue={client.phone}
            />
            <FormTextarea
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={client.address}
            />

            <ButtonModal
              setOpenModal={setOpenModalEdit}
              text={<span>Save</span>}
            />
          </form>
        </div>
        {/* Content End */}
      </div>
    </Modal>
  );
};
