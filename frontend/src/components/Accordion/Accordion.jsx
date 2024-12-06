import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";
import { priceFormat } from "../utils";
// import { toast } from "react-toastify";

const Accordion = () => {
  const sisi = [
    {
      _id: "Depan",
      name: "Depan",
    },
    {
      _id: "Belakang",
      name: "Belakang",
    },
    {
      _id: "Samping",
      name: "Samping",
    },
    {
      _id: "Atas & Bawah",
      name: "Atas & Bawah",
    },
    {
      _id: "Ambalan",
      name: "Ambalan",
    },
  ];

  const tukangKayu = [
    {
      _id: "Depan",
      name: "Depan",
    },
    {
      _id: "Belakang",
      name: "Belakang",
    },
    {
      _id: "Samping",
      name: "Samping",
    },
    {
      _id: "Atas & Bawah",
      name: "Atas & Bawah",
    },
    {
      _id: "Ambalan",
      name: "Ambalan",
    },
  ];

  const aksesoris = [
    {
      _id: "Marmer",
      name: "Marmer",
    },
    {
      _id: "Kaca",
      name: "Kaca",
    },
    {
      _id: "Cermin",
      name: "Cermin",
    },
    {
      _id: "Besi",
      name: "Besi",
    },
  ];

  // Kayu
  const [total, setTotal] = useState(0);
  const [totalSisi, setTotalSisi] = useState(0);
  const [kubikasi, setKubikasi] = useState(0);
  const [input, setInput] = useState({});

  // Aksesoris
  const [totalAksesoris, setTotalAksoris] = useState(0);
  const [inputAksesoris, setInputAksesoris] = useState({});

  // Handle Kayu
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Aksesoris
  const aksesorisOnChange = (e) => {
    setInputAksesoris({
      ...inputAksesoris,
      [e.target.name]: e.target.value,
    });
  };

  // Hitung Kayu
  const hitungHasil = () => {
    // Konversi nilai input menjadi angka dan lakukan validasi
    const panjang = parseFloat(input.panjang);
    const lebar = parseFloat(input.lebar);
    const tebal = parseFloat(input.tebal);
    const harga = parseFloat(input.harga);

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
    //   toast.warning("Mohon masukkan nilai yang valid (angka positif)");
    //   return;
    // }

    // Hitung volume
    const volume = panjang * lebar * tebal;
    setTotalSisi(volume);
    // console.log(volume);

    // Hitung Kubikasi dari cm ke m3
    const hitungKubikasi = volume / 10000000;
    setKubikasi(hitungKubikasi);

    // Hitung total harga
    const totalHarga = volume * harga;
    // console.log(totalHarga);

    setTotal(totalHarga);
    console.log({ input, totalHarga });
  };

  // Hitung Aksesoris
  const hitungAksesoris = () => {
    // Konversi nilai input menjadi angka dan lakukan validasi
    const panjang = parseFloat(inputAksesoris.panjang);
    const lebar = parseFloat(inputAksesoris.lebar);

    // Validasi input (contoh: pastikan semua nilai positif)
    // if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
    //   toast.warning("Mohon masukkan nilai yang valid (angka positif)");
    //   return;
    // }

    // Hitung total harga
    const totalHargaAksesoris = panjang * lebar;
    setTotalAksoris(totalHargaAksesoris);
    console.log({ inputAksesoris, totalHargaAksesoris });
  };

  // Kayu Submit
  const handleKayuSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    console.log(data);
  };

  // Aksesoris Submit
  const handleAksesorisSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);

    console.log(data);
  };

  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">Kayu</div>
        <div className="collapse-content">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Calculator"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <form onSubmit={handleKayuSubmit}>
                <FormSelect
                  name="sisi"
                  placeholder="Sisi"
                  list={sisi}
                  onChange={handleOnChange}
                />

                <div className="lg:flex gap-5">
                  <FormInput
                    name="panjang"
                    placeholder="Panjang"
                    type="number"
                    onChange={handleOnChange}
                  />
                  <FormInput
                    name="lebar"
                    placeholder="Lebar"
                    type="number"
                    onChange={handleOnChange}
                  />
                  <FormInput
                    name="tebal"
                    placeholder="Tebal"
                    type="number"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="lg:flex gap-5">
                  <div className="flex flex-col">
                    <label className="text-xs text-[#5E6366]">Harga</label>
                    <FormInput
                      name="harga"
                      placeholder="Harga Kayu"
                      type="number"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="flex flex-col border w-full">
                    <label className="text-xs text-[#5E6366]">Total Sisi</label>
                    <FormInput
                      name="totalsisi"
                      placeholder="Total Sisi"
                      type="number"
                      // onChange={handleOnChange}
                      value={totalSisi}
                      readonly={true}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-[#5E6366]">Kubikasi</label>
                    <FormInput
                      name="kubikasi"
                      placeholder="Kubikasi"
                      type="number"
                      value={kubikasi}
                      readonly={true}
                    />
                  </div>
                </div>
                <FormInput
                  name="total"
                  placeholder="Total"
                  readonly={true}
                  value={priceFormat(total)}
                />

                <div className="flex justify-end gap-5">
                  <Button
                    type="button"
                    variant="primaryOutline"
                    size="sm"
                    onClick={hitungHasil}
                  >
                    Hitung
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Save
                  </Button>
                </div>
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Data"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Isi Data
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">Tukang Kayu</div>
        <div className="collapse-content">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Calculator"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <form>
                <FormSelect placeholder="Nama Tukang Kayu" list={tukangKayu} />

                <div className="lg:flex gap-5">
                  <FormInput placeholder="Panjang" type="number" />
                  <FormInput placeholder="Lebar" type="number" />
                </div>

                <FormInput placeholder="Persen" type="number" />

                <FormInput placeholder="Hasil" readonly={true} type="number" />

                <div className="flex justify-end gap-5">
                  <Button variant="primaryOutline" size="sm">
                    Hitung
                  </Button>
                  <Button variant="primary" size="sm">
                    Save
                  </Button>
                </div>
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Data"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Isi
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Tukang Finishing
        </div>
        <div className="collapse-content">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_3"
              role="tab"
              className="tab"
              aria-label="Calculator"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <form>
                <FormSelect
                  placeholder="Nama Tukang Finishing"
                  list={tukangKayu}
                />

                <div className="lg:flex gap-5">
                  <FormInput placeholder="Panjang" type="number" />
                  <FormInput placeholder="Lebar" type="number" />
                </div>

                <div className="lg:flex gap-5">
                  <FormInput placeholder="Persen" type="number" />
                  <FormInput placeholder="Gerinda" type="number" />
                  <FormInput placeholder="Packing" type="number" />
                </div>

                <FormInput placeholder="Hasil" readonly={true} type="number" />

                <div className="flex justify-end gap-5">
                  <Button variant="primaryOutline" size="sm">
                    Hitung
                  </Button>
                  <Button variant="primary" size="sm">
                    Save
                  </Button>
                </div>
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              role="tab"
              className="tab"
              aria-label="Data"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Isi Data
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Aksesoris & Akomodasi
        </div>
        <div className="collapse-content">
          <div role="tablist" className="tabs tabs-lifted">
            {/* Tab 1 */}
            <input
              type="radio"
              name="my_tabs_4"
              role="tab"
              className="tab"
              aria-label="Calculator"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <form onSubmit={handleAksesorisSubmit}>
                <FormSelect
                  list={aksesoris}
                  name="aksesoris"
                  placeholder="Aksesoris"
                  onChange={aksesorisOnChange}
                />

                <div className="lg:flex gap-5">
                  <FormInput
                    name="panjang"
                    placeholder="Panjang"
                    type="number"
                    onChange={aksesorisOnChange}
                  />
                  <FormInput
                    name="lebar"
                    placeholder="Lebar"
                    type="number"
                    onChange={aksesorisOnChange}
                  />
                </div>

                <FormInput
                  name="total"
                  placeholder="Total"
                  readonly={true}
                  value={priceFormat(totalAksesoris)}
                />

                <div className="flex justify-end gap-5">
                  <Button
                    type="button"
                    variant="primaryOutline"
                    size="sm"
                    onClick={hitungAksesoris}
                  >
                    Hitung
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Save
                  </Button>
                </div>
              </form>
            </div>

            {/* Tab 2 */}
            <input
              type="radio"
              name="my_tabs_4"
              role="tab"
              className="tab"
              aria-label="Data"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Isi Data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
