import { Modal } from ".";
import { ButtonModal } from "../Button/ButtonModal";
import { HeaderModal } from "../Header/HeaderModal";
import FormInput from "../Form/FormInput";
import FormTextarea from "../Form/FormTextarea";
import { createClient } from "../../api/clientApi";

export const ModalAddClient = ({ openModalClient, setOpenModalClient }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    createClient(data.name, data.email, data.phone, data.address);
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
        <div className="mt-7 max-h-96 overflow-y-auto lg:max-h-fit">
          <h5 className="text-night_30 font-medium">Client Information</h5>

          <form onSubmit={handleSubmit} className="mt-7">
            <FormInput
              type="text"
              icon={false}
              name="name"
              placeholder="Name"
            />
            <FormInput
              type="text"
              icon={false}
              name="email"
              placeholder="Email"
            />
            <FormInput
              type="number"
              icon={false}
              name="phone"
              placeholder="Phone"
            />
            <FormTextarea type="text" name="address" placeholder="Address" />

            <ButtonModal
              setOpenModal={setOpenModalClient}
              text={<span>Add</span>}
            />
          </form>
        </div>
        {/* Content End */}
      </div>
    </Modal>
  );
};
