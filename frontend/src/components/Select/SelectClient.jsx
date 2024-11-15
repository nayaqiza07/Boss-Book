import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineSearch } from "react-icons/hi";

export const SelectClient = () => {
  // const [datas, setDatas] = useState(null);
  const [openSelectClient, setOpenSelectClient] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelected = (value) => {
    setSelected(value);
    setOpenSelectClient(false);
  };

  const datas = [
    {
      name: "Mr. 1",
    },
    {
      name: "Mr. 2",
    },
    {
      name: "Mr. 3",
    },
    {
      name: "Mr. 4",
    },
    {
      name: "Mr. 5",
    },
  ];

  // useEffect(() => {
  //   fetch("https://restcountries.com/v2/all?fields=name")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDatas(data);
  //     });
  // });

  return (
    <div className="relative">
      <div
        onClick={() => setOpenSelectClient(!openSelectClient)}
        className={`flex justify-between items-center px-4 py-[16.5px] rounded-lg text-[#ABAFB1] cursor-pointer transition-colors ${
          openSelectClient ? "bg-[#E9ECF8]/90" : "bg-[#EFF1F9]/60"
        }`}
      >
        <span className={`truncate ${selected && "text-[#5E6366]"}`}>
          {selected ? selected : "Select Client"}
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
          {datas
            ?.filter((data) => {
              return search.toLowerCase() === ""
                ? data
                : data.name.toLowerCase().includes(search);
            })
            .map((data) => (
              <li
                key={data?.name}
                onClick={() => handleSelected(data.name)}
                className="w-full px-4 py-3 hover:bg-[#E9ECF8]/90 transition-all hover:pl-7"
              >
                {data.name}
              </li>
            ))}
        </div>
      </ul>
      {/* Dropdown Select End */}
    </div>
  );
};
