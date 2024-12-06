// import Accordion from "../components/Accordion/Accordion";
import { useState } from "react";
// import Button from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import Input from "../components/Input/Input";
import TabelHitungKayu from "../components/Table/TabelHitungKayu";
import { toast } from "react-toastify";

const CalculatorView = () => {
  // Kayu
  const [total, setTotal] = useState(0);
  const [totalSisi, setTotalSisi] = useState(0);
  const [kubikasi, setKubikasi] = useState(0);
  const [inputKayu, setInputKayu] = useState({});
  // const [items] = useState([]);

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
    const panjang = parseFloat(inputKayu.panjang);
    const lebar = parseFloat(inputKayu.lebar);
    const tebal = parseFloat(inputKayu.tebal);
    const harga = parseFloat(inputKayu.harga);

    // Validasi input (contoh: pastikan semua nilai positif)
    if (
      isNaN(panjang) ||
      isNaN(lebar) ||
      isNaN(tebal) ||
      isNaN(harga) ||
      panjang <= 0 ||
      lebar <= 0 ||
      tebal <= 0 ||
      harga <= 0
    ) {
      toast.warning("Masukkan nilai yang valid (angka positif)");
      return;
    }

    const totalSisi = panjang * lebar * tebal;
    setTotalSisi(totalSisi);

    const totalKubikasi = totalSisi / 10000000;
    setKubikasi(totalKubikasi);

    const totalHarga = totalSisi * harga;
    setTotal(totalHarga);

    // items.push({
    //   depan: {
    //     panjang: inputKayu.panjang,
    //     lebar: inputKayu.lebar,
    //     tebal: inputKayu.tebal,
    //     harga: inputKayu.harga,
    //   },
    // });
    // console.log(items);

    console.log({ inputKayu, totalHarga });
  };

  // Handle Kayu Submit
  const kayuSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    console.log(data);
  };

  return (
    <div className="p-5 grid gap-5">
      <div className="flex gap-5">
        <Input
          name="barang"
          variant="text"
          placeholder="Masukkan nama barang"
        />
        <Input
          name="client"
          variant="text"
          placeholder="Masukkan nama client"
        />
      </div>

      <Card>
        <div className="px-[5px] py-[9px]">
          {/* <Accordion /> */}
          <h1>Tabel Hitung Kayu</h1>
          <TabelHitungKayu
            handleChangeKayu={handleChangeKayu}
            totalSisi={totalSisi}
            kubikasi={kubikasi}
            total={total}
            kayuSubmit={kayuSubmit}
            hitungKayu={hitungKayu}
          />
        </div>
      </Card>
    </div>
  );
};

export default CalculatorView;
