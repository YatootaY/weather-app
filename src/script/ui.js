import API from "./api.js"
import Convert from "./convert.js"

export default class UI{

  static loadPage(){
    UI.setBtn();
    API.start("Mandalay");
  }

  static getInput(){
    const input = document.getElementById("city");
    API.start(input.value);
  }

  static setBtn(){
    const searchBtn = document.getElementById("search-btn");
    const input = document.getElementById("city");
    searchBtn.addEventListener("click", UI.getInput);
    input.addEventListener("keypress",(e) =>{
      if (event.key === "Enter"){
        event.preventDefault();
        UI.getInput();
      }
    });
  }

  static handleError(text){
    const error = document.getElementById("error");
    error.textContent = text;
  }

  static cleanUpInput(){
    const input = document.getElementById("city");
    const error = document.getElementById("error");
    input.value = "";
    error.textContent = "";
  }

  static updateLocation(cityName,countryCode){
    const countryName = Convert.toCountryName(countryCode);
    const location = document.getElementById("location");
    const country = document.getElementById("country");
    location.textContent = cityName;
    country.textContent = countryName;
  }

  static updateTime(date){

    const formattedDay = Convert.getFormattedDay(date);
    const formattedTime = Convert.getFormattedTime(date);

    const datePara = document.getElementById("date");
    datePara.textContent = formattedDay;

    let splitTime = formattedTime.split(" ");
    const timePara = document.getElementById("time");
    timePara.innerHTML = `${splitTime[0]}<span>${splitTime[1]}<span>`;
  }

  static updateHourlyPredict(hourlyData){
    const seven = document.getElementById("7");
    const oneFive = document.getElementById("15");
    const twoThree = document.getElementById("23");

    const sevenData = hourlyData[14]['weather'][0]["description"];
    const oneFiveData = hourlyData[30]["weather"][0]["description"];
    const twoThreeData = hourlyData[46]["weather"][0]["description"];

    seven.textContent = `${sevenData} expected.`;
    oneFive.textContent = `${oneFiveData} can appear.`;
    twoThree.textContent = `we may see ${twoThreeData}.`;
  }

  static updateTodayPredict(todayData,date){
    const todayTemperature = Convert.KToC(todayData.main.temp);
    const todayWeather = todayData.weather[0]["description"];
    const todayIcon = Convert.weatherToPic(todayData.weather[0]["icon"]) + ".png";
    const weekday = Convert.getWeekDay(date.getDay());

    const today = document.querySelector(".today");
    const img = document.getElementById("today-icon");
    img.src = todayIcon;
    today.querySelector(".temp").textContent = todayTemperature + "°";
  }

}
