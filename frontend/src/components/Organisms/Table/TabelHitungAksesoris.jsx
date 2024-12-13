import { priceFormat } from "@/components/utils";
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Organisms/Modal/Modal";
import FormAksesoris from "../Form/FormAksesoris";

import {
  setNamaAksesoris,
  setHargaAksesoris,
  setPanjangAksesoris,
  setLebarAksesoris,
  setBagiAksesoris,
  setTotalAksesoris,
} from "@/redux/slices/aksesorisSlice";

const TabelHitungAksesoris = () => {
  const { total, totalAksesoris } = useSelector(
    (state) => state.aksesorisState
  );
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [inputChange, setInputChange] = useState({
    nameJenisAksesoris: "",
    hargaJenisAksesoris: 0,
    panjangJenisAksesoris: 0,
    lebarJenisAksesoris: 0,
    bagiJenisAksesoris: 0,
  });

  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setOpenModal(false);
    console.log(inputChange);

    dispatch(setNamaAksesoris(inputChange.nameJenisAksesoris));
    dispatch(setHargaAksesoris(inputChange.hargaJenisAksesoris));
    dispatch(setPanjangAksesoris(inputChange.panjangJenisAksesoris));
    dispatch(setLebarAksesoris(inputChange.lebarJenisAksesoris));
    dispatch(setBagiAksesoris(inputChange.bagiJenisAksesoris));
    dispatch(setTotalAksesoris());
  };

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Panjang (cm)</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar (cm)
              </th>
              <th className="font-normal px-6 py-3">Persen (%)</th>
              <th className="flex justify-between gap-3 font-normal px-6 py-3">
                <Input
                  name="nameAksesoris"
                  type="text"
                  variant="disabled"
                  placeholder="Nama Aksesoris"
                  readOnly={true}
                  value={inputChange.nameJenisAksesoris}
                />
                <Button type="button" onClick={() => setOpenModal(true)}>
                  Aksesoris
                </Button>
              </th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangAksesoris"
                  type="number"
                  variant="text"
                  placeholder="Panjang in cm"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarAksesoris"
                  type="number"
                  variant="text"
                  placeholder="Lebar in cm"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="persenAksesoris"
                  type="number"
                  variant="text"
                  placeholder="Persen (%)"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="totalJenisAksesoris"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Aksesoris"
                  value={priceFormat(totalAksesoris)}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalFinishing"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  readOnly={true}
                  value={priceFormat(total)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
          <Button type="button" variant="primaryOutline">
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <label className="text-xs font-medium">
            Nama Tukang Finishing
            <Input
              name="namaTukangFinishing"
              type="text"
              variant="text"
              placeholder="Nama Tukang Finishing"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Panjang (cm)
            <Input
              name="panjangFinishing"
              type="number"
              variant="text"
              placeholder="Panjang in cm"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Lebar (cm)
            <Input
              name="lebarFinishing"
              type="number"
              variant="text"
              placeholder="Lebar in cm"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Persen (%)
            <Input
              name="persenFinishing"
              type="number"
              variant="text"
              placeholder="Persen (%)"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Total
            <Input
              name="totalFinishing"
              type="text"
              variant="disabled"
              placeholder="Total"
              readOnly={true}
              value={priceFormat(total)}
            />
          </label>
          <Button
            type="button"
            variant="primaryOutline"
            // onClick={handleHitung}
            className="w-full"
          >
            Hitung
          </Button>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Aksesoris"
          closeModal={() => setOpenModal(false)}
        />
        {/* <form ref={formRef} onSubmit={handleSubmit}> */}
        <Modal.Body>
          <FormAksesoris handleInputChange={handleInputChange} />
        </Modal.Body>
        <Modal.Footer text="Tambah" type="button" closeModal={handleClick} />
        {/* </form> */}
      </Modal>
    </>
  );
};

export default TabelHitungAksesoris;
