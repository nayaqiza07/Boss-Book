import { useState } from "react";
import FormTransaksi from "../Form/FormTransaksi";
import Modal from "./Modal";

const ModalEditTransaksi = (props) => {
  const { openModal, setOpenModal, pembayaran, setPembayaran, handleUpdate } =
    props;

  const [jenis, setJenis] = useState("");

  const getOptionList = () => {
    if (jenis === "Pemasukan") {
      return optionsPemasukan;
    } else if (jenis === "Pengeluaran") {
      return optionsPengeluaran;
    } else {
      return [];
    }
  };

  const optionsPemasukan = [
    {
      name: "Modal",
      _id: "Modal",
    },
    {
      name: "Penjualan",
      _id: "Penjualan",
    },
    {
      name: "Komisi",
      _id: "Komisi",
    },
    {
      name: "Pendapatan Jasa",
      _id: "Pendapatan Jasa",
    },
  ];

  const optionsPengeluaran = [
    {
      name: "Akomodasi",
      _id: "Akomodasi",
    },
    {
      name: "Aksesoris",
      _id: "Aksesoris",
    },
    {
      name: "Iklan",
      _id: "Iklan",
    },
    {
      name: "Listrik",
      _id: "Listrik",
    },
    {
      name: "Gaji Karyawan",
      _id: "Gaji Karyawan",
    },
    {
      name: "Finishing",
      _id: "Finishing",
    },
    {
      name: "Foam & Fabric",
      _id: "Foam & Fabric",
    },
    {
      name: "Packaging",
      _id: "Packaging",
    },
    {
      name: "Bahan Baku",
      _id: "Bahan Baku",
    },
    {
      name: "Alat",
      _id: "Alat",
    },
    {
      name: "Ongkos Kirim",
      _id: "Ongkos Kirim",
    },
  ];

  const jenisList = [
    {
      name: "Pemasukan",
      _id: "Pemasukan",
    },
    {
      name: "Pengeluaran",
      _id: "Pengeluaran",
    },
  ];

  return (
    <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
      <Modal.Header
        title="Edit Transaksi"
        closeModal={() => setOpenModal(false)}
      />
      <form onSubmit={handleUpdate}>
        <Modal.Body className="max-h-96 overflow-y-auto lg:max-h-fit">
          <FormTransaksi
            jenisList={jenisList}
            jenis={jenis}
            setJenis={setJenis}
            pembayaran={pembayaran}
            setPembayaran={setPembayaran}
            optionList={getOptionList()}
          />
        </Modal.Body>
        <Modal.Footer
          text="Tambah"
          type="submit"
          closeModal={() => setOpenModal(false)}
          handleSubmit={() => setOpenModal(false)}
        />
      </form>
    </Modal>
  );
};

export default ModalEditTransaksi;
