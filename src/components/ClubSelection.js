import React from 'react';
import './ClubSelection.css';
import {useEffect, useState} from 'react'; // Ensure this is correctly linked



const ClubSelection = () => {
    const countries = [
        { name: 'United Kingdom', flag: '/flags/uk.png' },
        { name: 'Spain', flag: '/flags/spain.png' }
    ];

    const leagues = {
        'United Kingdom': [
            { name: 'Premier League', logo: '/leagues/premier-league.webp' },
            { name: 'Championship', logo: '/leagues/championship.png' }
        ],
        'Spain': [
            { name: 'La Liga', logo: '/leagues/la-liga.png' }
        ]
    };

    const clubs = {
        'Premier League': [
            { name: 'Manchester City', crest: '/clubs/manchester-city.webp' },
            { name: 'Liverpool', crest: '/clubs/liverpool.png' }
        ],
        'Championship': [
            { name: 'Norwich City', crest: '/clubs/norwich-city.png' },
            { name: 'West Bromwich Albion', crest: '/clubs/west-bromwich.png' }
        ],
        'La Liga': [
            { name: 'Real Madrid', crest: '/clubs/real-madrid.png' },
            { name: 'Barcelona', crest: '/clubs/barcelona.png' }
        ]
    };

    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const [selectedLeague, setSelectedLeague] = useState(leagues[countries[0].name][0].name);
    const [selectedClub, setSelectedClub] = useState(clubs[leagues[countries[0].name][0].name][0].name);

    // Function to handle key presses globally
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleGo();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedCountry, selectedLeague, selectedClub]); // Ensure this runs only when selection changes


    const handleSelectCountry = (direction) => {
        const currentIndex = countries.findIndex(country => country.name === selectedCountry);
        const nextIndex = (currentIndex + direction + countries.length) % countries.length;
        setSelectedCountry(countries[nextIndex].name);
        const newLeagues = leagues[countries[nextIndex].name];
        setSelectedLeague(newLeagues[0].name);
        setSelectedClub(clubs[newLeagues[0].name][0].name);
    };

    const handleSelectLeague = (direction) => {
        const currentLeagues = leagues[selectedCountry];
        const currentIndex = currentLeagues.findIndex(league => league.name === selectedLeague);
        const nextIndex = (currentIndex + direction + currentLeagues.length) % currentLeagues.length;
        setSelectedLeague(currentLeagues[nextIndex].name);
        setSelectedClub(clubs[currentLeagues[nextIndex].name][0].name);
    };

    const handleSelectClub = (direction) => {
        const currentClubs = clubs[selectedLeague];
        const currentIndex = currentClubs.findIndex(club => club.name === selectedClub);
        const nextIndex = (currentIndex + direction + currentClubs.length) % currentClubs.length;
        setSelectedClub(currentClubs[nextIndex].name);
    };

    const handleGo = () => {
        // Logic for what happens when "Go" is clicked or Enter is pressed
        alert(`You selected ${selectedClub} from ${selectedLeague}, ${selectedCountry}.`);
    };

    return (
        <div className="club-selection-container">
            <div className="clublink-banner">
                <img src={`${process.env.PUBLIC_URL}/text-logo.png`} alt="CLUBLINK" />
            </div>
            <div className="club-selection-box">
                <div className="club-info">
                    {/* Country Selection */}
                    <div className="selection-box country-info">
                        <button onClick={() => handleSelectCountry(-1)}>&lt;</button>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}${countries.find(country => country.name === selectedCountry).flag}`} alt={selectedCountry} className="icon country-flag" />
                            <span className="country-name">{selectedCountry}</span>
                        </div>
                        <button onClick={() => handleSelectCountry(1)}>&gt;</button>
                    </div>

                    {/* League Selection */}
                    <div className="selection-box league-info">
                        <button onClick={() => handleSelectLeague(-1)}>&lt;</button>
                        <img src={`${process.env.PUBLIC_URL}${leagues[selectedCountry].find(league => league.name === selectedLeague).logo}`} alt={selectedLeague} className="icon league-img" />
                        <button onClick={() => handleSelectLeague(1)}>&gt;</button>
                    </div>

                    {/* Club Selection */}
                    <div className="selection-box club-container">
                        <button onClick={() => handleSelectClub(-1)}>&lt;</button>
                        <div className="club-info">
                            <img src={`${process.env.PUBLIC_URL}${clubs[selectedLeague].find(club => club.name === selectedClub).crest}`} alt={selectedClub} className="icon club-crest" />
                            <span className="club-name">{selectedClub}</span>
                        </div>
                        <button onClick={() => handleSelectClub(1)}>&gt;</button>
                    </div>

                </div>
                <p className="club-selection-text">Select your club,<br />get started.</p>
            </div>
            <div className="third-section">
                <div className="remainder-content">
                    {/* Content that takes up the remainder of the width */}
                    <p>Select your Club Select your Club Select your Club Select your Club
                        Select your Club Select your Club Select your Club Select your Club
                        Select your Club Select your Club Select your Club Select your Club
                        Select your Club Select your Club Select your Club Select your Club</p>
                </div>
                <button className="square-box-button" onClick={() => {handleGo()}}>
                    {/* Content for the square box button */}
                    <img src={`${process.env.PUBLIC_URL}/top-right-arrow-alt.png`} alt="Descriptive Alt Text" />

                </button>
            </div>
        </div>
    );
};

export default ClubSelection;
