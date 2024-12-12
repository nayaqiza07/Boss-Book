import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";

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
  setPanjangLain,
  setLebarLain,
  setTebalLain,
  setJumlahSisiDepan,
  setJumlahSisiBelakang,
  setJumlahSisiSamping,
  setJumlahSisiAtasBawah,
  setJumlahSisiAmbalan,
  setJumlahSisiLain,
  setJenisKayu,
  setTotalSisiKeseluruhan,
  setTotalKubikasiKeseluruhan,
  setTotalHargaKeseluruhan,
} from "@/redux/slices/kayuSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "@components/Atoms/Input/Select";
import { priceFormat } from "@components/utils";
import Label from "@components/Atoms/Input/Label";

const TabelHitungKayu = () => {
  const {
    jenisKayuData,
    jenisKayu,
    totalSisiKeseluruhan,
    totalKubikasiKeseluruhan,
    totalHargaKeseluruhan,
  } = useSelector((state) => state.kayuState);
  const dispatch = useDispatch();

  const [inputChange, setInputChange] = useState({
    panjangDepan: 0,
    lebarDepan: 0,
    tebalDepan: 0,
    sisiDepan: 0,
    panjangBelakang: 0,
    lebarBelakang: 0,
    tebalBelakang: 0,
    sisiBelakang: 0,
    panjangSamping: 0,
    lebarSamping: 0,
    tebalSamping: 0,
    sisiSamping: 0,
    panjangAtasBawah: 0,
    lebarAtasBawah: 0,
    tebalAtasBawah: 0,
    sisiAtasBawah: 0,
    panjangAmbalan: 0,
    lebarAmbalan: 0,
    tebalAmbalan: 0,
    sisiAmbalan: 0,
    panjangLain: 0,
    lebarLain: 0,
    tebalLain: 0,
    sisiLain: 0,
  });

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
    dispatch(setJumlahSisiDepan(inputChange.sisiDepan));

    dispatch(setPanjangBelakang(inputChange.panjangBelakang));
    dispatch(setLebarBelakang(inputChange.lebarBelakang));
    dispatch(setTebalBelakang(inputChange.tebalBelakang));
    dispatch(setJumlahSisiBelakang(inputChange.sisiBelakang));

    dispatch(setPanjangSamping(inputChange.panjangSamping));
    dispatch(setLebarSamping(inputChange.lebarSamping));
    dispatch(setTebalSamping(inputChange.tebalSamping));
    dispatch(setJumlahSisiSamping(inputChange.sisiSamping));

    dispatch(setPanjangAtasBawah(inputChange.panjangAtasBawah));
    dispatch(setLebarAtasBawah(inputChange.lebarAtasBawah));
    dispatch(setTebalAtasBawah(inputChange.tebalAtasBawah));
    dispatch(setJumlahSisiAtasBawah(inputChange.sisiAtasBawah));

    dispatch(setPanjangAmbalan(inputChange.panjangAmbalan));
    dispatch(setLebarAmbalan(inputChange.lebarAmbalan));
    dispatch(setTebalAmbalan(inputChange.tebalAmbalan));
    dispatch(setJumlahSisiAmbalan(inputChange.sisiAmbalan));

    dispatch(setPanjangLain(inputChange.panjangLain));
    dispatch(setLebarLain(inputChange.lebarLain));
    dispatch(setTebalLain(inputChange.tebalLain));
    dispatch(setJumlahSisiLain(inputChange.sisiLain));

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
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuDepan"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
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
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuBelakang"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
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
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuSamping"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
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
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuAtasBawah"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
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
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuAmbalan"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
                  value={jenisKayu}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Ambalan End */}

            {/* Dan Lain-lain Start */}
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap text-primary_100 px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                <Input
                  readOnly={true}
                  name="lainLain"
                  defaultValue="Lain-Lain"
                  variant="disabled"
                  placeholder="Lain-lain"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="panjangLain"
                  type="number"
                  variant="text"
                  placeholder="Panjang"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="lebarLain"
                  type="number"
                  variant="text"
                  placeholder="Lebar"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="tebalLain"
                  type="number"
                  variant="text"
                  placeholder="Tebal"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="sisiLain"
                  type="number"
                  variant="text"
                  placeholder="Sisi"
                  onChange={handleInputChange}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="jenisKayuLain"
                  type="text"
                  variant="disabled"
                  placeholder="Jenis Kayu"
                  value={jenisKayu}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
            </tr>
            {/* Dan Lain-lain End */}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Label variant="default" size="default">
                  Total Seluruh Sisi
                  <Input
                    name="totalSisiKeseluruhan"
                    type="text"
                    variant="disabled"
                    placeholder="Total Sisi"
                    readOnly={true}
                    value={totalSisiKeseluruhan}
                  />
                </Label>
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Label variant="default" size="default">
                  Total Seluruh Kubikasi
                  <Input
                    name="totalKubikasiKeseluruhan"
                    type="text"
                    variant="disabled"
                    placeholder="Kubikasi"
                    readOnly={true}
                    value={totalKubikasiKeseluruhan}
                  />
                </Label>
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Label variant="default" size="default">
                  Total Seluruh Harga
                  <Input
                    name="totalHargaKeseluruhan"
                    type="text"
                    variant="disabled"
                    placeholder="Total"
                    readOnly={true}
                    value={priceFormat(totalHargaKeseluruhan)}
                  />
                </Label>
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
        {/* Depan */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Depan</span>
          <Label variant="default" size="default">
            Sisi Depan
            <Input
              readOnly={true}
              name="depan"
              defaultValue="Depan"
              variant="disabled"
              placeholder="Depan"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Panjang Depan
            <Input
              name="panjangDepan"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangDepan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Lebar Depan
            <Input
              name="lebarDepan"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarDepan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Tebal Depan
            <Input
              name="tebalDepan"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalDepan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Sisi Depan
            <Input
              name="sisiDepan"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.sisiDepan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Belakang */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Belakang</span>
          <Label variant="default" size="default">
            Sisi Belakang
            <Input
              readOnly={true}
              name="belakang"
              defaultValue="Belakang"
              variant="disabled"
              placeholder="Belakang"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Panjang Belakang
            <Input
              name="panjangBelakang"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangBelakang}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Lebar Belakang
            <Input
              name="lebarBelakang"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarBelakang}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Tebal Belakang
            <Input
              name="tebalBelakang"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalBelakang}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Sisi Belakang
            <Input
              name="sisiBelakang"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.sisiBelakang}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default" size="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Samping */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Samping</span>
          <Label variant="default">
            Sisi Samping
            <Input
              readOnly={true}
              name="samping"
              defaultValue="Samping"
              variant="disabled"
              placeholder="Samping"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Panjang Samping
            <Input
              name="panjangSamping"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangSamping}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Lebar Samping
            <Input
              name="lebarSamping"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarSamping}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Tebal Samping
            <Input
              name="tebalSamping"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalSamping}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Sisi Samping
            <Input
              name="sisiSamping"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.sisiSamping}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Atas Bawah */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Atas Bawah</span>
          <Label variant="default">
            Sisi Atas Bawah
            <Input
              readOnly={true}
              name="atasBawah"
              defaultValue="Atas Bawah"
              variant="disabled"
              placeholder="Atas Bawah"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Panjang Atas Bawah
            <Input
              name="panjangAtasBawah"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangAtasBawah}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Lebar Atas Bawah
            <Input
              name="lebarAtasBawah"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarAtasBawah}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Tebal Atas Bawah
            <Input
              name="tebalAtasBawah"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalAtasBawah}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Sisi Atas Bawah
            <Input
              name="sisiAtasBawah"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.sisiAtasBawah}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Ambalan */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Ambalan</span>
          <Label variant="default">
            Sisi Ambalan
            <Input
              readOnly={true}
              name="ambalan"
              defaultValue="Ambalan"
              variant="disabled"
              placeholder="Ambalan"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Panjang Ambalan
            <Input
              name="panjangAmbalan"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangAmbalan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Lebar Ambalan
            <Input
              name="lebarAmbalan"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarAmbalan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Tebal Ambalan
            <Input
              name="tebalAmbalan"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalAmbalan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Sisi Ambalan
            <Input
              name="sisiAmbalan"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.sisiAmbalan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Lain-lain */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Sisi Lain-lain</span>
          <Label variant="default">
            Sisi Lain-lain
            <Input
              readOnly={true}
              name="lainLain"
              defaultValue="Lain-lain"
              variant="disabled"
              placeholder="Lain-lain"
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Panjang Lain-lain
            <Input
              name="panjangLain"
              type="number"
              variant="text"
              placeholder="Panjang"
              value={inputChange.panjangLain}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Lebar Lain-lain
            <Input
              name="lebarLain"
              type="number"
              variant="text"
              placeholder="Lebar"
              value={inputChange.lebarLain}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Tebal Ambalan
            <Input
              name="tebalLain"
              type="number"
              variant="text"
              placeholder="Tebal"
              value={inputChange.tebalLain}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Sisi Lain-lain
            <Input
              name="sisiLain"
              type="number"
              variant="text"
              placeholder="Sisi"
              value={inputChange.panjangDepan}
              onChange={handleInputChange}
            />
          </Label>
          <Label variant="default">
            Jenis Kayu
            <Select
              list={jenisKayuData}
              name="jenisKayu"
              variant="text"
              value={jenisKayu}
              onChange={handleInputSelect}
              placeholder="Jenis Kayu"
            />
          </Label>
        </div>
        {/* Total */}
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <span>Total Keseluruhan</span>
          <Label variant="default">
            Total Sisi
            <Input
              name="totalSisiKeseluruhan"
              type="text"
              variant="disabled"
              placeholder="Total Sisi"
              readOnly={true}
              value={totalSisiKeseluruhan}
            />
          </Label>
          <Label variant="default">
            Total Kubikasi
            <Input
              name="totalKubikasiKeseluruhan"
              type="text"
              variant="disabled"
              placeholder="Kubikasi"
              readOnly={true}
              value={totalKubikasiKeseluruhan}
            />
          </Label>
          <Label variant="default">
            Total Harga
            <Input
              name="totalHargaKeseluruhan"
              type="text"
              variant="disabled"
              placeholder="Total"
              readOnly={true}
              value={priceFormat(totalHargaKeseluruhan)}
            />
          </Label>
        </div>
        <Button
          type="button"
          variant="primaryOutline"
          onClick={handleHitung}
          className="w-full"
        >
          Hitung
        </Button>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}
    </>
  );
};

export default TabelHitungKayu;
