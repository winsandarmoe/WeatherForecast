//challenge 1
let currentdate = new Date();
let current - details = document.querySelector('.current-details');
current - details.innerHTML = (`${currentdate}, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`);

//Challenge 2
function signUp(event) {
  event.preventDefault();
  let input = document.querySelector('h1.current - city');
  h1.innerHTML = `${input.value}`;
}
let form = document.querySelector('.search-input');
form.addEventListener("submit", signUp);
