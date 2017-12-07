// Just in case any students were absent or this was missed. Do not use the weather API provided by FreeCodeCamp. 
// You can use any HTTPS based weather API you choose but it is recommended to use openweatherapi.org as this provides an HTTPS connection and has all the data needed to complete all challenges in the assignment. 
// If you find another API you are welcome to use it.

/* global $ APIKEY */
//makes sure the page loads before the javascript or jquery runs


//from news api to start
$(document).ready(function(){
    $.ajax({
        method: "GET",
        //url: "https://home.openweathermap.org/api_keys",
        url: "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}",
        data: {
            "coord": {"lon":145.77,"lat":-16.92},
            "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
            "base":"cmc stations",
            "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
            "wind":{"speed":5.1,"deg":150},
            "clouds":{"all":75},
            "rain":{"3h":3},
            "dt":1435658272,
            "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
            "id":2172797,
            "name":"Cairns",
            "cod":200, 
            "apiKey": APIKEY
            },
        });
    }
);
//above has correct parens and curlies
//});
    
    
    
    
      // success: function(data) {
        //     if (data.status === "ok") {
        //             console.log(data)
        //         }
        //     }, 
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
