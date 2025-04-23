import banner from '../../assets/images/banner.jpg';
import serviceIcon1 from '../../assets/images/service-icon-1.svg';
import serviceIcon2 from '../../assets/images/service-icon-2.svg';
import serviceIcon3 from '../../assets/images/service-icon-3.svg';
import serviceIcon4 from '../../assets/images/service-icon-4.svg';
import './style.css';
const HomePage = () => {
    return (
        <acticle>
            {/* Banner Section */}
            <section class="banner" id="home" style={{ backgroundImage: `url(${banner})` }}>
                <div class="container">
                    <div class="banner-content">
                        <p class="banner-subtitle">Fashion Everyday</p>
                        <h2 class="h1 banner-title">Unrivalled Fashion House</h2>
                        <button class="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section class="service">
                <div class="container">
                    <ul class="service-list">
                        <li class="service-item">
                            <div class="service-item-icon">
                                <img src={serviceIcon1} alt="Service icon"/>
                            </div>
                            <div class="service-content">
                                <p class="service-item-title">Free Shipping</p>
                                <p class="service-item-text">On All Order Over $599</p>
                            </div>
                        </li>

                        <li class="service-item">
                            <div class="service-item-icon">
                                <img src={serviceIcon2} alt="Service icon"/>
                            </div>
                            <div class="service-content">
                                <p class="service-item-title">Easy Returns</p>
                                <p class="service-item-text">30 Day Returns Policy</p>
                            </div>
                        </li>

                        <li class="service-item">
                            <div class="service-item-icon">
                                <img src={serviceIcon3} alt="Service icon"/>
                            </div>
                            <div class="service-content">
                                <p class="service-item-title">Secure Payment</p>
                                <p class="service-item-text">100% Secure Gaurantee</p>
                            </div>
                        </li>

                        <li class="service-item">
                            <div class="service-item-icon">
                                <img src={serviceIcon4} alt="Service icon"/>
                            </div>
                            <div class="service-content">
                                <p class="service-item-title">Special Support</p>

                                <p class="service-item-text">24/7 Dedicated Support</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </acticle>

    )
}

export default HomePage;
