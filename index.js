/* global $ APIKEY navigator position  */
//intermediate local weather api app
//makes sure the page loads before the javascript or jquery runs
    $(document).ready(function(){
       //$("body").css("");
       console.log("did it")
    });
    
    
    // var x =document.getElementById("position");
    //     function getLatLong() {
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(showPosition);
    //         } else { 
    //             x.innerHTML = "Geolocation not supported by this browser";
                
    //         }
    //     };
    //     console.log("position");
    //     function showPosition() {
    //         x.innerHTML = "Latitude = " + position.coords.lattitude + "<br>Longitude = " + position.coords.longitude;
            
    //     };
        //console.log(showPosition());
        var getGeoLoc = {
        "longitued": "showPosition.position.coords.longiitude",
        "latitude": "getLatLong.position.coords.latiitude",
        
    };
        // console.log(showPosition.position.coords.lattitud);
        console.log("getGeoLoc");
        //ajax call
        //code example from news api to start
                // $.ajax({
                //     method: "GET",
                //     //url: "api.openweathermap.org/data/2.5/weather?q={boston},{USA}",
                //     //url: "api.openweathermap.org/data/2.5/weather?q={city name},{country code}",
                //     url: "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}",
                //     //url: "https://api.openweathermap.org/data/2.5/forecast?id={APIKEY}",
                //     //is loading the data from the id 52901 which is Moscow. not reading data below
                //     data: {
                //         "coord": {"lon": "showPosition.position.coords.longiitude", "lat": ""},
                        
                //         "apiKey": APIKEY    
                //     }
                    
                // });    
        
        
        
          
         
         
// //code example from news api to start
// $(document).ready(function(){
//     $.ajax({
//         method: "GET",
//         //url: "api.openweathermap.org/data/2.5/weather?q={boston},{USA}",
//         //url: "api.openweathermap.org/data/2.5/weather?q={city name},{country code}",
//         url: "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}",
//         //url: "https://api.openweathermap.org/data/2.5/forecast?id={APIKEY}",
//         //is loading the data from the id 52901 which is Moscow. not reading data below
//         data: {
//             "coord": {"lon":145.77,"lat":-16.92},
//             "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//             "base":"cmc stations",
//             "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
//             "wind":{"speed":5.1,"deg":150},
//             "clouds":{"all":75},
//             "rain":{"3h":3},
//             "dt":1435658272,
//             "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
//             "id":2172797,
//             "name":"Cairns",
//             "cod":200, 
//             "apiKey": APIKEY
//             },
            
//             success: function(data) {
//                 //sanity check
//                 //if (data.status == "ok") {
//                     console.log(data);
//                 //}
//             }, 
            
//         });
//     }
// );
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



//get position code used above
       
//         var x = document.getElementById("position");
//         function getLocation() {
//             if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//             } else {
//                 x.innerHTML = "Geolocation not supported by this browser";
                
//             }
//         }
//         function showPosition(position) {
//             x.innerHTML = "Latitude = " + position.coords.latitude + "<br>Longitude = "
//              + position.coords.longitude;
             
//          }
//          //console.log(showPosition(position));
