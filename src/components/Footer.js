import React from 'react';
import './Footer.css'; // Ensure this CSS file is linked

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    {/* Assuming you have the logo saved in the public folder */}
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="University Logo" className="footer-logo" />
                    <a href="/about">About</a>
                    <a href="/studres">Studres</a>
                    <a href="/module-information">Module Information</a>
                </div>
                <div className="footer-right">
                    Copyright © University of St Andrews
                </div>
            </div>
        </footer>
    );
};

export default Footer;
