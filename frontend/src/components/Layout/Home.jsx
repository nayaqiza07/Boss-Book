import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row">
      {/* <Sidebar /> */}
      <Sidebar />
      {<Outlet />}
    </div>
  );
};

export default Home;
