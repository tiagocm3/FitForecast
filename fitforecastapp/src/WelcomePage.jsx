import React, { useState } from 'react';
import './WelcomePage.css';
import MountainImg from './Mountain2.webp';
import BlueBarImg from "./bluebar.png"
import LogoImg from "./fitforecast logo.png"
import searchImg from './search2.png';
import { useNavigate } from 'react-router-dom';


function WelcomePage() {
    const [cityInput, setCity] = useState("");
    const nav = useNavigate();

    let move = (path) => {
        nav(path);
    }

    function clickSearch() {
        const apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
        const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=1&appid=${apiKey}`;
        fetch(geocodingApiUrl)
            .then(response=>response.json())
            .then(data=> {
                
                // location typed is stored in localStorage
                // it will store weather info in console
                // this info will be used in the next page to call API

                if (data.length>0) {
                    localStorage.setItem("lat", data[0].lat);
                    localStorage.setItem("lon", data[0].lon);
                    localStorage.setItem("name", data[0].name);
                } else {
                    localStorage.setItem("lat", 0);
                    localStorage.setItem("lon", 0);
                    localStorage.setItem("name", "Location Not Found");
                }
                move("/main");
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="BackgroundImage">
            <img src={MountainImg} alt="Wallpaper" className="Welcome-Background" />
            <div className="Welcome-Overlay" style={{ top: '15%' }}>
                <img src={BlueBarImg} alt="TaskBar" className="Welcome-BlueBar" />
                <div className="text-container">
                    <div className="Welcome-FitForecast">
                        <div className="Title">
                            <h1>FitForecast</h1>
                        </div>
                        <div className="Welcome-Slogan">

                        </div>
                        <div className="Logo">
                            <img src={LogoImg} alt="Logo" className="Welcome-FitLogo"/>
                        </div>
                        <div className="Bar">

                            {/* sets the city typed as an argument to API caller */}
                            <input type="text" id="location" placeholder="Search Location" className="SearchBar" onChange={(e) => setCity(e.target.value)}/>
                        </div>

                        <div className="Icon">
                            <img src={searchImg} alt="Search Icon" className="Welcome-Search" onClick={clickSearch}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default WelcomePage;












