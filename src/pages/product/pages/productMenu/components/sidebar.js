import React from "react";
import { Sidebar, Menu, MenuItem } from "react-mui-sidebar";
import {
    Link,
    useLocation
} from "react-router";

import useResponsiveValue from '../hooks/useResponsiveValue';

const ProductSidebar = () => {

    const location = useLocation(); // Get the current path dynamically

    const productTypes = [
        {
            title: "Sofa",
            link: "/product/sofa",
            icon: (<></>)
        },
        {
            title: "Swing",
            link: "/product/swing",
            icon: (<></>)
        },
        {
            title: "Lamp",
            link: "/product/lamp",
            icon: (<></>)
        },
        {
            title: "Bar Chair",
            link: "/product/bar_chair",
            icon: (<></>)
        },
        {
            title: "Day Bed",
            link: "/product/day_bed",
            icon: (<></>)
        },
        {
            title: "Other",
            link: "/product/other",
            icon: (<></>)
        },
    ]

    const breakpoints = { 640: "sm", 768: "md", 1024: "lg", 1280: "xl" };
    const values = { default: "NA", 640: "8rem", 768: "9rem", 1024: "9rem", 1280: "10rem" };

    const currentValue = useResponsiveValue(breakpoints, values);

    console.log("[DEBUG] current value:", currentValue)

    return (
        <div>
            {currentValue !== "NA" ? (<Sidebar width={currentValue} showProfile={false} isCollapse={currentValue === "NA" ? true : false} textColor={"#F6F6DF"} themeColor={"#f6f6df66"}>
                <Menu subHeading="">
                    {
                        productTypes.map(({ title, link, icon }) => (
                            <MenuItem
                                component={Link}
                                icon={icon}
                                link={link}
                                textFontSize="14px"
                                isSelected={location.pathname === link}
                            >
                                {title}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Sidebar>) : <></>}

        </div>
    )
}

export default ProductSidebar;