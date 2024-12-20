const Label = (props) => {
  const { className, children, variant = "default", size = "sm" } = props;

  const variantClasses = {
    default: "",
    primary_2: "bg-[#97a5eb]/20 text-primary_100 rounded",
    primaryOutline: "border border-primary_100 bg-white text-primary_100",
    success: "bg-[#519c66]/20 text-action_go",
    danger: "bg-[#cc5f5f]/20 text-action_stop",
  };

  const sizeClasses = {
    default: "",
    xs: "text-xs py-1 px-4 rounded",
    sm: "text-sm py-1 px-4 rounded",
    md: "text-base py-1.5 px-4 rounded",
    lg: "text-lg py-2 px-6 rounded",
  };
  return (
    <label
      className={`${className} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </label>
  );
};

export default Label;
