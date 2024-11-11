import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-row">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full">
        <Navbar />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Home;
