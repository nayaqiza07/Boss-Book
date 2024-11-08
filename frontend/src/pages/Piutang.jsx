import { useState } from "react";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { BiSolidPlusCircle, BiSolidMinusCircle } from "react-icons/bi";
import { Modal } from "../components/Modal";

const Piutang = () => {
  const [openModal, setOpenModal] = useState(false);
  const [judul, setJudul] = useState("");

  const handleModalPiutang = () => {
    setOpenModal(true);
    setJudul("Tambahkan Piutang");
  };

  const handleModalUtang = () => {
    setOpenModal(true);
    setJudul("Tambahkan Utang");
  };

  // Form
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [nominal, setNominal] = useState(0);
  const [category, setCategory] = useState("");

  const [sisaUang, setSisaUang] = useState(0);
  const [persenUang, setPersenUang] = useState(0);
  const [piutang, setPiutang] = useState(0);
  const [utang, setUtang] = useState(0);
  const [transaksiIn, setTransaksiIn] = useState(0);
  const [transaksiOut, setTransaksiOut] = useState(0);
  const histories = [
    {
      deskripsi: "Project A",
      tanggal: "1 July 2024",
      nominal: 1000000,
      category: "In",
    },
    {
      deskripsi: "Iklan",
      tanggal: "2 July 2024",
      nominal: 150000,
      category: "Out",
    },
  ];

  return (
    <div className="container mx-auto px-9 py-12">
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 gap-3 text-center">
          <h1 className="text-6xl font-bold text-primary">
            Pi / <span className="text-[#FF3666]">Utang</span>
          </h1>
          <hr className="w-3/4 mx-auto" />
          <div>
            <h4 className="text-3xl font-bold text-[#454545]">
              Rp. {sisaUang},-
            </h4>
            <span className="text-[#A1A1A1] text-sm">
              Sisa uang kamu {persenUang}% lagi
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-5">
        <div className="grid grid-cols-2 gap-5">
          {/* Piutang Start */}
          <div className="p-4 border border-[#f4f4f4] bg-white rounded-xl shadow-md">
            <div className="rounded-md w-fit p-2 text-white bg-primary mb-1">
              <GoArrowDownLeft size={20} />
            </div>
            <span className="text-[#a1a1a1] text-xs">Piutang</span>
            <h4 className="text-2xl font-bold text-[#454545]">
              Rp. {piutang},-
            </h4>
            <span className="text-[#3C3DBF] font-medium">{transaksiIn}</span>
            <span className="text-[#a1a1a1] ml-1">Transaksi</span>
          </div>
          {/* Piutang End */}

          {/* Utang Start */}
          <div className="p-4 border border-[#f4f4f4] bg-white rounded-xl shadow-md">
            <div className="rounded-md w-fit p-2 text-white bg-[#FF3666] mb-1">
              <GoArrowUpRight size={20} />
            </div>
            <span className="text-[#a1a1a1] text-xs">Utang</span>
            <h4 className="text-2xl font-bold text-[#454545]">Rp. {utang},-</h4>
            <span className="text-[#FF3666] font-medium">{transaksiOut}</span>
            <span className="text-[#a1a1a1] ml-1">Transaksi</span>
          </div>
          {/* Utang End */}
        </div>
      </div>

      <div className="grid grid-rows-1 mt-8">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-semibold text-primary">
              Riwayat Transaksi
            </h4>
            <div className="flex gap-2">
              <button
                onClick={handleModalPiutang}
                className="rounded-lg px-3 py-2 flex items-center text-white bg-primary"
              >
                Piutang
                <BiSolidPlusCircle className="ml-1" />
              </button>
              <button
                onClick={handleModalUtang}
                className="rounded-lg px-3 py-2 flex items-center text-white bg-[#FF3666]"
              >
                Utang
                <BiSolidMinusCircle className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-5">
        {histories.map((history, index) => {
          return (
            <div key={index} className="grid grid-cols-1 mb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-md w-fit p-2 ${
                      history.category === "In"
                        ? "text-primary1 bg-primary4"
                        : "text-[#FF3666] bg-[#FFECF0]"
                    }`}
                  >
                    {history.category === "In" ? (
                      <GoArrowDownLeft size={20} />
                    ) : (
                      <GoArrowUpRight size={20} />
                    )}
                  </div>
                  <div className="leading-3">
                    <h6 className="text-[#454545] text-sm">
                      {history.deskripsi}
                    </h6>
                    <span className="text-[#a1a1a1] text-xs">
                      {history.tanggal}
                    </span>
                  </div>
                </div>

                <h5
                  className={`font-semibold ${
                    history.category === "In"
                      ? "text-primary1"
                      : "text-[#ff3666]"
                  }`}
                >
                  {history.category === "In"
                    ? "+ " + history.nominal
                    : "- " + history.nominal}
                </h5>
              </div>
            </div>
          );
        })}
      </div>

      <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)}>
        {/* Form Start */}
        <div>
          <h3 className="mb-5 font-semibold text-xl">{judul}</h3>

          <div className="flex flex-col mb-5">
            <label>Deskripsi</label>
            <input
              type="text"
              name="deskripsi"
              className="p-1 border rounded focus:outline-none"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label>Tanggal</label>
            <input
              type="date"
              name="tanggal"
              className="p-1 border rounded focus:outline-none"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label>Nominal</label>
            <input
              type="text"
              name="nominal"
              className="p-1 border rounded focus:outline-none"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label>Kategori</label>
            <input
              type="text"
              name="nominal"
              className="p-1 border rounded focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        {/* Form End */}

        {/* Button didalam Modal */}
        <div className="sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
              judul === "Tambahkan Piutang" ? "bg-primary" : "bg-[#ff3666]"
            }`}
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
        {/* Button didalam Modal */}
      </Modal>
    </div>
  );
};

export default Piutang;
