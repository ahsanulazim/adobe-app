import { Link } from "react-router";

const Menu = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#">Products</Link>
      </li>
      <li>
        <Link to="/#plans">Plans</Link>
      </li>
    </>
  );
};

export default Menu;
