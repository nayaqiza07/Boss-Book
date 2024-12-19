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

import { createCalculator } from "@/api/calculatorAPI";
import { Link } from "react-router-dom";

const Calculator = () => {
  const { materialKayu, totalKubikasi, totalHargaKayu } = useSelector(
    (state) => state.kayuState
  );
  const { kayu, totalTukangKayu } = useSelector(
    (state) => state.tukangKayuState
  );
  const {
    finishings,
    totalHargaFinishing,
    totalGerinda,
    totalPacking,
    totalTukangFinishing,
  } = useSelector((state) => state.finishingState);
  const { itemsMaterialTambahan, totalMaterialTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const { accessories, totalAccessories } = useSelector(
    (state) => state.accessoriesState
  );
  const { persenKeuntungan, keuntungan, bagiHasil } = useSelector(
    (state) => state.hargaState
  );

  const totalKeseluruhan =
    totalHargaKayu +
    totalTukangKayu +
    totalTukangFinishing +
    totalMaterialTambahan +
    totalAccessories;

  // Handle Kayu Submit
  const kayuSubmit = async (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    const namaBarang = data.barang;
    const namaClient = data.client;

    const materials = { materialKayu, totalKubikasi, totalHargaKayu };

    const tukangKayu = { kayu, totalTukangKayu };
    const tukangFinishing = { finishings, totalTukangFinishing };
    const materialTambahan = { itemsMaterialTambahan, totalMaterialTambahan };
    const aksesoris = { accessories, totalAccessories };

    const keseluruhanItem = {
      materialKayu: totalHargaKayu,
      tukangKayu: totalTukangKayu,
      tukangFinishing: totalHargaFinishing,
      tukangGerinda: totalGerinda,
      tukangPacking: totalPacking,
      materialTambahan: totalMaterialTambahan,
      aksesoris: totalAccessories,
      persenKeuntungan: parseInt(persenKeuntungan),
      keuntungan: keuntungan,
    };

    const harga = {
      kalkulasiProduksi: totalKeseluruhan,
      hargaJual: totalKeseluruhan + keuntungan,
      keuntungan: keuntungan,
      bagiHasil: bagiHasil,
      totalKubikasi: totalKubikasi,
      totalBahanBaku: totalHargaKayu,
      boronganTukangKayu: totalTukangKayu,
      boronganTukangFinishing: totalHargaFinishing / 2,
    };

    await createCalculator(
      namaBarang,
      namaClient,
      materials,
      tukangKayu,
      tukangFinishing,
      materialTambahan,
      aksesoris,
      keseluruhanItem,
      harga
    );
  };

  return (
    <>
      <form onSubmit={kayuSubmit}>
        {/* Section 1 Start */}
        <section className="sticky top-16 p-5 lg:flex lg:justify-between items-end bg-main_background">
          <div className="lg:flex gap-5 items-end">
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
            <div>
              <Link to={"data"}>
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  className="w-full mt-5 lg:mt-0"
                >
                  View Data
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-5 flex gap-5 justify-between items-end">
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

export default Calculator;
