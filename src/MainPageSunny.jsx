import React, { useState, useEffect } from 'react';
import './sunnyandnight.css';
import MainPageNight from './MainPageNight'; // Import MainPageNight component
import eiffeltowerImg from './eiffeltower.jpg'; // Import eiffeltower image
import fitforecastLogoImg from './fitforecast logo.png'; // Import fitforecast logo image
import searchLogoImg from './search logo.png'; // Import search logo image
import rainImg from './rain.png'; // Import rain image
import tshirtlogoImg from './tshirtlogo.png'; // Import tshirtlogo image
import pfplogoImg from './pfplogo.png'; // Import pfplogo image
import glasswaterImg from './glasswater.png'; // Import glasswater image
import greyBoxesImg from './grey boxes2.png'; // Import grey boxes image
import towerbridge from './towerbridge.jpg';
import { useNavigate } from 'react-router-dom';


function MainPageSunny() {
    const [isDayTime, setIsDayTime] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const determineTimeOfDay = () => {
            const currentHour = new Date().getHours();
            setIsDayTime(currentHour >= 6 && currentHour < 18); // Assume daytime between 6 AM and 6 PM
        };

        determineTimeOfDay(); // Determine time of day when component mounts

        const interval = setInterval(determineTimeOfDay, 60000); // Check every minute for time updates

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures useEffect runs only once

    if (!isDayTime) {
        return <MainPageNight />
    }

    // Daytime content rendering
    return (
        <div className="background">
            {/* Render daytime content */}
            <img src={towerbridge} alt="Background" className="background-image" />
            <img src={fitforecastLogoImg} alt="Logo" className="logo" />
            <div className="overlay" style={{ top: '20%' }}>
                <img src={searchLogoImg} alt="Search Logo" className="searchLogo" />
                <div className="text-container">
                    <div className="sunny text-box">
                        <h1>Sunny</h1>
                    </div>
                    <div className="location text-box">
                        <p className="location">Mile End</p>
                    </div>
                </div>
            </div>

            <div className="overlay2" style={{ top: '50%' }}>
                <div className="text-container">
                    <h1>Box 2</h1>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>

            <div className="overlay3" style={{ top: '80%' }}>
                <div className="text-container">
                    <a href="">
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox"/>
                        <img src={rainImg} alt="Rain" className="greybox"/>
                    </a>
                    <a href="">
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox2"/>
                        <img src={tshirtlogoImg} alt="T-shirt Logo" className="greybox2"/>
                    </a>

                    <img src={pfplogoImg} alt="PFP Logo" className="greybox3"/>
                    <img src={greyBoxesImg} alt="Grey Box" className="greybox3"/>

                    <a href="">
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox4"/>
                        <img src={glasswaterImg} alt="Glass Water" className="greybox4"/>
                    </a>
                    <p className="location"></p>
                    <p className="temperature"></p>
                </div>
            </div>

            {/* Facts Box */}
            <div className="facts-box">
                <h2>Fitness Facts</h2>
                <ul>
                    <li>Regular exercise improves mood and reduces the risk of depression.</li>
                    <li>A balanced diet rich in fruits and vegetables boosts overall health.</li>
                    <li>Strength training helps maintain muscle mass and bone density.</li>
                    <li>Adequate hydration is essential for optimal performance during workouts.</li>
                    <li>Quality sleep is crucial for muscle recovery and overall well-being.</li>
                </ul>
            </div>
        </div>
    );
}

export default MainPageSunny;
