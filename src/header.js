import React from 'react';

function Header() {
    return (
        <div className="Header-container">
            <div className="Header-logo"></div>
            <div className="Header-spacer"></div>
            <div className="Header-nav-container">
                <ul className="Header-nav">
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
