// import Accordion from "../components/Accordion/Accordion";
import Button from "@components/Atoms/Button/Button";
import { Card } from "@components/Organisms/Card/Card";
import Input from "@components/Atoms/Input/Input";
import TabelHitungBahanTambahan from "@/components/Organisms/Table/TabelHitungBahanTambahan";
import TabelHitungAksesoris from "@/components/Organisms/Table/TabelHitungAksesoris";
import { useSelector } from "react-redux";
import TableFinishing from "@/components/Organisms/Table/TableFinishing";
import TableKayu from "@/components/Organisms/Table/TableKayu";
import { priceFormat } from "@/components/utils";
import TableMaterialKayu from "@/components/Organisms/Table/TableMaterialKayu";
import TableKeseluruhan from "@/components/Organisms/Table/TableKeseluruhan";
import TableHarga from "@/components/Organisms/Table/TableHarga";

const CalculatorView = () => {
  const { totalHargaKayu } = useSelector((state) => state.kayuState);
  const { kayu, totalKayu } = useSelector((state) => state.tukangKayuState);
  const { finishings, totalFinishing } = useSelector(
    (state) => state.finishingState
  );
  const { itemsBahanTambahan, totalBahanTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const { accessories, totalPriceAccessories } = useSelector(
    (state) => state.accessoriesState
  );

  const totalKeseluruhan =
    totalHargaKayu +
    totalKayu +
    totalFinishing +
    totalBahanTambahan +
    totalPriceAccessories;

  // Handle Kayu Submit
  const kayuSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    const barang = data.barang;
    const client = data.client;

    // const kayu = [
    //   {
    //     jenisKayu: data.jenisKayu,
    //     depan: {
    //       panjang: data.panjangDepan,
    //       lebar: data.lebarDepan,
    //       tebal: data.tebalDepan,
    //       jenisKayu: data.jenisKayuDepan,
    //       sisi: data.sisiDepan,
    //     },
    //     belakang: {
    //       panjang: data.panjangBelakang,
    //       lebar: data.lebarBelakang,
    //       tebal: data.tebalBelakang,
    //       jenisKayu: data.jenisKayuBelakang,
    //       sisi: data.sisiBelakang,
    //     },
    //     samping: {
    //       panjang: data.panjangSamping,
    //       lebar: data.lebarSamping,
    //       tebal: data.tebalSamping,
    //       jenisKayu: data.jenisKayuSamping,
    //       sisi: data.sisiSamping,
    //     },
    //     atasBawah: {
    //       panjang: data.panjangAtasBawah,
    //       lebar: data.lebarAtasBawah,
    //       tebal: data.tebalAtasBawah,
    //       jenisKayu: data.jenisKayuAtasBawah,
    //       sisi: data.sisiAtasBawah,
    //     },
    //     ambalan: {
    //       panjang: data.panjangAmbalan,
    //       lebar: data.lebarAmbalan,
    //       tebal: data.tebalAmbalan,
    //       jenisKayu: data.jenisKayuAmbalan,
    //       sisi: data.sisiAmbalan,
    //     },
    //   },
    // ];

    const tukangKayu = { kayu, totalKayu };
    const finishing = { finishings, totalFinishing };
    const bahanTambahan = { itemsBahanTambahan, totalBahanTambahan };
    const aksesoris = { accessories, totalPriceAccessories };

    console.log({
      totalKeseluruhan,
      barang,
      client,
      tukangKayu,
      finishing,
      bahanTambahan,
      aksesoris,
    });
  };

  return (
    <>
      <form onSubmit={kayuSubmit}>
        {/* Section 1 Start */}
        <section className="sticky top-16 p-5 lg:flex lg:justify-between items-end bg-main_background">
          <div className="lg:flex gap-5">
            <label className="text-xs font-medium text-night_90">
              <span>Nama Barang</span>
              <Input
                name="barang"
                variant="text"
                placeholder="Masukkan nama barang"
              />
            </label>

            <label className="text-xs font-medium text-night_90">
              <span>Nama Client</span>
              <Input
                name="client"
                variant="text"
                placeholder="Masukkan nama client"
              />
            </label>
          </div>
          <div className="flex gap-5 items-end">
            <label className="text-xs font-medium text-night_90">
              <span>Total</span>
              <Input
                name="totalKeseluruhan"
                variant="disabled"
                value={priceFormat(totalKeseluruhan)}
                readOnly={true}
              />
            </label>
            <div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full mt-5 lg:mt-0"
              >
                Save
              </Button>
            </div>
          </div>
        </section>
        {/* Section 1 End */}

        <section className="grid gap-5 px-5 pb-5">
          <Card>
            <div className="px-[5px] py-[9px]">
              <TableMaterialKayu />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <TableKayu />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <TableFinishing />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <TabelHitungBahanTambahan />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <TabelHitungAksesoris />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <h1>Keseluruhan Item</h1>
              <TableKeseluruhan />
            </div>
          </Card>

          <Card>
            <div className="px-[5px] py-[9px]">
              <h1>Harga</h1>
              <TableHarga />
            </div>
          </Card>
        </section>
      </form>
    </>
  );
};

export default CalculatorView;
