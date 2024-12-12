import { useEffect, useRef, useState } from "react";

// API
import { createTransaksi, getTransaksi } from "@/api/transaksiApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

// Components
import { Card } from "@/components/Organisms/Card/Card";
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import SearchTable from "@/components/Molecules/Search/SearchTable";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import Modal from "@/components/Organisms/Modal/Modal";
import FormTransaksi from "@/components/Organisms/Form/FormTransaksi";
import Button from "@/components/Atoms/Button/Button";
import TableTransaksi from "@/components/Organisms/Table/TableTransaksi";
import { priceFormat } from "@/components/utils";
import TableTransaksiMobile from "@/components/Organisms/Table/TableTransaksiMobile";

const TransaksiView = () => {
  const [openModal, setOpenModal] = useState(false);
  const [judul, setJudul] = useState("");
  const [status, setStatus] = useState("");
  const [options, setOptions] = useState("");

  // Data
  const [transaksi, setTransaksi] = useState([]);
  const [totalTransaksi, setTotalTransaksi] = useState(0);
  const [totalPersen, setTotalPersen] = useState(0);
  const [totalIn, setTotalIn] = useState(0);
  const [totalOut, setTotalOut] = useState(0);

  const formRef = useRef(null);

  useEffect(() => {
    fetchDataTransaksi();
  }, []);

  const fetchDataTransaksi = () => {
    getTransaksi().then(
      ({ res, totalTransaksi, totalPersen, totalIn, totalOut }) => {
        setTransaksi(res);
        setTotalTransaksi(totalTransaksi);
        setTotalPersen(totalPersen);
        setTotalIn(totalIn);
        setTotalOut(totalOut);
      }
    );
  };

  const handleModalPemasukan = () => {
    setOpenModal(true);
    setJudul("Tambah Pemasukan");
    setStatus("In");
    setOptions(optionsPemasukan);
  };

  const handleModalPengeluaran = () => {
    setOpenModal(true);
    setJudul("Tambah Pengeluaran");
    setStatus("Out");
    setOptions(optionsPengeluaran);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    console.log(data);

    await createTransaksi(
      data.deskripsi,
      data.date,
      data.kategori,
      data.status,
      data.nominal
    );

    fetchDataTransaksi();

    // Reset nilai form
    formRef.current.reset();
  };

  // Data Kategori
  const optionsPemasukan = [
    {
      name: "Sales",
      _id: "Sales",
    },
    {
      name: "Commision",
      _id: "Commision",
    },
    {
      name: "Services Revenue",
      _id: "Services revenue",
    },
  ];

  const optionsPengeluaran = [
    {
      name: "Accomodation",
      _id: "Accomodation",
    },
    {
      name: "Accessories",
      _id: "Accessories",
    },
    {
      name: "Ads",
      _id: "Ads",
    },
    {
      name: "Electricity",
      _id: "Electricity",
    },
    {
      name: "Employee Salaries",
      _id: "Employee Salaries",
    },
    {
      name: "Finishing",
      _id: "Finishing",
    },
    {
      name: "Foam & Fabric",
      _id: "Foam & Fabric",
    },
    {
      name: "Packaging",
      _id: "Packaging",
    },
    {
      name: "Raw Material",
      _id: "Raw material",
    },
    {
      name: "Tools",
      _id: "Tools",
    },
  ];

  return (
    <>
      <div className="p-5 grid gap-5 lg:grid-cols-3">
        {/* Top Start */}
        <HeaderPages
          title="Transaksi"
          textBtn="Pemasukan"
          openModal={handleModalPemasukan}
        >
          {/* Button Kedua */}
          <Button
            onClick={handleModalPengeluaran}
            variant="secondary"
            size="md"
          >
            Pengeluaran
          </Button>
        </HeaderPages>
        {/* Top Start */}

        {/* Second Start */}
        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 mt-8">
            <CardSummary.Body
              title="Total Transaksi"
              data={priceFormat(totalTransaksi)}
            />
            <CardSummary.Body title="Sisa Uang" data={totalPersen + "%"} />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 mt-8">
            <CardSummary.Body title="Pemasukan" data={priceFormat(totalIn)} />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 mt-8">
            <CardSummary.Body
              title="Pengeluaran"
              data={priceFormat(totalOut)}
            />
          </div>
        </CardSummary>
        {/* Second End */}

        <Card colSpan="lg:col-span-3">
          <SearchTable />
          <TableTransaksi datas={transaksi} />
          <TableTransaksiMobile datas={transaksi} />
          <Pagination />
        </Card>
      </div>

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header title={judul} closeModal={() => setOpenModal(false)} />
        <form ref={formRef} onSubmit={handleSubmit}>
          <Modal.Body>
            <FormTransaksi status={status} list={options} />
          </Modal.Body>
          <Modal.Footer text="Tambah" closeModal={() => setOpenModal(false)} />
        </form>
      </Modal>
    </>
  );
};

export default TransaksiView;
