import { useKayu } from "../../hooks/useCalculator";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { priceFormat } from "../utils";

const TabelHitungKayu = () => {
  const {
    totalDepan,
    totalSisiDepan,
    kubikasiDepan,
    totalBelakang,
    totalSisiBelakang,
    kubikasiBelakang,
    totalSamping,
    totalSisiSamping,
    kubikasiSamping,
    totalAtasBawah,
    totalSisiAtasBawah,
    kubikasiAtasBawah,
    totalAmbalan,
    totalSisiAmbalan,
    kubikasiAmbalan,
    totalHargaKeseluruhan,
    totalSisiKeseluruhan,
    totalKubikasiKeseluruhan,
    handleChangeKayu,
    hitungKayu,
  } = useKayu();

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">Sisi</th>
              <th className="font-normal px-6 py-3">Panjang</th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                Lebar
              </th>
              <th className="font-normal px-6 py-3">Tebal</th>
              <th className="font-normal px-6 py-3">Harga Kayu</th>
              <th className="font-normal px-6 py-3">Total Sisi</th>
              <th className="font-normal px-6 py-3">Kubikasi</th>
              <th className="font-normal px-6 py-3">Total Harga</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            {/* Depan Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="depan"
                  defaultValue="Depan"
                  variant="disabled"
                  placeholder="Depan"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangDepan"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarDepan"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalDepan"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaDepan"
                  type="number"
                  variant="text"
                  placeholder="Harga"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSisiDepan"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiDepan}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="kubikasiDepan"
                  type="text"
                  variant="disabled"
                  placeholder="Kubikasi"
                  value={kubikasiDepan}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalDepan"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(totalDepan)}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Depan End */}

            {/* Belakang Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="belakang"
                  defaultValue="Belakang"
                  variant="disabled"
                  placeholder="Belakang"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangBelakang"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarBelakang"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalBelakang"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaBelakang"
                  type="number"
                  variant="text"
                  placeholder="Harga"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSisiBelakang"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiBelakang}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="kubikasiBelakang"
                  type="text"
                  variant="disabled"
                  placeholder="Kubikasi"
                  value={kubikasiBelakang}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalBelakang"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(totalBelakang)}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Belakang End */}

            {/* Samping Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="samping"
                  defaultValue="Samping"
                  variant="disabled"
                  placeholder="Samping"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangSamping"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarSamping"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalSamping"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaSamping"
                  type="number"
                  variant="text"
                  placeholder="Harga"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSisiSamping"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiSamping}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="kubikasiSamping"
                  type="text"
                  variant="disabled"
                  placeholder="Kubikasi"
                  value={kubikasiSamping}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSamping"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(totalSamping)}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Samping End */}

            {/* Atas Bawah Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="atasBawah"
                  defaultValue="Atas & Bawah"
                  variant="disabled"
                  placeholder="Atas & Bawah"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Harga"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSisiAtasBawah"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiAtasBawah}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="kubikasiAtasBawah"
                  type="text"
                  variant="disabled"
                  placeholder="Kubikasi"
                  value={kubikasiAtasBawah}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalAtasBawah"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(totalAtasBawah)}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Atas Bawah End */}

            {/* Ambalan Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="ambalan"
                  defaultValue="Ambalan"
                  variant="disabled"
                  placeholder="Ambalan"
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Harga"
                  onChange={handleChangeKayu}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalSisiAmbalan"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiAmbalan}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="kubikasiAmbalan"
                  type="text"
                  variant="disabled"
                  placeholder="Kubikasi"
                  value={kubikasiAmbalan}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalAmbalan"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  value={priceFormat(totalAmbalan)}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Ambalan End */}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <label className="text-xs font-medium">
                  Total Seluruh Sisi
                </label>
                <Input
                  name="totalSisiKeseluruhan"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  value={totalSisiKeseluruhan}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <label className="text-xs font-medium text-night_90">
                  <span>Total Seluruh Kubikasi</span>
                  <Input
                    name="totalKubikasiKeseluruhan"
                    type="text"
                    variant="disabled"
                    placeholder="Kubikasi"
                    value={totalKubikasiKeseluruhan}
                    readOnly={true}
                  />
                </label>
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <label className="text-xs font-medium text-night_90">
                  <span>Total Seluruh Harga</span>
                  <Input
                    name="totalHargaKeseluruhan"
                    type="text"
                    variant="disabled"
                    placeholder="Total"
                    value={priceFormat(totalHargaKeseluruhan)}
                    readOnly={true}
                  />
                </label>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
          <Button type="button" variant="primaryOutline" onClick={hitungKayu}>
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        <div className="p-3 border border-[#E1E2E9] rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-night_40"></h1>
            <button className="rounded-lg p-1 bg-[#97a5eb]/20 transition-all hover:scale-110">
              <span className="text-primary_100">Terima</span>
            </button>
          </div>
          <div className="text-night_20 text-xs">
            <p className="text-night_30 text-sm mt-1"></p>
            <p className="mt-1"></p>
          </div>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungKayu;
