import { Modal } from ".";
import FormSelect from "@components/Atoms/Form/FormSelect";

const ModalUpdateOrder = ({
  openModalUpdate,
  setOpenModalUpdate,
  dataOrderById,
  handleUpdate,
}) => {
  const list = [
    { _id: "Pending", name: "Pending" },
    { _id: "In-Progress", name: "In-Progress" },
    { _id: "Completed", name: "Completed" },
  ];

  return (
    <Modal
      openModal={openModalUpdate}
      onCloseModal={() => setOpenModalUpdate(false)}
    >
      <h2 className="text-primary_100">#{dataOrderById.orderNumber}</h2>
      <form onSubmit={handleUpdate} className="mt-7">
        <label className="text-[#5E6366] text-xs">Order Status</label>
        <FormSelect
          list={list}
          name="status"
          placeholder={dataOrderById.status}
        />
        {/* Footer Start */}
        <div className="flex justify-center gap-3 mt-11">
          <button
            type="button"
            onClick={() => setOpenModalUpdate(false)}
            className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 text-primary_100 transition-all hover:scale-105 lg:w-44"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 bg-primary_100 text-white transition-all hover:scale-105 lg:w-44"
          >
            Update
          </button>
        </div>
        {/* Footer End */}
      </form>
    </Modal>
  );
};

export default ModalUpdateOrder;
