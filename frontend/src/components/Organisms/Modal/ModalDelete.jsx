import { Modal } from ".";
import { ButtonModal } from "@components/Button/ButtonModal";
import { HeaderModal } from "@components/Header/HeaderModal";

export const ModalDelete = ({
  openModalDelete,
  setOpenModalDelete,
  handleDelete,
}) => {
  return (
    <Modal
      openModal={openModalDelete}
      onCloseModal={() => setOpenModalDelete(false)}
    >
      <div className="w-72">
        {/* Header Modal Start */}
        <HeaderModal setOpenModal={setOpenModalDelete} />
        {/* Header Modal End */}

        {/* Content Start */}
        <div>
          <h1>Are You Sure?</h1>
          <p>Do you really want to delete this data?</p>
        </div>
        {/* Content End */}

        {/* Footer Start */}
        <ButtonModal
          setOpenModal={setOpenModalDelete}
          handleDelete={handleDelete}
          text={"Delete"}
        />
        {/* Footer End */}
      </div>
    </Modal>
  );
};
