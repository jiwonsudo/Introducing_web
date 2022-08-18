require('dotenv').config();

const weatherSpan = document.querySelector('#greets span:last-child');

const greetingTexts = ["Have a happy day!", "Have a great day!", "Have a wonderful day!", "It's a nice day, isn't it?", "Good day!"];

const API_KEY = process.env.WEATHER_API_KEY;

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const weatherID = String(data.weather[0].id);

    let weatherText = '';

    if (weatherID.charAt(0) === '2') { // :thunderstorm
      weatherText = `You're in a thunderstorm! Be careful!`;
    } else if ((weatherID.charAt(0) === '5') || (weatherID.charAt(0) === '3')) { // :rain
      weatherText = `You're in the rainy place!`;
    } else if (weatherID.charAt(0) === '6') { // :snow
      weatherText = `You're in the snowy place!`;
    } else if ((weatherID === '711') || (weatherID === '731') || (weatherID === '751') || (weatherID === '761') || (weatherID === '762')) { // :smoke, dust/sand, sand, dust, volcanic ash
      weatherText = `You're where the dust wind blows! Be careful!`;
    } else if ((weatherID === '701') || (weatherID === '721') || (weatherID === '741')) { // :mist, haze, fog,
      weatherText = `You're in a foggy place!`;
    } else if ((weatherID === '771') || (weatherID === '781')) { // :squalls, tornado
      weatherText = `You're in a tornado! Be careful!`;
    } else if ((weatherID=== '800') || (weatherID=== '801')) { // :clear, few clouds
      weatherText = `You're in a sunny place! Wonderful!`;
    } else if (weatherID.charAt(0) === '8') { // :clouds
      weatherText = `You're in a cloudy place!`;
    } else { weatherText = `${greetingTexts[Math.floor(Math.random() * greetingTexts.length)]} ❤️`; }

    weatherSpan.innerText = `${weatherText} ❤️`;
  })

}

function onGeoError() {
  weatherSpan.innerText = `${greetingTexts[Math.floor(Math.random() * greetingTexts.length)]}`;
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);