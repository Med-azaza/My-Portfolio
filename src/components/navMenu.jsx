import { Link, useLocation } from "react-router-dom";
import {
  FaHouse,
  FaBriefcase,
  FaAddressCard,
  FaPaperPlane,
} from "react-icons/fa6";

const NavMenu = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPage = pathname.substring(1);

  return (
    <ul className="nav-list">
      <li>
        <FaHouse size={30} className="icon" />
        <Link to="/">Home</Link>
      </li>
      {currentPage !== "about" && (
        <li>
          <FaAddressCard size={30} className="icon" />
          <Link to="/about">About</Link>
        </li>
      )}
      {currentPage !== "work" && (
        <li>
          <FaBriefcase size={30} className="icon" />
          <Link to="/work">Work</Link>
        </li>
      )}
      {currentPage !== "contact" && (
        <li>
          <FaPaperPlane size={30} className="icon" />
          <Link to="/contact">Contact</Link>
        </li>
      )}
    </ul>
  );
};

export default NavMenu;
