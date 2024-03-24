//Aina's Part
//CITY NAME TO COORDINATES
var CityInput = document.querySelector("#City");

function findCity() {
    var apiKey = '6ba3ee5ac50af61f21d2136ac5dab42c';
    var geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${CityInput.value}&limit=1&appid=${apiKey}`;

    var results = document.querySelector("#results")

    fetch(geocodingApiUrl)
        .then(response=>response.json())
        .then(data=> {
            if (data.length>0) {
                var latitude = data[0].lat;
                var longtitude = data[0].lon;

                //calling Ben's function
                updateWeather(latitude,longtitude);
                results.innerHTML = "";

            } else {
                results.innerHTML = 'Location not found';
                document.getElementById("weatherBoxes").innerHTML = "";
                
            }
        })

        .catch(err=>console.log(err))
}

searchButton.addEventListener("click", findCity);

//--------------------------------------------------------

//Ben's Part
//COORDINATES TO WEATHER CONDITIONS

const APIKEY = "2d99492a4fa8e51c171ab69856dd06ef";

async function updateWeather(lat,lon) {
    //clear existing data, make space for new one
    document.getElementById("weatherBoxes").innerHTML = "";

    const URL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKEY + "&units=metric";
    let data;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Error. Status: " + response.status);
        }
        data = await response.json();
        num_of_forecasts = data.cnt;
        let forecasts = data.list;
        console.log(forecasts);
        let time, temp, feels_like, weather;
        for (let i = 0; i < num_of_forecasts; i++) {
            time = new Date(forecasts[i].dt * 1000);
            temp = forecasts[i].main.temp;
            feels_like = forecasts[i].main.feels_like;
            weather = forecasts[i].weather[0].main;
            document.getElementById("weatherBoxes").innerHTML += `<div class="hourlyForecast">${time.toLocaleString("en-GB")}<br>
                                                                    Weather: ${weather}<br>Temp: ${temp}<br>Feels Like: ${feels_like}<br></div>\n`;
        }


    } catch (error) {
        console.error('Error:', error.message);
    }
} 


