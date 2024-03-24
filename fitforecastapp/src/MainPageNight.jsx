import React, { useState, useEffect } from 'react';
import './sunnyandnight.css'
import MainPageSunny from './MainPageSunny'; // Import MainPageSunny component
import petronas from './petronas.jpeg'; // Import eiffeltower image
import fitforecastLogoImg from './fitforecast logo.png'; // Import fitforecast logo image
import searchLogoImg from './search2.png';
import rainImg from './rain.png'; // Import rain image
import tshirtlogoImg from './tshirt.png'; // Import tshirtlogo image
import pfplogoImg from './pfplogo.png'; // Import pfplogo image
import glasswaterImg from './glasswater.png'; // Import glasswater image
import greyBoxesImg from './grey boxes2.png'; // Import grey boxes image
import glass2Img from './glass2.png'
import bigbenImg from './bigbennight.jpg';
import macauImg from './macau.jpg';
import notredamImg from './notredam.jpg'
import goldengateImg from './goldengate.jpg';
import eiffelImg from './eiffeltower2.jpg'
import lisbonImg from './lisbon.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import { useNavigate } from 'react-router-dom';
import romeImg from "./rome.jpg";
import hạlongbayImg from "./halongbay.jpg";
import mountrushmoreImg from "./mountrushmore.jpg";
import londoneyeImg from "./londoneye.jpg";
import greatwallImg from "./wallofchina.jpeg";
import tajmahalimg from "./tajmahal.jpg";
const backgroundImages = [macauImg, petronas, notredamImg, bigbenImg, eiffelImg, lisbonImg,goldengateImg];


function MainPageNight() {

    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const [forecasts, setForecasts] = useState(null);

    useEffect(() => {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem("lat")}&lon=${localStorage.getItem("lon")}&appid=${apiKey}&units=metric`;
    
        fetch(weatherApiURL)
            .then(response=>response.json())
            .then(data => {
                console.log(data)
                setForecasts(data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 20000); // Change image every 20 seconds

        const dayNightInterval = setInterval(() => {
            const currHour = new Date().getHours();
            if (currHour > 6 && currHour < 18) {
                return <MainPageSunny />
            }
        }, 60000);

        return () => {
            clearInterval(interval);
            clearInterval(dayNightInterval);
        } // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures useEffect runs only once

    if (!forecasts) {
        return <>Loading</>
    }

    return (
        <div className="background" style={{
            backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
            transition: 'background-image 1s ease-in-out' 
        }}>
            <a href="/">
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo" />
            </a>
            <div className="overlay" style={{ top: '20%' }}>
                <img src={searchLogoImg} alt="Logo" className="searchLogo" />
                <div className="text-container">
                    <div className="sunny text-box">
                        <h1>{forecasts.list[0].weather[0].main}</h1>
                    </div>
                    <div className="location text-box">
                        <p className="location">{forecasts.city.name}</p>
                    </div>
                </div>
            </div>

            <div className="overlay2" style={{ top: '50%' }}>
                <div className="text-container" id="forecast-container">
                    <p className="location"></p>
                    <div className="forecast-grid">
                        {forecasts.list.map((forecast, index) => (
                            <div className="forecast-box" key={index}>
                                <p className="date">{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                <p className="showTemp">{forecast.main.temp}°C</p>
                                <p className="condition">{forecast.weather[0].main}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="overlay3" style={{ top: '80%' }}>
                <div className="text-container">
                    <a href="rain">
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox"/>
                        <img src={rainImg} alt="Rain" className="greybox"/>
                    </a>
                    <a href="clothes">
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox2"/>
                        <img src={tshirtlogoImg} alt="T-shirt Logo" className="greybox2"/>
                    </a>
                    <a href="blog">
                        <img src={pfplogoImg} alt="PFP Logo" className="greybox3"/>
                        <img src={greyBoxesImg} alt="Grey Box" className="greybox3"/>
                    </a>

                    <a href="hydration">
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


export default MainPageNight;
