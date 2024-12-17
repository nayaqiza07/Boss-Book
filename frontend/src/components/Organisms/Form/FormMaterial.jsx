import FormInput from "@/components/Atoms/Form/FormInput";
import FormSelect from "@/components/Atoms/Form/FormSelect";

const FormMaterial = (props) => {
  const {
    handleOnChange,
    handleInputSelect,
    jenisFinishing,
    jenisFinishingData,
    isFinishing,
  } = props;

  return (
    <div className="w-full">
      <FormInput
        type="text"
        name="namaTukang"
        placeholder="Masukkan Nama Tukang"
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
        name="rumus"
        placeholder="Masukkan Rumus"
        onChange={handleOnChange}
      />

      {isFinishing && (
        <FormSelect
          name="jenisFinishing"
          list={jenisFinishingData}
          placeholder="Jenis Finishing"
          value={jenisFinishing}
          onChange={handleInputSelect}
        />
      )}
    </div>
  );
};

export default FormMaterial;
