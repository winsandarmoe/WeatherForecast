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
  let Time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  Time.innerHTML = formatDate(date);
  let Iconimage = document.querySelector("#icon");
  Iconimage.innerHTML = `<img src="${response.data.condition.icon_url}"class="current-temperature-icon">`;

  console.log(response.data);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Monday",
    "Thuday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function Search(city) {
  let apiKey = "0b1t59f243b2b44483a04b521b645d7o";
  let Inputcity = document.querySelector("#search-input");
  let cityname = Inputcity.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityname}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(Updateweather);
}

function signUp(event) {
  event.preventDefault();
  let Inputcity = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = Inputcity.value;
  Search(Inputcity.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", signUp);
Search("Paris");
