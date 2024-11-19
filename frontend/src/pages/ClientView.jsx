import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { EditSquare, Delete } from "../components/Icon/Icon";
import { Modal } from "../components/Modal";
import { ModalEditClient } from "../components/Modal/ModalEditClient";
import { HeaderModal } from "../components/Header/HeaderModal";
import { deleteClient } from "../api/clientApi";
import Cards from "../components/Card/Cards";

const ClientView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getClientById();
  }, []);

  const getClientById = async () => {
    const response = await axios.get(`${apiUrl}/clients/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setAddress(response.data.address);
  };

  const handleDeleteClient = async (id) => {
    try {
      await deleteClient(id);
      setModalDelete(false);
      navigate("/client");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 grid gap-5 lg:grid-cols-3">
      {/* Top Start */}
      <div className="lg:col-span-3">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:flex lg:gap-6">
            <h1 className="flex gap-3 justify-between text-night_60 font-medium">
              Client ID <span className="text-night_30">#{id}</span>
            </h1>
            <h1 className="flex gap-3 justify-between text-night_60 font-medium">
              Client Since <span className="text-night_30">Nov 2024</span>
            </h1>
          </div>

          <div className="flex gap-5 mt-5 justify-between lg:mt-0">
            <button
              onClick={() => setModalEdit(true)}
              className="flex items-center bg-primary_100 text-white text-sm rounded-xl gap-3 py-3 px-5"
            >
              <EditSquare colorStroke={"#FFFFFF"} /> Edit Client
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
      <Cards type="client" name={name} email={email} phone={phone} />
      <Cards type="address" address={address} />
      <Cards type="order" />
      <Cards type="table" name={name} />
      {/* Content End */}

      <ModalEditClient
        openModalEdit={modalEdit}
        setOpenModalEdit={setModalEdit}
      />

      {/* Modal Delete Start */}
      <Modal openModal={modalDelete} onCloseModal={() => setModalDelete(false)}>
        <div className="w-72">
          {/* Header Modal Start */}
          <HeaderModal setOpenModal={setModalDelete} />
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
    </div>
  );
};

export default ClientView;
