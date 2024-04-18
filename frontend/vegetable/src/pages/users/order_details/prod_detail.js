// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

const ProductDetail = () => {
    const { productId } = useParams(); // Lấy productId từ URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Gọi hàm lấy thông tin sản phẩm từ service khi component được mount
        const fetchProduct = async () => {
            try {
                const productData = await productService.getProductById(productId);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();

        // Cleanup effect
        return () => {
            // Thực hiện các công việc cleanup nếu cần thiết
        };
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>; // Hiển thị thông báo "Loading" nếu sản phẩm chưa được tải lên
    }

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Các thông tin khác về sản phẩm */}
        </div>
    );
};

export default ProductDetail;
