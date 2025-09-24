document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const weather = document.getElementById("weather");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-msg");

  const API_KEY = "3654bd8f676846219c121628252309";

  //   if (
  //     !cityInput ||
  //     !getWeatherButton ||
  //     !weatherInfo ||
  //     !cityName ||
  //     !weather ||
  //     !description ||
  //     !errorMessage
  //   )
  //     return;

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("city name cannot be found");
    }

    const data = await response.json();
    // console.log(data);
    return data;
  }

  function displayWeatherData(data) {
    cityName.textContent = data?.location?.name;
    weather.innerHTML = `<strong>Temperature:</strong>${data?.current?.temp_c}°C (${data?.current?.temp_f}°F)`;
    description.innerHTML = `
      <strong>Time:</strong> ${data?.location?.localtime} (${
      data?.current?.is_day ? "Day" : "Night"
    })<br>
  <strong>Condition:</strong> ${data?.current?.condition?.text}<br>
  <strong>Wind:</strong> ${data?.current?.wind_kph} km/h ${
      data?.current?.wind_dir
    }<br>
  <strong>Humidity:</strong> ${data?.current?.humidity}%`;
    // console.log(cityName);
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
