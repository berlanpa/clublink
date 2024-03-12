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
                    <a href="/transfers">Players</a>
                    <a href="/stadiums">Careers</a>
                    <a href="/about">About</a>
                </nav>
            </div>
            <div className="header-placeholder">
                <span>/CS3099</span>
                <img src={`${process.env.PUBLIC_URL}/university-logo.png`} alt="St Andrews University Logo" />
            </div>
        </header>
    );
};

export default Header;
