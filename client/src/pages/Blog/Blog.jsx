import { IoFolderOpenOutline, IoTimeOutline  } from "react-icons/io5";
import './style.css';
export default function Blog() {
    return (
        <section className="section blog">
            <div className="container">
                <h2 className="h2 section-title">Latest fashion news</h2>
                <ul className="blog-list">
                    <li>
                        <div className="blog-card">
                            <figure className="card-banner">
                                <a href="#">
                                    <img src={require('../../assets/images/blog-1.jpg')} alt="Worthy Cyber Monday Fashion From Casmart" loading="lazy"
                                        width="1020" height="700" class="w-100" />
                                </a>
                            </figure>
                            <div className="card-content">
                                <ul className="card-list">
                                    <li className="card-item">
                                        <IoFolderOpenOutline style={{ fontSize: '17px' }} />
                                        <a href="#" class="card-link">Fashion</a>
                                    </li>
                                    <li className="card-item">
                                        <IoTimeOutline style={{ fontSize: '17px' }} />
                                        <a href="#" className="card-link">
                                            <time datetime="2021-03-31">31 Mar 2021</time>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}