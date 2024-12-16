// import Accordion from "../components/Accordion/Accordion";
import Button from "@components/Atoms/Button/Button";
import { Card } from "@components/Organisms/Card/Card";
import Input from "@components/Atoms/Input/Input";
import TabelHitungKayu from "@components/Organisms/Table/TabelHitungKayu";
import TabelHitungTukangKayu from "@components/Organisms/Table/TabelHitungTukangKayu";
import TabelHitungBahanTambahan from "@/components/Organisms/Table/TabelHitungBahanTambahan";
import TabelHitungAksesoris from "@/components/Organisms/Table/TabelHitungAksesoris";
import { useSelector } from "react-redux";
import TableFinishing from "@/components/Organisms/Table/TableFinishing";

const CalculatorView = () => {
  const { accessories, totalPriceAccessories } = useSelector(
    (state) => state.accessoriesState
  );
  const { itemsBahanTambahan, totalBahanTambahan } = useSelector(
    (state) => state.bahanTambahanState
  );
  const { finishings, totalFinishing } = useSelector(
    (state) => state.finishingState
  );

  // Handle Kayu Submit
  const kayuSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    const barang = data.barang;
    const client = data.client;
    const keseluruhanSisi = data.totalSisiKeseluruhan;
    const keseluruhanKubikasi = data.totalKubikasiKeseluruhan;
    const keseluruhanHarga = data.totalHargaKeseluruhan;

    const kayu = [
      {
        jenisKayu: data.jenisKayu,
        depan: {
          panjang: data.panjangDepan,
          lebar: data.lebarDepan,
          tebal: data.tebalDepan,
          jenisKayu: data.jenisKayuDepan,
          sisi: data.sisiDepan,
        },
        belakang: {
          panjang: data.panjangBelakang,
          lebar: data.lebarBelakang,
          tebal: data.tebalBelakang,
          jenisKayu: data.jenisKayuBelakang,
          sisi: data.sisiBelakang,
        },
        samping: {
          panjang: data.panjangSamping,
          lebar: data.lebarSamping,
          tebal: data.tebalSamping,
          jenisKayu: data.jenisKayuSamping,
          sisi: data.sisiSamping,
        },
        atasBawah: {
          panjang: data.panjangAtasBawah,
          lebar: data.lebarAtasBawah,
          tebal: data.tebalAtasBawah,
          jenisKayu: data.jenisKayuAtasBawah,
          sisi: data.sisiAtasBawah,
        },
        ambalan: {
          panjang: data.panjangAmbalan,
          lebar: data.lebarAmbalan,
          tebal: data.tebalAmbalan,
          jenisKayu: data.jenisKayuAmbalan,
          sisi: data.sisiAmbalan,
        },
      },
    ];

    const tukangKayu = [
      {
        name: data.namaTukangKayu,
        panjang: data.panjangTukangKayu,
        lebar: data.lebarTukangKayu,
        persen: data.persenTukangKayu,
        total: data.totalTukangKayu,
      },
    ];
    const finishing = { finishings, totalFinishing };
    const bahanTambahan = { itemsBahanTambahan, totalBahanTambahan };
    const aksesoris = { accessories, totalPriceAccessories };

    console.log({
      barang,
      client,
      kayu,
      tukangKayu,
      finishing,
      keseluruhanSisi,
      keseluruhanKubikasi,
      keseluruhanHarga,
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
        </section>
        {/* Section 1 End */}

        <section className="grid gap-5 px-5 pb-5">
          <section>
            <Card>
              <div className="px-[5px] py-[9px]">
                {/* <Accordion /> */}
                <h1>Tabel Hitung Kayu</h1>
                <TabelHitungKayu />
              </div>
            </Card>
          </section>

          <section>
            <Card>
              <div className="px-[5px] py-[9px]">
                <h1>Tabel Hitung Tukang Kayu</h1>
                <TabelHitungTukangKayu />
              </div>
            </Card>
          </section>

          <section>
            <Card>
              <div className="px-[5px] py-[9px]">
                {/* <TabelHitungTukangFinishing /> */}
                <TableFinishing />
              </div>
            </Card>
          </section>

          <section>
            <Card>
              <div className="px-[5px] py-[9px]">
                <TabelHitungBahanTambahan />
              </div>
            </Card>
          </section>

          <Card>
            <div className="px-[5px] py-[9px]">
              <TabelHitungAksesoris />
            </div>
          </Card>
        </section>
      </form>
    </>
  );
};

export default CalculatorView;
