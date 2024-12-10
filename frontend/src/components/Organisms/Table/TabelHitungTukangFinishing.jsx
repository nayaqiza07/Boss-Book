import { useState } from "react";
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import { priceFormat } from "@components/utils";

import { useSelector, useDispatch } from "react-redux";
import {
  setPanjang,
  setLebar,
  setPersen,
  setJenisFinishing,
  hitungTotal,
} from "../../../redux/slices/finishingSlice";
import Select from "../../Atoms/Input/Select";

const TabelHitungTukangFinishing = () => {
  const { jenisFinishingData, jenisFinishing, total } = useSelector(
    (state) => state.finishingState
  );
  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({
    namaTukangFinishing: "",
    panjangFinishing: "",
    lebarFinishing: "",
    persenFinishing: "",
  });

  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputSelect = (e) => {
    dispatch(setJenisFinishing(e.target.value));
  };

  const handleHitung = () => {
    dispatch(setPanjang(inputChange.panjangFinishing));
    dispatch(setLebar(inputChange.lebarFinishing));
    dispatch(setPersen(inputChange.persenFinishing));
    dispatch(hitungTotal());
    console.log(inputChange);
  };

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 lg:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Nama Tukang Finishing</th>
              <th className="font-normal px-6 py-3">Panjang (cm)</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar (cm)
              </th>
              <th className="font-normal px-6 py-3">Persen (%)</th>
              <th className="font-normal px-6 py-3">
                <Select
                  list={jenisFinishingData}
                  name="jenisFinishing"
                  variant="text"
                  value={jenisFinishing}
                  onChange={handleInputSelect}
                  placeholder="Jenis Finishing"
                />
              </th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  name="namaTukangFinishing"
                  type="text"
                  variant="text"
                  placeholder="Nama Tukang Finishing"
                  value={inputChange.namaTukangFinishing}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangFinishing"
                  type="number"
                  variant="text"
                  placeholder="Panjang in cm"
                  value={inputChange.panjangFinishing}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarFinishing"
                  type="number"
                  variant="text"
                  placeholder="Lebar in cm"
                  value={inputChange.lebarFinishing}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="persenFinishing"
                  type="number"
                  variant="text"
                  placeholder="Persen (%)"
                  value={inputChange.persenFinishing}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="jenisFinishing"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Finishing"
                  value={jenisFinishing}
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
          <Button type="button" variant="primaryOutline" onClick={handleHitung}>
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="pt-3 mt-5 lg:hidden">
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <label className="text-xs font-medium">
            Nama Tukang Finishing
            <Input
              name="namaTukangFinishing"
              type="text"
              variant="text"
              placeholder="Nama Tukang Finishing"
              value={inputChange.namaTukangFinishing}
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
              value={inputChange.panjangFinishing}
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
              value={inputChange.lebarFinishing}
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
              value={inputChange.persenFinishing}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Jenis Finishing
            <Select
              list={jenisFinishingData}
              name="jenisFinishing"
              variant="text"
              value={jenisFinishing}
              onChange={handleInputSelect}
              placeholder="Jenis Finishing"
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
            onClick={handleHitung}
            className="w-full"
          >
            Hitung
          </Button>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungTukangFinishing;
