import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditSquare, Delete } from "../components/Icon/Icon";
import { Modal } from "../components/Modal";
import { ModalEditClient } from "../components/Modal/ModalEditClient";
import Cards from "../components/Card/Cards";
import { getClientById, deleteClient, updateClient } from "../api/clientApi";
import { getClientOrder, getOrderById } from "../api/orderApi";
import TableClientOrder from "../components/Table/TableClientOrder";
import { Card } from "../components/Card/Card";
import TableClientOrderMobile from "../components/Table/TableClientOrderMobile";
import { DataEmpty } from "../components/Alert/DataEmpty";
import { ShopBag } from "../assets/Icon/ShopBag";
import { ModalInvoice } from "../components/Modal/ModalInvoice";

const ClientView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState("");
  const [clientOrder, setClientOrder] = useState([]);
  const [dataOrderById, setDataOrderById] = useState("");

  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [openModalInvoice, setOpenModalInvoice] = useState(false);

  useEffect(() => {
    handleClientById(id);
    handleClientOrder(id);
  }, [id]);

  const handleClientById = (id) => {
    getClientById(id).then((result) => {
      setClient(result);
    });
  };

  const handleClientOrder = (id) => {
    getClientOrder(id).then((result) => {
      setClientOrder(result);
    });
  };

  const fetchDataOrderById = (id) => {
    getOrderById(id).then((result) => {
      setDataOrderById(result);
    });
  };

  const handleModalInvoice = (id) => {
    setOpenModalInvoice(true);
    console.log(id);
    fetchDataOrderById(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil semua Inputan
    const form = e.target;
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm);
    // console.log(data);

    updateClient(id, data.name, data.email, data.phone, data.address);
    setClient(data);
  };

  const handleDeleteClient = () => {
    deleteClient(id);
    navigate("/client");
  };

  const filterPending = clientOrder.filter((item) => item.status === "Pending");
  const filterInProgress = clientOrder.filter(
    (item) => item.status === "In-Progress"
  );
  const filterCompleted = clientOrder.filter(
    (item) => item.status === "Completed"
  );

  return (
    <div className="p-5 grid gap-5 lg:grid-cols-3">
      {/* Top Start */}
      <div className="lg:col-span-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:flex lg:gap-6">
            <h1 className="flex gap-3 justify-between text-night_60 font-medium">
              Client ID <span className="text-night_30 text-right">#{id}</span>
            </h1>
            <h1 className="flex gap-3 justify-between text-night_60 font-medium">
              Client Since
              <span className="text-night_30 text-right">{client.date}</span>
            </h1>
          </div>

          <div className="flex gap-5 mt-5 justify-between lg:mt-0">
            <button
              onClick={() => setModalEdit(true)}
              className="flex items-center bg-[#5570F1]/20 text-primary_100 text-sm rounded-xl gap-3 py-3 px-5"
            >
              <EditSquare colorStroke={"#5570F1"} /> Edit Client
            </button>
            <button
              onClick={() => setModalDelete(true)}
              className="flex items-center bg-[#cc5f5f]/20 text-[#cc5f5f] text-sm rounded-xl gap-3 py-3 px-5"
            >
              <Delete colorStroke={"#cc5f5f"} /> Delete Client
            </button>
          </div>
        </div>
      </div>
      {/* Top Start */}

      {/* Content Start */}
      <Cards
        type="client"
        name={client.name}
        phone={client.phone}
        email={client.email}
      />
      <Cards type="address" address={client.address} />
      <Cards
        type="order"
        totalOrder={clientOrder.length}
        filterPending={filterPending.length}
        filterInProgress={filterInProgress.length}
        filterCompleted={filterCompleted.length}
      />

      <Card colSpan="lg:col-span-3">
        {clientOrder.length === 0 ? (
          <DataEmpty
            icon={<ShopBag />}
            title={"Add Your Order"}
            subTitle={"Add Order to this section"}
          />
        ) : (
          <>
            <h1>{client.name} Orders</h1>
            <div className="hidden overflow-x-auto mt-5 md:block">
              <TableClientOrder
                clientOrder={clientOrder}
                handleModalInvoice={handleModalInvoice}
              />
            </div>

            {/* Table view up to the `md:` breakpoint Start  */}
            <div className="grid grid-cols-1 gap-5 pt-3 mt-5 sm:grid-cols-2 md:hidden">
              <TableClientOrderMobile
                clientOrder={clientOrder}
                handleModalInvoice={handleModalInvoice}
              />
            </div>
            {/* Table view up to the `md:` breakpoint End  */}
          </>
        )}
      </Card>
      {/* Content End */}

      <ModalEditClient
        openModalEdit={modalEdit}
        setOpenModalEdit={setModalEdit}
        client={client}
        handleSubmit={handleSubmit}
      />

      {/* Modal Delete Start */}
      <Modal openModal={modalDelete} onCloseModal={() => setModalDelete(false)}>
        <div className="w-72">
          {/* Header Modal Start */}
          {/* <HeaderModal setOpenModal={setModalDelete} /> */}
          {/* Header Modal End */}

          {/* Content Start */}
          <div className="mt-7 text-center">
            <h1>Are You Sure?</h1>
            <p>Do you really want to delete data with id : {id}?</p>
          </div>
          {/* Content End */}

          {/* Footer Start */}
          <div className="flex justify-center gap-3 mt-11">
            <button
              onClick={() => setModalDelete(false)}
              className="w-full px-3 py-2 text-lg rounded-xl border-2 border-action_stop text-action_stop transition-all hover:scale-105 lg:w-44"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDeleteClient(id)}
              className="w-full px-3 py-2 text-lg rounded-xl border-2 border-action_stop bg-action_stop text-white transition-all hover:scale-105 lg:w-44"
            >
              Delete
            </button>
          </div>
          {/* Footer End */}
        </div>
      </Modal>
      {/* Modal Delete End */}

      {/* Modal Invoice Start */}
      <ModalInvoice
        openModalInvoice={openModalInvoice}
        setOpenModalInvoice={setOpenModalInvoice}
        dataOrderById={dataOrderById}
      />
      {/* Modal Invoice End */}
    </div>
  );
};

export default ClientView;
