import React, { useRef } from 'react';
import {
    Routes,
    Route,
    Link,
    useLocation
} from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import productList from './products';

const ProductRoutePage = () => {

    return (
        <div>
            <Routes>
                {
                    productList.map((product, index) => <Route key={index} path={`/${product.type}/*`} element={<ProductMenuPage productList={product.products} />} />)
                }
            </Routes>
        </div>
    );
}

const ProductMenuPage = ({ productList }) => {
    return (
        <div>
            <Routes>
                {
                    productList.map((product, index) => <Route key={index} path={`/${product.id}`} element={<ProductDetailsPage {...product} />} />)
                }
                <Route path='*' element={<ProductMenuDefaultPage productList={productList} />} />
            </Routes>
        </div>
    );
}

const ProductMenuDefaultPage = ({ productList }) => {
    return (
        <div className='pt-24'>
            <div className='flex gap-10 justify-center min-h-screen flex-wrap'>
                {productList.map((product, index) =>
                    <ProductMenuDisplayCard key={index} id={product.id} Img={product.displayImg} />
                )}
            </div>
        </div>
    );
}

const ProductMenuDisplayCard = ({ id, Img }) => {
    const location = useLocation(); // Get the current path dynamically

    return (
        <Link to={`${location.pathname}/${id}`}>
            <div
                className="flex flex-col items-stretch h-[40vh] w-[20vw] rounded-lg overflow-hidden cursor-pointer 
                       transition-transform duration-300 hover:scale-110"
            >
                <div className="display-img h-4/5">
                    <img src={Img} className="h-full w-full object-cover object-center" alt={id} />
                </div>
                <div className="product-head h-1/5 text-palette3 text-center bg-palette2 flex flex-col justify-center">
                    {id}
                </div>
            </div>
        </Link>
    );
};


const ProductDetailsPage = ({ id, displayImage, imgList, category, description }) => {
    return <div className='text-center flex flex-col justify-center min-h-screen text-palette3'>
        PRODUCT PAGE {id}
    </div>
}

export default ProductRoutePage;
