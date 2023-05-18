const apikey="8811a039c10418b7b73c40a04888030e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=mertic&q=";
const search=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

const currentTime=document.querySelector("h4")

 async function checkWeather(city){
    const response= await fetch(apiUrl +city + `&appid=${apikey}`);
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".CURRENTwETH").innerHTML=data.weather.description;

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp/10)  + "°C";
    document.querySelector(".humid-details"). innerHTML = data.main.humidity +"%";
    document.querySelector(".wind-details"). innerHTML = data.wind.speed + "Km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="img/clear.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src="img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="img/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="img/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="img/snow.png";
    }

 }
 function updateTime(){
    var dateInfo=new Date();
    var hr,
    _min=(dateInfo.getMinutes()<10) ? "0" + dataInfo.getMinutes(): dateInfo.getMinutes(),
    sec=(dateInfo.getSeconds()<10)? "0" + dateInfo.getSeconds(): dateInfo.getSeconds(),
    ampm =(dateInfo.getHours()>= 12) ? "PM" :"AM";
 }

 
btn.addEventListener("click", ()=>{
    checkWeather(search.value);
})

 