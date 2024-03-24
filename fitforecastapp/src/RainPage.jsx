import React, {useState, useEffect} from 'react';
import './RainPage.css';
import rainVideo from './Rain_Drops_1.mp4';
import greyBoxesImg from './grey boxes2.png';
import fitforecastLogoImg from './fitforecast logo.png';
import humidImg from './humidity.png'
import windImg from "./windicon.png";
import temp from "./temp.png";
import ap from "./ap.png";
import eyes from "./eyes.png";
import cor from "./chanceofrain1.png";


function RainPage() {

    const [forecasts, setForecasts] = useState(null);


    // API is used here to link front end and rain conditions
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

    if (!forecasts) {
        return <>Loading...</>
    }

    return (
        <div className="BackgroundImage">
            <video autoPlay loop muted className="Welcome-Background">
                <source src={rainVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <a href="main">
                <img src={fitforecastLogoImg} alt="Logo" className="fit-logo"/>
            </a>
            <div className='overlays'>
                <div className="rain-overlay1" style={{ top: '75%' }}>
                <div className='cont'>
                <p id="tempVal">{forecasts.list[0].main.temp}°</p>
                <img src={temp} alt="Logo" className="humid"/>
                </div>
            </div>
            <div className="rain-overlay2" style={{ top: '75%' }}>
                <div className='cont'>
                <p id="windDirVal">{forecasts.list[0].wind.deg}°</p>
                <img src={ap} alt="Logo" className="humid"/>
                </div>
            </div>
            <div className="rain-overlay3" style={{ top: '75%' }}>
                <div className='cont'>
                <p id="visibiltyVal">{forecasts.list[0].visibility}m</p>
                <img src={eyes} alt="Logo" className="humid"/>
                </div>
            </div>
            <div className="rain-overlay4" style={{top: '30%'}}>
                <div className='cont'>
                <p id="humidityVal">{forecasts.list[0].main.humidity}%</p>
                <img src={humidImg} alt="Logo" className="humid"/>
                </div>
            </div>
            <div className="rain-overlay5" style={{top: '30%'}}>
                <div className='cont'>
                <p id="chanceOfRainVal">{100 * forecasts.list[0].pop}%</p>
                <img src={cor} alt="Logo" className="humid"/>
                </div>
            </div>
            <div className="rain-overlay6" style={{top: '30%'}}>
                <div className='cont'>
                <p id="windSpeedVal">{forecasts.list[0].wind.speed}m/s</p>
                <img src={windImg} alt="Logo" className="humid"/>
                </div>
            </div>
            </div>

        </div>
    );
}

export default RainPage;