import { useState } from "react";
import { Tick02Icon } from "hugeicons-react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="appearance-none w-6 h-6 rounded-lg border border-[#CFD3D4] flex self-center cursor-pointer checked:border-[#6D7DCD]"
        checked={checked}
        onChange={handleChecked}
      />
      {/* <span onClick={handleChecked} className="cursor-pointer"> */}
      <Tick02Icon
        color="#B0CAD9"
        onClick={handleChecked}
        className={`absolute w-5 h-5 cursor-pointer transition-all ${
          checked
            ? "top-0.5 left-0.5 bg-primary_100 rounded-md opacity-100"
            : "top-0.5 left-0.5 bg-primary_100 rounded-md opacity-0"
        }`}
      />
      {/* </span> */}
    </div>
  );
};
