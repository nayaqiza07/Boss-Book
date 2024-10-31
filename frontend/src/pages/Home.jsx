import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />
      {<Outlet />}
    </div>
  );
};

export default Home;
