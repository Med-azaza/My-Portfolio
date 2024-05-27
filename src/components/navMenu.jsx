import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPage = pathname.substring(1);

  return (
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      {currentPage !== "about" && (
        <li>
          <Link to="/about">About</Link>
        </li>
      )}
      {currentPage !== "work" && (
        <li>
          <Link to="/work">Work</Link>
        </li>
      )}
      {currentPage !== "contact" && (
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
