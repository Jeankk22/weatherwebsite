
let weather = {
  apikey: "763e568722eb4633d2ff2bfca8b0517c",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=763e568722eb4633d2ff2bfca8b0517c"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Wheather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('http://source.unsplash.com/1600x900/?"+name+"')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener(".keyup", function (event) {
    if (event.key == "enter") {
      weather.search();
    }
  });


  document.querySelector(".search-bar").addEventListener("keyup", function(event){
if(event.key=="Enter"){
  weather.search();
}

  })

