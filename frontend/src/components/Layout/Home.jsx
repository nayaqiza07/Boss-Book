import { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Sidebar } from "../Sidebar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
// import { SidebarItem } from "../Sidebar/SidebarItem";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [activeItem, setActiveItem] = useState(null);

  // const handleItemClick = (item) => {
  //   setActiveItem(item);
  // };

  // console.log(activeItem);

  return (
    <div className="flex flex-row">
      <Sidebar
        sidebarOpen={sidebarOpen}
        // handleItemClick={handleItemClick}
        // activeItem={activeItem}
      />
      <div className="flex flex-col w-full">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          // activeItem={activeItem}
        />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Home;
