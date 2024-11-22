const FormInput = ({ icon, name, type, placeholder, defaultValue }) => {
  return (
    <div className="flex items-center px-4 gap-3 mt-7 rounded-lg bg-[#EFF1F9]/60">
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full py-[16.5px] focus:outline-none bg-transparent text-[#ABAFB1] transition-colors"
      />
    </div>
  );
};

export default FormInput;
