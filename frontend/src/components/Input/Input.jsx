// import { useState } from "react";

const Input = ({
  name,
  readOnly,
  type,
  variant = "primary", // Untuk variant Input
  size = "sm", // Untuk ukuran Input
  className, // Untuk className tambahan pada Input
  ...rest //Untuk meneruskan props lainnya pada Input
}) => {
  // const [input, setInput] = useState("");

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

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
    <div>
      <input
        name={name}
        readOnly={readOnly}
        // value={input}
        type={type}
        {...rest}
        className={`w-full transition duration-200 ${className} ${sizeClasses[size]} ${variantClasses[variant]}`}
      />
    </div>
  );
};

export default Input;
