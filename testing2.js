// test out code here
/* global $ APIKEY navigator position */

       
// this is the data that comes into the console by console.log(getData)

{
	coord: {…},
	weather: Array(3),
	base: "stations",
	main: {…},
	visibility: 4023,
	 …
}
base: "stations"
clouds: {
	all: 90
}
all: 90 __proto__: Objectcod: 200 coord: {
	lon: -71.43,
	lat: 41.83
}
dt: 1516668780 id: 5224151 main: humidity: 100 pressure: 1023 temp: 38.53 temp_max: 42.8 temp_min: 35.6 __proto__: Objectname: "Providence"
sys: country: "US"
id: 2390 message: 0.0047 sunrise: 1516709158 sunset: 1516744180 type: 1 __proto__: Objectvisibility: 4023 weather: Array(3) 0: {
	id: 300,
	main: "Drizzle",
	description: "light intensity drizzle",
	icon: "09n"
}
1: {
	id: 701,
	main: "Mist",
	description: "mist",
	icon: "50n"
}
2: {
	id: 500,
	main: "Rain",
	description: "light rain",
	icon: "10n"
}
length: 3 __proto__: Array(0) wind: deg: 60 speed: 5.82 __proto__: Object__proto__: Object


//
        $(document).ready(function(){
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?&units=imperial",
            dataType: "json",
            data: {
                "coord":{ "lon":159, "lat":35 }, 
                "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], 
                "base":"stations", 
                "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, 
                "sea_level":1027.47, "grnd_level":1027.45 }, 
                "wind":{ "speed":8.12, "deg":246.503 }, 
                "rain":{ "3h":0.45 }, 
                "clouds":{ "all":92 }, 
                "dt":1499521932, 
                "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, 
                "id":0,
                "name":"", 
                "cod":200 
                }
            })
        })
        
 