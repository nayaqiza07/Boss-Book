import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Select from "react-select";

import { Modal } from "@components/Organisms/Modal";

const Transaksi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [judul, setJudul] = useState("");
  const [search, setSearch] = useState("");

  // Form
  const [deskripsi, setDeskripsi] = useState("");
  const [options, setOptions] = useState("");
  const [kategori, setKategori] = useState("");
  const [status, setStatus] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [nominal, setNominal] = useState(0);

  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  // Filter Data By Status & count nominal
  const dataIn = useMemo(() => {
    return transactionList
      .filter((item) => item.status === "In")
      .map((item) => item.nominal)
      .reduce((total, num) => total + num, 0);
  }, [transactionList]);

  const dataOut = useMemo(() => {
    return transactionList
      .filter((item) => item.status === "Out")
      .map((item) => item.nominal)
      .reduce((total, num) => total + num, 0);
  }, [transactionList]);

  // Jumlah Transaksi In dan Out
  const transaksiIn = useMemo(() => {
    return transactionList
      .filter((item) => item.status === "In")
      .map((item) => item.nominal).length;
  }, [transactionList]);

  const transaksiOut = useMemo(() => {
    return transactionList
      .filter((item) => item.status === "Out")
      .map((item) => item.nominal).length;
  }, [transactionList]);

  // Sisa Uang dan Persen
  const sisaUang = useMemo(() => {
    return dataIn - dataOut;
  }, [dataIn, dataOut]);

  const persenUang = useMemo(() => {
    return Math.floor(((dataIn - dataOut) / dataIn) * 100);
  }, [dataIn, dataOut]);

  // Get Transaction List
  const getTransactions = async () => {
    const response = await axios.get("http://localhost:5000/transactions");
    setTransactionList(response.data);
  };

  // const filterItems = (stat) => {
  //   const newFilter = transactionList.filter((item) => item.status === stat);
  //   setTransactionList(newFilter);
  // };

  // Add Transaction List
  const saveTransaction = async () => {
    try {
      await axios.post("http://localhost:5000/transactions", {
        deskripsi,
        kategori,
        status,
        tanggal,
        nominal,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalPemasukan = () => {
    setOpenModal(true);
    setJudul("Tambahkan Pemasukan");
    setStatus("In");
    setOptions(optionsPemasukan);
  };

  const handleModalPengeluaran = () => {
    setOpenModal(true);
    setJudul("Tambahkan Pengeluaran");
    setStatus("Out");
    setOptions(optionsPengeluaran);
  };

  const handleSelect = (value) => {
    setKategori(value);
  };

  const handleSimpan = () => {
    setOpenModal(false);
  };

  // Data Kategori
  const optionsPemasukan = [
    {
      label: "Sales",
      value: "Sales",
    },
    {
      label: "Commision",
      value: "Commision",
    },
    {
      label: "Services Revenue",
      value: "Services revenue",
    },
  ];

  const optionsPengeluaran = [
    {
      label: "Accomodation",
      value: "Accomodation",
    },
    {
      label: "Accessories",
      value: "Accessories",
    },
    {
      label: "Ads",
      value: "Ads",
    },
    {
      label: "Electricity",
      value: "Electricity",
    },
    {
      label: "Employee Salaries",
      value: "Employee Salaries",
    },
    {
      label: "Finishing",
      value: "Finishing",
    },
    {
      label: "Foam & Fabric",
      value: "Foam & Fabric",
    },
    {
      label: "Packaging",
      value: "Packaging",
    },
    {
      label: "Raw Material",
      value: "Raw material",
    },
    {
      label: "Tools",
      value: "Tools",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-12">
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-1 gap-3 text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
              Daftar Transaksi
            </span>
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
          {/* Pemasukan Start */}
          <div className="p-4 border border-[#f4f4f4] bg-white rounded-xl shadow-md">
            <div className="rounded-md w-fit p-2 text-[#3c3dbf] bg-[#e4e5ff] mb-1">
              {/* <GoArrowDownLeft size={20} /> */}
            </div>
            <span className="text-[#a1a1a1] text-xs">Pemasukan</span>
            <h4 className="text-md lg:text-2xl font-bold text-[#454545]">
              Rp. {dataIn},-
            </h4>
            <span className="text-[#3C3DBF] font-medium">{transaksiIn}</span>
            <span className="text-[#a1a1a1] ml-1">Transaksi</span>
          </div>
          {/* Pemasukan End */}

          {/* Pengeluaran Start */}
          <div className="p-4 border border-[#f4f4f4] bg-white rounded-xl shadow-md">
            <div className="rounded-md w-fit p-2 text-[#ff3666] bg-[#ffecf0] mb-1">
              {/* <GoArrowUpRight size={20} /> */}
            </div>
            <span className="text-[#a1a1a1] text-xs">Pengeluaran</span>
            <h4 className="text-md lg:text-2xl font-bold text-[#454545]">
              Rp. {dataOut},-
            </h4>
            <span className="text-[#FF3666] font-medium">{transaksiOut}</span>
            <span className="text-[#a1a1a1] ml-1">Transaksi</span>
          </div>
          {/* Pengeluaran End */}
        </div>
      </div>

      <div className="grid grid-rows-1 mt-8">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center">
            <h4 className="lg:text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-[#3c3dbf] to-[#FF3666] bg-clip-text">
                Riwayat Transaksi
              </span>
            </h4>
            <div className="flex gap-2">
              <button
                onClick={handleModalPemasukan}
                className="text-sm lg:text-md rounded-lg px-3 py-2 flex items-center text-white bg-[#3c3dbf] transition all hover:scale-110"
              >
                Pemasukan
                {/* <BiSolidPlusCircle className="ml-1" /> */}
              </button>
              <button
                onClick={handleModalPengeluaran}
                className="text-sm lg:text-md rounded-lg px-3 py-2 flex items-center text-white bg-[#FF3666] transition all hover:scale-110"
              >
                Pengeluaran
                {/* <BiSolidMinusCircle className="ml-1" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-5">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center">
            <input
              type="search"
              className="border rounded-lg h-full px-2 focus:outline-none"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Dropdown Start */}
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="text-sm lg:text-md cursor-pointer rounded-lg px-3 py-2 flex items-center text-white bg-[#3c3dbf] transition all hover:scale-110"
              >
                Filter
              </button>

              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-lg"
              >
                <li onClick={() => getTransactions()}>
                  <a>All</a>
                </li>
                <li
                  onClick={() =>
                    setTransactionList(
                      transactionList.filter((item) => item.status === "In")
                    )
                  }
                >
                  <a>Pemasukan</a>
                </li>
                <li
                  onClick={() =>
                    setTransactionList(
                      transactionList.filter((item) => item.status === "Out")
                    )
                  }
                >
                  <a>Pengeluaran</a>
                </li>
              </ul>
            </div>
            {/* Dropdown End */}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 mt-5">
        {transactionList.length === 0 ? (
          <h1>Data Kosong</h1>
        ) : (
          <>
            {transactionList
              .filter((transaction) => {
                return search.toLowerCase() === ""
                  ? transaction
                  : transaction.deskripsi.toLowerCase().includes(search);
              })
              .map((transaction) => {
                return (
                  <div
                    key={transaction.id}
                    className="grid grid-cols-1 mb-2 border-b py-2"
                  >
                    <div
                      className={`flex justify-between items-center rounded-lg ${
                        transaction.status === "In"
                          ? "hover:bg-[#e4e5ff]"
                          : "hover:bg-[#ffecf0]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-md w-fit p-2 ${
                            transaction.status === "In"
                              ? "text-[#3c3dbf] bg-[#e4e5ff]"
                              : "text-[#FF3666] bg-[#FFECF0]"
                          }`}
                        >
                          {/* {transaction.status === "In" ? (
                            <GoArrowDownLeft size={20} />
                          ) : (
                            <GoArrowUpRight size={20} />
                          )} */}
                        </div>
                        <div className="leading-3">
                          <h6 className="text-[#454545] text-sm">
                            {transaction.deskripsi} | {transaction.kategori}
                          </h6>
                          <span className="text-[#a1a1a1] text-xs">
                            {transaction.tanggal}
                          </span>
                        </div>
                      </div>

                      <h5
                        className={`font-semibold ${
                          transaction.status === "In"
                            ? "text-[#3c3dbf]"
                            : "text-[#ff3666]"
                        }`}
                      >
                        {transaction.status === "In"
                          ? "+ " + transaction.nominal
                          : "- " + transaction.nominal}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>

      <Modal openModal={openModal} onCloseModal={() => setOpenModal(false)}>
        {/* Form Start */}
        <form onSubmit={saveTransaction}>
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
              <label>Kategori</label>
              <Select
                options={options}
                onChange={(e) => handleSelect(e.value)}
              ></Select>
            </div>

            <div className="flex flex-col">
              {/* <label>Status</label> */}
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
          </div>
          {/* Form End */}

          {/* Button didalam Modal */}
          <div className="sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              onClick={handleSimpan}
              className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto transition-all hover:scale-105 ${
                status === "In" ? "bg-[#3c3dbf]" : "bg-[#ff3666]"
              }`}
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
        </form>
      </Modal>
    </div>
  );
};

export default Transaksi;
