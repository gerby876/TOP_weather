//key XQCVRZLS6VS9ZR2P644NHNLQH

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=11111111111111111

const input = function () {
  const city = document.querySelector(".city");
  const date = document.querySelectorAll(".day");
  const outputdate = document.querySelector(".date");
  const outputconditions = document.querySelector(".conditions");
  const outputfeels = document.querySelector(".feelslike");
  const outputtemp = document.querySelector(".temp");
  const outputtempmax = document.querySelector(".tempmax");
  const outputtempmin = document.querySelector(".tempmin");
  const outputdescription = document.querySelector(".description");

  for (let x = 0; x < date.length; x++) {
    if (date[x].checked) {
      datecheck = date[x].id;
      date[x].checked = false;
    }
  }
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?unitGroup=us&include=days&key=XQCVRZLS6VS9ZR2P644NHNLQH&contentType=json`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (datecheck == "today") {
        outputdate.textContent = `Weather for ${response.days[0].datetime}.`;
        outputconditions.textContent = `Conditions for the day are ${response.days[0].conditions}.`;
        outputfeels.textContent = `The temperature feels like ${response.days[0].feelslike}.`;
        outputtemp.textContent = `The temperature for the day is ${response.days[0].temp}.`;
        outputtempmax.textContent = `The max temperature for the day is ${response.days[0].tempmax}.`;
        outputtempmin.textContent = `The min temperature for the day is ${response.days[0].tempmin}.`;
        outputdescription.textContent = response.days[0].description;
      } else if (datecheck == "tomorrow") {
        outputdate.textContent = `Weather for ${response.days[1].datetime}.`;
        outputconditions.textContent = `Conditions for the day are ${response.days[1].conditions}.`;
        outputfeels.textContent = `The temperature feels like ${response.days[1].feelslike}.`;
        outputtemp.textContent = `The temperature for the day is ${response.days[1].temp}.`;
        outputtempmax.textContent = `The max temperature for the day is ${response.days[1].tempmax}.`;
        outputtempmin.textContent = `The min temperature for the day is ${response.days[1].tempmin}.`;
        outputdescription.textContent = response.days[1].description;
      }
    });
  city.value = "";
};

const button = document.querySelector("button");

button.addEventListener("click", input);
