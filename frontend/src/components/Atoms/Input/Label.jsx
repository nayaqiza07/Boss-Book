const Label = (props) => {
  const { className, children, variant = "default" } = props;

  const variantClasses = {
    default: "text-xs font-medium",
    primary_2: "bg-[#97a5eb]/20 text-primary_100",
    primaryOutline: "border border-primary_100 bg-white text-primary_100",
    // secondary: "bg-secondary_100 hover:bg-gray-400 text-gray-800",
    pressed: "bg-[#5B6EC6] text-white",
    delete: "bg-[#cc5f5f]/20 text-[#cc5f5f]",
  };
  return (
    <label className={`${className} ${variantClasses[variant]}`}>
      {children}
    </label>
  );
};

export default Label;
