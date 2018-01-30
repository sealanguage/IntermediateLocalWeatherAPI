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
    
    // function showPosition(position) {
    //     x.innerHTML = "Latitude: " + position.coords.latitude + 
    //     "<br>Longitude: " + position.coords.longitude;
    // }
   
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
                    
                    apikey: "c260543d9bd64dffe018a92c26b02626" },
           
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
                //console.log('displaying City name using function: ' +  cityName);
                //document.getElementById("cityName").innerHTML = "this puts text in cityName";
                //document.getElementById("cityName").innerHTML = getData.name;
                document.getElementById("yourCity").innerHTML = getData.name;
                document.getElementById("temperature").innerHTML = Math.round(getData.main.temp) + "&deg;" + "F";
                document.getElementById("weatherType").innerHTML = getData.weather[0].main;
                document.getElementById("weatherDescription").innerHTML = getData.weather[0].description;
                document.getElementById("wind").innerHTML = "Wind speed: " + getData.wind.speed + " mph";
                document.getElementById("humidity").innerHTML = "Humidity: " + getData.main.humidity + "&percnt;";
                
               
                console.log("heres the temp again: " + getData.main.temp);    //  this gets the temperature successfully
                
                tempC = ((5/9) * (getData.main.temp - 32));
                //return tempC;
                console.log("heres temp in C: " + Math.round(tempC));
                },
               
                //},
            createCelciusButton: function() {
                var celciusButton = document.createElement('button');
                celciusButton.textContent = "celcius";
                celciusButton.className = 'celciusButton';
                return celciusButton;
                
            }
                
                
            });
 
        } 
    });
    
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
   
    
