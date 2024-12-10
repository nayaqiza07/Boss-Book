const FormTextarea = ({ name, type, placeholder, defaultValue }) => {
  return (
    <div className="flex items-center px-4 gap-3 mt-7 rounded-lg bg-[#EFF1F9]/60">
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full py-[16.5px] focus:outline-none bg-transparent text-[#ABAFB1] transition-colors"
      />
    </div>
  );
};

export default FormTextarea;
