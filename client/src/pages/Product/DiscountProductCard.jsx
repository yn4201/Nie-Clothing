import React, { useEffect, useState } from 'react';
import './style.css';
import { IoBagHandle, IoHeartOutline } from 'react-icons/io5';
import axios from 'axios';

const DiscountProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    products.map(product => (
      <div className="discount-card">
        <div className="discount-image-wrapper">
          <img src={product.image} alt={product.name} className="discount-image" />
          {product.discountPercent > 0 && (
            <div className="discount-badge">-{product.discountPercent}%</div>
          )}
        </div>
        <div className="discount-info">
          <h3 className="discount-name">{product.name}</h3>
          <div className="discount-price-wrapper">
            <span className="discount-price">£{product.price}</span>
            {product.oldPrice > 0 && <span className="old-price">£{product.oldPrice}</span>}
          </div>
          <div className="discount-actions">
            <button className="discount-btn add-cart">
              <IoBagHandle /> Add to Cart
            </button>
            <button className="discount-btn wishlist">
              <IoHeartOutline />
            </button>
          </div>
        </div>
      </div>
    ))
  );
};

export default DiscountProductCard;
