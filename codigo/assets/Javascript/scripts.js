var clima;
var lat;
var lon;
var humidity;
var city;
var temp_max;
var temp_min;

var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var country = "Guatemala";
var city = "Guatemala";
var apiURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
var apiRoute = apiURL + "?q=" + country + "&units=metric&cnt=7&appid=" + apiKey;

$(document).ready(function(){
	$("#refresh").on("click", function(){
		$.ajax({
			method: 'GET',
			url: apiRoute,
			success: function(msj, estado, xhr){
				console.log(msj);
				console.log(estado);
				city = (msj["city"]["name"]);
				lat = (msj["city"]["coord"]["lat"]).toFixed(2);
				lon = (msj["city"]["coord"]["lon"]).toFixed(2);
				
				clima = (msj["list"][0]["weather"][0]["description"]);
				humidity = (msj["list"][0]["humidity"]);
				temp_max = (msj["list"][0]["temp"]["max"]).toFixed(2);
				temp_min = (msj["list"][0]["temp"]["min"]).toFixed(2);
				console.log(temp_max);
			}	
		});
	})
})