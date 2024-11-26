import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { SidebarItem } from "../components/Sidebar/SidebarItem";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const Piutang = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalTerima, setModalTerima] = useState(false);

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

      <div className="p-5 grid gap-5 lg:grid-cols-2">
        {/* Top Start */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center">
            <h1 className="text-night_60 font-medium">Piutang</h1>
            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center bg-primary_100 text-white text-sm rounded-xl gap-3 py-3 px-5"
            >
              Tambah
            </button>
          </div>
        </div>
        {/* Top Start */}

        {/* Second Start */}
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              {/* <HiOutlineReceiptRefund size={20} color="#130F26" /> */}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">New Client</h5>
              <p className="text-night_60 font-medium">30</p>
            </div>
            <div>
              <h5 className="text-night_30">Purchasing</h5>
              <p className="text-night_60 font-medium">657</p>
            </div>
            <div>
              <h5 className="text-night_30">Cancel</h5>
              <p className="text-night_60 font-medium">5</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              {/* <HiOutlineReceiptRefund size={20} color="#130F26" /> */}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">New Client</h5>
              <p className="text-night_60 font-medium">30</p>
            </div>
            <div>
              <h5 className="text-night_30">Purchasing</h5>
              <p className="text-night_60 font-medium">657</p>
            </div>
            <div>
              <h5 className="text-night_30">Cancel</h5>
              <p className="text-night_60 font-medium">5</p>
            </div>
          </div>
        </Card>
        {/* Second End */}

        <Card colSpan="lg:col-span-2">
          <Table />
        </Card>
      </div>

      <Modal
        openModal={openModal}
        onCloseModal={() => setOpenModal(false)}
        title="Tambah Piutang"
        btnText="Tambah"
      />
    </>
  );
};

export default Piutang;
