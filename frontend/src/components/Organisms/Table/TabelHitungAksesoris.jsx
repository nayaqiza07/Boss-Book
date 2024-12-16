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
import { addAccessory, removeAccessory } from "@/redux/slices/accessoriesSlice";

const TabelHitungAksesoris = () => {
  const { accessories, totalPriceAccessories } = useSelector(
    (state) => state.accessoriesState
  );
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
    dispatch(
      addAccessory({
        name: newItem.nameAksesoris,
        harga: parseInt(newItem.hargaAksesoris),
      })
    );
  };

  const handleRemove = (name) => {
    dispatch(removeAccessory({ name }));
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
            value={priceFormat(totalPriceAccessories)}
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

      <section className="grid lg:grid-cols-3 gap-5 overflow-x-auto mt-5">
        {accessories.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
            className="col-span-3"
          />
        ) : (
          accessories.map((item, index) => (
            <div
              key={index + 1}
              className="p-3 border-2 border-[#E1E2E9] rounded-lg"
            >
              <div className="flex justify-between">
                <h1 className="text-night_40 font-medium">{item.name}</h1>
                <Button
                  type="button"
                  variant="delete"
                  onClick={() => handleRemove(item.name)}
                >
                  Hapus
                </Button>
              </div>
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
