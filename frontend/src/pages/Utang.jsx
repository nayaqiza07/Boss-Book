import { BiSolidPlusCircle } from "react-icons/bi";
import { Modal } from "../components/Modal";
import { useState } from "react";
// import Select from "react-select";

const Utang = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalUtang = () => {
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
    <div className="container mx-auto px-5 py-12 border">
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 gap-3 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
              Utang
            </span>
          </h1>
          <hr className="w-3/4 mx-auto" />
          <div>
            <h4 className="text-3xl font-bold text-[#454545]">
              Rp. 1.500.000,-
            </h4>
            <span className="text-[#A1A1A1] text-sm">
              Uang yang belum dibayarkan
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-8">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center">
            <h4 className="lg:text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
                Riwayat Utang
              </span>
            </h4>
            <button
              onClick={handleModalUtang}
              className="text-sm lg:text-md rounded-lg px-3 py-2 flex items-center text-white bg-[#FF3666] transition all hover:scale-110"
            >
              Tambah
              <BiSolidPlusCircle className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-5">
        <div className="grid grid-cols-1 gap-5">
          {/* Table Start */}
          <div className="overflow-x-auto">
            <table className="table cursor-default">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-[#FF3666]">%</th>
                  <th>Nama</th>
                  <th>Dp</th>
                  <th>Kurang</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={handleModalUtang}
                      className="hover:bg-[#ffecf0] text-[#454545] cursor-pointer"
                    >
                      <td className="text-[#FF3666] font-semibold">
                        {data.persen}%
                      </td>
                      <td>{data.nama}</td>
                      <td>Rp. {data.dp}</td>
                      <td>Rp. {data.kurang}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Table End */}
        </div>
      </div>

      <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)}>
        {/* Form Start */}
        <h3 className="mb-5 font-semibold text-xl">Tambah Utang</h3>
        {/* <form onSubmit={saveTransaction}>
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
            className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto transition-all hover:scale-105 bg-[#FF3666]`}
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
    </div>
  );
};

export default Utang;
