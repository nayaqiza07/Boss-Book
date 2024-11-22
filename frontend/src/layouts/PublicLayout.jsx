import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";
import Loading from "../components/Loading/Loading";

const PublicLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="flex flex-row">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex flex-col w-full bg-main_background">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {isPageLoading ? <Loading /> : <>{<Outlet />}</>}
      </div>
    </div>
  );
};

export default PublicLayout;
