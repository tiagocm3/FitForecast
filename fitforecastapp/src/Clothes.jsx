
import React, { useEffect } from 'react';
import './Clothes.css';
import fitforecastLogoImg from './fitforecast logo.png';
import jacketsBackground from './rainclothes.webp';
import rainImg from './rain.png';
import snowImg from './snowicon.png';
import sunImg from './sunicon.png';
import windImg from './windicon.png';
import hikingImg from './hiking.jpg'




function ClothesPage() {
    useEffect(() => {
        // Function to update the date
        const updateDate = () => {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; // Months are zero-based
            const year = currentDate.getFullYear();
            const dateString = `${day}/${month}/${year}`;
            document.getElementById('date').innerHTML = dateString;
        };

        updateDate(); // Calls the function once when the component mounts
    }, []);

    return (
        <div className="BackgroundImage">
            <img src={hikingImg} alt="Background" className="Image"/>
            <a href="main" className="logo-link">
                <img src={fitforecastLogoImg} alt="Logo" className="clothes-logo"/>
            </a>
            <div className="clothes-overlay" style={{top: '15%'}}>
                <div className="clothes-text-container">
                    <div className="clothes-sunny">
                        Clothing Info
                    </div>
                    <div className="location text-box">
                        <p className="clothes-location"></p>
                    </div>
                    <div className="clothes-date">
                        <div id="date"></div>
                    </div>
                </div>
            </div>
            <div className="clothes-overlay2" style={{top: '28%'}}>
                <div className="text-container2">
                    <img src={sunImg} alt="wind" className="sun"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="clothes-Info">
                        <p>
                            <ul>
                                <li><strong>Choose a lightweight, breathable, and moisture-wicking shirt</strong></li>
                                <li><strong>Opt for lightweight and breathable hiking shorts or convertible
                                    trousers</strong></li>
                                <li><strong>Wear lightweight and breathable hiking shoes or trail running shoes with
                                    good grip</strong></li>
                            </ul>
                        </p>

                    </div>
                    <div className="location text-box">
                        <p className="location2"></p>
                    </div>

                    <div className="date">
                        <div id="date2"></div>
                    </div>
                </div>
            </div>

            <div className="clothes-overlay3" style={{top: '63%'}}>
                <div className="text-container3">
                    <img src={windImg} alt="wind" className="wind"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="clothes-Info">
                        <p>
                            <ul>
                                <li><strong>A wind-resistant or windproof jacket is crucial to block out cold air and
                                    maintain heat</strong></li>
                                <li><strong>Wear a pair of durable and wind-resistant trousers, such as those made by
                                    Columbia or Arc'teryx</strong></li>
                                <li><strong>Don't forget a windproof hat or beanie to keep your head warm</strong></li>
                            </ul>
                        </p>

                    </div>
                    <div className="location text-box">
                        <p className="location3"></p>
                    </div>
                    <div className="date">
                        <div id="date3"></div>
                    </div>
                </div>
            </div>
            <div className="clothes-overlay4" style={{top: '28%'}}>
            <div className="text-container4">
                    <img src={snowImg} alt="snow" className="snow"/>
                    <div className="header">
                        <h1></h1>
                    </div>
                <div className="clothes-Info">
                    <p>
                        <ul>
                            <li><strong>A moisture-wicking base layer followed by a warm insulating layer, such as a
                                fleece jacket.</strong></li>
                            <li><strong>Wear insulated waterproof pants or snow pants to keep your legs warm and
                                dry</strong></li>
                            <li><strong>Invest in insulated waterproof hiking boots with good traction for walking on
                                snow-covered trails</strong></li>
                        </ul>
                    </p>

                </div>
                <div className="location text-box">
                    <p className="location4"></p>
                </div>
                <div className="date">
                    <div id="date4"></div>
                </div>
            </div>
            </div>
            <div className="clothes-overlay5" style={{top: '63%'}}>
                <div className="text-container4">
                    <img src={rainImg} alt="rain" className="rain"/>
                </div>

                <div className="clothes-Info">
                    <p>
                        <ul>
                            <li><strong>Wear a waterproof and breathable rain jacket to keep you dry in wet
                                weather</strong></li>
                            <li><strong>Invest in waterproof rain pants or overpants to keep your lower body dry and
                                comfortable</strong></li>
                            <li><strong>Wear waterproof hiking boots or shoes with Gore-Tex or similar waterproof
                                membranes to keep your feet dry in rainy conditions.</strong></li>
                        </ul>
                    </p>

                </div>
                <div className="location text-box">
                    <p className="location5"></p>
                </div>
                <div className="date">
                    <div id="date5"></div>
                </div>
            </div>
        </div>

    );
}

export default ClothesPage;