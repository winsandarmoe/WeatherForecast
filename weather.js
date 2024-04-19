function Updateweather(response) {
  let temperature = document.querySelector("#weather-temperature");
  let temperaturevalue = response.data.temperature.current;
  temperature.innerHTML = Math.round(temperaturevalue);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let Description = document.querySelector("#description");
  Description.innerHTML = response.data.condition.description;
  let Humidity = document.querySelector("#humidity");
  Humidity.innerHTML = `${response.data.temperature.humidity} %`;
  let Windspeed = document.querySelector("#Windspeed");
  Windspeed.innerHTML = `${response.data.wind.speed}skm/h`;
  let timeElement = document.querySelector("#dateTime");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
  let Iconimage = document.querySelector("#icon");
  Iconimage.innerHTML = `<img src="${response.data.condition.icon_url}"class="current-temperature-icon">`;
  getForecast(response.data.city);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function Search(city) {
  let apiKey = "0b1t59f243b2b44483a04b521b645d7o";
  let Inputcity = document.querySelector("#search-input");
  let cityname = Inputcity.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityname}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(Updateweather);
}

function signUp(event) {
  event.preventDefault();
  let Inputcity = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = Inputcity.value;
  Search(Inputcity.value);
}

function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Thuday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[date.getDay()];
}
function getForecast(city) {
  let apiKey = "0b1t59f243b2b44483a04b521b645d7o";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayforecast);
}
function displayforecast(response) {
  let forecastday = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 7) {
      forecastday =
        forecastday +
        `
  <div class="weather-forecast-day">
    <div class="weather-forecast-date" >${formatDate(day.time)}</div>
    <div ><img src="${
      day.condition.icon_url
    }" class="weather-forecast-icon"/>​</div>
    <div class="weather-forecast-temperature">
      <div class="weather-forecast-temperature-max">
        <strong >${Math.round(day.temperature.maximum)}°</strong>
      </div>
      <div class="weather-forecast-temperature-min" >${Math.round(
        day.temperature.minimum
      )}°</div>
    </div>
  </div>
`;
    }
  });
  forecast.innerHTML = forecastday;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", signUp);
Search("Paris");
