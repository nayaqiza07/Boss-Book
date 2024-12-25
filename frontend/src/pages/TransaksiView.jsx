import { useCallback, useEffect, useRef, useState } from "react";

// API
import {
  createTransaksi,
  getTransaksi,
  getAllTransaksi,
  getTransaksiById,
  updateTransaksiTunai,
  deleteTransaksi,
} from "@/api/transaksiApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

// Components
import { Card } from "@/components/Organisms/Card/Card";
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import SearchTable from "@/components/Molecules/Search/SearchTable";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import TableTransaksi from "@/components/Organisms/Table/TableTransaksi";
import TableTransaksiMobile from "@/components/Organisms/Table/TableTransaksiMobile";
import { priceFormat } from "@/components/utils";
import ModalTransaksi from "@/components/Organisms/Modal/ModalTransaksi";

// Redux Actions
import { useDispatch, useSelector } from "react-redux";
import {
  setLimitData,
  setTotalData,
  setPage,
  setTotalPage,
  setKeyword,
  setQuery,
} from "@/redux/slices/paginationSlice";
import Modal from "@/components/Organisms/Modal/Modal";
import { getAllClients } from "@/api/clientApi";

const TransaksiView = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [pembayaran, setPembayaran] = useState();

  // Data
  const [contact, setContact] = useState([]);

  const [transaksi, setTransaksi] = useState([]);
  const [transaksiById, setTransaksiById] = useState("");
  const [totalTransaksi, setTotalTransaksi] = useState(0);
  const [totalPersen, setTotalPersen] = useState(0);
  const [totalIn, setTotalIn] = useState(0);
  const [totalOut, setTotalOut] = useState(0);

  const formRef = useRef(null);

  const fetchDataTransaksi = useCallback(
    (keyword, page) => {
      getTransaksi(keyword, page).then(
        ({
          resTunai,
          limitTransaksi,
          totalDataTransaksi,
          currentPage,
          totalPage,
        }) => {
          setTransaksi(resTunai);

          dispatch(setLimitData(limitTransaksi));
          dispatch(setTotalData(totalDataTransaksi));
          dispatch(setPage(currentPage));
          dispatch(setTotalPage(totalPage));
        }
      );
    },
    [dispatch]
  );

  const fetchAllDataTransaksi = () => {
    getAllTransaksi().then(
      ({ totalTransaksi, totalPersen, totalIn, totalOut }) => {
        setTotalTransaksi(totalTransaksi);
        setTotalPersen(totalPersen);
        setTotalIn(totalIn);
        setTotalOut(totalOut);
      }
    );
  };

  useEffect(() => {
    fetchDataTransaksi(keyword, page);
  }, [keyword, page, fetchDataTransaksi]);

  useEffect(() => {
    fetchAllDataTransaksi();
  }, []);

  useEffect(() => {
    fetchDataContact();
  }, []);

  const fetchTransaksiById = (id) => {
    getTransaksiById(id).then((result) => setTransaksiById(result));
  };

  const fetchDataContact = () => {
    getAllClients().then(({ res }) => {
      setContact(res);
    });
  };

  const handleModal = () => {
    setOpenModal(true);
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

    fetchDataTransaksi(keyword, page);
    fetchAllDataTransaksi();

    // Reset nilai form
    formRef.current.reset();
  };

  const handleModalUpdate = (id) => {
    setModalUpdate(true);
    fetchTransaksiById(id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    console.log(data);

    const jatuhTempo = data.jatuhTempo
      ? data.jatuhTempo.split("-").reverse().join("/")
      : null;

    await updateTransaksiTunai(
      transaksiById._id,
      data.name,
      data.keterangan,
      data.date,
      data.jenis,
      data.kategori,
      data.jumlah,
      pembayaran,
      jatuhTempo
    );

    fetchDataTransaksi(keyword, page);
    fetchAllDataTransaksi();
  };

  const handleModalDelete = (id) => {
    setModalDelete(true);
    fetchTransaksiById(id);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteTransaksi(transaksiById._id);
    fetchDataTransaksi(keyword, page);
    fetchAllDataTransaksi();
  };

  const searchData = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setKeyword(query));
  };

  return (
    <>
      <div className="p-5 grid gap-5 lg:grid-cols-3">
        {/* Top Start */}
        <HeaderPages
          title="Transaksi"
          textBtn="Tambah"
          openModal={handleModal}
        ></HeaderPages>
        {/* Top Start */}

        {/* Second Start */}
        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 mt-8">
            <CardSummary.Body
              title="Total Transaksi"
              data={priceFormat(totalTransaksi)}
            />
            <CardSummary.Body
              title="Sisa Uang"
              data={parseInt(totalPersen) + "%"}
              className={`${
                totalPersen < 0 ? "text-red-500" : "text-green-500"
              }`}
            />
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
          <SearchTable
            placeholder="Enter Name"
            query={query}
            setQuery={setQuery}
            searchData={searchData}
          />
          <TableTransaksi
            datas={transaksi}
            handleUpdate={handleModalUpdate}
            handleDelete={handleModalDelete}
          />
          <TableTransaksiMobile datas={transaksi} />
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
        dataName={contact}
      />

      {/* Update Modal */}
      <ModalTransaksi
        openModal={modalUpdate}
        setOpenModal={setModalUpdate}
        isEdit={true}
        data={transaksiById}
        pembayaran={pembayaran}
        setPembayaran={setPembayaran}
        handleSubmit={handleUpdate}
        dataName={contact}
      />

      {/* Delete Modal */}
      <Modal openModal={modalDelete} closeModal={() => setModalDelete(false)}>
        <form onSubmit={handleDelete}>
          <Modal.Body>
            <div className="mt-7 text-center">
              <h1>Are You Sure?</h1>
              <p>Do you really want to delete this data?</p>
            </div>
          </Modal.Body>
          <div className="mt-7">
            <Modal.Footer
              text="Confirm"
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

export default TransaksiView;
