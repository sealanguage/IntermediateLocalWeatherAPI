  /* global $ APIKEY navigator position */
  
  //  html5 gps call
var x = document.getElementById("position");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
    }
   
    // loading weather api data    --  can't seem to access this data 
    $(document).ready(function(){
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?&units=imperial",
            //url: "https:api.openweathermap.org/data/2.5/weather",
            data: {apikey: APIKEY },
            //url: "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139 ",
            dataType: "json",
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
                console.log("read getData function");
                console.log(getData);
                
            }
            
            });
            
        })
    
    
    // function showTemp(degrees) {
    //     document.getElementById("degrees").innerHTML = data.main.temp;
    //     console.log(showTemp);
    // }
     function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
    console.log(position);
    }