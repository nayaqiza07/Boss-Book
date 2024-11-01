/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

const SidebarContext = createContext();

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="w-full sm:w-fit h-screen">
      <nav className={`h-full flex flex-col bg-white border-r shadow-md`}>
        {/* Header Sidebar */}
        <div className="p-4 pb-2 h-fit flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all 
              ${expanded ? "w-28" : "w-0"}
            `}
            alt="logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <IoIosArrowBack size={20} />
            ) : (
              <IoIosArrowBack size={20} className="transition all rotate-180" />
            )}
          </button>
        </div>
        {/* Akhir Header Sidebar */}

        {/* Content Sidebar */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 pt-10">
            {SidebarItem.map((item) => (
              <SidebarSubItem key={item.key} item={item} />
            ))}
          </ul>
        </SidebarContext.Provider>
        {/* Akhir Content Sidebar */}

        {/* Footer Sidebar */}
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="small logo"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all 
              ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <FiMoreVertical size={20} />
          </div>
        </div>
        {/* Akhir Footer Sidebar */}
      </nav>
    </aside>
  );
};

export const SidebarSubItem = ({ item }) => {
  const { expanded } = useContext(SidebarContext);
  const { pathname } = useLocation();
  const [subItemOpen, setSubItemOpen] = useState(false);

  return (
    <div>
      <Link to={item.path}>
        <li
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            pathname === item.path
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }`}
          onClick={() => expanded && setSubItemOpen(!subItemOpen)}
        >
          {item.icon}
          <span
            className={`overflow-hidden transition-all flex-1
                  ${expanded ? "w-52 ml-3" : "w-0"}
                `}
          >
            {item.label}
          </span>

          {/* Sub Item Icon */}
          {item.sidebarSubItem && expanded && (
            <IoIosArrowDown
              className={`transition-all ${subItemOpen && "rotate-180"}`}
            />
          )}
          {/* Akhir Sub Item Icon */}

          {!expanded && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {item.label}
            </div>
          )}
        </li>

        {/* Sub Item Dropdown */}
        {item.sidebarSubItem && subItemOpen && open && (
          <ul className="border-l ml-6 pl-3">
            {item.sidebarSubItem.map((subItem) => (
              <li
                key={subItem.key}
                className={`relative flex items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                  pathname === item.path
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }`}
              >
                {subItem.icon}
                <span
                  className={`overflow-hidden transition-all 
                          ${expanded ? "wl-52 ml-3" : "w-0"}
                        `}
                >
                  {subItem.label}
                </span>
                {!expanded && (
                  <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                  >
                    {subItem.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {/* Akhir Sub Item Dropdown */}
      </Link>
    </div>
  );
};
