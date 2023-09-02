// Declarations
const api_key = '44a7b7b53e49480e8bc200704232008';

const current_weather_prefix = '/current.json';
const forecast_prefix = '/forecast.json';
const history_prefix = '/history.json';

const num_days = 3;
const lookback_days = 7;
const currentDate = new Date();
let historyDate = new Date(
  currentDate.getTime() - 1000 * 60 * 60 * 24 * lookback_days
);

// API Request Functions
async function getCurrentWeather(location) {
  const url =
    'http://api.weatherapi.com/v1/current.json?key=' +
    api_key +
    '&q=' +
    location;
  const response = await try_response(url);
  const info = await parseRealtimeWeather(response);
  return info;
}

async function getForecast(location) {
  const url =
    'http://api.weatherapi.com/v1/forecast.json?key=' +
    api_key +
    '&q=' +
    location +
    '&days=' +
    num_days;
  const response = await try_response(url);
  const info = await parseForecastWeather(response);
  return info;
}

async function getHistory(location, date) {
  const url =
    'http://api.weatherapi.com/v1/history.json?key=' +
    api_key +
    '&q=' +
    location +
    '&dt=' +
    date;
  const response = await try_response(url);
  const info = await parseHistoryWeather(response);
  return info;
}

// Parsing Functions
async function parseRealtimeWeather(data) {
  const response = await data.json();

  const info = {
    location: {
      name: response.location.name,
      country: response.location.country,
      localtime: response.location.localtime,
    },
    current: {
      condition: response.current.condition.text,
      cloud: response.current.cloud,
      temp_f: response.current.temp_f,
      feelslike_f: response.current.feelslike_f,
      wind_mph: response.current.wind_mph,
      precip_in: response.current.precip_in,
      humidity: response.current.humidity,
      vis_miles: response.current.vis_miles,
      uv: response.current.uv,
    },
  };

  return info;
}

async function parseForecastWeather(data) {
  const response = await data.json();

  const info = {
    location: {
      name: response.location.name,
      country: response.location.country,
      localtime: response.location.localtime,
    },
    current: {
      condition: response.current.condition.text,
      cloud: response.current.cloud,
      temp_f: response.current.temp_f,
      feelslike_f: response.current.feelslike_f,
      wind_mph: response.current.wind_mph,
      precip_in: response.current.precip_in,
      humidity: response.current.humidity,
      vis_miles: response.current.vis_miles,
      uv: response.current.uv,
    },
    forecast_day_1: {
      date: response.forecast.forecastday[0].date,
      sunrise: response.forecast.forecastday[0].astro.sunrise,
      sunset: response.forecast.forecastday[0].astro.sunset,
      condition: response.forecast.forecastday[0].day.condition.text,
      maxtemp_f: response.forecast.forecastday[0].day.maxtemp_f,
      mintemp_f: response.forecast.forecastday[0].day.mintemp_f,
      avgtemp_f: response.forecast.forecastday[0].day.avgtemp_f,
      maxwind_mph: response.forecast.forecastday[0].day.maxwind_mph,
      totalprecip_in: response.forecast.forecastday[0].day.totalprecip_in,
      avghumidity: response.forecast.forecastday[0].day.avghumidity,
      avgvis_miles: response.forecast.forecastday[0].day.avgvis_miles,
      uv: response.forecast.forecastday[0].day.uv,
    },
    forecast_day_2: {
      date: response.forecast.forecastday[1].date,
      sunrise: response.forecast.forecastday[1].astro.sunrise,
      sunset: response.forecast.forecastday[1].astro.sunset,
      condition: response.forecast.forecastday[1].day.condition.text,
      maxtemp_f: response.forecast.forecastday[1].day.maxtemp_f,
      mintemp_f: response.forecast.forecastday[1].day.mintemp_f,
      avgtemp_f: response.forecast.forecastday[1].day.avgtemp_f,
      maxwind_mph: response.forecast.forecastday[1].day.maxwind_mph,
      totalprecip_in: response.forecast.forecastday[1].day.totalprecip_in,
      avghumidity: response.forecast.forecastday[1].day.avghumidity,
      avgvis_miles: response.forecast.forecastday[1].day.avgvis_miles,
      uv: response.forecast.forecastday[1].day.uv,
    },
    forecast_day_3: {
      date: response.forecast.forecastday[2].date,
      sunrise: response.forecast.forecastday[2].astro.sunrise,
      sunset: response.forecast.forecastday[2].astro.sunset,
      condition: response.forecast.forecastday[2].day.condition.text,
      maxtemp_f: response.forecast.forecastday[2].day.maxtemp_f,
      mintemp_f: response.forecast.forecastday[2].day.mintemp_f,
      avgtemp_f: response.forecast.forecastday[2].day.avgtemp_f,
      maxwind_mph: response.forecast.forecastday[2].day.maxwind_mph,
      totalprecip_in: response.forecast.forecastday[2].day.totalprecip_in,
      avghumidity: response.forecast.forecastday[2].day.avghumidity,
      avgvis_miles: response.forecast.forecastday[2].day.avgvis_miles,
      uv: response.forecast.forecastday[2].day.uv,
    },
  };

  return info;
}

async function parseHistoryWeather(data) {
  const response = await data.json();

  const info = {
    location: {
      name: response.location.name,
      country: response.location.country,
      localtime: response.location.localtime,
    },
    forecast: {
      date: response.forecast.forecastday[0].date,
      sunrise: response.forecast.forecastday[0].astro.sunrise,
      sunset: response.forecast.forecastday[0].astro.sunset,
      condition: response.forecast.forecastday[0].day.condition.text,
      maxtemp_f: response.forecast.forecastday[0].day.maxtemp_f,
      mintemp_f: response.forecast.forecastday[0].day.mintemp_f,
      avgtemp_f: response.forecast.forecastday[0].day.avgtemp_f,
      maxwind_mph: response.forecast.forecastday[0].day.maxwind_mph,
      totalprecip_in: response.forecast.forecastday[0].day.totalprecip_in,
      avghumidity: response.forecast.forecastday[0].day.avghumidity,
      avgvis_miles: response.forecast.forecastday[0].day.avgvis_miles,
      uv: response.forecast.forecastday[0].day.uv,
    },
  };

  return info;
}

// Helper Functions
async function try_response(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response error.', {
        cause: { response },
      });
    }
    return response;
  } catch (error) {
    console.log(error);
    console.log(error.cause.response.status);
  }
}

function get_dt(date) {
  const dt = new Date(date);
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const dt_string = year + '-' + month + '-' + day;
  return dt_string;
}

// DOM Manipulation

// Toggle Elements
const weatherData = document.createElement('div');
weatherData.setAttribute('id', 'weatherData');
document.body.appendChild(weatherData);

const currentWeather = document.createElement('button');
currentWeather.setAttribute('id', 'currentWeather');
currentWeather.setAttribute('type', 'button');
currentWeather.classList.add('weatherToggle');
currentWeather.classList.add('active');
currentWeather.textContent = 'Current';
weatherData.appendChild(currentWeather);

const forecastWeather = document.createElement('button');
forecastWeather.setAttribute('id', 'forecastWeather');
forecastWeather.setAttribute('type', 'button');
forecastWeather.classList.add('weatherToggle');
forecastWeather.textContent = 'Forecast';
weatherData.appendChild(forecastWeather);

const historyWeather = document.createElement('button');
historyWeather.setAttribute('id', 'historyWeather');
historyWeather.setAttribute('type', 'button');
historyWeather.classList.add('weatherToggle');
historyWeather.textContent = 'History';
weatherData.appendChild(historyWeather);

// Form Elements
const weatherForm = document.createElement('form');
weatherForm.setAttribute('id', 'weatherForm');
weatherForm.classList.add('active');
weatherForm.setAttribute('method', 'POST');
weatherForm.setAttribute('action', '/');
document.body.appendChild(weatherForm);

const weatherLabel = document.createElement('label');
weatherLabel.setAttribute('id', 'weatherLabel');
weatherLabel.setAttribute('for', 'weatherInput');
weatherLabel.textContent = 'Check the weather for any city in the world!';
weatherForm.appendChild(weatherLabel);

const weatherInput = document.createElement('input');
weatherInput.setAttribute('id', 'weatherInput');
weatherInput.setAttribute('type', 'text');
weatherInput.setAttribute('name', 'location');
weatherInput.setAttribute('placeholder', 'Enter Location');
weatherForm.appendChild(weatherInput);

const weatherButton = document.createElement('button');
weatherButton.setAttribute('id', 'weatherButton');
weatherButton.setAttribute('type', 'submit');
weatherButton.setAttribute('name', 'submit');
weatherButton.textContent = 'Submit';
weatherForm.appendChild(weatherButton);

// Current Weather Display
const currentWeatherDisplay = document.createElement('div');
currentWeatherDisplay.setAttribute('id', 'currentWeatherDisplay');
currentWeatherDisplay.classList.add('weatherDisplay');
currentWeatherDisplay.classList.add('active');
document.body.appendChild(currentWeatherDisplay);

const currentWeatherLocation = document.createElement('h3');
currentWeatherLocation.setAttribute('id', 'currentWeatherLocation');
currentWeatherLocation.textContent = '';
currentWeatherDisplay.appendChild(currentWeatherLocation);

const currentWeatherLocaltime = document.createElement('h3');
currentWeatherLocaltime.setAttribute('id', 'currentWeatherLocaltime');
currentWeatherLocaltime.textContent = '';
currentWeatherDisplay.appendChild(currentWeatherLocaltime);

const currentWeatherCondition = document.createElement('h3');
currentWeatherCondition.setAttribute('id', 'currentWeatherCondition');
currentWeatherCondition.textContent = '';
currentWeatherDisplay.appendChild(currentWeatherCondition);

const currentWeatherTemp = document.createElement('h3');
currentWeatherTemp.setAttribute('id', 'currentWeatherTemp');
currentWeatherTemp.textContent = '';
currentWeatherDisplay.appendChild(currentWeatherTemp);

// Add button to go back to form
const backButton = document.createElement('button');
backButton.setAttribute('id', 'backButton');
backButton.setAttribute('type', 'button');
backButton.textContent = 'New Search';
currentWeatherDisplay.appendChild(backButton);

// Forecast Weather Display
const forecastWeatherDisplay = document.createElement('div');
forecastWeatherDisplay.setAttribute('id', 'forecastWeatherDisplay');
forecastWeatherDisplay.classList.add('weatherDisplay');
document.body.appendChild(forecastWeatherDisplay);

const forecastWeatherLocation = document.createElement('h3');
forecastWeatherLocation.setAttribute('id', 'forecastWeatherLocation');
forecastWeatherLocation.textContent = '';
forecastWeatherDisplay.appendChild(forecastWeatherLocation);

const forecastWeatherLocaltime = document.createElement('h3');
forecastWeatherLocaltime.setAttribute('id', 'forecastWeatherLocaltime');
forecastWeatherLocaltime.textContent = '';
forecastWeatherDisplay.appendChild(forecastWeatherLocaltime);

const forecastWeatherCondition = document.createElement('h3');
forecastWeatherCondition.setAttribute('id', 'forecastWeatherCondition');
forecastWeatherCondition.textContent = '';
forecastWeatherDisplay.appendChild(forecastWeatherCondition);

const forecastWeatherTemp = document.createElement('h3');
forecastWeatherTemp.setAttribute('id', 'forecastWeatherTemp');
forecastWeatherTemp.textContent = '';
forecastWeatherDisplay.appendChild(forecastWeatherTemp);

// Historical Weather Display
const historyWeatherDisplay = document.createElement('div');
historyWeatherDisplay.setAttribute('id', 'historyWeatherDisplay');
historyWeatherDisplay.classList.add('weatherDisplay');
document.body.appendChild(historyWeatherDisplay);

const historyWeatherLocation = document.createElement('h3');
historyWeatherLocation.setAttribute('id', 'historyWeatherLocation');
historyWeatherLocation.textContent = '';
historyWeatherDisplay.appendChild(historyWeatherLocation);

const historyWeatherLocaltime = document.createElement('h3');
historyWeatherLocaltime.setAttribute('id', 'historyWeatherLocaltime');
historyWeatherLocaltime.textContent = '';
historyWeatherDisplay.appendChild(historyWeatherLocaltime);

const historyWeatherCondition = document.createElement('h3');
historyWeatherCondition.setAttribute('id', 'historyWeatherCondition');
historyWeatherCondition.textContent = '';
historyWeatherDisplay.appendChild(historyWeatherCondition);

const historyWeatherTemp = document.createElement('h3');
historyWeatherTemp.setAttribute('id', 'historyWeatherTemp');
historyWeatherTemp.textContent = '';
historyWeatherDisplay.appendChild(historyWeatherTemp);

// Global Variables
const weatherOptions = document.querySelectorAll('.weatherToggle');
const displays = document.querySelectorAll('.weatherDisplay');
let selectedWeatherOption = document.querySelector('.weatherToggle.active').id;

// Functions
function toggleWeather(e) {
  weatherOptions.forEach((option) => {
    option.classList.remove('active');
  });
  e.target.classList.add('active');
  selectedWeatherOption = e.target.id;

  displays.forEach((display) => {
    display.classList.remove('active');
  });

  switch (selectedWeatherOption) {
    case 'currentWeather':
      currentWeatherDisplay.classList.add('active');
      currentWeatherDisplay.appendChild(backButton);
      break;
    case 'forecastWeather':
      forecastWeatherDisplay.classList.add('active');
      forecastWeatherDisplay.appendChild(backButton);
      break;
    case 'historyWeather':
      historyWeatherDisplay.classList.add('active');
      historyWeatherDisplay.appendChild(backButton);
      break;
    default:
      console.log('Error: No weather option selected.');
  }

  if (weatherInput.value) {
    weatherSearch(e);
  }
}

function weatherSearch(e) {
  e.preventDefault();
  const location = weatherInput.value;
  let weatherFunction;
  switch (selectedWeatherOption) {
    case 'currentWeather':
      getCurrentWeather(location).then((info) => {
        populateDisplay(info);
      });
      break;
    case 'forecastWeather':
      getForecast(location).then((info) => {
        populateDisplay(info);
      });
      break;
    case 'historyWeather':
      getHistory(location, get_dt(historyDate)).then((info) => {
        populateDisplay(info);
      });
      break;
    default:
      console.log('Error: No weather option selected.');
  }
  weatherForm.classList.remove('active');
  backButton.classList.add('active');
}

function backToForm(e) {
  e.preventDefault();
  displays.forEach((display) => {
    display.querySelectorAll('h3').forEach((h3) => {
      h3.textContent = '';
    });
  });
  weatherForm.classList.add('active');
  backButton.classList.remove('active');
  weatherInput.value = '';
}

function populateDisplay(info) {
  let location;
  let localtime;
  let condition;
  let temp;

  switch (selectedWeatherOption) {
    case 'currentWeather':
      location = info.location.name + ', ' + info.location.country;
      localtime = info.location.localtime;
      condition = info.current.condition;
      temp = info.current.temp_f;
      break;
    case 'forecastWeather':
      location = info.location.name + ', ' + info.location.country;
      localtime = info.location.localtime;
      condition = info.current.condition;
      temp = info.current.temp_f;
      break;
    case 'historyWeather':
      location = info.location.name + ', ' + info.location.country;
      localtime = info.location.localtime;
      condition = info.forecast.condition;
      temp = info.forecast.avgtemp_f;
      break;
    default:
      console.log('Error: No weather option selected.');
  }

  switch (selectedWeatherOption) {
    case 'currentWeather':
      currentWeatherLocation.textContent = 'Location: ' + location;
      currentWeatherLocaltime.textContent = 'Localtime: ' + localtime;
      currentWeatherCondition.textContent = 'Condition: ' + condition;
      currentWeatherTemp.textContent = 'Temp (F): ' + temp;
      break;
    case 'forecastWeather':
      forecastWeatherLocation.textContent = 'Location: ' + location;
      forecastWeatherLocaltime.textContent = 'Localtime: ' + localtime;
      forecastWeatherCondition.textContent = 'Condition: ' + condition;
      forecastWeatherTemp.textContent = 'Temp (F): ' + temp;
      break;
    case 'historyWeather':
      historyWeatherLocation.textContent = 'Location: ' + location;
      historyWeatherLocaltime.textContent = 'Localtime: ' + localtime;
      historyWeatherCondition.textContent = 'Condition: ' + condition;
      historyWeatherTemp.textContent = 'Temp (F): ' + temp;
      break;
    default:
      console.log('Error: No weather option selected.');
  }
}

// Event Listeners
weatherOptions.forEach((option) => {
  option.addEventListener('click', toggleWeather);
});

weatherForm.addEventListener('submit', weatherSearch);

backButton.addEventListener('click', backToForm);

// Testing
// getCurrentWeather('New York');
// getForecast('New York', '2023-09-01');
// getHistory('New York', '2023-08-25');
