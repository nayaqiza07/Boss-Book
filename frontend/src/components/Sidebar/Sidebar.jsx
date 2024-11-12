import { Link, useLocation } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { IoIosArrowDown } from "react-icons/io";

export const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`border-r h-screen bg-white sticky top-0 ${
        sidebarOpen ? "block" : "hidden lg:block"
      }`}
    >
      <nav className="w-60">
        {/* Top Sidebar Start */}
        <div className="px-3 h-16 border-b flex flex-row justify-between items-center cursor-default">
          <h1 className="text-2xl font-bold text-[#3c3dbf] ml-3">
            Boss <span className="text-[#FF3666]">Book</span>
          </h1>
        </div>
        {/* Top Sidebar End */}

        {/* Sidebar Menus Start */}
        <ul className={`flex-1 px-3 pt-10`}>
          <span className="ml-3">Menu</span>
          {SidebarItem.map((item) => (
            <SidebarMenus
              key={item.key}
              item={item}
              // handleItemClick={handleItemClick}
              // activeItem={activeItem}
            />
          ))}
        </ul>
        {/* Sidebar Menus End */}
      </nav>
    </aside>
  );
};

// Sidebar Menus Start
export const SidebarMenus = ({ item }) => {
  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <div>
      <Link to={item.path}>
        <li
          // onClick={() => handleItemClick(!activeItem)}
          className={`relative flex items-center py-2 px-3 my-1  rounded-md cursor-pointer transition-colors ${
            pathname === item.path
              ? "bg-[#e4e5ff] text-[#3c3dbf]"
              : "hover:bg-[#e4e5ff] text-[#A6ABC8]"
          }`}
        >
          {item.icon}
          <span className={`overflow-hidden transition-all flex-1 ml-3`}>
            {item.label}
          </span>

          {item.sidebarSubItem && <IoIosArrowDown />}
        </li>
      </Link>
    </div>
  );
};
// Sidebar Menus End
