import "./styles.css";

const input = function () {
  const city = document.querySelector(".city");
  const container = document.querySelector(".container");
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const cityName = city.value;
  city.value = "";
  return [dayName, cityName];
};

const weatherData = function (dayName, cityName) {
  const container = document.querySelector(".container");
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&include=days&key=XQCVRZLS6VS9ZR2P644NHNLQH&contentType=json`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const cityTitle = document.querySelector(".cityname");
      const city = cityName.toLowerCase();
      cityTitle.textContent = city.charAt(0).toUpperCase() + city.slice(1);

      for (let x = container.childNodes.length; x > 0; x--) {
        container.firstChild.remove();
      }

      for (let x = 0; x < 7; x++) {
        const day = document.createElement("div");
        day.classList.add("day");
        container.appendChild(day);

        const weekday = new Date(response.days[x].datetime);
        const outputday = document.createElement("h2");
        outputday.classList.add("date");
        outputday.textContent = dayName[weekday.getDay()];
        day.appendChild(outputday);

        const outputdate = document.createElement("h3");
        outputdate.classList.add("date");
        outputdate.textContent = `${response.days[x].datetime}`;
        day.appendChild(outputdate);

        const outputconditions = document.createElement("div");
        outputconditions.classList.add("conditions");
        outputconditions.textContent = `Conditions for the day are ${response.days[x].conditions}.`;
        day.appendChild(outputconditions);

        const outputfeels = document.createElement("div");
        outputfeels.classList.add("feelslike");
        outputfeels.textContent = `The temperature feels like ${response.days[x].feelslike}.`;
        day.appendChild(outputfeels);

        const outputtemp = document.createElement("div");
        outputtemp.classList.add(".temp");
        outputtemp.textContent = `The temperature for the day is ${response.days[x].temp}.`;
        day.appendChild(outputtemp);

        const outputtempmax = document.createElement("div");
        outputtempmax.classList.add(".tempmax");
        outputtempmax.textContent = `The max temperature for the day is ${response.days[x].tempmax}.`;
        day.appendChild(outputtempmax);

        const outputtempmin = document.createElement("div");
        outputtempmin.classList.add(".tempmin");
        outputtempmin.textContent = `The min temperature for the day is ${response.days[x].tempmin}.`;
        day.appendChild(outputtempmin);

        const outputdew = document.createElement("div");
        outputdew.classList.add(".dew");
        outputdew.textContent = `The dew point for today is ${response.days[x].dew}.`;
        day.appendChild(outputdew);

        const outputhumidity = document.createElement("div");
        outputhumidity.classList.add(".humidity");
        outputhumidity.textContent = `The humidity for today is ${response.days[x].humidity}.`;
        day.appendChild(outputhumidity);

        const outputwindspeed = document.createElement("div");
        outputwindspeed.classList.add(".windspeed");
        outputwindspeed.textContent = `The wind speed for today is ${response.days[x].windspeed}.`;
        day.appendChild(outputwindspeed);

        const outputdescription = document.createElement("div");
        outputdescription.classList.add(".description");
        outputdescription.textContent = response.days[x].description;
        day.appendChild(outputdescription);
      }
    })
    .catch(function (err) {
      if (err.message.includes("Unexpected token 'B'")) {
        alert(
          "Unable to find the location entered.  Please check the spelling or try a different location"
        );
      } else {
        alert(
          "An unexpected error has occured.  Please wait a few minutes and try again.  If errors persist to many requests may have been made.  Wait a day to try again."
        );
      }
    });
};

const findWeather = function () {
  const result = input();
  weatherData(result[0], result[1]);
};

const button = document.querySelector("button");

button.addEventListener("click", findWeather);
