import { getCalculatorById } from "@/api/calculatorAPI";
import { Card } from "@/components/Organisms/Card/Card";
import { priceFormat } from "@/components/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CalculatorView = () => {
  const { id } = useParams();

  const [calculatorById, setCalculatorById] = useState("");

  // Material Kayu
  const [materials, setMaterials] = useState("");
  const [materialKayu, setMaterialKayu] = useState("");

  // Tukang Kayu
  const [tukangKayu, setTukangKayu] = useState("");
  const [tukangKayuData, setTukangKayuData] = useState("");

  // Tukang Finishing
  const [tukangFinishing, setTukangFinishing] = useState("");
  const [tukangFinishingData, setTukangFinishingData] = useState("");

  // Material Tambahan
  const [materialTambahan, setMaterialTambahan] = useState("");
  const [materialTambahanData, setMaterialTambahanData] = useState("");

  // Aksesoris
  const [aksesoris, setAksesoris] = useState("");
  const [aksesorisData, setAksesorisData] = useState("");

  // Keseluruhan Item
  const [keseluruhanItem, setKeseluruhanItem] = useState({});

  // Harga
  const [harga, setHarga] = useState({});

  useEffect(() => {
    fetchCalculatorById(id);
  }, [id]);

  const fetchCalculatorById = (id) => {
    getCalculatorById(id).then(
      ({
        res,
        resMaterials,
        resTukangKayu,
        resTukangFinishing,
        resMaterialTambahan,
        resAksesoris,
        resKeseluruhanItem,
        resHarga,
      }) => {
        setCalculatorById(res);
        setMaterials(resMaterials);
        setMaterialKayu(resMaterials.materialKayu);
        setTukangKayu(resTukangKayu);
        setTukangKayuData(resTukangKayu.kayu);
        setTukangFinishing(resTukangFinishing);
        setTukangFinishingData(resTukangFinishing.finishings);
        setMaterialTambahan(resMaterialTambahan);
        setMaterialTambahanData(resMaterialTambahan.itemsMaterialTambahan);
        setAksesoris(resAksesoris);
        setAksesorisData(resAksesoris.accessories);
        setKeseluruhanItem(resKeseluruhanItem);
        setHarga(resHarga);
      }
    );
  };

  // const totalHargaKayu = calculatorById.materials.totalHargaKayu;
  console.log(calculatorById);
  console.log(tukangKayu);
  // console.log(materialKayu);

  return (
    <>
      <main className="p-5 grid gap-5">
        <div className="lg:flex gap-5 items-end mb-5">
          <h1 className="text-md py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-white text-[#5E6366]">
            {calculatorById.namaBarang}
          </h1>
          <h1 className="text-md py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-white text-[#5E6366]">
            {calculatorById.namaClient}
          </h1>
        </div>

        {/* Material Kayu */}
        <Card>
          <section className="flex justify-between">
            <h1>Material</h1>
            <div className="flex gap-5">
              <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
                {materials.totalKubikasi}
              </p>
              <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
                {priceFormat(materials.totalHargaKayu)}
              </p>
            </div>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Sisi</th>
                  <th className="font-normal px-6 py-3">Panjang (cm)</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Lebar (cm)
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Tebal (cm)
                  </th>
                  <th className="font-normal px-6 py-3">Jumlah Sisi</th>
                  <th className="font-normal px-6 py-3">Jenis Kayu</th>
                  <th className="font-normal px-6 py-3">Kubikasi</th>
                  <th className="font-normal px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {materialKayu.length > 0 &&
                  materialKayu.map((item, index) => (
                    <tr key={index} className="text-night_40 text-left text-sm">
                      <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                        {item.data.sisi}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-3">
                        {item.data.panjang}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.lebar}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.tebal}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.jumlahSisi}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.jenisKayu}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.kubikasiPerSisi.toFixed(3)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.hargaPerSisi)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </Card>

        {/* Tukang Kayu */}
        <Card>
          <section className="flex justify-between">
            <h1>Tukang Kayu</h1>
            <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
              {priceFormat(tukangKayu.totalTukangKayu)}
            </p>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Nama Tukang</th>
                  <th className="font-normal px-6 py-3">Panjang (cm)</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Lebar (cm)
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Rumus
                  </th>
                  <th className="font-normal px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {tukangKayuData.length > 0 &&
                  tukangKayuData.map((item, index) => (
                    <tr key={index} className="text-night_40 text-left text-sm">
                      <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                        {item.data.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-3">
                        {item.data.panjang}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.lebar}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.rumus}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.hargaKayu)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </Card>

        {/* Tukang Finishing */}
        <Card>
          <section className="flex justify-between">
            <h1>Tukang Finishing</h1>
            <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
              {priceFormat(tukangFinishing.totalTukangFinishing)}
            </p>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Nama Tukang</th>
                  <th className="font-normal px-6 py-3">Panjang (cm)</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Lebar (cm)
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Rumus
                  </th>
                  <th className="font-normal px-6 py-3">Jenis Finishing</th>
                  <th className="font-normal px-6 py-3">Gerinda</th>
                  <th className="font-normal px-6 py-3">Packing</th>
                  <th className="font-normal px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {tukangFinishingData.length > 0 &&
                  tukangFinishingData.map((item, index) => (
                    <tr key={index} className="text-night_40 text-left text-sm">
                      <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                        {item.data.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-3">
                        {item.data.panjang}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.lebar}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.rumus}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.jenisFinishing}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.gerinda)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.packing)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.totalPerFinishing)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </Card>

        {/* Material Tambahan */}
        <Card>
          <section className="flex justify-between">
            <h1>Material Tambahan</h1>
            <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
              {priceFormat(materialTambahan.totalMaterialTambahan)}
            </p>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Nama Material</th>
                  <th className="font-normal px-6 py-3">harga</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Panjang (cm)
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Lebar
                  </th>
                  <th className="font-normal px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {materialTambahanData.length > 0 &&
                  materialTambahanData.map((item, index) => (
                    <tr key={index} className="text-night_40 text-left text-sm">
                      <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                        {item.data.name}
                      </td>
                      <td className="whitespace-nowrap  px-6 py-3">
                        {item.data.harga}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.panjang}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {item.data.lebar}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.totalPerMaterialTambahan)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </Card>

        {/* Aksesoris */}
        <Card>
          <section className="flex justify-between">
            <h1>Aksesoris</h1>
            <p className="text-sm py-1.5 px-3 rounded-md border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366]">
              {priceFormat(aksesoris.totalAccessories)}
            </p>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Nama Aksesoris</th>
                  <th className="font-normal px-6 py-3">harga</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                {aksesorisData.length > 0 &&
                  aksesorisData.map((item, index) => (
                    <tr key={index} className="text-night_40 text-left text-sm">
                      <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3">
                        {priceFormat(item.harga)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </Card>

        {/* Keseluruhan Item */}
        <Card>
          <section className="flex justify-between">
            <h1>Keseluruhan Item</h1>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">Material</th>
                  <th className="font-normal px-6 py-3">Tukang Kayu</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Tukang Finishing
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Gerinda
                  </th>
                  <th className="font-normal px-6 py-3">Packing</th>
                  <th className="font-normal px-6 py-3">Material Tambahan</th>
                  <th className="font-normal px-6 py-3">
                    Aksesoris & Akomodasi
                  </th>
                  <th className="font-normal px-6 py-3">Keuntungan</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                <tr className="text-night_40 text-left text-sm">
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {priceFormat(keseluruhanItem.materialKayu)}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">
                    {priceFormat(keseluruhanItem.tukangKayu)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(keseluruhanItem.tukangFinishing)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(keseluruhanItem.tukangGerinda)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(keseluruhanItem.tukangPacking)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(keseluruhanItem.materialTambahan)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(keseluruhanItem.aksesoris)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {keseluruhanItem.persenKeuntungan}% ={" "}
                    {priceFormat(keseluruhanItem.keuntungan)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </Card>

        {/* Harga */}
        <Card>
          <section className="flex justify-between">
            <h1>Harga</h1>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="border-b border-t border-[#E1E2E9]">
                <tr className="text-left text-sm text-night_90">
                  <th className="font-normal px-6 py-3">
                    Keseluruhan Produksi
                  </th>
                  <th className="font-normal px-6 py-3">Harga Jual</th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Keuntungan
                  </th>
                  <th className="font-normal px-6 py-3 hidden md:table-cell">
                    Bagi Hasil
                  </th>
                  <th className="font-normal px-6 py-3">Total Bahan Baku</th>
                  <th className="font-normal px-6 py-3">Borongan Tukang</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#E1E2E9]">
                <tr className="text-night_40 text-left text-sm">
                  <td className="whitespace-nowrap px-6 py-3 w-full max-w-0 sm:w-auto sm:max-w-none">
                    {priceFormat(harga.kalkulasiProduksi)}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3">
                    {priceFormat(harga.hargaJual)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(harga.keuntungan)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    {priceFormat(harga.bagiHasil)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    <p className="flex justify-between">
                      <span>Kubikasi</span>
                      {harga.totalKubikasi}
                    </p>
                    <p className="flex justify-between">
                      <span>Harga Kayu</span>
                      {priceFormat(harga.totalBahanBaku)}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">
                    <p className="flex justify-between">
                      <span>Tukang Kayu</span>
                      {priceFormat(harga.boronganTukangKayu)}
                    </p>
                    <p className="flex justify-between">
                      <span>Tukang Finishing</span>
                      {priceFormat(harga.boronganTukangFinishing)}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </Card>
      </main>
    </>
  );
};

export default CalculatorView;
