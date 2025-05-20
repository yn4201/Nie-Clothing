import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import './style.css';
import logo from '../../assets/images/nie-logo.png';
const Footer = () => {

    return (
        <footer classNameName="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <a href="logo" className="logo" style={{ width: '100px' }}>
                            <img src={logo} alt="Casmart logo" style={{ width: '100%' }} />
                        </a>
                        <p className="footer-text">
                            Casmart is a fashion theme...
                        </p>
                        <ul className="social-list">
                            <li>
                                <a href="https://www.facebook.com/" className="social-link">
                                    <IoLogoFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" className="social-link">
                                    <IoLogoInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Information</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">About Company</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Payment Type</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Awards Winning</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">World Media Partner</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Become an Agent</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Refund Policy</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Category</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Handbags & Wallets</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Women's Clothing</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Plus Sizes</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Complete Your Look</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Baby Corner</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Man & Woman Shoe</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Help & Support</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Dealers & Agents</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">FAQ Information</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Return Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Shipping & Delivery</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Order Tranking</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">List of Shops</a>
                        </li>

                    </ul>


                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                        &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
                    </p>

                    <ul className="footer-bottom-list">

                        <li>
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="b" className="footer-bottom-link">Terms & Conditions</a>
                        </li>

                        <li>
                            <a href="c" className="footer-bottom-link">Sitemap</a>
                        </li>

                    </ul>

                    <div className="payment">
                        <p className="payment-title">We Support</p>
                        {/* <img src="./assets/images/payment-img.png" alt="Online payment logos" className="payment-img"/> */}
                    </div>

                </div>
            </div>

        </footer>
    );
};
export default Footer;
