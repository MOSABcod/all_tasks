const apikey ="da62e5e38019c284603103fe685c6a94";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=amman";

async function chekwather() {
    
    const respons = await fetch(apiurl + `&appid=${apikey}`);
    var data = await respons .json();
    
    console.log(data);

    document.querySelector(".weather-temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".weather-desc").innerHTML= data.weather.main;
    document.querySelector(".PRESSURE value").innerHTML= data.main.pressure +"%";
    document.querySelector(".humidity-view").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind-view").innerHTML= data.wind.speed +"km/h";
    document.querySelector(".day-name").innerHTML= data;
    document.querySelector(".day-temp").innerHTML= data;
    document.querySelector(".location-button listcity").innerHTML= data;


}
chekwather();