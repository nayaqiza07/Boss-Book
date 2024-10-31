/* eslint-disable react/prop-types */
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { FiMoreVertical } from "react-icons/fi";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className={`w-fit h-full flex flex-col bg-white border-r shadow-md`}>
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
              <TbLayoutSidebarRightExpand size={20} />
            ) : (
              <TbLayoutSidebarLeftExpand size={20} />
            )}
          </button>
        </div>
        {/* Akhir Header Sidebar */}

        {/* Content Sidebar */}
        <ul className="flex-1 px-3">
          {SidebarItem.map((item) => (
            <li
              key={item.key}
              className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                item.active
                  ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
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
              {!expanded && (
                <div
                  className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                  {item.label}
                </div>
              )}
            </li>
          ))}
        </ul>
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
