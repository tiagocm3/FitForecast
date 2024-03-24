import React from 'react';
import './HydrationPage.css';
import WaterImg from './water3.jpg'; 
import fitforecastLogoImg from './fitforecast logo.png';
import { Link } from 'react-router-dom';

function HydrationPage() {
    return (
        <div className="background1">
            <img src={WaterImg} alt="Background2" className="background-image1"/>
            <div className="hydration-container">
                <div>
                    <Link to="/main">
                        <img src={fitforecastLogoImg} alt="Logo" className="logo"/>
                    </Link>
                </div>
                <div className="Slogan">
                </div>

                {/* additional info on hydration for fitness enthusiasts */}
                <div className="hydration-facts">
                    <h2>Why Hydration is Important</h2>
                    <p>Water is essential for various bodily functions, including regulating body temperature,
                        transporting nutrients, and flushing out waste.</p>
                    <h2>How Much Water Should You Drink?</h2>
                    <p>The general recommendation is to drink about 8 glasses of water a day, which is around 2 liters
                        or half a gallon. However, individual water needs may vary based on factors such as age, weight,
                        activity level, and climate.</p>
                    <h2>Tips for Staying Hydrated</h2>
                    <ul>
                        <li>Carry a reusable water bottle with you throughout the day.</li>
                        <li>Drink water before, during, and after exercise.</li>
                        <li>Set reminders to drink water if you tend to forget.</li>
                        <li>Eat water-rich foods like fruits and vegetables.</li>
                        <li>Limit intake of caffeinated and alcoholic beverages, as they can contribute to
                            dehydration.
                        </li>
                    </ul>
                    <h2>Signs of Dehydration</h2>
                    <p>It's important to recognize the signs of dehydration, which may include dark urine, dry mouth,
                        fatigue, dizziness, and headache. If you experience these symptoms, drink water immediately and
                        seek medical attention if necessary.</p>
                </div>
            </div>
        </div>
    );
}

export default HydrationPage;
