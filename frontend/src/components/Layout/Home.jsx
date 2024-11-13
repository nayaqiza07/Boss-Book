import { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Sidebar } from "../Sidebar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex flex-col w-full bg-main_background">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Home;
