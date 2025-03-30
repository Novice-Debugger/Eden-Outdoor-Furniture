import React from 'react';
import { Link } from 'react-router';

import NavItem from './components/navItem';

// Font Icons
import HomeIcon from './icons/home.svg'
import AboutIcon from './icons/about.svg'
import ShopCollectionIcon from './icons/shop-collection.svg'
import FAQIcon from './icons/faq.svg'
import ContactIcon from './icons/contact.svg'

const NavigationBar = () => {

    const navItems = [
        {
            head: 'Home',
            icon: <img src={HomeIcon} className='h-4' />,
            href: '/',
        },
        {
            head: 'About Us',
            icon: <img src={AboutIcon} className='h-5' />,
            href: '/about',
        },
        {
            head: 'Shop Collection',
            icon: <img src={ShopCollectionIcon} className='h-5' />,
            href: '/product/sofa',
        },
        {
            head: 'FAQ',
            icon: <img src={FAQIcon} className='h-5' />,
            href: '/faq',
        },
        {
            head: 'Contact Us',
            icon: <img src={ContactIcon} className='h-5' />,
            href: '/contact',
        },
    ]

    return (
        <div className='flex flex-col fixed w-[100vw] z-20 md:flex-row justify-between items-center p-3 bg-palette1 text-palette3 text-sm'>
            <Link className="brand font-semibold" to='/'>
                Eden Outdoor Furniture
            </Link>
            <div className="nav-bar flex flex-col sm:flex-row items-center gap-8 font-light">
                {navItems.map(navItem => <NavItem head={navItem.head} href={navItem.href} icon={navItem.icon} />)}
            </div>
        </div>
    );
}

export default NavigationBar;
