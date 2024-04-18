import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Giá: ${product.price}</p>
      </div>
    </div>
  );
}

export default (ProductDetailPage);
