import React from 'react';
import './About.css'; // Ensure this CSS file is linked

const About = () => {
    return (
        <div className="about-container">
            <div className="about-paragraph">
                <p>
                    We are a team of dedicated innovators
                    <br />committed to helping football fans
                    <br />find all the information about
                    <br />clubs, stadiums, transfers and players.
                </p>
                {/* Link to the About Us page with arrow icon */}
                <a href="/about-us" className="about-link">
                    About Us <img src={`${process.env.PUBLIC_URL}/top-right-arrow.png`} alt="→" className="arrow-icon" />
                </a>
            </div>
            <div className="about-text">
                <p className="text-line text-line-1">Live for the game,</p>
                <p className="text-line text-line-2">get all the info.</p>
            </div>
        </div>
    );
};

export default About;
