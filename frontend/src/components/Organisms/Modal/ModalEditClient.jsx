import { useParams } from "react-router-dom";
import { Modal } from ".";
import { ButtonModal } from "@components/Atoms/Button/ButtonModal";
import { HeaderModal } from "@components/Molecules/Header/HeaderModal";
import FormInput from "@components/Atoms/Form/FormInput";
import FormTextarea from "@components/Atoms/Form/FormTextarea";

export const ModalEditClient = ({
  openModalEdit,
  setOpenModalEdit,
  client,
  handleSubmit,
}) => {
  const { id } = useParams();

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
