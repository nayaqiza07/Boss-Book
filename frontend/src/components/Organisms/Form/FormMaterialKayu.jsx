import FormInput from "@components/Atoms/Form/FormInput";
import FormSelect from "@components/Atoms/Form/FormSelect";

const FormMaterialKayu = (props) => {
  const { handleOnChange, handleInputSelect, jenisKayuData, jenisKayu } = props;

  return (
    <div className="w-full">
      <FormInput
        type="text"
        name="sisi"
        placeholder="Masukkan Sisi"
        onChange={handleOnChange}
      />
      <FormInput
        type="text"
        name="panjang"
        placeholder="Masukkan Panjang"
        onChange={handleOnChange}
      />
      <FormInput
        type="text"
        name="lebar"
        placeholder="Masukkan Lebar"
        onChange={handleOnChange}
      />
      <FormInput
        type="text"
        name="tebal"
        placeholder="Masukkan Tebal"
        onChange={handleOnChange}
      />
      <FormInput
        type="text"
        name="jumlahSisi"
        placeholder="Masukkan Jumlah Sisi"
        onChange={handleOnChange}
      />
      <FormSelect
        name="jenisKayu"
        list={jenisKayuData}
        placeholder="Jenis Kayu"
        value={jenisKayu}
        onChange={handleInputSelect}
      />
    </div>
  );
};

export default FormMaterialKayu;
