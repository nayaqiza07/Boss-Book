import { priceFormat } from "@/components/utils";
import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@components/Organisms/Modal/Modal";
import FormBahanTambahan from "@components/Organisms/Form/FormBahanTambahan";

// Redux Actions
import {
  setNamaKacaCermin,
  setHargaKacaCermin,
  setPanjangKacaCermin,
  setLebarKacaCermin,
  setBagiKacaCermin,
  setTotalKacaCermin,
  setNamaKacaPolos,
  setHargaKacaPolos,
  setPanjangKacaPolos,
  setLebarKacaPolos,
  setBagiKacaPolos,
  setTotalKacaPolos,
  setNamaMarmer,
  setHargaMarmer,
  setPanjangMarmer,
  setLebarMarmer,
  setBagiMarmer,
  setTotalMarmer,
  setNamaBesi,
  setHargaBesi,
  setPanjangBesi,
  setLebarBesi,
  setBagiBesi,
  setTotalBesi,
  setTotal,
} from "@/redux/slices/bahanTambahanSlice";

const TabelHitungBahanTambahan = () => {
  const {
    namaKacaCermin,
    namaKacaPolos,
    namaMarmer,
    namaBesi,
    totalKacaCermin,
    totalKacaPolos,
    totalMarmer,
    totalBesi,
    total,
  } = useSelector((state) => state.bahanTambahanState);
  const dispatch = useDispatch();

  // const formRef = useRef();

  const [openModal, setOpenModal] = useState(false);
  const [inputChange, setInputChange] = useState({
    nameKacaCermin: "",
    hargaKacaCermin: 0,
    panjangKacaCermin: 0,
    lebarKacaCermin: 0,
    bagiKacaCermin: 0,

    nameKacaPolos: "",
    hargaKacaPolos: 0,
    panjangKacaPolos: 0,
    lebarKacaPolos: 0,
    bagiKacaPolos: 0,

    nameMarmer: "",
    hargaMarmer: 0,
    panjangMarmer: 0,
    lebarMarmer: 0,
    bagiMarmer: 0,

    nameBesi: "",
    hargaBesi: 0,
    panjangBesi: 0,
    lebarBesi: 0,
    bagiBesi: 0,
  });

  const [judul, setJudul] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleInputChange = (e) => {
    setInputChange({
      ...inputChange,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalKacaCermin = () => {
    setOpenModal(true);
    setJudul("Tambah Kaca Cermin");
    setNameInput("KacaCermin");
  };

  const handleModalKacaPolos = () => {
    setOpenModal(true);
    setJudul("Tambah Kaca Polos");
    setNameInput("KacaPolos");
  };

  const handleModalMarmer = () => {
    setOpenModal(true);
    setJudul("Tambah Marmer");
    setNameInput("Marmer");
  };

  const handleModalBesi = () => {
    setOpenModal(true);
    setJudul("Tambah Besi");
    setNameInput("Besi");
  };

  const handleHitungBahanTambahan = () => {
    setOpenModal(false);

    dispatch(setNamaKacaCermin(inputChange.nameKacaCermin));
    dispatch(setHargaKacaCermin(inputChange.hargaKacaCermin));
    dispatch(setPanjangKacaCermin(inputChange.panjangKacaCermin));
    dispatch(setLebarKacaCermin(inputChange.lebarKacaCermin));
    dispatch(setBagiKacaCermin(inputChange.bagiKacaCermin));
    dispatch(setTotalKacaCermin(inputChange.totalKacaCermin));

    dispatch(setNamaKacaPolos(inputChange.nameKacaPolos));
    dispatch(setHargaKacaPolos(inputChange.hargaKacaPolos));
    dispatch(setPanjangKacaPolos(inputChange.panjangKacaPolos));
    dispatch(setLebarKacaPolos(inputChange.lebarKacaPolos));
    dispatch(setBagiKacaPolos(inputChange.bagiKacaPolos));
    dispatch(setTotalKacaPolos(inputChange.totalKacaPolos));

    dispatch(setNamaMarmer(inputChange.nameMarmer));
    dispatch(setHargaMarmer(inputChange.hargaMarmer));
    dispatch(setPanjangMarmer(inputChange.panjangMarmer));
    dispatch(setLebarMarmer(inputChange.lebarMarmer));
    dispatch(setBagiMarmer(inputChange.bagiMarmer));
    dispatch(setTotalMarmer(inputChange.totalMarmer));

    dispatch(setNamaBesi(inputChange.nameBesi));
    dispatch(setHargaBesi(inputChange.hargaBesi));
    dispatch(setPanjangBesi(inputChange.panjangBesi));
    dispatch(setLebarBesi(inputChange.lebarBesi));
    dispatch(setBagiBesi(inputChange.bagiBesi));
    dispatch(setTotalBesi(inputChange.totalBesi));

    // formRef.current.reset();
  };

  const handleHitungTotal = () => {
    dispatch(setTotal());
    console.log(inputChange);
  };

  return (
    <>
      <div className="hidden overflow-x-auto mt-5 md:block">
        <table className="w-full">
          <thead className="border-b border-t border-[#E1E2E9]">
            <tr className="text-left text-sm text-night_90">
              <th className="font-normal px-6 py-3">
                <div className="flex justify-between gap-3">
                  <Input
                    name="kacaCermin"
                    type="text"
                    variant="disabled"
                    placeholder="Kaca Cermin"
                    readOnly={true}
                    value={namaKacaCermin}
                  />
                  <Button type="button" onClick={handleModalKacaCermin}>
                    Tambah
                  </Button>
                </div>
              </th>
              <th className="font-normal px-6 py-3 hidden md:table-cell">
                <div className="flex justify-between gap-3">
                  <Input
                    name="kacaPolos"
                    type="text"
                    variant="disabled"
                    placeholder="Kaca Polos"
                    readOnly={true}
                    value={namaKacaPolos}
                  />
                  <Button type="button" onClick={handleModalKacaPolos}>
                    Tambah
                  </Button>
                </div>
              </th>
              <th className="font-normal px-6 py-3">
                <div className="flex justify-between gap-3">
                  <Input
                    name="marmer"
                    type="text"
                    variant="disabled"
                    placeholder="Marmer"
                    readOnly={true}
                    value={namaMarmer}
                  />
                  <Button type="button" onClick={handleModalMarmer}>
                    Tambah
                  </Button>
                </div>
              </th>
              <th className="font-normal px-6 py-3">
                <div className="flex justify-between gap-3">
                  <Input
                    name="besi"
                    type="text"
                    variant="disabled"
                    placeholder="Besi"
                    readOnly={true}
                    value={namaBesi}
                  />
                  <Button type="button" onClick={handleModalBesi}>
                    Tambah
                  </Button>
                </div>
              </th>
              <th className="font-normal px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E1E2E9]">
            <tr className="text-night_40 text-left text-sm">
              <td className="whitespace-nowrap  px-6 py-3">
                <Input
                  name="totalKacaCermin"
                  type="text"
                  variant="disabled"
                  placeholder="KacaCermin"
                  value={priceFormat(totalKacaCermin)}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="totalKacaPolos"
                  type="text"
                  variant="disabled"
                  placeholder="KacaPolos"
                  value={priceFormat(totalKacaPolos)}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="totalMarmer"
                  type="text"
                  variant="disabled"
                  placeholder="Marmer"
                  value={priceFormat(totalMarmer)}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <Input
                  name="totalBesi"
                  type="text"
                  variant="disabled"
                  placeholder="Besi"
                  value={priceFormat(totalBesi)}
                  readOnly={true}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-3 hidden md:table-cell">
                <Input
                  name="totalFinishing"
                  type="text"
                  variant="disabled"
                  placeholder="Total"
                  readOnly={true}
                  value={priceFormat(total)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end gap-5 mt-5 mb-3 mr-3">
          <Button
            type="button"
            variant="primaryOutline"
            onClick={handleHitungTotal}
          >
            Hitung
          </Button>
        </div>
      </div>

      {/* Table view up to the `md:` breakpoint Start  */}
      <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
        <div className="p-3 flex flex-col gap-5 border border-[#E1E2E9] rounded-lg">
          <label className="text-xs font-medium">
            Nama Tukang Finishing
            <Input
              name="namaTukangFinishing"
              type="text"
              variant="text"
              placeholder="Nama Tukang Finishing"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Panjang (cm)
            <Input
              name="panjangFinishing"
              type="number"
              variant="text"
              placeholder="Panjang in cm"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Lebar (cm)
            <Input
              name="lebarFinishing"
              type="number"
              variant="text"
              placeholder="Lebar in cm"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Persen (%)
            <Input
              name="persenFinishing"
              type="number"
              variant="text"
              placeholder="Persen (%)"
              onChange={handleInputChange}
            />
          </label>
          <label className="text-xs font-medium">
            Total
            <Input
              name="totalFinishing"
              type="text"
              variant="disabled"
              placeholder="Total"
              readOnly={true}
              value={priceFormat(total)}
            />
          </label>
          <Button
            type="button"
            variant="primaryOutline"
            // onClick={handleHitung}
            className="w-full"
          >
            Hitung
          </Button>
        </div>
      </div>
      {/* Table view up to the `md:` breakpoint End  */}

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header title={judul} closeModal={() => setOpenModal(false)} />

        <Modal.Body>
          <FormBahanTambahan
            handleInputChange={handleInputChange}
            name={nameInput}
          />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="button"
          closeModal={() => setOpenModal(false)}
          handleSubmit={handleHitungBahanTambahan}
        />
      </Modal>
    </>
  );
};

export default TabelHitungBahanTambahan;
