import { HiMenuAlt1 } from "react-icons/hi";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { useLocation } from "react-router-dom";

// console.log(SidebarItem);
// const subMenu = SidebarItem.map((item) =>
//   item.sidebarSubItem?.map((sub) => sub)
// );
// console.log(subMenu);

export const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  const pathname = useLocation();
  console.log(pathname);

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

      {/* Nav Link From Sidebar Start */}
      {/* {SidebarItem && ( */}
      <div className="border-b bg-white px-5 flex justify-between lg:justify-start gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/income").map((sub) => (
          <Navigasi key={sub.key} sub={sub} />
        ))}
      </div>
      {/* )}   */}
      {/* {SidebarItem && (
        <div className="border-b bg-white px-5 flex justify-between lg:justify-start gap-3 overflow-auto">
          {SidebarItem.map((sub) =>
            sub.sidebarSubItem?.map((s) => (
              <button key={s.key} className="text-xs">
                {s.label}
              </button>
            ))
          )}
        </div>
      )} */}
      {/* Nav Link From Sidebar Start */}
    </div>
  );
};

export const Navigasi = ({ sub }) => {
  // const pathname = useLocation();

  return (
    <>
      {sub.sidebarSubItem &&
        sub.sidebarSubItem.map((s) => <p key={s.key}>{s.label}</p>)}
    </>
  );
};
