const Button = ({
  children, // Untuk isi di dalam Button (disini children menerima isi berupa teks Button)
  type,
  variant = "primary", // Untuk variant Button
  size = "sm", // Untuk ukuran Button
  className, // Untuk className tambahan pada Button
  ...rest //Untuk meneruskan props lainnya pada Button
}) => {
  const variantClasses = {
    primary: "bg-primary_100 text-white",
    primary_2: "bg-[#97a5eb]/20 text-primary_100",
    primaryOutline: "border border-primary_100 bg-white text-primary_100",
    // secondary: "bg-secondary_100 hover:bg-gray-400 text-gray-800",
    pressed: "bg-[#5B6EC6] text-white",
    delete: "bg-[#cc5f5f]/20 text-[#cc5f5f]",
    close: "bg-secondary_30 rounded-lg",
  };

  const sizeClasses = {
    close: "text-xs p-1 rounded",
    xs: "text-xs py-1 px-4 rounded",
    sm: "text-sm py-1 px-4 rounded",
    md: "text-base py-1.5 px-4 rounded",
    lg: "text-lg py-2 px-6 rounded",
  };

  return (
    <button
      type={type}
      className={`transition duration-200 hover:scale-105 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
