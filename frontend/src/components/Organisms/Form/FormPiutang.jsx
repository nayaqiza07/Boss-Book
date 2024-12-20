import { useEffect, useState } from "react";
import { dateFormat } from "@/components/utils";
import FormInput from "@/components/Atoms/Form/FormInput";
import FormTextarea from "@/components/Atoms/Form/FormTextarea";
import FormSelect from "@/components/Atoms/Form/FormSelect";
import { getAllClients } from "@/api/clientApi";

const FormPiutang = (props) => {
  const { isUtang } = props;

  const [clients, setClients] = useState([]);

  const fetchDataClient = () => {
    getAllClients().then((result) => {
      setClients(result);
    });
  };

  useEffect(() => {
    fetchDataClient();
  }, []);

  return (
    <div className="w-full">
      {isUtang ? (
        <FormInput type="text" name="name" placeholder="Nama" />
      ) : (
        <FormSelect list={clients} name="client" placeholder="Select Client" />
      )}
      <FormTextarea type="text" name="keterangan" placeholder="Keterangan" />
      <FormInput
        type="text"
        name="date"
        defaultValue={dateFormat()}
        readonly={true}
      />
      <FormInput type="number" name="total" placeholder="Total" />
      {isUtang ? (
        <FormInput
          type="number"
          name="jumlahDibayar"
          placeholder="Jumlah Dibayar"
        />
      ) : (
        <FormInput
          type="number"
          name="jumlahDiterima"
          placeholder="Jumlah Diterima"
        />
      )}
    </div>
  );
};

const Terima = (props) => {
  const [radio, setRadio] = useState();
  const { isUtang } = props;

  return (
    <div className="w-full">
      <div className="flex justify-around mb-5">
        <label>
          <input
            type="radio"
            name="terima"
            value="sebagian"
            onChange={(e) => setRadio(e.target.value)}
          />
          <span className="ml-1">Sebagian</span>
        </label>

        <label>
          <input
            type="radio"
            name="terima"
            value="lunas"
            onChange={(e) => setRadio(e.target.value)}
          />
          <span className="ml-1">Lunas</span>
        </label>
      </div>

      {isUtang
        ? radio === "sebagian" && (
            <FormInput
              type="number"
              name="jumlahDibayar"
              placeholder="Jumlah Dibayar"
            />
          )
        : radio === "sebagian" && (
            <FormInput
              type="number"
              name="jumlahDiterima"
              placeholder="Jumlah Diterima"
            />
          )}
    </div>
  );
};

FormPiutang.Terima = Terima;

export default FormPiutang;
