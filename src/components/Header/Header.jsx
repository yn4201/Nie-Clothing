import './style.css'
import { IoPersonOutline, IoSearch, IoCartOutline, IoHeartOutline } from "react-icons/io5";
import logo from '../../assets/images/nie-logo.png'
import NavBar from '../NavBar/NavBar';
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>
        <div className="header-search">
          <input type="search" name="search" placeholder="Search Product..." className="input-field" />
          <button className="search-btn" aria-label="Search">
            <IoSearch name="search-outline" />
          </button>
        </div>
        <a href="#" className="logo">
          <img src={logo} alt="Casmart logo" width="130" height="31" />
        </a>
        <div className="header-menu">
          <button className="header-menu-btn">
            <IoPersonOutline name="person-outline" aria-hidden="true"></IoPersonOutline>
            <p className="header-menu-label">Sign in</p>
          </button>
          <button className="header-menu-btn">
            <IoPersonOutline name="search-outline" aria-hidden="true"></IoPersonOutline>
            <p className="header-menu-label">Search</p>
          </button>
          <button className="header-menu-btn">
            <IoCartOutline name="cart-outline" aria-hidden="true"></IoCartOutline>
            <p className="header-menu-label">Cart</p>
            {/* <div className="btn-badge green" aria-hidden="true">3</div> */}
          </button>
          <button className="header-menu-btn">
            <IoHeartOutline name="heart-outline" aria-hidden="true"></IoHeartOutline>
            <p className="header-menu-label">Wishlisht</p>
            {/* <div className="btn-badge" aria-hidden="true">2</div> */}
          </button>
        </div>
        <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
