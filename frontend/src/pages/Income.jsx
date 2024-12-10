import { Card } from "@components/Organisms/Card/Card";
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";

const Income = () => {
  return (
    <>
      {/* Nav Link Start */}
      <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/income").map((sub) =>
          sub.sidebarSubItem.map((s) => <p key={s.key}>{s.label}</p>)
        )}
      </div>
      {/* Nav Link End */}

      <div>
        <div className="p-5 grid gap-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default Income;
