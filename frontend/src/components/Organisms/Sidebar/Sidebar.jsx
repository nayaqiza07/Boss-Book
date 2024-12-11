import { Link, useLocation, useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "@components/Icon/Icon";
import { logoutUser } from "@/redux/slices/userSlice";
import customAPI from "@/api/axios";

export const Sidebar = ({ sidebarOpen }) => {
  const user = useSelector((state) => state.userState.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await customAPI.get("/auth/logout");
      dispatch(logoutUser());
      navigate("/login");
    } catch {
      dispatch(logoutUser());
      navigate("/login");
    }
  };

  return (
    <aside
      className={`border-r h-screen bg-white sticky top-0 ${
        sidebarOpen ? "block" : "hidden lg:block"
      }`}
    >
      <nav className="w-72 h-full flex flex-col">
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

        {/* Logout */}
        {user && (
          <div className={`px-3 py-7`}>
            <button
              onClick={handleLogout}
              className="ml-3 p-3 rounded-lg bg-secondary_100"
            >
              Logout
            </button>
          </div>
        )}
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
