import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// API
import {
  getPiutang,
  getPiutangById,
  createPiutang,
  updatePiutang,
  deletePiutang,
  getAllPiutang,
} from "@/api/piutangApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

// Components
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import { Card } from "@components/Organisms/Card/Card";
import Table from "@components/Organisms/Table/Table";
import Modal from "@components/Organisms/Modal/Modal";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
import TableMobile from "@/components/Organisms/Table/TableMobile";
import SearchTable from "@/components/Molecules/Search/SearchTable";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import FormPiutang from "@/components/Organisms/Form/FormPiutang";
import { priceFormat } from "@/components/utils";

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

const Piutang = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  // Data
  const [piutang, setPiutang] = useState([]);
  const [piutangById, setPiutangById] = useState("");
  const [totalPiutang, setTotalPiutang] = useState(0);
  const [totalSudahDiterima, setTotalSudahDiterima] = useState(0);
  const [totalBelumDiterima, setTotalBelumDiterima] = useState(0);

  const formRef = useRef(null);

  const fetchDataPiutang = useCallback(
    (keyword, page) => {
      getPiutang(keyword, page).then(
        ({ res, limitPiutang, totalDataPiutang, currentPage, totalPage }) => {
          setPiutang(res);

          dispatch(setLimitData(limitPiutang));
          dispatch(setTotalData(totalDataPiutang));
          dispatch(setPage(currentPage));
          dispatch(setTotalPage(totalPage));
        }
      );
    },
    [dispatch]
  );

  const fetchAllDataPiutang = () => {
    getAllPiutang().then(
      ({ totalPiutang, totalSudahDiterima, totalBelumDiterima }) => {
        setTotalPiutang(totalPiutang);
        setTotalSudahDiterima(totalSudahDiterima);
        setTotalBelumDiterima(totalBelumDiterima);
      }
    );
  };

  useEffect(() => {
    fetchDataPiutang(keyword, page);
  }, [keyword, page, fetchDataPiutang]);

  useEffect(() => {
    fetchAllDataPiutang();
  }, []);

  const fetchDataPiutangById = (id) => {
    getPiutangById(id).then((result) => setPiutangById(result));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await createPiutang(data.name, data.date, data.total, data.jumlahDiterima);
    fetchDataPiutang();

    // Reset nilai form
    formRef.current.reset();
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

    if (terima === "lunas") {
      jumlah = piutangById.total;
    } else {
      jumlah = piutangById.jumlahDiterima + parseInt(data.jumlahDiterima);
    }

    if (jumlah > piutangById.total) {
      toast.warning("Jumlah diterima tidak bisa melebihi total");
    } else {
      await updatePiutang(piutangById._id, jumlah);
    }

    fetchDataPiutang();
  };

  const handleModalUpdate = (id) => {
    setModalUpdate(true);
    fetchDataPiutangById(id);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePiutang(piutangById._id);
    fetchDataPiutang();
  };

  const handleModalDelete = (id) => {
    setModalDelete(true);
    fetchDataPiutangById(id);
  };

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
          title="Piutang"
          textBtn="Tambah"
          openModal={() => setOpenModal(true)}
        />
        {/* Top Start */}

        {/* Second Start */}
        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Piutang"
              data={priceFormat(totalPiutang)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Sudah Diterima"
              data={priceFormat(totalSudahDiterima)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Belum Diterima"
              data={priceFormat(totalBelumDiterima)}
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
            datas={piutang}
            btnText="Terima"
            handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
          />
          <TableMobile
            datas={piutang}
            btnText="Terima"
            handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
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
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Piutang"
          closeModal={() => setOpenModal(false)}
        />
        <form ref={formRef} onSubmit={handleSubmit}>
          <Modal.Body>
            <FormPiutang />
          </Modal.Body>

          <Modal.Footer
            text="Tambah"
            type="submit"
            closeModal={() => setOpenModal(false)}
            handleSubmit={() => setOpenModal(false)}
          />
        </form>
      </Modal>

      {/* Update Modal */}
      <Modal openModal={modalUpdate} closeModal={() => setModalUpdate(false)}>
        <Modal.Header
          title={piutangById.name}
          closeModal={() => setModalUpdate(false)}
        />
        <form onSubmit={handleUpdate}>
          <Modal.Body>
            <FormPiutang.Terima />
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
              <p>
                Do you really want to delete data with id? {piutangById._id}
              </p>
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

export default Piutang;
