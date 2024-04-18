import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss"


function ProductCard({ product }) {
  return (
  
    <div className="product-card-list container ">
      
        <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Giá: ${product.price}</p>
          <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
        </div>
      </div>
    
  );
}

export default (ProductCard);
