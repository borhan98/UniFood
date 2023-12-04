import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-[#FBC47C] ">
      <div className="container mx-auto px-2 lg:px-0 flex">
        <div className="w-2/12 md:w-3/12 bg-base-300 min-h-screen  py-10">
          <Sidebar />
        </div>
        <div className="w-10/12 md:w-9/12 overflow-x-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
