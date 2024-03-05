import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [highContrast, setHighContrast] = useState(false);

    const toggleHighContrast = () => {
        setHighContrast(!highContrast);
        document.body.classList.toggle('high-contrast');
    };

    return (
        <header className="header">
            <div className="logo-and-nav">
                <div className="header-logo">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="CLUBLINK Logo" style={{aspectRatio: '1 / 1'}} />
                </div>
                <nav className="header-nav">
                    <a href="/">Home</a>
                    <a href="/stadiums">Stadiums</a>
                    <a href="/transfers">Transfers</a>
                    <a href="/about">About</a>
                </nav>
            </div>
            <div className="header-high-contrast">
                <span>High Contrast</span>
                <label className="toggle-switch">
                    <input type="checkbox" checked={highContrast} onChange={toggleHighContrast} />
                    <span className="switch-slider"></span>
                </label>
            </div>
        </header>
    );
};

export default Header;
