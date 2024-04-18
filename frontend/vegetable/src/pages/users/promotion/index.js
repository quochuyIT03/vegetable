import React from 'react';
import ProductCard from '../promotion/ProductCard';
import products from './products';
import './style.scss';

function PROMOTION() {
  return (
    <div className="promo_list">
      <h1>Khuyến mãi hôm nay!</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default (PROMOTION);
