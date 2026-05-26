import { Link } from "react-router";

const Menu = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#">Products</Link>
      </li>
      <li>
        <Link to="#plans">Plans</Link>
      </li>
    </>
  );
};

export default Menu;
