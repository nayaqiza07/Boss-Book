import { useState } from "react";
import { Bag } from "react-iconly";

// Components
import Button from "@components/Atoms/Button/Button";
import Modal from "@components/Organisms/Modal/Modal";
import FormAksesoris from "@components/Organisms/Form/FormAksesoris";
import { priceFormat } from "@components/utils";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import Input from "@/components/Atoms/Input/Input";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import {
  setNameAksesoris,
  setHargaAksesoris,
  setItems,
  setTotal,
} from "@/redux/slices/aksesorisSlice";

const TabelHitungAksesoris = () => {
  const { items, total } = useSelector((state) => state.aksesorisState);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const [newItem, setNewItem] = useState({});

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleHitungAksesoris = () => {
    setOpenModal(false);

    dispatch(setNameAksesoris(newItem.nameAksesoris));
    dispatch(setHargaAksesoris(newItem.hargaAksesoris));
    dispatch(
      setItems({ name: newItem.nameAksesoris, harga: newItem.hargaAksesoris })
    );
    dispatch(setTotal());
  };

  return (
    <>
      <section className="flex justify-between">
        <h1>Aksesoris</h1>
        <div className="flex gap-5">
          <Input
            type="text"
            variant="disabled"
            readOnly={true}
            placeholder="Total"
            value={priceFormat(total)}
          />
          <Button
            type="button"
            variant="primary"
            onClick={() => setOpenModal(true)}
          >
            Tambah
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-5 overflow-x-auto mt-5">
        {items.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
            className="col-span-3"
          />
        ) : (
          items.map((item, index) => (
            <div
              key={index + 1}
              className="p-3 border border-[#E1E2E9] rounded-lg"
            >
              <h1 className="text-night_40 font-medium">{item.name}</h1>
              <p className="text-night_30 text-sm">{priceFormat(item.harga)}</p>
            </div>
          ))
        )}
      </section>

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Aksesoris"
          closeModal={() => setOpenModal(false)}
        />

        <Modal.Body>
          <FormAksesoris handleInputChange={handleInputChange} />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="button"
          closeModal={() => setOpenModal(false)}
          handleSubmit={handleHitungAksesoris}
        />
      </Modal>
    </>
  );
};

export default TabelHitungAksesoris;
