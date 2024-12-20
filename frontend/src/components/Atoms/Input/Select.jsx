const Select = (props) => {
  const {
    name,
    list,
    variant = "text", // Untuk variant Input
    size = "sm", // Untuk ukuran Input
    className, // Untuk className tambahan pada Input
    placeholder,
    value,
    onChange,
    ...rest // Untuk meneruskan props lainnya pada Input
  } = props;

  const variantClasses = {
    text: "border border-[#E1E2E9] focus:outline-none focus:border-primary_100 focus:text-[#5E6366]",
    disabled:
      "border border-[#DDE2E5] bg-[#F2F4F5] text-[#5E6366] focus:outline-none",
  };

  const sizeClasses = {
    xs: "text-xs py-1 px-3 rounded-md",
    sm: "text-sm py-1.5 px-3 rounded-md",
    md: "text-base py-2 px-3 rounded-md",
    lg: "text-lg py-2 px-5 rounded-md",
  };

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      <option value="">{placeholder}</option>
      {list.map((item) => (
        <option key={item.name} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
