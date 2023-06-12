const appId = '4c9d9ca20c8bd507f13aacad65c56a37'

const getCity = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=imperial`)
    const data = await response.json()
    console.log(data)
    weatherImage = ''
    switch(data.weather[0].main) {
        case 'Clear':
            weatherImage = 'images/clear.jpg';
            break;
        case 'Rain':
            weatherImage = 'images/rain.jpg';
            break;
        case 'Clouds':
            weatherImage = 'images/clouds.jpg';
            break;
        case 'Haze':
            weatherImage = 'images/haze.jpg';
            break;
        case 'Snow':
            weatherImage = 'images/snow.jpg';
            break;
        default:
            weatherImage = 'images/default.jpg'
    }

    weather.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${weatherImage}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Weather Report</h5>
            <p class="card-text">Currently it is ${data.main.temp}°F in ${data.name}. You can expect ${data.weather[0].description} for the rest of the day.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Today's High: ${data.main.temp_max}°F</li>
            <li class="list-group-item">Today's Low: ${data.main.temp_min}°F</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
        </ul>
    </div>
    `
}


const getWeather = document.querySelectorAll('form')[0]
getWeather.addEventListener('submit', (event) => {
    event.preventDefault()
    const city = getWeather[0].value
    getCity(city)
})

const weather = document.querySelector('.weather')