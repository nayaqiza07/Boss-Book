import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { priceFormat } from "@components/utils";
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import {
  setPanjang,
  setLebar,
  setPersen,
  hitungTotal,
} from "@/redux/slices/tukangKayuSlice";

const TabelHitungTukangKayu = () => {
  const { total } = useSelector((state) => state.tukangKayuState);
  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({
    namaTukangKayu: "",
    panjangTukangKayu: "",
    lebarTukangKayu: "",
    persenTukangKayu: "",
  });

  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleHitung = () => {
    dispatch(setPanjang(inputChange.panjangTukangKayu));
    dispatch(setLebar(inputChange.lebarTukangKayu));
    dispatch(setPersen(inputChange.persenTukangKayu));
    dispatch(hitungTotal());
    console.log(inputChange);
  };

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 lg:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Nama Tukang Kayu</th>
              <th className="font-normal px-6 py-3">Panjang (cm)</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar (cm)
              </th>
              <th className="font-normal px-6 py-3">Persen (%)</th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  name="namaTukangKayu"
                  type="text"
                  variant="text"
                  placeholder="Nama Tukang Kayu"
                  value={inputChange.namaTukangKayu}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangTukangKayu"
                  type="number"
                  variant="text"
                  placeholder="Panjang (cm)"
                  value={inputChange.panjangTukangKayu}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarTukangKayu"
                  type="number"
                  variant="text"
                  placeholder="Lebar (cm)"
                  value={inputChange.lebarTukangKayu}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="persenTukangKayu"
                  type="number"
                  variant="text"
                  placeholder="Persen (%)"
                  value={inputChange.persenTukangKayu}
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalTukangKayu"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(total)}
                  readOnly={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-start gap-5 mt-5 mb-3 mr-3">
          <div className="text-xs text-night_90">
            <p className="font-bold">Note:</p>
            <p>
              Per tinggi 50 cm x 100, Jika tinggi lebih dari 50 cm tambah 10.
              Contoh: tinggi 100, maka menjadi 110.
            </p>
          </div>
          <Button type="button" variant="primaryOutline" onClick={handleHitung}>
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="pt-3 mt-5 lg:hidden">
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <label className="text-xs font-medium">
            Nama Tukang Kayu
            <Input
              name="namaTukangKayu"
              type="text"
              variant="text"
              placeholder="Nama Tukang Kayu"
              value={inputChange.namaTukangKayu}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Panjang (cm)
            <Input
              name="panjangTukangKayu"
              type="number"
              variant="text"
              placeholder="Panjang (cm)"
              value={inputChange.panjangTukangKayu}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Lebar (cm)
            <Input
              name="lebarTukangKayu"
              type="number"
              variant="text"
              placeholder="Lebar (cm)"
              value={inputChange.lebarTukangKayu}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Persen (%)
            <Input
              name="persenTukangKayu"
              type="number"
              variant="text"
              placeholder="Persen (%)"
              value={inputChange.persenTukangKayu}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Total
            <Input
              name="totalTukangKayu"
              type="text"
              variant="disabled"
              placeholder="Total"
              value={priceFormat(total)}
              readOnly={true}
            />
          </label>
          <div>
            <div className="text-xs text-night_90">
              <p className="font-bold">Note:</p>
              <p>
                Per tinggi 50 cm x 100, Jika tinggi lebih dari 50 cm tambah 10.
                Contoh: tinggi 100, maka menjadi 110.
              </p>
            </div>
            <Button
              type="button"
              variant="primaryOutline"
              onClick={handleHitung}
              className="w-full mt-5"
            >
              Hitung
            </Button>
          </div>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungTukangKayu;
