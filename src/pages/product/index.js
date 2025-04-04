import React, { useEffect } from 'react';
import {
    Routes,
    Route,
    useLocation
} from "react-router";

import productList from './products';

import ProductMenuPage from './pages/productMenu/index.js';
import ProductDescriptionPage from './pages/productDescription/index.js';

const ProductRouterPage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Routes>
                {
                    productList.map((product, index) => <Route key={index} path={`/${product.type}/*`} element={<ProductMenuRouter productList={product.products} />} />)
                }
            </Routes>
        </div>
    );
}

const ProductMenuRouter = ({ productList }) => {
    return (
        <div>
            <Routes>
                {
                    productList.map((product, index) => <Route key={index} path={`/${product.id}`} element={<ProductDescriptionPage {...product} />} />)
                }
                <Route path='*' element={<ProductMenuPage productList={productList} />} />
            </Routes>
        </div>
    );
}

export default ProductRouterPage;
