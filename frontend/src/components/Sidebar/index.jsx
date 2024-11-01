/* eslint-disable react/prop-types */
import { SidebarItem } from "./SidebarItem";
import { Link, useLocation } from "react-router-dom";
// icon
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="w-fit h-screen">
      <nav className="h-full flex flex-col bg-[#f6f7f9] border-r">
        {/* Header Sidebar */}
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <SidebarHeader />
        </SidebarContext.Provider>
        {/* Akhir Header Sidebar */}

        {/* Content Sidebar */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className={`flex-1 px-3 pt-10`}>
            {SidebarItem.map((item) => (
              <SidebarMenuItems key={item.key} item={item} />
            ))}
          </ul>
        </SidebarContext.Provider>
        {/* Akhir Content Sidebar */}

        {/* Footer Sidebar */}
        <div className={`border-t flex p-3`}>
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="small logo"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }
              `}
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

// Sidebar Header
export const SidebarHeader = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);
  return (
    <div>
      <div className="p-4 pb-2 h-16 border-b flex flex-row justify-between items-center">
        <img
          src="https://img.logoipsum.com/243.svg"
          className={`overflow-hidden transition-all ${
            expanded ? "w-32" : "w-0"
          }
            `}
          alt="logo"
        />

        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? (
            <IoIosArrowUp size={20} className="sm:-rotate-90" />
          ) : (
            <IoIosArrowDown size={20} className="sm:-rotate-90" />
          )}
        </button>
      </div>
    </div>
  );
};
// Akhir Sidebar Header

// Content Sidebar
export const SidebarMenuItems = ({ item }) => {
  const { expanded } = useContext(SidebarContext);
  const { pathname } = useLocation();
  return (
    <div>
      <Link to={item.path}>
        <li
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
            pathname === item.path
              ? "bg-white shadow-md text-black"
              : "hover:bg-[#eeeeee] text-black"
          }`}
        >
          {item.icon}
          <span
            className={`overflow-hidden transition-all
                  ${expanded ? "wl-52 ml-3" : "w-0"}
                `}
          >
            {item.label}
          </span>
        </li>
      </Link>
    </div>
  );
};
// Akhir Content Sidebar
