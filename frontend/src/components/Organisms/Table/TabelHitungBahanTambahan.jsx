import { priceFormat } from "@/components/utils";
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Organisms/Modal/Modal";
import FormBahanTambahan from "@components/Organisms/Form/FormBahanTambahan";

// Redux Actions
import {
  addBahanTambahan,
  removeBahanTambahan,
} from "@/redux/slices/bahanTambahanSlice";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { Bag } from "react-iconly";

const TabelHitungBahanTambahan = () => {
  const { itemsBahanTambahan, totalBahanTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const dispatch = useDispatch();

  // const formRef = useRef();

  const [openModal, setOpenModal] = useState(false);
  const [newItem, setNewItem] = useState({});

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleHitungBahanTambahan = () => {
    setOpenModal(false);

    dispatch(
      addBahanTambahan({
        name: newItem.namaBahanTambahan,
        harga: parseInt(newItem.hargaBahanTambahan),
        panjang: parseInt(newItem.panjangBahanTambahan),
        lebar: parseInt(newItem.lebarBahanTambahan),
        bagi: parseInt(newItem.bagiBahanTambahan),
      })
    );
  };

  const handleDelete = (name) => {
    dispatch(removeBahanTambahan({ name }));
  };

  return (
    <>
      <section className="flex justify-between">
        <h1>Bahan Tambahan</h1>
        <div className="flex gap-5">
          <Input
            type="text"
            variant="disabled"
            readOnly={true}
            placeholder="Total"
            value={priceFormat(totalBahanTambahan)}
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
        {itemsBahanTambahan.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
            className="col-span-3"
          />
        ) : (
          itemsBahanTambahan.map((item, index) => (
            <div
              key={index + 1}
              className="p-3 border-2 border-[#E1E2E9] rounded-lg"
            >
              <div className="flex justify-between">
                <h1 className="text-night_40 font-medium">{item.data.name}</h1>
                <Button
                  type="button"
                  variant="delete"
                  onClick={() => handleDelete(item.data.name)}
                >
                  Hapus
                </Button>
              </div>
              <p className="text-night_30 text-sm">
                {priceFormat(item.totalPerItem)}
              </p>
            </div>
          ))
        )}
      </section>

      {/* Table view up to the `md:` breakpoint Start  */}

      {/* Table view up to the `md:` breakpoint End  */}

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambahan Bahan"
          closeModal={() => setOpenModal(false)}
        />

        <Modal.Body>
          <FormBahanTambahan handleInputChange={handleInputChange} />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="button"
          closeModal={() => setOpenModal(false)}
          handleSubmit={handleHitungBahanTambahan}
        />
      </Modal>
    </>
  );
};

export default TabelHitungBahanTambahan;
