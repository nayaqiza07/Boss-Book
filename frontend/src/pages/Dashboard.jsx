import ContentLeft from "../components/Content/ContentLeft";
import ContentRight from "../components/Content/ContentRight";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

export default Dashboard;
