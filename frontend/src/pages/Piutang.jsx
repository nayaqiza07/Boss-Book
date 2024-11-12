import { BiSolidPlusCircle } from "react-icons/bi";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { SidebarItem } from "../components/Sidebar/SidebarItem";
// import Select from "react-select";

const Piutang = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalTerima, setOpenModalTerima] = useState(false);

  const handleModalPiutang = () => {
    setOpenModal(true);
  };

  const handleSimpan = () => {
    setOpenModal(false);
  };

  const datas = [
    {
      persen: 100,
      nama: "Mr. 1",
      dp: 15000000,
      kurang: 0,
    },
    {
      persen: 50,
      nama: "Mr. 2",
      dp: 5000000,
      kurang: 2500000,
    },
    {
      persen: 70,
      nama: "Mr. 3",
      dp: 1000000,
      kurang: 3000000,
    },
  ];

  return (
    <>
      {/* <div className="border-b bg-white px-5 flex justify-between lg:justify-start gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/outcome").map((sub) => (
          <p key={sub.key}>{sub.item}</p>
        ))}
      </div> */}

      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-rows-1">
          <div className="grid grid-cols-1 gap-3 text-center">
            <h1 className="text-6xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
                Piutang
              </span>
            </h1>
            <hr className="w-3/4 mx-auto" />
            <div>
              <h4 className="text-3xl font-bold text-[#454545]">
                Rp. 1.500.000,-
              </h4>
              <span className="text-[#A1A1A1] text-sm">
                Total yang belum diterima
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mt-8">
          <div className="grid grid-cols-1">
            <div className="flex justify-between items-center">
              <h4 className="lg:text-2xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
                  Riwayat Piutang
                </span>
              </h4>
              <button
                onClick={handleModalPiutang}
                className="text-sm lg:text-md rounded-lg px-3 py-2 flex items-center text-white bg-[#3c3dbf] transition all hover:scale-110"
              >
                Tambah
                <BiSolidPlusCircle className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mt-5">
          <div className="grid grid-cols-1 gap-5">
            {/* Riwayat Piutang List Start */}
            <div className="grid grid-rows-1 mt-5">
              {datas.length === 0 ? (
                <h1>Data Kosong</h1>
              ) : (
                <>
                  {datas
                    // .filter((data) => {
                    //   return search.toLowerCase() === ""
                    //     ? data
                    //     : data.deskripsi.toLowerCase().includes(search);
                    // })
                    .map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-1 mb-2 border-b py-2"
                        >
                          <div
                            className={`flex justify-between items-center rounded-lg`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="radial-progress bg-[#e4e5ff] text-[#3c3dbf] border-[#e4e5ff] border-4"
                                style={{
                                  "--value": data.persen,
                                  "--size": "2.5rem",
                                  "--thickness": "3px",
                                }}
                                role="progressbar"
                              >
                                {data.persen}
                              </div>
                              <div className="leading-3">
                                <h6 className="text-[#454545] text-sm">
                                  {data.nama}
                                </h6>
                                <p className="text-[#a1a1a1] text-xs">
                                  Rp. {data.dp}
                                </p>
                                <span className="text-[#a1a1a1] text-xs">
                                  Belum diterima:
                                  <span className="text-[#3c3dbf] ml-1">
                                    Rp. {data.kurang}
                                  </span>
                                </span>
                              </div>
                            </div>

                            <button
                              onClick={() => setOpenModalTerima(true)}
                              className="rounded-lg px-3 py-2 text-[#3c3dbf] bg-[#e4e5ff]"
                            >
                              Terima
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            {/* Riwayat Piutang List End */}
          </div>
        </div>

        <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)}>
          {/* Form Start */}
          <h3 className="mb-5 font-semibold text-xl">Tambah Piutang</h3>
          {/* <form onSubmit={savedata}>
          <div>

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
              <label>Kategori</label>
              <Select
              options={options}
              onChange={(e) => handleSelect(e.value)}
              ></Select>
            </div>

            <div className="flex flex-col">
              <label>Status</label>
              <input
                type="hidden"
                name="status"
                className="p-1 border rounded focus:outline-none"
                readOnly={true}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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
                type="number"
                name="nominal"
                className="p-1 border rounded focus:outline-none"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>
          </div> */}
          {/* Form End */}

          {/* Button didalam Modal */}
          <div className="sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              onClick={handleSimpan}
              className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto transition-all hover:scale-105 bg-[#3c3dbf]`}
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-all hover:scale-105"
            >
              Cancel
            </button>
          </div>
          {/* Button didalam Modal */}
          {/* </form> */}
        </Modal>

        {/* Terima Modal */}
        <Modal
          openModal={openModalTerima}
          onCloseModal={() => setOpenModalTerima(false)}
        >
          <div className="flex flex-row items-center justify-between mb-5">
            <h3 className="font-semibold text-lg">Terima Pelunasan</h3>
            <button onClick={() => setOpenModalTerima(false)}>X</button>
          </div>
          {/* Form Start */}
          {/* Button didalam Modal */}
          <div className="sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              onClick={handleSimpan}
              className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto transition-all hover:scale-105 bg-[#3c3dbf]`}
            >
              Seluruhnya
            </button>

            <button
              type="button"
              onClick={handleSimpan}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#3c3dbf] shadow-sm ring-1 ring-inset ring-[#3c3dbf] hover:bg-gray-50 sm:mt-0 sm:w-auto transition-all hover:scale-105"
            >
              Sebagian
            </button>
          </div>
          {/* Button didalam Modal */}
        </Modal>
      </div>
    </>
  );
};

export default Piutang;
