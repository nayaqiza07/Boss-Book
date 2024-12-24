import { Modal } from ".";
import { ButtonModal } from "@components/Atoms/Button/ButtonModal";
import { HeaderModal } from "@components/Molecules/Header/HeaderModal";
import FormInput from "@components/Atoms/Form/FormInput";
import FormTextarea from "@components/Atoms/Form/FormTextarea";
import FormSelect from "@/components/Atoms/Form/FormSelect";

export const ModalAddClient = ({
  openModalClient,
  setOpenModalClient,
  handleSubmit,
}) => {
  const roleList = [
    { name: "Client", _id: "Client" },
    { name: "Karyawan", _id: "Karyawan" },
  ];

  return (
    <Modal
      openModal={openModalClient}
      onCloseModal={() => setOpenModalClient(false)}
    >
      <div className="max-w-72">
        {/* Header Start */}
        <HeaderModal
          setOpenModal={setOpenModalClient}
          title={"Add New Contact"}
        />
        {/* Header End */}

        {/* Content Start */}
        <div className="mt-7 max-h-96 overflow-y-auto lg:max-h-fit">
          <h5 className="text-night_30 font-medium">Contact Information</h5>

          <form onSubmit={handleSubmit} className="mt-7">
            <FormInput
              type="text"
              icon={false}
              name="name"
              placeholder="Name"
            />
            <FormSelect
              type="text"
              icon={false}
              name="role"
              placeholder="Role"
              list={roleList}
            />
            {/* <FormInput
              type="text"
              icon={false}
              name="email"
              placeholder="Email"
            /> */}
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
