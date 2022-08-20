
const weatherSpan = document.querySelector('#greets span:last-child');

const icons = ['❤️', '🔥', '✨', '🌷', '🍀', '🍔', '🏝', '💎'];

const API_KEY = '49988f4abe0b40d186e35d5b3bbe9525';
const NIGHT_GREET = `It's a beautiful night!`;

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
try {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const weatherID = String(data.weather[0].id);

    let weatherText = '';
    if (weatherID.charAt(0) === '2') { // :thunderstorm
      weatherText = `You're in a thunderstorm!`;
    } else if ((weatherID.charAt(0) === '5') || (weatherID.charAt(0) === '3')) { // :rain
      weatherText = `You're in the rainy place!`;
    } else if (weatherID.charAt(0) === '6') { // :snow
      weatherText = `You're in the snowy place!`;
    } else if ((weatherID === '711') || (weatherID === '731') || (weatherID === '751') || (weatherID === '761') || (weatherID === '762')) { // :smoke, dust/sand, sand, dust, volcanic ash
      weatherText = `You're in the dusty place!`;
    } else if ((weatherID === '701') || (weatherID === '721') || (weatherID === '741')) { // :mist, haze, fog,
      weatherText = `You're in a foggy place!`;
    } else if ((weatherID === '771') || (weatherID === '781')) { // :squalls, tornado
      weatherText = `You're in a tornado!`;
    } else if ((weatherID=== '800') || (weatherID=== '801')) { // :clear, few clouds
      const date = new Date();
      const hourNow = date.getHours();
      if ((hourNow >= 20) || (hourNow <= 4)) { // checks if it's night now.
        weatherText = NIGHT_GREET;
      } else {
        weatherText = `You're in a sunny place!`;
      }
    } else if (weatherID.charAt(0) === '8') { // :clouds
      const date = new Date();
      const hourNow = date.getHours();
      if ((hourNow >= 20) || (hourNow <= 4)) { // checks if it's night now.
        weatherText = NIGHT_GREET;
      } else {
        weatherText = `You're in a cloudy place!`;
      }
    } else { weatherText = `${greetingTexts[Math.floor(Math.random() * greetingTexts.length)]} ❤️`; }

    weatherSpan.innerText = `${weatherText} ${icons[Math.floor(Math.random() * icons.length)]}`;
  }); 
} catch (error) {
  weatherSpan.innerText = `Have a nice day! ${icons[Math.floor(Math.random() * icons.length)]}`;
}

}

function onGeoError() {
  weatherSpan.innerText = `Have a nice day! ${icons[Math.floor(Math.random() * icons.length)]}`;
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);