//key XQCVRZLS6VS9ZR2P644NHNLQH

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=11111111111111111

const input = function () {
  const city = document.querySelector(".city");
  const date = document.querySelectorAll(".day");
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
        console.log(response.days[0].datetime);
        console.log(response.days[0].conditions);
        console.log(response.days[0].feelslike);
        console.log(response.days[0].temp);
        console.log(response.days[0].tempmax);
        console.log(response.days[0].tempmin);
        console.log(response.days[0].description);
      } else if (datecheck == "tomorrow") {
        console.log(response.days[1].datetime);
        console.log(response.days[1].conditions);
        console.log(response.days[1].feelslike);
        console.log(response.days[1].temp);
        console.log(response.days[1].tempmax);
        console.log(response.days[1].tempmin);
        console.log(response.days[1].description);
      }
    });
  city.value = "";
};

const button = document.querySelector("button");

button.addEventListener("click", input);
