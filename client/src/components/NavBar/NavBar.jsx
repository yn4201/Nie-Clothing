import logo from '../../assets/images/logo.svg';
import { IoClose } from "react-icons/io5";
import '../Header/style.css';

const NavBar = ({ isActive, onClose }) => {
  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
      <div className="navbar-top">
        <a href="#" className="logo">
          <img src={logo} alt="Casmart logo" width="130" height="31" />
        </a>
        <button className="nav-close-btn" onClick={onClose} aria-label="Close Menu">
          <IoClose name="close-outline" />
        </button>
      </div>
      <ul className="navbar-list">
        <li><a href="home" className="navbar-link" onClick={onClose}>Home</a></li>
        <li><a href="shop" className="navbar-link" onClick={onClose}>Shop</a></li>
        <li><a href="about" className="navbar-link" onClick={onClose}>About</a></li>
        <li><a href="blog" className="navbar-link" onClick={onClose}>Blog</a></li>
        <li><a href="contact" className="navbar-link" onClick={onClose}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
