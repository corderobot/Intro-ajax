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
var $miniatura = $('#miniatura');
var $principal = $('#principal');
var p = '<p class="texto2 margen">';


var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var apiURL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";

$(document).ready(function(){

	function alertar(num){
		$(".dia_" + num).on('click', function(){
			for (var i = 0; i < 7; i++) {
				$('#grande.dia_' + i).hide();
			};
			$('#grande.dia_' + num).show("slow");
		});
	}

	$("#refresh").on("click", function(){
		var city = $("#city").val();
		var country = $("#country").val();
		
		var hoy = new Date();
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1; //Enero es 0
		var yyyy = hoy.getFullYear();

		if(dd<10) {
		    dd='0'+dd;
		} 
		if(mm<10) {
		    mm='0'+mm;
		} 


		var apiRoute = apiURL + city + "," + country + "&units=metric&cnt=7&appid=" + apiKey;
		
		$.ajax({
			method: 'GET',
			url: apiRoute,
			success: function(msj, estado, xhr){
				console.log(msj);
				city = (msj["city"]["name"]);
				country = (msj["city"]["country"]);
				lat = (msj["city"]["coord"]["lat"]).toFixed(2);
				lon = (msj["city"]["coord"]["lon"]).toFixed(2);
				$("#titulo").html(city + "," + country);
				$("#latitud").html("Latitud: " + lat);
				$("#longitud").html("Longitud: " + lon);
				$miniatura.html('');
				$principal.html('');
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
					$miniatura.append('<div class="dias right"> <div class="mini dia_' + i + '"</div> </div>');
					$principal.append('<div id="grande" class="dia_' + i + '"> </div>');
					$(".dia_" + i).prepend(p + "Nubes: " + nubes + '</p>');
					$(".dia_" + i).prepend(p + "Humedad: " + humidity + '</p>');
					$(".dia_" + i).prepend(p + "Temperatura minima: " + temp_min + 'C</p>');
					$(".dia_" + i).prepend(p + "Temperatura maxima: " + temp_max + 'C</p>');
					$(".dia_" + i).prepend('<img class="margen" src="assets/img/' + img + '.jpg">');
					$(".dia_" + i).prepend(p + "Viento: " + viento + 'm/s</p>');
					$('.dia_' + i).prepend('<p class="texto center  font_type">' + clima + '</p>').css('textTransform', 'capitalize');
					$('.dia_' + i).prepend('<p class="texto center font_type">' + hoy + '</p>');
					alertar(i);
					dd++;
					if (dd == 32) {
						dd = 1;
						mm++;
					};
				}
			}	
		});
	})
})