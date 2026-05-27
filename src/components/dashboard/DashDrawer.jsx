import { signOut } from "firebase/auth";
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/firebase.config";
import { useState } from "react";

const DashDrawer = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(false);
        toast.success("Logged Out");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-3"
          className="btn btn-main drawer-button lg:hidden"
        >
          <LuMenu /> Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard/plans">Plans</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashDrawer;
