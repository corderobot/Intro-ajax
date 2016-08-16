var clima;
var lat;
var lon;
var humidity;
var city;
var temp_max;
var temp_min;
var img;
var nubes;
var viento;
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //Enero es 0
var yyyy = hoy.getFullYear();

var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var apiURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";

$(document).ready(function(){
	for (var i = 0; i<7; i++) {
		$(".dia_" + i).on('click', function(){
			alertar(i);
		});
	}

	function alertar(num){
		console.log(num);
	}

	$("#refresh").on("click", function(){
		var country = $("#city").val();
		country = "guatemala";
		if(dd<10) {
		    dd='0'+dd;
		} 
		if(mm<10) {
		    mm='0'+mm;
		} 

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
					hoy = dd+'/'+mm+'/'+yyyy;
					$(".dia_" + i).html("");
					nubes = (msj["list"][i]["clouds"])
					viento = (msj["list"][i]["speed"])
					img = (msj["list"][i]["weather"][0]["main"]);
					clima = (msj["list"][i]["weather"][0]["description"]);
					humidity = (msj["list"][i]["humidity"]);
					temp_max = (msj["list"][i]["temp"]["max"]).toFixed(2);
					temp_min = (msj["list"][i]["temp"]["min"]).toFixed(2);	
					$(".dia_" + i).prepend('<p class="texto2 margen">' + "Nubes: " + nubes + '</p>');
					$(".dia_" + i).prepend('<p class="texto2 margen">' + "Humedad: " + humidity + '</p>');
					$(".dia_" + i).prepend('<p class="texto2 margen">' + "Temperatura minima: " + temp_min + 'C</p>');
					$(".dia_" + i).prepend('<p class="texto2 margen">' + "Temperatura maxima: " + temp_max + 'C</p>');
					$(".dia_" + i).prepend('<img class="margen" src="assets/img/' + img + '.jpg">');
					$(".dia_" + i).prepend('<p class="texto2 margen">' + "Viento: " + viento + 'm/s</p>');
					$('.dia_' + i).prepend('<p class="texto center">' + clima + '</p>');
					$('.dia_' + i).prepend('<p class="texto center">' + hoy + '</p>');
					dd++;
				}
			}	
		});
	})
})