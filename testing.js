/* global $ APIKEY navigator */
//intermediate local weather api app
//makes sure the page loads before the javascript or jquery runs
    $(document).ready(function(){
       //$("body").css(");
       console.log("did it")
    });
    

        var x = document.getElementById("position");
        function getLocation() {
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation not supported by this browser";
                
            }
        }
        function showPosition(position) {
            x.innerHTML = "Latitude = " + position.coords.latitude + "<br>Longitude = "
             + position.coords.longitude;
             
         }
         console.log(showPosition(position));
         
         
         
//code example from news api to start
$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?&units=imperial",
        data: {
            //tell it to get longitude and latitude
            lat: lat,
            lon: lon,
            
            apiKey: APIKEY
            },
            
            success: function(data) {
                //sanity check
                //if (data.status == "ok") {
                    console.log(data);
                //}
            }, 
            
        });
    }
);
//above has correct parens and curlies
    
    
    
    
     
        // done(function( data ) {
        //     console.log( data );
        //     console.log(data.status);
        // });
        
        
    
    
    
    
// Website should have a minimalistic yet professional feel:
// Title for the page
// Layout should be mobile friendly
// Location should be pulled automatically. Use the Project Page to see two ways to do this. Using C9 provides you with an 
// HTTPS connection so you should be able to use HTML5 geolocation system.
// The local weather for the day should be displayed:
// Weather should display the type of weather: sunny, rainy, cloudy etc
// Weather should display an icon or image depending on the type of weather - recommendation is to use FontAwesome but you can use whatever icon/image system you wish.
// Weather should display current temperature
// Current weather section should allow a click to change from Fahrenheit to Celsius. This could be a button or some other method.
// Weather must be pulled from an API. Recommended API is the Open Weather API however you are free to use any weather API you wish.
