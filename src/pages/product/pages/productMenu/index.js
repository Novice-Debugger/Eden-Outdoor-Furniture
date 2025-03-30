import React from 'react';
import {
    Link,
    useLocation
} from "react-router";

import useResponsiveValue from './hooks/useResponsiveValue.js';

import ProductSidebar from './components/sidebar.js';

const ProductMenuPage = ({ productList }) => {

    const breakpoints = { 640: "sm", 768: "md", 821: "md-2", 1024: "lg", 1280: "xl" };
    const values = { default: "mobile", 640: "tablet", 768: "small-laptop", 821: "medium-laptop",  1024: "desktop", 1280: "large-screen" };

    const currentValue = useResponsiveValue(breakpoints, values);

    return (
        <div className='pt-16 sm:pt-24 flex flex-row gap-x-14 mx-3 md:m-0'>
            {currentValue !== "mobile" && currentValue !== "tablet" && currentValue !== "small-laptop" ? <ProductSidebar /> : null}
            <div className='flex gap-y-4 md:gap-y-8 min-h-screen w-full flex-wrap'>
                {productList.map((product, index) =>
                    <ProductMenuDisplayCard key={index} id={product.id} Img={product.displayImg} />
                )}
            </div>
        </div>
    );
}

const ProductMenuDisplayCard = ({ id, productTitle, Img }) => {
    const location = useLocation();

    return (
        <div
            className="h-[25vh] sm:h-[33vh] md:max-[821px]:h-[33vh] md:h-[50vh] w-1/2 sm:w-1/3 md:w-1/3 min-w-[100px] px-2 md:px-5"
        >
            <Link to={`${location.pathname}/${id}`}>
                <div className="h-full w-full flex gap-3 flex-col items-stretch rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110 p-1.5 bg-palette3/30 float-end px-2 pt-2 pb-3">
                    <div className="display-img h-4/5 rounded-md overflow-hidden">
                        <img src={Img} className="h-full w-full object-cover object-center" alt={productTitle} />
                    </div>
                    <div className='flex flex-col gap-2 px-2'>
                        <div className="product-head text-palette3 text-[8px] sm:text-xs md:text-sm font-bold underline-offset-4">
                            {/* {productTitle} */}
                            Product Title
                        </div>
                        <div className='text-[7px] sm:text-xs leading-[1] text-palette3/40'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, debitis!
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductMenuPage