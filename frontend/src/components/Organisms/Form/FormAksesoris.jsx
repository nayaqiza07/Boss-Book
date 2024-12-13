import FormInput from "@/components/Atoms/Form/FormInput";

const FormAksesoris = (props) => {
  const { handleInputChange } = props;
  return (
    <div className="w-full">
      <FormInput
        type="text"
        name="nameJenisAksesoris"
        placeholder="Nama Aksesoris"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="hargaJenisAksesoris"
        placeholder="Harga Aksesoris"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="panjangJenisAksesoris"
        placeholder="Panjang Aksesoris"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="lebarJenisAksesoris"
        placeholder="Lebar Aksesoris"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="bagiJenisAksesoris"
        placeholder="Bagi Aksesoris"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormAksesoris;
