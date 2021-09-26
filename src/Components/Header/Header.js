import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container ms-auto'>
            <div className='text-center'>
                <h2>Make An <span className="text-white">SPY</span> Universe</h2>
                <p>Our country is in danger by our own people. We need spies to stop them.</p>
                <h1>Budget : 200<span className="text-white">Million</span></h1>
            </div>
        </div>
    );
};

export default Header;