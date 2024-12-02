import { Cancel01Icon } from "hugeicons-react";

export const HeaderModal = ({ setOpenModal, title }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-medium">{title}</h2>
      <button
        onClick={() => setOpenModal(false)}
        className="bg-secondary_30 rounded-lg w-8 h-8"
      >
        <Cancel01Icon size={24} className="mx-auto" />
      </button>
    </div>
  );
};
