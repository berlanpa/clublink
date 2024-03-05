import React, { useState } from 'react';
import './Featured.css'; // Ensure this CSS file is linked

const Featured = () => {
    const slidesData = [
        { id: 1, tag: "Club", name: "Manchester City", imageUrl: "clubs/real-madrid.png" },
        { id: 2, tag: "Club", name: "Liverpool", imageUrl: "clubs/real-madrid.png" },
        { id: 3, tag: "Club", name: "Chelsea", imageUrl: "clubs/real-madrid.png" },
        { id: 4, tag: "Club", name: "Arsenal", imageUrl: "clubs/real-madrid.png" },
        { id: 5, tag: "Club", name: "Tottenham", imageUrl: "clubs/real-madrid.png" }
    ];


    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slidesData.length; // Determine the total number of slides based on the data

    const isLeftArrowActive = currentSlide > 0;
    const isRightArrowActive = currentSlide < totalSlides - 1;

    const handleArrowClick = (direction) => {
        if (direction === 'left' && isLeftArrowActive) {
            setCurrentSlide(currentSlide - 1);
        } else if (direction === 'right' && isRightArrowActive) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div className="featured">
            <h2>Featured players and clubs</h2>
            <div className="slider-container">
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slidesData.map((slide, index) => (
                        <div key={slide.id} className="box">
                            <img src={slide.imageUrl} alt={slide.name} className="image" />
                            <span className="tag">{slide.tag}</span>
                            <p className="name">{slide.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigation">
                <button
                    onClick={() => handleArrowClick('left')}
                    className={`arrow ${isLeftArrowActive ? 'active' : ''}`}
                    disabled={!isLeftArrowActive}
                >
                    &lt;
                </button>
                <button
                    onClick={() => handleArrowClick('right')}
                    className={`arrow ${isRightArrowActive ? 'active' : ''}`}
                    disabled={!isRightArrowActive}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Featured;
