import { useEffect, useState } from 'react';
import './style.css';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedImage(product?.image);
      setSelectedSize('');
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const images = [product.image, ...(product.images || [])];
  const sizes = product.sizes || [
    { label: 'US 7 / UK 6', available: true },
    { label: 'US 8 / UK 7', available: true },
    { label: 'US 9 / UK 8', available: false },
    { label: 'US 10 / UK 9', available: true },
    { label: 'US 11 / UK 10', available: false }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-content">
          <div className="modal-left">
            <img src={selectedImage} alt={product.name} className="modal-main-img" />
            <div className="modal-thumbnails">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx}`}
                  onClick={() => setSelectedImage(img)}
                  className={img === selectedImage ? 'thumb active' : 'thumb'}
                />
              ))}
            </div>
          </div>
          <div className="modal-right">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">£{product.price}</p>
            {product.oldPrice > 0 && (
              <p className="modal-old-price">
                Old Price: <del>£{product.oldPrice}</del>
              </p>
            )}
            <p className="modal-description">{product.description || 'No description provided.'}</p>

            <div className="size-container">
              <h4>Choose Size</h4>
              <div className="size-list">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-btn ${!size.available ? 'disabled' : ''} ${selectedSize === size.label ? 'selected' : ''}`}
                    onClick={() => size.available && setSelectedSize(size.label)}
                    disabled={!size.available}
                  >
                    {size.available ? size.label : `✕ ${size.label}`}
                  </button>
                ))}
              </div>
            </div>

            <button className="modal-add-cart" disabled={!selectedSize}>
              {selectedSize ? `Add to Cart (${selectedSize})` : 'Select Size'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
