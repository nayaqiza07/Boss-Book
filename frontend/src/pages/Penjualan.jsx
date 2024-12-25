import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// API
import {
  createTransaksi,
  deleteTransaksi,
  getAllTransaksi,
  getTransaksiById,
  updateTransaksiNonTunai,
} from "@/api/transaksiApi";
import { getAllClients } from "@/api/clientApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

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
import Modal from "@components/Organisms/Modal/Modal";
import ModalTransaksi from "@/components/Organisms/Modal/ModalTransaksi";
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import Table from "@components/Organisms/Table/Table";
import TableMobile from "@/components/Organisms/Table/TableMobile";

// Redux Actions
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setLimitData,
//   setTotalData,
//   setPage,
//   setTotalPage,
//   setKeyword,
//   setQuery,
// } from "@/redux/slices/paginationSlice";

const Penjualan = () => {
  // const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
  //   (state) => state.paginationState
  // );
  // const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const formRef = useRef(null);

  // Data
  const [client, setClient] = useState([]);

  const [pemasukanNonTunai, setPemasukanNonTunai] = useState([]);
  const [pemasukanNonTunaiById, setPemasukanNonTunaiById] = useState("");
  const [pembayaran, setPembayaran] = useState();

  const [totalInNonTunai, setTotalInNonTunai] = useState(0);
  const [totalDiterimaNonTunai, setTotalDiterimaNonTunai] = useState(0);
  const [totalBelumDiterimaNonTunai, setTotalBelumDiterimaNonTunai] =
    useState(0);

  // const fetchTransaksiNonTunai = useCallback(
  //   (keyword, page) => {
  //     getTransaksi(keyword, page).then(
  //       ({
  //         resPemasukanNonTunai,
  //         limitTransaksi,
  //         totalDataTransaksi,
  //         currentPage,
  //         totalPage,
  //       }) => {
  //         setPemasukanNonTunai(resPemasukanNonTunai);

  //         dispatch(setLimitData(limitTransaksi));
  //         dispatch(setTotalData(totalDataTransaksi));
  //         dispatch(setPage(currentPage));
  //         dispatch(setTotalPage(totalPage));
  //       }
  //     );
  //   },
  //   [dispatch]
  // );

  const fetchAllTransaksiNonTunai = () => {
    getAllTransaksi().then(
      ({
        resPemasukanNonTunai,
        totalInNonTunai,
        totalDiterimaNonTunai,
        totalBelumDiterimaNonTunai,
      }) => {
        setPemasukanNonTunai(resPemasukanNonTunai);
        setTotalInNonTunai(totalInNonTunai);
        setTotalDiterimaNonTunai(totalDiterimaNonTunai);
        setTotalBelumDiterimaNonTunai(totalBelumDiterimaNonTunai);
      }
    );
  };

  // useEffect(() => {
  //   fetchTransaksiNonTunai(keyword, page);
  // }, [keyword, page, fetchTransaksiNonTunai]);

  useEffect(() => {
    fetchAllTransaksiNonTunai();
  }, []);

  useEffect(() => {
    fetchDataClient();
  }, []);

  const fetchPemasukanNonTunaiById = (id) => {
    getTransaksiById(id).then((result) => setPemasukanNonTunaiById(result));
  };

  const fetchDataClient = () => {
    getAllClients().then(({ resClient }) => {
      setClient(resClient);
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

  const handleModalUpdate = (id) => {
    setModalUpdate(true);
    fetchPemasukanNonTunaiById(id);
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
      jumlahPembayaran = pemasukanNonTunaiById.jumlah;
    } else {
      jumlahPembayaran =
        pemasukanNonTunaiById.jumlahPembayaran + parseInt(data.jumlahDibayar);
    }

    if (pemasukanNonTunaiById.jumlah === jumlahPembayaran) {
      pembayaran = "tunai";
    } else {
      pembayaran = "nonTunai";
    }

    if (jumlahPembayaran > pemasukanNonTunaiById.jumlah) {
      toast.warning("Jumlah diterima tidak bisa melebihi total");
    } else {
      await updateTransaksiNonTunai(
        pemasukanNonTunaiById._id,
        pembayaran,
        jumlahPembayaran
      );
    }

    // fetchTransaksiNonTunai(keyword, page);
    fetchAllTransaksiNonTunai();
  };

  const handleModalDelete = (id) => {
    setModalDelete(true);
    fetchPemasukanNonTunaiById(id);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTransaksi(pemasukanNonTunaiById._id);
    fetchAllTransaksiNonTunai();
  };

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
          title="Penjualan"
          textBtn="Tambah"
          openModal={() => setOpenModal(true)}
        />
        {/* Top Start */}

        {/* Second Start */}
        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Penjualan"
              data={priceFormat(totalInNonTunai)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Sudah Diterima"
              data={priceFormat(totalDiterimaNonTunai)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Belum Diterima"
              data={priceFormat(totalBelumDiterimaNonTunai)}
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
          />
          <Table
            datas={pemasukanNonTunai}
            btnText="Terima"
            handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
          />
          <TableMobile
            datas={pemasukanNonTunai}
            btnText="Terima"
            // handleDelete={handleModalDelete}
            // handleUpdate={handleModalUpdate}
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
        dataName={client}
      />

      {/* Update Modal */}
      <Modal openModal={modalUpdate} closeModal={() => setModalUpdate(false)}>
        <Modal.Header title="Update" closeModal={() => setModalUpdate(false)} />
        <form onSubmit={handleUpdate}>
          <Modal.Body>
            <FormTransaksi.Terima
              textJumlah={priceFormat(
                pemasukanNonTunaiById.jumlah -
                  pemasukanNonTunaiById.jumlahPembayaran
              )}
            />
          </Modal.Body>
          <Modal.Footer
            text="Terima"
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

export default Penjualan;
