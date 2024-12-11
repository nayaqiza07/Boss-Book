const FormInput = ({
  icon,
  name,
  type,
  placeholder,
  defaultValue,
  readonly,
  onChange,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-3 mb-7 rounded-lg bg-[#EFF1F9]/60 w-full">
      {icon ? <span className="ml-4">{icon}</span> : null}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        // value={value}
        readOnly={readonly}
        onChange={onChange}
        {...rest}
        className="w-full px-4 py-[16.5px] rounded-lg focus:outline-none bg-transparent text-[#ABAFB1] focus:bg-[#E9ECF8]/90 transition-colors"
      />
    </div>
  );
};

export default FormInput;
