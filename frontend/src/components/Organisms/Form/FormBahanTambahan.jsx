import FormInput from "@/components/Atoms/Form/FormInput";

const FormBahanTambahan = (props) => {
  const { handleInputChange, name, ...rest } = props;
  return (
    <div {...rest} className="w-full">
      <FormInput
        type="text"
        name={`name${name}`}
        placeholder={`Nama ${name}`}
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name={`harga${name}`}
        placeholder={`Harga ${name}`}
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name={`panjang${name}`}
        placeholder={`Panjang ${name}`}
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name={`lebar${name}`}
        placeholder={`Lebar ${name}`}
        onChange={handleInputChange}
      />
      <FormInput
        type="text"
        name={`bagi${name}`}
        placeholder={`Bagi ${name}`}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormBahanTambahan;
