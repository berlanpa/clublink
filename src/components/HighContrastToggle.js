import React from 'react';
import './HighContrastToggle.css'; // Make sure to create and link this CSS file

const HighContrastToggle = ({ isHighContrast, toggleHighContrast }) => {
    return (
        <div className="high-contrast-toggle-container">
            <label className="toggle-switch">
                High Contrast
                <input
                    type="checkbox"
                    checked={isHighContrast}
                    onChange={toggleHighContrast}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default HighContrastToggle;
