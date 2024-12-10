import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineSearch } from "react-icons/hi";

const FormSelect = ({ name, placeholder, list }) => {
  const [openSelectClient, setOpenSelectClient] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelected = (value) => {
    setSelected(value);
    setOpenSelectClient(false);
  };

  return (
    <div className="relative mt-7" name={name}>
      <div
        onClick={() => setOpenSelectClient(!openSelectClient)}
        className={`flex justify-between items-center px-4 py-[16.5px] rounded-lg text-[#ABAFB1] cursor-pointer transition-colors ${
          openSelectClient ? "bg-[#E9ECF8]/90" : "bg-[#EFF1F9]/60"
        }`}
      >
        <span className={`truncate ${selected && "text-[#5E6366]"}`}>
          {selected ? selected : placeholder}
        </span>
        <HiOutlineChevronDown
          size={20}
          className={`transition-all ${openSelectClient && "rotate-180"}`}
        />
      </div>

      {/* Dropdown Select Start */}
      <ul
        className={`absolute z-10 mt-2 overflow-y-auto rounded-b-lg border border-[#CFD3D4] bg-white text-[#2B2F32] cursor-pointer transition-all ${
          openSelectClient ? "max-h-60" : "hidden"
        }`}
      >
        <div className="sticky top-0 py-3 bg-white">
          <div className="flex items-center mx-4 px-4 border border-[#CFD3D4] rounded-lg">
            <HiOutlineSearch size={20} color="#130F26" />
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          {list
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => (
              <li
                key={item?.name}
                onClick={() => handleSelected(item.name)}
                className="w-full px-4 py-3 hover:bg-[#E9ECF8]/90 transition-all hover:pl-7"
              >
                {item.name}
              </li>
            ))}
        </div>
      </ul>
      {/* Dropdown Select End */}
    </div>
  );
};

export default FormSelect;
