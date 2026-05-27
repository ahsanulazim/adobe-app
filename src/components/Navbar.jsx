import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import Menu from "./Menu";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Navbar = () => {
  const { newUser } = useContext(MyContext);
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
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-360 mx-auto">
        <div className="navbar-start">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost md:hidden"
          >
            <LuMenu className="inline-block h-6 w-6 stroke-current" />
          </label>
          <Link to="/" className="max-md:hidden">
            <img src="/adobe-logo.svg" alt="Adobe Logo" className="w-18" />
          </Link>
        </div>
        <div className="navbar-center flex">
          <Link to="/" className="md:hidden">
            <img src="/adobe-logo.svg" alt="Adobe Logo" className="w-18" />
          </Link>
          <ul className="menu hidden md:flex menu-horizontal px-1">
            <Menu />
          </ul>
        </div>
        <div className="navbar-end">
          {newUser ? (
            <button
              onClick={handleLogout}
              className="btn btn-error rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn rounded-full btn-outline">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
