var clima;
var lat;
var long;

var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var country = "Guatemala";
var city = "Guatemala";
var apiURL = "http://api.openweathermap.org/data/2.5/weather";
var apiRoute = apiURL + "?q=" + country + "," + city + "&appid=" + apiKey;

$(document).ready(function(){
	$("#saludar").on("click", function(){
		$.ajax({
			method: 'GET',
			url: apiRoute,
			success: function(msj, estado, xhr){
				console.log(msj);
				console.log(estado);
				clima = (msj["weather"][0]["description"]);
				lat = (msj["coord"]["lat"]);
				long = (msj["coord"]["lon"]);
				console.log(long);
			}	
		});
	})
});