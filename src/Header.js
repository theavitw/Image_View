// Header.js
import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="https://picsum.photos/id/146/5000/3333" alt="Logo" />
                </div>
                <div className="site-title">
                    <h1>The Image Room</h1>
                </div>

            </header>
            <div className="header-image">
                <img src="https://picsum.photos/id/16/2500/1667" alt="Header Image" />
            </div>
        </>
    );
};

export default Header;
