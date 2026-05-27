import { useContext } from "react";
import { Link } from "react-router";
import { MyContext } from "../context/MyProvider";

const Menu = () => {
  const { newUser } = useContext(MyContext);

  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#">Products</Link>
      </li>
      <li>
        <a href="/#plans">Plans</a>
      </li>
      {newUser && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
};

export default Menu;
