import Button from "@/components/Atoms/Button/Button";
import Input from "@/components/Atoms/Input/Input";
import { priceFormat } from "@/components/utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import {
  setPersenKeuntungan,
  setHarga,
  setHargaJual,
} from "@/redux/slices/hargaSlice";

const TableKeseluruhan = () => {
  const { totalKayu } = useSelector((state) => state.tukangKayuState);
  const { totalGerinda, totalPacking, totalHargaFinishing } = useSelector(
    (state) => state.finishingState
  );
  const { totalHargaKayu } = useSelector((state) => state.kayuState);
  const { totalBahanTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const { totalPriceAccessories } = useSelector(
    (state) => state.accessoriesState
  );
  const { harga } = useSelector((state) => state.hargaState);

  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({});
  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleHitung = () => {
    const total =
      totalHargaKayu +
      totalKayu +
      totalHargaFinishing +
      totalGerinda +
      totalPacking +
      totalBahanTambahan +
      totalPriceAccessories;

    const persenKeuntungan = total * (inputChange.keuntungan / 100);

    dispatch(setPersenKeuntungan(inputChange.keuntungan));
    dispatch(setHarga(persenKeuntungan));
    dispatch(setHargaJual(total + persenKeuntungan));

    console.log(persenKeuntungan);
  };

  return (
    <>
      <section className="hidden overflow-x-auto mt-5 lg:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Material</th>
              <th className="font-normal px-6 py-3">Tukang Kayu</th>
              <th className="font-normal px-6 py-3">Tukang Finishing</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Packing
              </th>
              <th className="font-normal px-6 py-3">Gerinda</th>
              <th className="font-normal px-6 py-3">Bahan Tambahan </th>
              <th className="font-normal px-6 py-3">Aksesoris & Akomodasi </th>
              <th className="font-normal px-6 py-3">
                <div className="flex items-center">
                  <Input
                    type="number"
                    name="keuntungan"
                    placeholder="Keuntungan"
                    onChange={handleInputChange}
                  />
                  <span>%</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {priceFormat(totalHargaKayu)}
              </td>
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {priceFormat(totalKayu)}
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                {priceFormat(totalHargaFinishing)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {priceFormat(totalGerinda)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {priceFormat(totalPacking)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {priceFormat(totalBahanTambahan)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {priceFormat(totalPriceAccessories)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                {priceFormat(harga)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end m-5">
          <Button type="button" variant="primaryOutline" onClick={handleHitung}>
            Hitung
          </Button>
        </div>
      </section>
    </>
  );
};

export default TableKeseluruhan;
