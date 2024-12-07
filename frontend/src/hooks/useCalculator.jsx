import { useState } from "react";
// import { toast } from "react-toastify";

export const useKayu = () => {
  // Kayu
  const [inputKayu, setInputKayu] = useState({});
  // Depan
  const [totalDepan, setTotalDepan] = useState(0);
  const [totalSisiDepan, setTotalSisiDepan] = useState(0);
  const [kubikasiDepan, setKubikasiDepan] = useState(0);

  // Belakang
  const [totalBelakang, setTotalBelakang] = useState(0);
  const [totalSisiBelakang, setTotalSisiBelakang] = useState(0);
  const [kubikasiBelakang, setKubikasiBelakang] = useState(0);

  // Samping
  const [totalSamping, setTotalSamping] = useState(0);
  const [totalSisiSamping, setTotalSisiSamping] = useState(0);
  const [kubikasiSamping, setKubikasiSamping] = useState(0);

  // Atas Bawah
  const [totalAtasBawah, setTotalAtasBawah] = useState(0);
  const [totalSisiAtasBawah, setTotalSisiAtasBawah] = useState(0);
  const [kubikasiAtasBawah, setKubikasiAtasBawah] = useState(0);

  // Ambalan
  const [totalAmbalan, setTotalAmbalan] = useState(0);
  const [totalSisiAmbalan, setTotalSisiAmbalan] = useState(0);
  const [kubikasiAmbalan, setKubikasiAmbalan] = useState(0);

  // Total Keseluruhan
  const [totalSisiKeseluruhan, setTotalSisiKeseluruhan] = useState(0);
  const [totalKubikasiKeseluruhan, setTotalKubikasiKeseluruhan] = useState(0);
  const [totalHargaKeseluruhan, setTotalHargaKeseluruhan] = useState(0);

  // handleChangeKayu
  const handleChangeKayu = (e) => {
    setInputKayu({
      ...inputKayu,
      [e.target.name]: e.target.value,
    });
  };

  // Hitung Kayu
  const hitungKayu = () => {
    // Konversi nilai input menjadi angka dan lakukan validasi
    // Depan
    const panjangDepan = parseFloat(inputKayu.panjangDepan);
    const lebarDepan = parseFloat(inputKayu.lebarDepan);
    const tebalDepan = parseFloat(inputKayu.tebalDepan);
    const hargaDepan = parseFloat(inputKayu.hargaDepan);

    // Belakang
    const panjangBelakang = parseFloat(inputKayu.panjangBelakang);
    const lebarBelakang = parseFloat(inputKayu.lebarBelakang);
    const tebalBelakang = parseFloat(inputKayu.tebalBelakang);
    const hargaBelakang = parseFloat(inputKayu.hargaBelakang);

    // Samping
    const panjangSamping = parseFloat(inputKayu.panjangSamping);
    const lebarSamping = parseFloat(inputKayu.lebarSamping);
    const tebalSamping = parseFloat(inputKayu.tebalSamping);
    const hargaSamping = parseFloat(inputKayu.hargaSamping);

    // AtasBawah
    const panjangAtasBawah = parseFloat(inputKayu.panjangAtasBawah);
    const lebarAtasBawah = parseFloat(inputKayu.lebarAtasBawah);
    const tebalAtasBawah = parseFloat(inputKayu.tebalAtasBawah);
    const hargaAtasBawah = parseFloat(inputKayu.hargaAtasBawah);

    // Ambalan
    const panjangAmbalan = parseFloat(inputKayu.panjangAmbalan);
    const lebarAmbalan = parseFloat(inputKayu.lebarAmbalan);
    const tebalAmbalan = parseFloat(inputKayu.tebalAmbalan);
    const hargaAmbalan = parseFloat(inputKayu.hargaAmbalan);

    // Validasi input (contoh: pastikan semua nilai positif)
    // if (
    //   isNaN(panjang) ||
    //   isNaN(lebar) ||
    //   isNaN(tebal) ||
    //   isNaN(harga) ||
    //   panjang <= 0 ||
    //   lebar <= 0 ||
    //   tebal <= 0 ||
    //   harga <= 0
    // ) {
    //   toast.warning("Masukkan nilai yang valid (angka positif)");
    //   return;
    // }

    // Perhitungan Sisi Depan
    const totalSisiDepan = panjangDepan * lebarDepan * tebalDepan;
    setTotalSisiDepan(totalSisiDepan);

    const totalKubikasiDepan = totalSisiDepan / 10000000;
    setKubikasiDepan(totalKubikasiDepan);

    const totalHargaDepan = totalSisiDepan * hargaDepan;
    setTotalDepan(totalHargaDepan);

    // Perhitungan Sisi Belakang
    const totalSisiBelakang = panjangBelakang * lebarBelakang * tebalBelakang;
    setTotalSisiBelakang(totalSisiBelakang);

    const totalKubikasiBelakang = totalSisiBelakang / 10000000;
    setKubikasiBelakang(totalKubikasiBelakang);

    const totalHargaBelakang = totalSisiBelakang * hargaBelakang;
    setTotalBelakang(totalHargaBelakang);

    // Perhitungan Sisi Samping
    const totalSisiSamping = panjangSamping * lebarSamping * tebalSamping;
    setTotalSisiSamping(totalSisiSamping);

    const totalKubikasiSamping = totalSisiSamping / 10000000;
    setKubikasiSamping(totalKubikasiSamping);

    const totalHargaSamping = totalSisiSamping * hargaSamping;
    setTotalSamping(totalHargaSamping);

    // Perhitungan Sisi AtasBawah
    const totalSisiAtasBawah =
      panjangAtasBawah * lebarAtasBawah * tebalAtasBawah;
    setTotalSisiAtasBawah(totalSisiAtasBawah);

    const totalKubikasiAtasBawah = totalSisiAtasBawah / 10000000;
    setKubikasiAtasBawah(totalKubikasiAtasBawah);

    const totalHargaAtasBawah = totalSisiAtasBawah * hargaAtasBawah;
    setTotalAtasBawah(totalHargaAtasBawah);

    // Perhitungan Sisi Ambalan
    const totalSisiAmbalan = panjangAmbalan * lebarAmbalan * tebalAmbalan;
    setTotalSisiAmbalan(totalSisiAmbalan);

    const totalKubikasiAmbalan = totalSisiAmbalan / 10000000;
    setKubikasiAmbalan(totalKubikasiAmbalan);

    const totalHargaAmbalan = totalSisiAmbalan * hargaAmbalan;
    setTotalAmbalan(totalHargaAmbalan);

    // if (
    //   isNaN(totalSisiDepan) ||
    //   isNaN(totalKubikasiDepan) ||
    //   isNaN(totalHargaDepan) ||
    //   isNaN(totalSisiBelakang) ||
    //   isNaN(totalKubikasiBelakang) ||
    //   isNaN(totalHargaBelakang) ||
    //   isNaN(totalSisiSamping) ||
    //   isNaN(totalKubikasiSamping) ||
    //   isNaN(totalHargaSamping) ||
    //   isNaN(totalSisiAtasBawah) ||
    //   isNaN(totalKubikasiAtasBawah) ||
    //   isNaN(totalHargaAtasBawah) ||
    //   isNaN(totalSisiAmbalan) ||
    //   isNaN(totalKubikasiAmbalan) ||
    //   isNaN(totalHargaAmbalan)
    // ) {
    //   return 0;
    // }

    // items.push({
    //   depan: {
    //     panjang: inputKayu.panjang,
    //     lebar: inputKayu.lebar,
    //     tebal: inputKayu.tebal,
    //     harga: inputKayu.harga,
    //   },
    // });
    // console.log(items);

    const totalSisiKeseluruhan =
      totalSisiDepan +
      totalSisiBelakang +
      totalSisiSamping +
      totalSisiAtasBawah +
      totalSisiAmbalan;
    setTotalSisiKeseluruhan(totalSisiKeseluruhan);

    const totalKubikasiKeseluruhan =
      totalKubikasiDepan +
      totalKubikasiBelakang +
      totalKubikasiSamping +
      totalKubikasiAtasBawah +
      totalKubikasiAmbalan;
    setTotalKubikasiKeseluruhan(totalKubikasiKeseluruhan);

    const totalHargaKeseluruhan =
      totalHargaDepan +
      totalHargaBelakang +
      totalHargaSamping +
      totalHargaAtasBawah +
      totalHargaAmbalan;
    setTotalHargaKeseluruhan(totalHargaKeseluruhan);

    console.log({ inputKayu, totalHargaKeseluruhan });
  };

  return {
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
  };
};

export const useTukangKayu = () => {
  const [inputTukangKayu, setInputTukangKayu] = useState({});

  const [total, setTotal] = useState(0);

  const handleTukangKayu = (e) => {
    setInputTukangKayu({
      ...inputTukangKayu,
      [e.target.name]: e.target.value,
    });
  };

  const hitungTukangKayu = () => {
    const panjang = parseFloat(inputTukangKayu.panjang);
    const lebar = parseFloat(inputTukangKayu.lebar);
    const persen = parseFloat(inputTukangKayu.persen);

    const total = panjang * lebar * persen;
    setTotal(total);

    console.log({ inputTukangKayu, total });
  };

  return {
    total,
    handleTukangKayu,
    hitungTukangKayu,
  };
};
