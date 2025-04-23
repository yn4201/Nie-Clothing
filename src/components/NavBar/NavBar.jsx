import logo from '../../assets/images/logo.svg';
import { IoPersonOutline } from "react-icons/io5";
import '../Header/style.css';
const NavBar = () => {
  return (
    <nav className="navbar" data-navbar>
      <div className="navbar-top">
        <a href="#" className="logo">
          <img src={logo} alt="Casmart logo" width="130" height="31" />
        </a>
        <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
          <IoPersonOutline name="close-outline"></IoPersonOutline>
        </button>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#home" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="#shop" className="navbar-link">Shop</a>
        </li>
        <li>
          <a href="#about" className="navbar-link">About</a>
        </li>
        <li>
          <a href="#blog" className="navbar-link">Blog</a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
