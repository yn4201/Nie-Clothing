
import React, { useEffect, useState } from 'react';
import { IoEyeOutline, IoHeartOutline, IoBagHandle } from "react-icons/io5";
import axios from 'axios';
import ProductModal from './ProductModal';
import DiscountProductCard from './DiscountProductCard';
export default function Product() {
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);


    const modalShow = (product) => {
        setSelectedProduct(product);
        setModal(true);
    };

    const modalHide = () => {
        setModal(false);
        setSelectedProduct(null);
    };

    return (
        <section class="section product">
            <div class="container">
                <h2 class="h2 section-title">Products of the week</h2>

                <ul class="filter-list">

                    <li>
                        <button class="filter-btn  active">Best Seller</button>
                    </li>

                    <li>
                        <button class="filter-btn">Hot Collection</button>
                    </li>

                    <li>
                        <button class="filter-btn">Trendy</button>
                    </li>

                    <li>
                        <button class="filter-btn">New Arrival</button>
                    </li>

                </ul>

                <ul class="product-list">
                    {products.map(prod => (
                        <li>
                            <div class="product-card">
                                <figure class="card-banner">
                                    <a href="#">
                                        <img src={prod.image} alt={prod.name} loading="lazy" width="800"
                                            height="1034" class="w-100" />
                                    </a>
                                    {prod.discountPercent > 0 && <div class="card-badge red"> -{prod.discountPercent}%</div>}

                                    <div class="card-actions">
                                        <button class="card-action-btn" aria-label="Quick view" onClick={() => modalShow(prod)}>
                                            <IoEyeOutline />
                                        </button>
                                        <button class="card-action-btn cart-btn">
                                            <IoBagHandle />
                                            <p>Add to Cart</p>
                                        </button>
                                        <button class="card-action-btn" aria-label="Add to Whishlist">
                                            <IoHeartOutline />
                                        </button>
                                    </div>
                                </figure>

                                <div class="card-content">
                                    <h3 class="h4 card-title">
                                        <a href="#">{prod.name}</a>
                                    </h3>
                                    <div class="card-price">
                                        <data value={prod.price}>&pound;{prod.price}</data>
                                        {prod.oldPrice > 0 && <data value={prod.oldPrice}>&pound;{prod.oldPrice}</data>}
                                    </div>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
                <button class="btn btn-outline">View All Products</button>
            </div>
            {modal && <ProductModal isOpen={modal} onClose={modalHide} product={selectedProduct} />}
        </section>
    )

}