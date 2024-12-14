import FormInput from "@/components/Atoms/Form/FormInput";

const FormAksesoris = (props) => {
  const { handleInputChange } = props;

  return (
    <div className="w-full">
      <FormInput
        type="text"
        name="nameAksesoris"
        placeholder="Masukkan Nama Aksesoris"
        onChange={handleInputChange}
      />
      <FormInput
        type="number"
        name="hargaAksesoris"
        placeholder="Masukkan Harga Aksesoris"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormAksesoris;
