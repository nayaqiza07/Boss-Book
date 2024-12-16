import FormInput from "@/components/Atoms/Form/FormInput";

const FormBahanTambahan = (props) => {
  const { handleInputChange, ...rest } = props;
  return (
    <div {...rest} className="w-full">
      <FormInput
        type="text"
        name="namaBahanTambahan"
        placeholder="Nama Bahan"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="hargaBahanTambahan"
        placeholder="Harga Bahan Tambahan"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="panjangBahanTambahan"
        placeholder="Panjang Bahan Tambahan"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="lebarBahanTambahan"
        placeholder="Lebar Bahan Tambahan"
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name="bagiBahanTambahan"
        placeholder="Bagi Bahan Tambahan"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormBahanTambahan;
