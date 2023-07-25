// https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=0832dbe9b6c8fa154f952806e3e34ab4&units=metric

const apikey = '0832dbe9b6c8fa154f952806e3e34ab4';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric`


const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function cheackWeather(city) {
    const response = await fetch(apiurl + `&q=${city}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }
    else{
        const data = await response.json();
    
        document.querySelector('.temp').innerHTML = data.main.temp + "°C";
        document.querySelector('.city').innerHTML = data.name ;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"
        console.log(data);
    }
}

searchBtn.addEventListener("click", () => {
    cheackWeather(searchBox.value);
    
})

