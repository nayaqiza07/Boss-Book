/* eslint-disable react/prop-types */
import { SidebarItem } from "./SidebarItem";
import { Link, useLocation } from "react-router-dom";
// icon
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="w-fit h-screen sticky top-0">
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
              expanded ? "w-40 ml-3" : "w-0"
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
  const [subItemOpen, setSubItemOpen] = useState(false);

  return (
    <div>
      <Link to={item.path}>
        <li
          className={`relative flex items-center py-2 px-3 my-1 font-semibold rounded-md cursor-pointer transition-colors group ${
            pathname === item.path
              ? "bg-white shadow-md text-primary"
              : "hover:bg-[#eeeeee] text-[#707174]"
          }`}
          onClick={() => expanded && setSubItemOpen(!subItemOpen)}
        >
          {item.icon}
          <span
            className={`overflow-hidden transition-all flex-1
                  ${expanded ? "w-40 ml-3" : "w-0"}
                `}
          >
            {item.label}
          </span>

          {/* Sub Item Icon Start */}
          {item.sidebarSubItem && expanded && (
            <IoIosArrowDown
              className={`transition-all ${subItemOpen && "rotate-180"}`}
            />
          )}
          {/* Sub Item Icon End */}

          {!expanded && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-primary1 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {item.label}
            </div>
          )}
        </li>

        {/* Sub Item Dropdown Start*/}
        {item.sidebarSubItem && subItemOpen && open && (
          <ul className="border-l ml-6 pl-3">
            {item.sidebarSubItem.map((subItem) => (
              <li
                key={subItem.key}
                className={`relative flex items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                  pathname === item.path
                    ? "bg-white shadow-md text-primary"
                    : "hover:bg-[#eeeeee] text-[#707174]"
                }`}
              >
                {subItem.icon}
                <span
                  className={`overflow-hidden transition-all 
                          ${expanded ? "w-40 ml-3" : "w-0"}
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
        {/* Sub Item Dropdown End */}
      </Link>
    </div>
  );
};
// Akhir Content Sidebar
