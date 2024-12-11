import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// API
import {
  getPiutang,
  getPiutangById,
  createPiutang,
  updatePiutang,
  deletePiutang,
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
import { toast } from "react-toastify";
import { priceFormat } from "@/components/utils";

const Piutang = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  // Data
  const [piutang, setPiutang] = useState([]);
  const [piutangById, setPiutangById] = useState("");

  useEffect(() => {
    fetchDataPiutang();
  }, []);

  const totalPiutang = useMemo(() => {
    return piutang
      .map((item) => item.total)
      .reduce((total, num) => total + num, 0);
  }, [piutang]);

  const totalSudahDiterima = useMemo(() => {
    return piutang
      .map((item) => item.jumlahDiterima)
      .reduce((total, num) => total + num, 0);
  }, [piutang]);

  const fetchDataPiutang = () => {
    getPiutang().then((result) => setPiutang(result));
  };

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
          text="Tambah"
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
              data={priceFormat(totalPiutang - totalSudahDiterima)}
            />
          </div>
        </CardSummary>
        {/* Second End */}

        <Card colSpan="lg:col-span-3">
          <SearchTable />
          <Table
            datas={piutang}
            jumlah="jumlahDiterima"
            btnText="Terima"
            tHeadTextJumlah="Jumlah Diterima"
            handleDelete={handleModalDelete}
            handleUpdate={handleModalUpdate}
          />
          <TableMobile datas={piutang} />
          <Pagination />
        </Card>
      </div>

      {/* Create Modal */}
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <Modal.Header
          title="Tambah Piutang"
          closeModal={() => setOpenModal(false)}
        />
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <FormPiutang />
          </Modal.Body>
          <Modal.Footer text="Tambah" closeModal={() => setOpenModal(false)} />
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
            closeModal={() => setModalUpdate(false)}
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
              closeModal={() => setModalDelete(false)}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Piutang;
