import { useState } from "react";

// Components
// Atoms
import Button from "@/components/Atoms/Button/Button";
import Input from "@/components/Atoms/Input/Input";

// Organisms
import FormFinishing from "@components/Organisms/Form/FormFinishing";
import Modal from "@components/Organisms/Modal/Modal";

// Redux Actions
import { setJenisFinishing, addFinishing } from "@/redux/slices/finishingSlice";
import { useDispatch, useSelector } from "react-redux";
import { priceFormat } from "@/components/utils";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { Bag } from "react-iconly";

const TableFinishing = () => {
  const { finishings, jenisFinishingData, jenisFinishing, totalFinishing } =
    useSelector((state) => state.finishingState);
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
    dispatch(setJenisFinishing(e.target.value));
  };

  const handleAddFinishing = () => {
    setOpenModal(false);
    dispatch(
      addFinishing({
        name: newItem.namaTukang,
        panjang: parseInt(newItem.panjang),
        lebar: parseInt(newItem.lebar),
        rumus: parseInt(newItem.rumus),
        jenis: jenisFinishing,
      })
    );
    console.log(newItem);
  };

  return (
    <>
      <section className="flex justify-between">
        <h1>Finishing</h1>
        <div className="flex gap-5">
          <Input
            type="text"
            variant="disabled"
            readOnly={true}
            placeholder="Total"
            value={priceFormat(totalFinishing)}
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
        {finishings.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
            className="col-span-3"
          />
        ) : (
          <table className="w-full">
            <thead className="border-b border-t border-[#E1E2E9]">
              <tr className="text-left text-sm text-night_90">
                <th className="font-normal px-6 py-3">Nama Tukang Finishing</th>
                <th className="font-normal px-6 py-3">Panjang (cm)</th>
                <th className="font-normal px-6 py-3 hidden md:table-cell">
                  Lebar (cm)
                </th>
                <th className="font-normal px-6 py-3">Rumus</th>
                <th className="font-normal px-6 py-3">Jenis Finishing</th>
                <th className="font-normal px-6 py-3">Harga Finishing</th>
                <th className="font-normal px-6 py-3">Gerinda</th>
                <th className="font-normal px-6 py-3">Packing</th>
                <th className="font-normal px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="border-b border-[#E1E2E9]">
              {finishings.map((item, index) => (
                <tr key={index} className="text-night_40 text-left text-sm">
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {item.data.name}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">
                    {item.data.panjang}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.lebar}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.rumus}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {item.data.jenis}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(item.hargaFinishing)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(item.gerinda)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(item.packing)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(item.totalPerFinishing)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Table view up to the `md:` breakpoint Start  */}
      <section className="mt-5 lg:hidden">
        {finishings.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
            className="col-span-3"
          />
        ) : (
          finishings.map((item, index) => (
            <div
              key={index}
              className="p-3 border-2 border-[#E1E2E9] rounded-lg"
            >
              <h1 className="text-night_40 font-medium">{item.data.name}</h1>

              <span className="text-night_30 text-sm">
                {item.data.panjang} x {item.data.lebar} x {item.data.rumus}
              </span>
              <p className="text-night_30 text-sm">{item.data.jenis}</p>
              <p className="text-night_30 text-sm">
                Harga {priceFormat(item.hargaFinishing)}
              </p>
              <p className="text-night_30 text-sm">
                Gerinda {priceFormat(item.gerinda)}
              </p>
              <p className="text-night_30 text-sm">
                Packing {priceFormat(item.packing)}
              </p>
              <p className="text-night_30 text-sm">
                Total Per Finishing {priceFormat(item.totalPerFinishing)}
              </p>
            </div>
          ))
        )}
      </section>

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Finishing"
          closeModal={() => setOpenModal(false)}
        />

        <Modal.Body>
          {/* <FormAksesoris handleInputChange={handleInputChange} /> */}
          <FormFinishing
            handleOnChange={handleOnChange}
            jenisFinishing={jenisFinishing}
            handleInputSelect={handleInputSelect}
            jenisFinishingData={jenisFinishingData}
          />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="button"
          closeModal={() => setOpenModal(false)}
          handleSubmit={handleAddFinishing}
        />
      </Modal>
    </>
  );
};

export default TableFinishing;
