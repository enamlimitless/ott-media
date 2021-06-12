import React from 'react';
import requests from '../../utils/requests';

const MainNav = () => {
    // console.log(requests)
    return (
        <div className="flex px-10 sm:px-20 text-2xl whiteSpace-nowrap space-x-10 sm:space-x-18 overflow-x-scroll">
            {
                Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>

                ))}
        </div>
    );
};

export default MainNav;