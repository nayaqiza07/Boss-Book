import { useSelector } from "react-redux";
import { Menu03Icon } from "hugeicons-react";

export const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  const user = useSelector((state) => state.userState.user);

  return (
    <div className="sticky top-0 z-10">
      <div className="border-b bg-white p-4 pb-2 h-16 flex justify-between items-center gap-3">
        <div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <Menu03Icon />
          </button>
        </div>
        {user && <p className="text-xs">Hello, {user.username}</p>}
      </div>
    </div>
  );
};
