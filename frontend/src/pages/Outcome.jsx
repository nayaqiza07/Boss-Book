import { SidebarItem } from "../components/Sidebar/SidebarItem";

const Outcome = () => {
  return (
    <>
      {/* Nav Link Start */}
      <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/outcome").map((sub) =>
          sub.sidebarSubItem.map((s) => <p key={s.key}>{s.label}</p>)
        )}
      </div>
      {/* Nav Link End */}

      <div>
        <div>
          <h1>income</h1>
        </div>
      </div>
    </>
  );
};

export default Outcome;
