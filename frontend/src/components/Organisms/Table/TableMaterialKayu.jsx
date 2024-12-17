import { useState } from "react";
import { Bag } from "react-iconly";

// Components
import { priceFormat } from "@/components/utils";

// Atoms
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";

// Molecules
import { DataEmpty } from "@components/Molecules/404/DataEmpty";

// Organisms
import Modal from "@components/Organisms/Modal/Modal";
import FormMaterialKayu from "@components/Organisms/Form/FormMaterialKayu";

// Redux Actions
import { useDispatch, useSelector } from "react-redux";
import { setJenisKayu, addMaterialKayu } from "@/redux/slices/kayuSlice";

const TableMaterialKayu = () => {
  const {
    materialKayu,
    jenisKayuData,
    jenisKayu,
    totalKubikasi,
    totalHargaKayu,
  } = useSelector((state) => state.kayuState);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const [newItem, setNewItem] = useState({});

  const handleOnChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputSelect = (e) => {
    dispatch(setJenisKayu(e.target.value));
  };

  const handleAddKayu = () => {
    setOpenModal(false);

    dispatch(
      addMaterialKayu({
        sisi: newItem.sisi,
        panjang: parseInt(newItem.panjang),
        lebar: parseInt(newItem.lebar),
        tebal: parseInt(newItem.tebal),
        jumlahSisi: parseInt(newItem.jumlahSisi),
        jenisKayu: jenisKayu,
      })
    );
  };

  return (
    <>
      <section className="flex justify-between">
        <h1>Material</h1>
        <div className="flex gap-5">
          <Input
            type="text"
            variant="disabled"
            readOnly={true}
            placeholder="Kubikasi"
            value={totalKubikasi.toFixed(3)}
          />
          <Input
            type="text"
            variant="disabled"
            readOnly={true}
            placeholder="Total"
            value={priceFormat(totalHargaKayu)}
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

      <section className="hidden overflow-x-auto mt-5 lg:block">
        {materialKayu.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
          />
        ) : (
          <table className="w-full">
            <thead className="border-b border-t border-[#E1E2E9]">
              <tr className="text-left text-sm text-night_90">
                <th className="font-normal px-6 py-3">Sisi</th>
                <th className="font-normal px-6 py-3">Panjang (cm)</th>
                <th className="font-normal px-6 py-3 hidden md:table-cell">
                  Lebar (cm)
                </th>
                <th className="font-normal px-6 py-3 hidden md:table-cell">
                  Tebal (cm)
                </th>
                <th className="font-normal px-6 py-3">Jumlah Sisi</th>
                <th className="font-normal px-6 py-3">Jenis Kayu</th>
                <th className="font-normal px-6 py-3">Kubikasi</th>
                <th className="font-normal px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="border-b border-[#E1E2E9]">
              {materialKayu.map((item, index) => (
                <tr key={index} className="text-night_40 text-left text-sm">
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {item.data.sisi}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">
                    {item.data.panjang}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.lebar}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.tebal}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.jumlahSisi}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.jenisKayu}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.kubikasiPerSisi}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(item.hargaPerSisi)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Material Kayu"
          closeModal={() => setOpenModal(false)}
        />

        <Modal.Body>
          <FormMaterialKayu
            handleOnChange={handleOnChange}
            handleInputSelect={handleInputSelect}
            jenisKayuData={jenisKayuData}
            jenisKayu={jenisKayu}
          />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="button"
          closeModal={() => setOpenModal(false)}
          handleSubmit={handleAddKayu}
        />
      </Modal>
    </>
  );
};

export default TableMaterialKayu;
