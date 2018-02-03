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
        // else { 
        //     x.innerHTML = "Geolocation is not supported by this browser.";
        // }
        
    }
   
    function showPosition(position) {
        var lat = position.coords.latitude; 
        var lon = position.coords.longitude;
        var that = this;
        
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
                    apikey: "c08be9fe3166c8f7b0e7050220030a56" },
           
            // data: {
            //     "coord":{ "lon":159, "lat":35 }, 
            //     "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], 
            //     "base":"stations", 
            //     "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, 
            //     "sea_level":1027.47, "grnd_level":1027.45 }, 
            //     "wind":{ "speed":8.12, "deg":246.503 }, 
            //     "rain":{ "3h":0.45 }, 
            //     "clouds":{ "all":92 }, 
            //     "dt":1499521932, 
            //     "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, 
            //     "id":0,
            //     "name":"", 
            //     "cod":200 
            //     },
            
            
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
                var tempC = Math.round(((5/9) * (getData.main.temp - 32)))  + "&deg;C";      //qithout function this reads tempC to console successfully
                    

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
                        body.style.backgroundImage = "url(weather-imgs/fog.jpg)";
                    } else if (weatherType === "Drizzle") {
                        body.style.backgroundImage = "url(weather-imgs/rain.jpg)";
                    } else if (weatherType --- "Snow") {
                        body.style.backgroundImage = "url(weather-imgs/snow.jpg)";
                    }
                },
                
                
            });
            
        } 
    });
    
    
       
    
    
    
    
    
        // if (condition1) {
        //     block of code to be executed if condition1 is true
        // } else if (condition2) {
        //     block of code to be executed if the condition1 is false and condition2 is true
        // } else {
        //     block of code to be executed if the condition1 is false and condition2 is false
        // }

    
        // const gradient = 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)';

        // const styles = StyleSheet.create({
        //   button: {
        //     background: gradient,
        //     borderRadius: '3px',
        //     border: 0,
        //     color: 'white',
        //     height: '48px',
        //     textTransform: 'uppercase',
        //     padding: '0 25px',
        //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
        //   },
        // });  
        
   /*

   var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
   
   $('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() *      images.length)] + ')'});
   
   
    + " " + getData.wind.direction.code
    
    
   */
   
    
