const FormTextarea = ({ name, type, placeholder, defaultValue, onChange }) => {
  return (
    <div className="flex items-center px-4 gap-3 mb-7 rounded-lg bg-[#EFF1F9]/60">
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full py-[16.5px] focus:outline-none bg-transparent text-[#ABAFB1] transition-colors"
      />
    </div>
  );
};

export default FormTextarea;
