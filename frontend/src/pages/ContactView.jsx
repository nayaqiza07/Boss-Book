import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bag, Delete, EditSquare, Location, User } from "react-iconly";

// API
import { getClientById, deleteClient, updateClient } from "@/api/clientApi";
import { getClientOrder, getOrderById } from "@/api/orderApi";

// Asset
import { ShopBag } from "@/assets/Icon/ShopBag";

// Components
import { Card } from "@components/Organisms/Card/Card";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import { DataEmpty } from "@components/Molecules/404/DataEmpty";
import { Modal } from "@components/Organisms/Modal";
import ModalEditContact from "@/components/Organisms/Modal/ModalEditContact";
import { ModalInvoice } from "@components/Organisms/Modal/ModalInvoice";
import TableClientOrder from "@components/Organisms/Table/TableClientOrder";
import TableClientOrderMobile from "@components/Organisms/Table/TableClientOrderMobile";

const ContactView = () => {
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
    // console.log(id);
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
    navigate("/contact");
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
              Contact ID <span className="text-night_30 text-right">#{id}</span>
            </h1>
            <h1 className="flex gap-3 justify-between text-night_60 font-medium">
              Contact Since
              <span className="text-night_30 text-right">{client.date}</span>
            </h1>
          </div>

          <div className="flex gap-5 mt-5 justify-between lg:mt-0">
            <button
              onClick={() => setModalEdit(true)}
              className="flex items-center bg-[#5570F1]/20 text-primary_100 text-sm rounded-xl gap-3 py-3 px-5"
            >
              <EditSquare primaryColor="#5570F1" />
              Edit Contact
            </button>
            <button
              onClick={() => setModalDelete(true)}
              className="flex items-center bg-[#cc5f5f]/20 text-[#cc5f5f] text-sm rounded-xl gap-3 py-3 px-5"
            >
              <Delete primaryColor="#cc5f5f" />
              Delete Contact
            </button>
          </div>
        </div>
      </div>
      {/* Top Start */}

      {/* Content Start */}
      <CardSummary>
        <CardSummary.Header icon={<User primaryColor="#130F26" />} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8">
          <CardSummary.Body title="Phone" data={client.phone} />
          <CardSummary.Body title="Email" data={client.email} />
        </div>
      </CardSummary>

      <CardSummary>
        <CardSummary.Header icon={<Location primaryColor="#130F26" />} />
        <div className="grid grid-cols-1 mt-8">
          <CardSummary.Body title="Home Address" data={client.address} />
        </div>
      </CardSummary>
      <CardSummary>
        <CardSummary.Header icon={<Bag primaryColor="#130F26" />} />
        <div className="grid grid-cols-4 mt-8">
          <CardSummary.Body title="All Order" data={clientOrder.length} />
          <CardSummary.Body title="Pending" data={filterPending.length} />
          <CardSummary.Body
            title="In-Progress"
            data={filterInProgress.length}
          />
          <CardSummary.Body title="Completed" data={filterCompleted.length} />
        </div>
      </CardSummary>

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

      <ModalEditContact
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

export default ContactView;
