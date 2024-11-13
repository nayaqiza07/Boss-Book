import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10">
      <div className="border-b bg-white p-4 pb-2 h-16 flex justify-between lg:justify-start gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <HiMenuAlt1 size={20} />
        </button>
        <input
          type="search"
          placeholder="Search"
          className="rounded border p-1 focus:outline-none"
        />
      </div>
    </div>
  );
};
