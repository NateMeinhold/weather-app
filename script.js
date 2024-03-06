//create and place API Key from Weather Map
const apiKey = "7500887a8169c25dbba8293ea48ce39f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

//Collect all DOM elements
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const tempElement = document.getElementById("temp");
const descriptionElement = document.getElementById("description");

//Add click event for search button
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
  //Removes the city from the search bar after the data has appeared
  locationInput.value = "";
});

//API call using Fetch ///set units to metric for C
function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //the data, think about adding temp in F as well as C if possible
      locationElement.textContent = data.name;
      tempElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })

    //here is where the fetch error is..think about adding error for user to see
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
