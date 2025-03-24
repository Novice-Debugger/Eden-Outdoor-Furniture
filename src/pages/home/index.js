import React, { useRef, useEffect } from 'react';

// Gsap Utils
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Hero Section Furniture Images
import HeroImage1 from '../../assets/img/hero-1.jpg'
import HeroImage2 from '../../assets/img/hero-2.jpg'
import HeroImage3 from '../../assets/img/hero-3.jpg'
import HeroImage4 from '../../assets/img/hero-4.jpg'
import HeroImage5 from '../../assets/img/hero-5.jpg'

// Slide Show Images
import SlideshowImage1 from '../../assets/img/slideshow-1.jpg'
import SlideshowImage2 from '../../assets/img/slideshow-2.jpg'
import SlideshowImage3 from '../../assets/img/slideshow-3.jpg'
import SlideshowImage4 from '../../assets/img/slideshow-4.jpg'
import SlideshowImage5 from '../../assets/img/slideshow-5.jpg'

// Cover Images
import SofaImage from '../../assets/img/sofa.svg'
import SwingImage from '../../assets/img/swing.svg'
import ChairImage from '../../assets/img/chair.svg'
import LampImage from '../../assets/img/lamp.svg'
import BenchImage from '../../assets/img/bench.svg'
import CustomizedImage from '../../assets/img/customized.svg'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const container = useRef(null);

    const slideShowImages = [SlideshowImage1, SlideshowImage2, SlideshowImage3, SlideshowImage4, SlideshowImage5, SlideshowImage1];

    const heroImages = [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5]
    const extendedImages = [...heroImages, heroImages[0]]; // Append first image to the end

    const categories = [
        {
            title: 'Sofa',
            path: '/product/sofa',
            slideShowImages: slideShowImages,
            CoverImage: SofaImage,
        },
        {
            title: 'Swing',
            path: '/product/swing',
            slideShowImages: slideShowImages,
            CoverImage: SwingImage,
        },
        {
            title: 'Lamp',
            path: '/product/lamp',
            slideShowImages: slideShowImages,
            CoverImage: ChairImage,
        },
        {
            title: 'Bar Chair',
            path: '/product/bar_chair',
            slideShowImages: slideShowImages,
            CoverImage: LampImage,
        },
        {
            title: 'Day Bed',
            path: '/product/day_bed',
            slideShowImages: slideShowImages,
            CoverImage: BenchImage,
        },
        {
            title: 'Other',
            path: '/product/other',
            slideShowImages: slideShowImages,
            CoverImage: CustomizedImage,
        },
    ]

    return (
        <div ref={container}>
            <div className="hero-section flex flex-col-reverse md:flex-row justify-between items-center px-6 min-h-[100vh] text-palette3 relative">
                <div className="slideshow-wrapper flex h-full absolute left-0 top-0 w-screen">
                    <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showIndicators={false} showThumbs={false} stopOnHover={false} transitionTime={2000}>
                        {extendedImages.map((img, index) => (
                            <div>
                                <img key={index} src={img} alt="" className="w-full h-screen flex-shrink-0 object-cover" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="title w-full md:w-6/12 flex flex-col gap-4 justify-center bg-palette1/50 p-5 rounded-lg z-10">
                    <div className='font-bold text-5xl md:text-7xl'>Unwind in Style - Outdoor Living Redefined</div>
                </div>
            </div>

            {/* Products Component */}
            <div className="product-display min-h-screen flex flex-col items-center pt-28 gap-16">
                <div className="display-heading text-4xl font-semibold text-palette3 text-center w-full">
                    Your Journey Starts Here
                </div>
                <div className="category-container flex flex-row gap-[40px] flex-wrap justify-evenly cursor-pointer">
                    {
                        categories.map(({ title, path, slideShowImages, CoverImage }, index) => {
                            return (<CategoryCard id={`id-${index}`} title={title} path={path} slideShowImages={slideShowImages} CoverImage={CoverImage} />)
                        })
                    }
                </div>
            </div>
            <div className='min-h-screen'></div>
        </div>
    );
}

const CategoryCard = ({ id, path, title, slideShowImages, CoverImage }) => {

    const key = id;

    console.log("DEBUG -- ", key)

    const container = useRef(null);
    const tl = useRef(null);
    const { contextSafe } = useGSAP({ scope: container });

    useEffect(() => {
        tl.current = gsap.timeline({ repeat: -1, paused: true });

        slideShowImages.forEach((_, index) => {
            if (index === 0)
                return;
            // const durationTime = index === slideShowImages.length ? 0 : 0.8;
            const durationTime = 0.8;
            tl.current.to(`#${key} .slideshow-wrapper`, {
                x: `-${index * 100}%`,
                duration: durationTime,
                ease: "power2.inOut"
            }, "+=0.5");
        });
    }, []);

    const handleCardMouseOver = contextSafe(() => {
        // Move the main image up
        gsap.to(`#${key} .category-img`, {
            duration: 0.3,
            y: -500,
            onComplete: () => tl.current.play() // Start slideshow
        });
    });

    const handleCardMouseLeave = contextSafe(() => {
        // Move the main image down
        gsap.to(`#${key} .category-img`, {
            duration: 0.3,
            y: 0,
        });

        // Stop the slideshow
        tl.current.pause();
    });

    return (
        <Link to={path}>
            <div
                ref={container}
                className="category-card p-4 flex flex-col justify-between items-center gap-7"
                onMouseEnter={handleCardMouseOver}
                onMouseLeave={handleCardMouseLeave}
            >
                <div id={key} className={`img-container h-[45vh] w-[25vw] border rounded-[13px] border-palette3/50 overflow-hidden relative`}>
                    {/* Main Image */}
                    <div className="category-img bg-palette2 w-full h-full absolute top-0 left-0 z-10 p-6">
                        <img src={CoverImage} alt="" className="w-full h-full" />
                    </div>

                    {/* Slideshow Wrapper */}
                    <div className="slideshow-wrapper flex w-full h-full absolute top-0 left-0">
                        {slideShowImages.map((img, index) => (
                            <img key={index} src={img} alt="" className="w-full h-full flex-shrink-0" />
                        ))}
                    </div>
                </div>

                <div className="description text-palette3 text-xl font-light">
                    <div>
                        {title}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HomePage;
