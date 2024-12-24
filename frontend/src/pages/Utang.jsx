import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// API
import {
  createTransaksi,
  getAllTransaksi,
  getTransaksi,
  getTransaksiById,
  updateTransaksi,
} from "@/api/transaksiApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

// Components
import { priceFormat } from "@/components/utils";

// Molecules
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
import Pagination from "@/components/Molecules/Pagination/Pagination";
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

// Redux Actions
import { useDispatch, useSelector } from "react-redux";
import {
  // setLimitData,
  // setTotalData,
  setPage,
  // setTotalPage,
  setKeyword,
  setQuery,
} from "@/redux/slices/paginationSlice";

const Utang = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  // const [modalDelete, setModalDelete] = useState(false);

  const formRef = useRef(null);

  // Data
  const [trans, setTrans] = useState([]);
  const [pengeluaranNonTunaiById, setPengeluaranNonTunaiById] = useState("");
  const [pembayaran, setPembayaran] = useState();

  const [totalOutNonTunai, setTotalOutNonTunai] = useState(0);
  const [totalDibayarNonTunai, setTotalDibayarNonTunai] = useState(0);
  const [totalBelumDibayarNonTunai, setTotalBelumDibayarNonTunai] = useState(0);

  const fetchTransaksiNonTunai = (keyword, page) => {
    getTransaksi(keyword, page).then(({ resPengeluaranNonTunai }) => {
      setTrans(resPengeluaranNonTunai);
    });
  };

  const fetchAllTransaksiNonTunai = () => {
    getAllTransaksi().then(
      ({
        totalOutNonTunai,
        totalDibayarNonTunai,
        totalBelumDibayarNonTunai,
      }) => {
        setTotalOutNonTunai(totalOutNonTunai);
        setTotalDibayarNonTunai(totalDibayarNonTunai);
        setTotalBelumDibayarNonTunai(totalBelumDibayarNonTunai);
      }
    );
  };

  useEffect(() => {
    fetchTransaksiNonTunai(keyword, page);
  }, [keyword, page]);

  useEffect(() => {
    fetchAllTransaksiNonTunai();
  }, []);

  const fetchPengeluaranNonTunaiById = (id) => {
    getTransaksiById(id).then((result) => setPengeluaranNonTunaiById(result));
  };

  // const fetchDataUtang = useCallback(
  //   (keyword, page) => {
  //     getUtang(keyword, page).then(
  //       ({ res, limitUtang, totalDataUtang, currentPage, totalPage }) => {
  //         setUtang(res);

  //         dispatch(setLimitData(limitUtang));
  //         dispatch(setTotalData(totalDataUtang));
  //         dispatch(setPage(currentPage));
  //         dispatch(setTotalPage(totalPage));
  //       }
  //     );
  //   },
  //   [dispatch]
  // );

  // useEffect(() => {
  //   fetchDataUtang(keyword, page);
  // }, [keyword, page, fetchDataUtang]);

  // useEffect(() => {
  //   fetchAllDataUtang();
  // }, []);

  // const fetchDataUtangById = (id) => {
  //   getUtangById(id).then((result) => setUtangById(result));
  // };

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
      data.name,
      data.keterangan,
      data.date,
      data.jenis,
      data.kategori,
      data.jumlah,
      pembayaran,
      jatuhTempo
    );

    fetchTransaksiNonTunai(keyword, page);
    fetchAllTransaksiNonTunai();

    // Reset nilai form
    formRef.current.reset();
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
    let jumlah;
    let pembayaran = "";

    if (terima === "lunas") {
      jumlah = pengeluaranNonTunaiById.jumlah;
    } else {
      jumlah =
        pengeluaranNonTunaiById.jumlahPembayaran + parseInt(data.jumlahDibayar);
    }

    if (pengeluaranNonTunaiById.jumlah === jumlah) {
      pembayaran = "tunai";
    } else {
      pembayaran = "nonTunai";
    }

    if (jumlah > pengeluaranNonTunaiById.jumlah) {
      toast.warning("Jumlah bayar tidak bisa melebihi total");
    } else {
      await updateTransaksi(pengeluaranNonTunaiById._id, jumlah, pembayaran);
    }

    fetchTransaksiNonTunai(keyword, page);
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
    dispatch(setPage(1));
    dispatch(setKeyword(query));
  };

  return (
    <>
      {/* Nav Link Start */}
      <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/piutang").map((sub) =>
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
        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Utang"
              data={priceFormat(totalOutNonTunai)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Sudah Dibayar"
              data={priceFormat(totalDibayarNonTunai)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Belum Dibayar"
              data={priceFormat(totalBelumDibayarNonTunai)}
            />
          </div>
        </CardSummary>
        {/* Second End */}

        <Card colSpan="lg:col-span-3">
          <SearchTable
            placeholder="Enter Name"
            query={query}
            setQuery={setQuery}
            searchData={searchData}
          />
          <Table
            datas={trans}
            isUtang={true}
            btnText="Bayar"
            // handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
          />
          <TableMobile
            datas={trans}
            isUtang={true}
            btnText="Bayar"
            // handleDelete={handleModalDelete}
            // handleUpdate={handleModalUpdate}
          />
          <Pagination
            limitData={limitData}
            totalData={totalData}
            page={page}
            totalPage={totalPage}
            setPage={setPage}
          />
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
      />

      {/* Update Modal */}
      <Modal openModal={modalUpdate} closeModal={() => setModalUpdate(false)}>
        <Modal.Header
          title={pengeluaranNonTunaiById.name}
          closeModal={() => setModalUpdate(false)}
        />
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
      {/* <Modal openModal={modalDelete} closeModal={() => setModalDelete(false)}>
        <form onSubmit={handleDelete}>
          <Modal.Body>
            <div className="text-center">
              <h1>Are You Sure?</h1>
              <p>Do you really want to delete data with id? {utangById._id}</p>
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
      </Modal> */}
    </>
  );
};

export default Utang;
