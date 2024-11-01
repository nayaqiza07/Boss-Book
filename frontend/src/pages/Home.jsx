import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-row">
      {/* <Sidebar /> */}
      <Sidebar />
      {<Outlet />}
    </div>
  );
};

export default Home;
