const apiKey = "622b38ef699698288b7559a652eae638";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeatherData(city) {
  console.log("loading");

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //   let response = await fetch(city + "https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=622b38ef699698288b7559a652eae638&units=metric", {
  //     method: "GET",
  //   });

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  getWeatherData(searchBox.value);
  console.log("chal gya");
});

addEventListener("keypress", (x) => {
  if (x.key === "Enter") {
    getWeatherData(searchBox.value);
  }
});
