// What is the base URL?
const url = "https://api.openweathermap.org/data/2.5/weather";

const outputDiv = document.querySelector("#output");
console.log(outputDiv);


// What are the parameters? (Both required and optional)
// - q (City Name - Required)
// - appid (API Key - Required)
// - units ("metric" - Optional)

function displayCurrentWeather(responseData){
    const currentTemp = responseData.main.temp;
    const minTemp = responseData.main.temp_min;
    const maxTemp = responseData.main.temp_max;
    const html =`
    <p> Current Temperature : ${currentTemp} Degrees</p>
    <p> Min Temperature : ${minTemp} Degrees</p>
    <p> Max Temperature : ${maxTemp} Degrees</p>

    `;

    outputDiv.innerHTML = html;
}


function waitForResponse(r) {
    return r.json();
}


function fetchCurrentWeather(location = "Sydney") {
    outputDiv.innerHTML = " Loading ...";
  
  const apiKey = "7dfe309afec3ee637c6130947b96f76b";
  const units = "metric";
  const queryString = `?q=${location}&appid=${apiKey}&units=${units}`;

  fetch(url + queryString).then(waitForResponse).then (displayCurrentWeather);
}

fetchCurrentWeather();

  
  const form = document.querySelector("form");
  
  function onFormSubmit(event) {
    event.preventDefault();
    const input = document.querySelector("input");
    const location = input.value;
    fetchCurrentWeather(location);
  }
  
  form.addEventListener("submit", onFormSubmit);