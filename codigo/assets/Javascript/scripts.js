var clima;
var lat;
var lon;
var humidity;
var city;
var temp_max;
var temp_min;
var img;
var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var apiURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";

$(document).ready(function(){
	$("#refresh").on("click", function(){
		var country = $("#city").val();
		var city = country;
		var apiRoute = apiURL + country + "&units=metric&cnt=7&appid=" + apiKey;
		$.ajax({
			method: 'GET',
			url: apiRoute,
			success: function(msj, estado, xhr){
				console.log(msj);
				console.log(estado);
				city = (msj["city"]["name"]);
				lat = (msj["city"]["coord"]["lat"]).toFixed(2);
				lon = (msj["city"]["coord"]["lon"]).toFixed(2);
				$("#titulo").html(city);
				$("#latitud").html("Latitud: " + lat);
				$("#longitud").html("Longitud: " + lon);
				for (var i = 0; i < 7; i++) {
					$(".dia_" + i).html("");
					img = (msj["list"][i]["weather"][0]["main"]);
					clima = (msj["list"][i]["weather"][0]["description"]);
					humidity = (msj["list"][i]["humidity"]);
					temp_max = (msj["list"][i]["temp"]["max"]).toFixed(2);
					temp_min = (msj["list"][i]["temp"]["min"]).toFixed(2);	
					$(".dia_" + i).prepend('<p class="texto2">' + "Humedad: " + humidity + '</p>');
					$(".dia_" + i).prepend('<p class="texto2">' + "Temperatura minima: " + temp_min + "C" + '</p>');
					$(".dia_" + i).prepend('<p class="texto2">' + "Temperatura maxima: " + temp_max + "C" + '</p>');
					$(".dia_" + i).prepend('<img src="assets/img/' + img + '.jpg">');
					$('.dia_' + i).prepend('<p class="texto center">' + clima + '</p>');
				}
			}	
		});
	})
})