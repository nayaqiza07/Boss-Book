import FormInput from "@/components/Atoms/Form/FormInput";
import FormSelect from "@/components/Atoms/Form/FormSelect";
import FormTextarea from "@/components/Atoms/Form/FormTextarea";
import Label from "@/components/Atoms/Input/Label";
import { dateFormat } from "@/components/utils";
import { useState } from "react";

const FormTransaksi = (props) => {
  const { jenisList, jenis, setJenis, pembayaran, setPembayaran, optionList } =
    props;

  return (
    <div className="w-full">
      <FormInput type="text" name="name" placeholder="Nama" />
      <FormTextarea type="text" name="keterangan" placeholder="Keterangan" />
      <FormInput
        type="text"
        name="date"
        defaultValue={dateFormat()}
        readonly={true}
      />
      <FormSelect
        name="jenis"
        placeholder="Jenis"
        list={jenisList}
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
      />
      <FormSelect name="kategori" placeholder="Kategori" list={optionList} />
      <FormInput type="number" name="jumlah" placeholder="Jumlah" />
      <div className="flex justify-around mb-7">
        <label>
          <input
            type="radio"
            name="pembayaran"
            value="tunai"
            onChange={(e) => setPembayaran(e.target.value)}
          />
          <span className="ml-1">Tunai</span>
        </label>

        <label>
          <input
            type="radio"
            name="pembayaran"
            value="nonTunai"
            onChange={(e) => setPembayaran(e.target.value)}
          />
          <span className="ml-1">Non Tunai</span>
        </label>
      </div>
      {pembayaran === "nonTunai" && (
        <Label variant="default" size="default">
          <span className="text-xs">Jatuh Tempo</span>
          <FormInput type="date" name="jatuhTempo" />
        </Label>
      )}
    </div>
  );
};

const Terima = (props) => {
  const { textJumlah } = props;
  const [radio, setRadio] = useState();

  return (
    <div className="w-full">
      <div className="flex justify-around mb-5">
        <label>
          <input
            type="radio"
            name="terima"
            value="lunas"
            onChange={(e) => setRadio(e.target.value)}
          />
          <span className="ml-1">Lunas</span>
        </label>

        <label>
          <input
            type="radio"
            name="terima"
            value="sebagian"
            onChange={(e) => setRadio(e.target.value)}
          />
          <span className="ml-1">Sebagian</span>
        </label>
      </div>

      {radio === "sebagian" && (
        <>
          <label className="text-xs">Max {textJumlah}</label>
          <FormInput
            type="number"
            name="jumlahDibayar"
            placeholder="Jumlah Dibayar"
          />
        </>
      )}
    </div>
  );
};

FormTransaksi.Terima = Terima;

export default FormTransaksi;
