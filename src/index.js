import "./styles.css";

const input = function () {
  const city = document.querySelector(".city");
  const container = document.querySelector(".container");

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=us&include=days&key=XQCVRZLS6VS9ZR2P644NHNLQH&contentType=json`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (let x = 0; x < 7; x++) {
        console.log(response.days[x]);

        const day = document.createElement("div");
        day.classList.add("day");
        container.appendChild(day);

        const outputdate = document.createElement("div");
        outputdate.classList.add("date");
        outputdate.textContent = `Weather for ${response.days[x].datetime}.`;
        day.appendChild(outputdate);

        const outputconditions = document.createElement("div");
        outputconditions.classList.add("conditions");
        outputconditions.textContent = `Conditions for the day are ${response.days[x].conditions}.`;
        day.appendChild(outputconditions);

        const outputfeels = document.createElement("div");
        outputfeels.classList.add("feelslike");
        outputfeels.textContent = `Conditions for the day are ${response.days[x].feelslike}.`;
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

        const outputdescription = document.createElement("div");
        outputdescription.classList.add(".description");
        outputdescription.textContent = response.days[x].description;
        day.appendChild(outputdescription);
      }
    });
  city.value = "";
};

const button = document.querySelector("button");

button.addEventListener("click", input);
