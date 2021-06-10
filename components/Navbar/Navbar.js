import React from 'react';
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";
import NavbarItem from './NavbarItem';
import MainNav from './MainNav';
const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
                <div className="flex flex-grow justify-evenly max-w-2xl">
                    <NavbarItem title="HOME" Icon={HomeIcon} />
                    <NavbarItem title="TRENDING" Icon={LightningBoltIcon} />
                    <NavbarItem title="VERIFIED" Icon={BadgeCheckIcon} />
                    <NavbarItem title="COLLECTIONS" Icon={CollectionIcon} />
                    <NavbarItem title="ACCOUNT" Icon={UserIcon} />
                    <NavbarItem title="SEARCH" Icon={SearchIcon} />
                </div>
                <div>
                    <h1>OTT Media</h1>
                </div>
            </div>
            
            <MainNav />
        </nav>
    );
};

export default Navbar;