import React from 'react';
import requests from '../../utils/requests';

const MainNav = () => {
    return (
        <div>
            {
                Object.entries(requests)
            }
        </div>
    );
};

export default MainNav;