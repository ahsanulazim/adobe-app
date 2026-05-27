import { Outlet } from "react-router";
import DashDrawer from "../components/dashboard/DashDrawer";

const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="max-w-360 mx-auto p-5">
          <DashDrawer>
            <Outlet />
          </DashDrawer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
