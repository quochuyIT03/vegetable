// ProductDetailPage.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductDetail from '../order_details/prod_detail';

const ProductDetailPage = () => {
    return (
        <Switch>
            <Route path="/products/:productId">
                <ProductDetail />
            </Route>
        </Switch>
    );
};

export default (ProductDetailPage);
