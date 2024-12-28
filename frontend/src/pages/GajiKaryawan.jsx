import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Bag } from "react-iconly";

// API
import {
  createTransaksi,
  deleteTransaksi,
  editTransaksiNonTunai,
  getAllTransaksi,
  getTransaksiById,
  updateTransaksiNonTunai,
} from "@/api/transaksiApi";
import { getAllClients } from "@/api/clientApi";

// Assets

// Components
import { priceFormat } from "@/components/utils";

// Molecules
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
// import Pagination from "@/components/Molecules/Pagination/Pagination";
import SearchTable from "@/components/Molecules/Search/SearchTable";

// Organisms
import { Card } from "@components/Organisms/Card/Card";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import FormTransaksi from "@/components/Organisms/Form/FormTransaksi";
import Modal from "@/components/Organisms/Modal/Modal";
import ModalTransaksi from "@/components/Organisms/Modal/ModalTransaksi";
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import Table from "@components/Organisms/Table/Table";
import TableMobile from "@/components/Organisms/Table/TableMobile";

const GajiKaryawan = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const formRef = useRef(null);

  // Data
  const [karyawan, setKaryawan] = useState([]);

  const [pengeluaranNonTunai, setPengeluaranNonTunai] = useState([]);
  const [pengeluaranNonTunaiById, setPengeluaranNonTunaiById] = useState("");
  const [pembayaran, setPembayaran] = useState();

  const [totalGajiKaryawan, setTotalGajiKaryawan] = useState(0);
  const [totalDibayar, setTotalDibayar] = useState(0);
  const [totalBelumDibayar, setTotalBelumDibayar] = useState(0);

  const fetchAllTransaksiNonTunai = () => {
    getAllTransaksi().then(
      ({
        resPengeluaranNonTunai,

        totalGajiKaryawan,
        totalDibayar,
        totalBelumDibayar,
      }) => {
        setPengeluaranNonTunai(resPengeluaranNonTunai);

        setTotalGajiKaryawan(totalGajiKaryawan);
        setTotalDibayar(totalDibayar);
        setTotalBelumDibayar(totalBelumDibayar);
      }
    );
  };

  useEffect(() => {
    fetchAllTransaksiNonTunai();
  }, []);

  useEffect(() => {
    fetchDataKaryawan();
  }, []);

  const fetchPengeluaranNonTunaiById = (id) => {
    getTransaksiById(id).then((result) => setPengeluaranNonTunaiById(result));
  };

  const fetchDataKaryawan = () => {
    getAllClients().then(({ resKaryawan }) => {
      setKaryawan(resKaryawan);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    const jatuhTempo = data.jatuhTempo
      ? data.jatuhTempo.split("-").reverse().join("/")
      : null;

    await createTransaksi(
      data.contact,
      data.keterangan,
      data.date,
      data.jenis,
      data.kategori,
      data.jumlah,
      pembayaran,
      jatuhTempo
    );

    // fetchTransaksiNonTunai(keyword, page);
    fetchAllTransaksiNonTunai();

    // Reset nilai form
    formRef.current.reset();
  };

  const handleModalEdit = (id) => {
    setModalEdit(true);
    fetchPengeluaranNonTunaiById(id);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    const jatuhTempo = data.jatuhTempo
      ? data.jatuhTempo.split("-").reverse().join("/")
      : null;

    await editTransaksiNonTunai(
      pengeluaranNonTunaiById._id,
      data.contact,
      data.keterangan,
      data.jenis,
      data.kategori,
      data.jumlah,
      pembayaran,
      jatuhTempo
    );

    fetchAllTransaksiNonTunai();
  };

  const handleModalUpdate = (id) => {
    setModalUpdate(true);
    fetchPengeluaranNonTunaiById(id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    const terima = data.terima;
    let jumlahPembayaran;
    let pembayaran = "";

    if (terima === "lunas") {
      jumlahPembayaran = pengeluaranNonTunaiById.jumlah;
    } else {
      jumlahPembayaran =
        pengeluaranNonTunaiById.jumlahPembayaran + parseInt(data.jumlahDibayar);
    }

    if (pengeluaranNonTunaiById.jumlah === jumlahPembayaran) {
      pembayaran = "tunai";
    } else {
      pembayaran = "nonTunai";
    }

    if (jumlahPembayaran > pengeluaranNonTunaiById.jumlah) {
      toast.warning("Jumlah bayar tidak bisa melebihi total");
    } else {
      await updateTransaksiNonTunai(
        pengeluaranNonTunaiById._id,
        pembayaran,
        jumlahPembayaran
      );
    }

    // fetchTransaksiNonTunai(keyword, page);
    fetchAllTransaksiNonTunai();
  };

  const handleModalDelete = (id) => {
    setModalDelete(true);
    fetchPengeluaranNonTunaiById(id);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTransaksi(pengeluaranNonTunaiById._id);
    fetchAllTransaksiNonTunai();
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteUtang(utangById._id);
  //   fetchDataUtang(keyword, page);
  // };

  // const handleModalDelete = (id) => {
  //   setModalDelete(true);
  //   fetchDataUtangById(id);
  // };

  const searchData = (e) => {
    e.preventDefault();
    // dispatch(setPage(1));
    // dispatch(setKeyword(query));
  };

  return (
    <>
      {/* Nav Link Start */}
      <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/penjualan").map((sub) =>
          sub.sidebarSubItem.map((s) => (
            <Link to={s.path} key={s.key}>
              {s.label}
            </Link>
          ))
        )}
      </div>
      {/* Nav Link End */}

      <div className="p-5 grid gap-5 lg:grid-cols-3">
        {/* Top Start */}
        <HeaderPages
          title="Gaji Karyawan"
          textBtn="Tambah"
          openModal={() => setOpenModal(true)}
        />
        {/* Top Start */}

        {/* Second Start */}
        <CardSummary backgroundColor="bg-[#FFB26F]">
          <CardSummary.Header icon={<Bag primaryColor={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Gaji Karyawan"
              data={priceFormat(totalGajiKaryawan)}
            />
          </div>
        </CardSummary>

        <CardSummary backgroundColor="bg-[#91DDCF]">
          <CardSummary.Header icon={<Bag primaryColor={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Sudah Dibayar"
              data={priceFormat(totalDibayar)}
            />
          </div>
        </CardSummary>

        <CardSummary backgroundColor="bg-[#FF8080]">
          <CardSummary.Header icon={<Bag primaryColor={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Belum Dibayar"
              data={priceFormat(totalBelumDibayar)}
            />
          </div>
        </CardSummary>
        {/* Second End */}

        <Card colSpan="lg:col-span-3">
          <SearchTable
            placeholder="Enter Name"
            // query={query}
            // setQuery={setQuery}
            searchData={searchData}
            isHistory={true}
            historyPath="/history/pengeluaran"
          />
          <Table
            datas={pengeluaranNonTunai}
            isGaji={true}
            btnText="Bayar"
            handleEdit={handleModalEdit}
            handleUpdate={handleModalUpdate}
            handleDelete={handleModalDelete}
          />
          <TableMobile
            datas={pengeluaranNonTunai}
            isGaji={true}
            btnText="Bayar"
            handleEdit={handleModalEdit}
            handleUpdate={handleModalUpdate}
            handleDelete={handleModalDelete}
          />
          {/* <Pagination
            limitData={limitData}
            totalData={totalData}
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          /> */}
        </Card>
      </div>

      {/* Create Modal */}
      <ModalTransaksi
        openModal={openModal}
        setOpenModal={setOpenModal}
        formRef={formRef}
        pembayaran={pembayaran}
        setPembayaran={setPembayaran}
        handleSubmit={handleSubmit}
        dataName={karyawan}
      />

      {/* Edit Modal */}
      <ModalTransaksi
        openModal={modalEdit}
        setOpenModal={setModalEdit}
        isEdit={true}
        data={pengeluaranNonTunaiById}
        pembayaran={pembayaran}
        setPembayaran={setPembayaran}
        handleSubmit={handleEdit}
        dataName={karyawan}
      />

      {/* Update Modal */}
      <Modal openModal={modalUpdate} closeModal={() => setModalUpdate(false)}>
        <Modal.Header title="Update" closeModal={() => setModalUpdate(false)} />
        <form onSubmit={handleUpdate}>
          <Modal.Body>
            <FormTransaksi.Terima
              textJumlah={priceFormat(
                pengeluaranNonTunaiById.jumlah -
                  pengeluaranNonTunaiById.jumlahPembayaran
              )}
            />
          </Modal.Body>
          <Modal.Footer
            text="Bayar"
            type="submit"
            closeModal={() => setModalUpdate(false)}
            handleSubmit={() => setModalUpdate(false)}
          />
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal openModal={modalDelete} closeModal={() => setModalDelete(false)}>
        <form onSubmit={handleDelete}>
          <Modal.Body>
            <div className="text-center">
              <h1>Are You Sure?</h1>
              <p>Do you really want to delete this data?</p>
            </div>
          </Modal.Body>
          <div className="mt-7">
            <Modal.Footer
              text="Delete"
              type="submit"
              closeModal={() => setModalDelete(false)}
              handleSubmit={() => setModalDelete(false)}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default GajiKaryawan;
