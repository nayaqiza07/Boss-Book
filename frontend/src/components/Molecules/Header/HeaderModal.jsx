import { Cancel01Icon } from "hugeicons-react";
import Button from "@components/Atoms/Button/Button";

export const HeaderModal = ({ setOpenModal, title }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-medium">{title}</h2>
      <Button size="close" onClick={() => setOpenModal(false)} variant="close">
        <Cancel01Icon size={24} />
      </Button>
    </div>
  );
};
