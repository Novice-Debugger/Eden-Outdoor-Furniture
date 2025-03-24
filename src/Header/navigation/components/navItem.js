import React, { useRef } from 'react';
import { Link } from 'react-router';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const NavItem = ({ head, icon, href }) => {

    const container = useRef();

    const { contextSafe } = useGSAP({ scope: container });

    const handleMouseEnter = contextSafe(() => {
        gsap.to('.nav-item', {
            scale: 1.1,
            y: -3,
            borderColor: 'rgba(246, 246, 223, 0.5)',
            borderRadius: '6px',
            duration: 0.2
        })
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to('.nav-item', {
            scale: 1,
            y: 0,
            borderColor: 'rgba(0, 0, 0, 0)',
            duration: 0.2
        })
    })

    return (
        <div className="nav-item-head" ref={container}>
            <div className='nav-item p-3 hover:text-palette3/75' style={{borderStyle: 'solid', borderWidth: '2px', borderColor: 'rgba(0, 0, 0, 0)'}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Link className='flex gap-2 items-center text-md' to={href}>
                    {icon}
                    <div className="head">
                        {head}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavItem;
