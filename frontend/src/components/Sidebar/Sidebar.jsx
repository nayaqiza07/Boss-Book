import { Link, useLocation } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../../assets/Icon/Logo";

export const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`border-r h-screen bg-white sticky top-0 ${
        sidebarOpen ? "block" : "hidden lg:block"
      }`}
    >
      <nav className="w-72">
        {/* Top Sidebar Start */}
        <div className="px-6 h-16 border-b flex flex-row items-center cursor-default gap-2">
          <Logo />
          <h1 className="text-xl font-bold text-night_60">Boss Book</h1>
        </div>
        {/* Top Sidebar End */}

        {/* Sidebar Menus Start */}
        <ul className={`flex-1 px-3 pt-10`}>
          <span className="ml-3">Menu</span>
          {SidebarItem.map((item) => (
            <SidebarMenus key={item.key} item={item} />
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

  return (
    <div>
      <Link to={item.path}>
        <li
          className={`relative flex items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-all ${
            pathname === item.path
              ? "bg-primary_100 text-white ml-5"
              : "text-night_50 hover:bg-[#5570f1]/20 hover:text-primary_100"
          }`}
        >
          {item.icon}
          <span className={`overflow-hidden transition-all flex-1 ml-3`}>
            {item.label}
          </span>
        </li>
      </Link>
    </div>
  );
};
// Sidebar Menus End