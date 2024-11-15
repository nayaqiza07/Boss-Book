export const ButtonModal = ({ setOpenModal, handleSubmit, text }) => {
  return (
    <div className="flex justify-center gap-3 mt-11">
      <button
        onClick={() => setOpenModal(false)}
        className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 text-primary_100 transition-all hover:scale-105 lg:w-44"
      >
        Cancel
      </button>
      <button
        onClick={handleSubmit}
        className="w-full px-3 py-2 text-lg rounded-xl border-2 border-primary_100 bg-primary_100 text-white transition-all hover:scale-105 lg:w-44"
      >
        {text}
      </button>
    </div>
  );
};
