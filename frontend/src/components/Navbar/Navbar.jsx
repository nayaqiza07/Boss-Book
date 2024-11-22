import { HiMenuAlt1 } from "react-icons/hi";
import { useSelector } from "react-redux";

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
            <HiMenuAlt1 size={20} />
          </button>
          <input
            type="search"
            placeholder="Search"
            className="rounded border p-1 focus:outline-none ml-3"
          />
        </div>
        {user && <p className="text-xs">Hello, {user.username}</p>}
      </div>
    </div>
  );
};
