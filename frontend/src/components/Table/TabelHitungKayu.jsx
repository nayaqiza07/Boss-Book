import Button from "../Button/Button";
import Input from "../Input/Input";

import {
  setPanjangDepan,
  setLebarDepan,
  setTebalDepan,
  setPanjangBelakang,
  setLebarBelakang,
  setTebalBelakang,
  setPanjangSamping,
  setLebarSamping,
  setTebalSamping,
  setPanjangAtasBawah,
  setLebarAtasBawah,
  setTebalAtasBawah,
  setPanjangAmbalan,
  setLebarAmbalan,
  setTebalAmbalan,
  setJenisKayu,
  setSisiDepan,
  setSisiBelakang,
  setSisiSamping,
  setSisiAtasBawah,
  setSisiAmbalan,
  setTotalSisiKeseluruhan,
  setTotalKubikasiKeseluruhan,
  setTotalHargaKeseluruhan,
} from "../../redux/slices/kayuSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Input/Select";
import { priceFormat } from "../utils";

const TabelHitungKayu = () => {
  const {
    jenisKayuData,
    jenisKayu,
    sisiDepan,
    sisiBelakang,
    sisiSamping,
    sisiAtasBawah,
    sisiAmbalan,
    totalSisiKeseluruhan,
    totalKubikasiKeseluruhan,
    totalHargaKeseluruhan,
  } = useSelector((state) => state.kayuState);
  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({});

  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputSelect = (e) => {
    dispatch(setJenisKayu(e.target.value));
  };

  const handleHitung = () => {
    dispatch(setPanjangDepan(inputChange.panjangDepan));
    dispatch(setLebarDepan(inputChange.lebarDepan));
    dispatch(setTebalDepan(inputChange.tebalDepan));
    dispatch(setSisiDepan(inputChange.sisiDepan));

    dispatch(setPanjangBelakang(inputChange.panjangBelakang));
    dispatch(setLebarBelakang(inputChange.lebarBelakang));
    dispatch(setTebalBelakang(inputChange.tebalBelakang));
    dispatch(setSisiBelakang(inputChange.sisiBelakang));

    dispatch(setPanjangSamping(inputChange.panjangSamping));
    dispatch(setLebarSamping(inputChange.lebarSamping));
    dispatch(setTebalSamping(inputChange.tebalSamping));
    dispatch(setSisiSamping(inputChange.sisiSamping));

    dispatch(setPanjangAtasBawah(inputChange.panjangAtasBawah));
    dispatch(setLebarAtasBawah(inputChange.lebarAtasBawah));
    dispatch(setTebalAtasBawah(inputChange.tebalAtasBawah));
    dispatch(setSisiAtasBawah(inputChange.sisiAtasBawah));

    dispatch(setPanjangAmbalan(inputChange.panjangAmbalan));
    dispatch(setLebarAmbalan(inputChange.lebarAmbalan));
    dispatch(setTebalAmbalan(inputChange.tebalAmbalan));
    dispatch(setSisiAmbalan(inputChange.sisiAmbalan));

    dispatch(setTotalSisiKeseluruhan());
    dispatch(setTotalKubikasiKeseluruhan());
    dispatch(setTotalHargaKeseluruhan());

    console.log(inputChange);
  };

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
              <th className="font-normal px-6 py-3">Jumlah Sisi</th>
              <th className="font-normal px-6 py-3">
                <Select
                  list={jenisKayuData}
                  name="jenisKayu"
                  variant="text"
                  value={jenisKayu}
                  onChange={handleInputSelect}
                  placeholder="Jenis Kayu"
                />
              </th>
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
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangDepan"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarDepan"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalDepan"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiDepan"
                  type="number"
                  variant="disabled"
                  placeholder="Sisi"
                  value={sisiDepan}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaDepan"
                  type="text"
                  variant="disabled"
                  placeholder="Harga"
                  value={jenisKayu}
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
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangBelakang"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarBelakang"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalBelakang"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiBelakang"
                  type="number"
                  variant="disabled"
                  placeholder="Sisi"
                  value={sisiBelakang}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaBelakang"
                  type="text"
                  variant="disabled"
                  placeholder="Harga"
                  value={jenisKayu}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangSamping"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarSamping"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalSamping"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiSamping"
                  type="number"
                  variant="disabled"
                  placeholder="Sisi"
                  value={sisiSamping}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaSamping"
                  type="text"
                  variant="disabled"
                  placeholder="Harga"
                  value={jenisKayu}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalAtasBawah"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiAtasBawah"
                  type="number"
                  variant="disabled"
                  placeholder="Sisi"
                  value={sisiAtasBawah}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaAtasBawah"
                  type="text"
                  variant="disabled"
                  placeholder="Harga"
                  value={jenisKayu}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalAmbalan"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiAmbalan"
                  type="number"
                  variant="disabled"
                  placeholder="Sisi"
                  value={sisiAmbalan}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="hargaAmbalan"
                  type="text"
                  variant="disabled"
                  placeholder="Harga"
                  value={jenisKayu}
                  onChange={handleInputChange}
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
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <label className="text-xs font-medium">
                  Total Seluruh Sisi
                </label>
                <Input
                  name="totalSisiKeseluruhan"
                  type="text"
                  variant="disabled"
                  placeholder="Total Sisi"
                  readOnly={true}
                  value={totalSisiKeseluruhan}
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
                    readOnly={true}
                    value={totalKubikasiKeseluruhan}
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
                    readOnly={true}
                    value={priceFormat(totalHargaKeseluruhan)}
                  />
                </label>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
          <Button type="button" variant="primaryOutline" onClick={handleHitung}>
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
