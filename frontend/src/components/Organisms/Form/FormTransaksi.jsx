import FormInput from "@/components/Atoms/Form/FormInput";
import FormSelect from "@/components/Atoms/Form/FormSelect";
import { dateFormat } from "@/components/utils";

const FormTransaksi = (props) => {
  const { status, list } = props;

  return (
    <div className="w-full">
      <FormInput type="text" name="deskripsi" placeholder="Deskripsi" />
      <FormInput
        type="text"
        name="date"
        defaultValue={dateFormat()}
        readonly={true}
      />
      <FormSelect name="kategori" placeholder="Kategori" list={list} />

      <FormInput
        type="text"
        name="status"
        defaultValue={status}
        readonly={true}
      />

      <FormInput type="number" name="nominal" placeholder="Nominal" />
    </div>
  );
};

export default FormTransaksi;
