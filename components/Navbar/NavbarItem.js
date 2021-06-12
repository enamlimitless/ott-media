import React from 'react';

const NavbarItem = ({ Icon, title }) => {
    // console.log(Icon)
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 hover:text-yellow-400">
            <Icon className="h-8 mb-2 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    );
};

export default NavbarItem;