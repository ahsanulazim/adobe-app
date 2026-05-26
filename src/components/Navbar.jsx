import { LuMenu } from "react-icons/lu";
import { Link } from "react-router";
import Menu from "./Menu";

const Navbar = () => {
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
          <Link href="/" className="max-md:hidden">
            <img src="/adobe-logo.svg" alt="Adobe Logo" className="w-18" />
          </Link>
        </div>
        <div className="navbar-center flex">
          <Link href="/" className="md:hidden">
            <img src="/adobe-logo.svg" alt="Adobe Logo" className="w-18" />
          </Link>
          <ul className="menu hidden md:flex menu-horizontal px-1">
            <Menu />
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <button className="btn rounded-full btn-outline">Log in</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
