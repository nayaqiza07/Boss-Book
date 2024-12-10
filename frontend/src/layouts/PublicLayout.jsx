import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar } from "@components/Organisms/Sidebar/Sidebar";
import { Navbar } from "@components/Molecules/Navbar/Navbar";
import Loading from "@components/Atoms/Loading/Loading";

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
