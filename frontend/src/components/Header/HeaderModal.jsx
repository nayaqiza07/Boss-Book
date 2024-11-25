export const HeaderModal = ({ setOpenModal, title }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-medium">{title}</h2>
      <button
        onClick={() => setOpenModal(false)}
        className="bg-secondary_30 rounded-lg w-8 h-8"
      >
        {/* <HiOutlineX size={20} className="mx-auto" /> */}
      </button>
    </div>
  );
};
