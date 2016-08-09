var clima;
var lat;
var lon;
var humidity;
var city;
var temp;

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
				clima = (msj["list"][0]["weather"][0]["description"]);
				lat = (msj["city"]["coord"]["lat"]);
				lon = (msj["city"]["coord"]["lon"]);
				humidity = (msj["list"][0]["main"]["humidity"]);
				city = (msj["city"]["name"]);
				temp = (msj["list"][0]["main"]["temp"]) - 273.15;
				console.log(lat);
			}	
		});
	})
})