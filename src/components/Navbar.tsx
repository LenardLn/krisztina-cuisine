import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to={"/"}>Acasă</Link>
        </li>
        <li className="navbar-item">
          <Link to={"/prajituri"}>Cuisine</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
