import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// API
import {
  createUtang,
  getUtang,
  getAllUtang,
  getUtangById,
  updateUtang,
  deleteUtang,
} from "@/api/utangApi";

// Assets
import { Bag } from "@/assets/Icon/Bag";

// Components
import { Card } from "@components/Organisms/Card/Card";
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import Table from "@components/Organisms/Table/Table";
import Modal from "@components/Organisms/Modal/Modal";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import FormPiutang from "@/components/Organisms/Form/FormPiutang";
import HeaderPages from "@/components/Molecules/Header/HeaderPages";
import SearchTable from "@/components/Molecules/Search/SearchTable";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import { priceFormat } from "@/components/utils";
import TableMobile from "@/components/Organisms/Table/TableMobile";

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

const Utang = () => {
  const { limitData, totalData, page, totalPage, keyword, query } = useSelector(
    (state) => state.paginationState
  );
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  // Data
  const [utang, setUtang] = useState([]);
  const [utangById, setUtangById] = useState("");
  const [totalUtang, setTotalUtang] = useState(0);
  const [totalSudahDibayar, setTotalSudahDibayar] = useState(0);
  const [totalBelumDibayar, setTotalBelumDibayar] = useState(0);

  const formRef = useRef(null);

  const fetchDataUtang = useCallback(
    (keyword, page) => {
      getUtang(keyword, page).then(
        ({ res, limitUtang, totalDataUtang, currentPage, totalPage }) => {
          setUtang(res);

          dispatch(setLimitData(limitUtang));
          dispatch(setTotalData(totalDataUtang));
          dispatch(setPage(currentPage));
          dispatch(setTotalPage(totalPage));
        }
      );
    },
    [dispatch]
  );

  const fetchAllDataUtang = () => {
    getAllUtang().then(
      ({ totalUtang, totalSudahDibayar, totalBelumDibayar }) => {
        setTotalUtang(totalUtang);
        setTotalSudahDibayar(totalSudahDibayar);
        setTotalBelumDibayar(totalBelumDibayar);
      }
    );
  };

  useEffect(() => {
    fetchDataUtang(keyword, page);
  }, [keyword, page, fetchDataUtang]);

  useEffect(() => {
    fetchAllDataUtang();
  }, []);

  const fetchDataUtangById = (id) => {
    getUtangById(id).then((result) => setUtangById(result));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil Inputan Form
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    await createUtang(
      data.name,
      data.keterangan,
      data.date,
      data.total,
      data.jumlahDibayar
    );
    fetchDataUtang(keyword, page);

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
      jumlah = utangById.total;
    } else {
      jumlah = utangById.jumlahDibayar + parseInt(data.jumlahDibayar);
    }

    if (jumlah > utangById.total) {
      toast.warning("Jumlah bayar tidak bisa melebihi total");
    } else {
      await updateUtang(utangById._id, jumlah);
    }

    fetchDataUtang(keyword, page);
  };

  const handleModalUpdate = (id) => {
    setModalUpdate(true);
    fetchDataUtangById(id);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteUtang(utangById._id);
    fetchDataUtang(keyword, page);
  };

  const handleModalDelete = (id) => {
    setModalDelete(true);
    fetchDataUtangById(id);
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
          title="Utang"
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
              data={priceFormat(totalUtang)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
          <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
            <CardSummary.Body
              title="Total Sudah Dibayar"
              data={priceFormat(totalSudahDibayar)}
            />
          </div>
        </CardSummary>

        <CardSummary>
          <CardSummary.Header icon={<Bag colorStroke={"#130F26"} />} />
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
            query={query}
            setQuery={setQuery}
            searchData={searchData}
          />
          <Table
            datas={utang}
            isUtang={true}
            btnText="Bayar"
            handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
          />
          <TableMobile
            datas={utang}
            isUtang={true}
            btnText="Bayar"
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
          title="Tambah Utang"
          closeModal={() => setOpenModal(false)}
        />
        <form ref={formRef} onSubmit={handleSubmit}>
          <Modal.Body>
            <FormPiutang isUtang={true} />
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
          title={utangById.name}
          closeModal={() => setModalUpdate(false)}
        />
        <form onSubmit={handleUpdate}>
          <Modal.Body>
            <FormPiutang.Terima isUtang={true} />
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
      </Modal>
    </>
  );
};

export default Utang;
