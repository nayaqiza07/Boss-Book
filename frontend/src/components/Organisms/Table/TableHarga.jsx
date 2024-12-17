import Button from "@/components/Atoms/Button/Button";
import Input from "@/components/Atoms/Input/Input";
import { priceFormat } from "@/components/utils";
import { useState } from "react";
import { useSelector } from "react-redux";

const TableHarga = () => {
  const { totalKayu } = useSelector((state) => state.tukangKayuState);
  const { totalFinishing } = useSelector((state) => state.finishingState);
  const { totalKubikasi, totalHargaKayu } = useSelector(
    (state) => state.kayuState
  );
  const { totalBahanTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const { totalPriceAccessories } = useSelector(
    (state) => state.accessoriesState
  );

  const { keuntungan, hargaJual } = useSelector((state) => state.hargaState);

  const [inputChange, setInputChange] = useState({});
  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const kalkulasiProduksi =
    totalHargaKayu +
    totalKayu +
    totalFinishing +
    totalBahanTambahan +
    totalPriceAccessories;

  // const persenKeuntungan = total * (inputChange.keuntungan / 100);

  return (
    <>
      <section className="hidden overflow-x-auto mt-5 lg:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Kalkulasi Produksi</th>
              <th className="font-normal px-6 py-3">Harga Jual</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Keuntungan
              </th>
              <th className="font-normal px-6 py-3">
                <div className="flex items-center gap-3">
                  <span>%</span>
                  <Input
                    type="number"
                    name="bagiHasil"
                    placeholder="Pembagian Hasil"
                    onChange={handleInputChange}
                  />
                  <Button type="button" variant="primaryOutline">
                    Hitung
                  </Button>
                </div>
              </th>
              <th className="font-normal px-6 py-3">Total Bahan Baku</th>
              <th className="font-normal px-6 py-3">Borongan Tukang</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                {priceFormat(kalkulasiProduksi)}
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                {priceFormat(hargaJual)}
              </td>
              <td className="whitespace-nowrap px-6 py-3">{keuntungan}%</td>
              <td className="whitespace-nowrap px-6 py-3">0</td>
              <td className="whitespace-nowrap px-6 py-3">
                <p className="flex justify-between">
                  <span>Kubikasi</span> {totalKubikasi.toFixed(3)}
                </p>
                <p className="flex justify-between">
                  <span>Harga Kayu</span> {priceFormat(totalHargaKayu)}
                </p>
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <p className="flex justify-between">
                  <span>Tukang Kayu</span>
                  {priceFormat(0)}
                </p>
                <p className="flex justify-between">
                  <span>Tukang Finishing</span>
                  {priceFormat(0)}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TableHarga;
