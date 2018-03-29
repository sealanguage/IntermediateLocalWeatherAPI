/* global $ APIKEY navigator position styles StyleSheet */
  
//  html5 gps call
// loading weather api data    --  can't seem to access this data 
$(document).ready(function(){
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                showPosition(position);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    }
   
    function showPosition(position) {
        var lat = position.coords.latitude; 
        var lon = position.coords.longitude;
        
        // ajax call
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?&units=imperial",
             dataType: "json",
             data: {
                    //tell it to get longitude and latitude from geolocation
                    lat: lat,
                    lon: lon,
                    //use the api key but replace this key before pushing the code to codeschool 
                    apikey: "aa68754440800ad1bc6b396c9007c3be" },
           
            success: function(getData) {
                console.log("getData function success");
                console.log(getData);
                console.log("weather data: " + getData.weather);
                console.log("the array called main: " + getData.main);
                console.log("humidity: " + getData.main.humidity);
                console.log("temperature: " + getData.main.temp);
                console.log("city name: " + getData.name);
                console.log(getData.weather[0].main);
                console.log(getData.wind.speed);
                console.log(getData.wind.deg);
                
                var tempF = Math.round(getData.main.temp) + "&deg;F";
                console.log("var tempF: " + tempF);                           //  without the function this reads tempF to the console successfully
                var tempC = Math.round(((5/9) * (getData.main.temp - 32)))  + "&deg;C";      //without function this reads tempC to console successfully
                    
                document.getElementById("yourCity").innerHTML = getData.name;
                document.getElementById("temperature").innerHTML = Math.round(getData.main.temp) + "&deg;F";
                document.getElementById("weatherType").innerHTML = getData.weather[0].main;
                document.getElementById("weatherDescription").innerHTML = getData.weather[0].description;
                document.getElementById("wind").innerHTML = "Wind speed: " + getData.wind.speed + " mph";
                document.getElementById("humidity").innerHTML = "Humidity: " + getData.main.humidity + "&percnt;";
                
                    document.getElementById("toggleCelBut").onclick = function() {
                    //console.log("chg Cel but works");
                    document.getElementById("temperature").innerHTML = document.getElementById("temperature").innerHTML = tempC;
                    };
                    
                    document.getElementById("toggleFarBut").onclick = function() {
                    //console.log("chg Far but works");
                    document.getElementById("temperature").innerHTML = document.getElementById("temperature").innerHTML = tempF;
                    };
                    
               
                var body = document.getElementsByTagName('body')[0];
                var weatherType = getData.weather[0].main;
                console.log("weatherType variable = " + weatherType);
                
                    if (weatherType === "Clear") {
                        body.style.backgroundImage = "url(weather-imgs/clear3.jpg)";
                    } else if (weatherType === "Clouds") {
                        body.style.backgroundImage = "url(weather-imgs/clouds.jpg)";
                    } else if (weatherType === "Rain") {
                        body.style.backgroundImage = "url(weather-imgs/thunderstorm.jpg)";
                    } else if (weatherType === "Mist") {
                        body.style.backgroundImage = "url(weather-imgs/fog2.jpg)";
                    } else if (weatherType === "Drizzle") {
                        body.style.backgroundImage = "url(weather-imgs/rain.jpg)";
                    } else if (weatherType === "Snow") {
                        body.style.backgroundImage = "url(weather-imgs/snow.jpg)";
                    } else {
                        body.style.backgroundImage = "url(https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&w=1651&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)";
                    }
                
                // try getData === null    for when there is no data in the api
                var city = getData.name;
                console.log(city);
                if (city.value === "Location unavailable") {
                console.log("Unavailable city" + city);
                    document.getElementById("yourCity").innerHTML = "Data Unavailable ";
                    }
                },
                
                
            });
            
        } 
    });
    

   
    
