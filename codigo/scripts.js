$lbl_mensaje = $("#mensaje");
$lbl_unir = $("unir");

var apiKey = "6efc7e595cf4af1d33d6d33aac14616a";
var country = "Guatemala";
var city = "Guatemala";
var apiURL = "http://api.openweathermap.org/data/2.5/weather";
var apiRoute = apiURL + "?q=" + country + "," + city + "&appid=" + apiKey;

$(document).ready(function(){
	$("#saludar").on("click", function(){
		$.ajax({
			method: 'GET',
			url: "index.html",
			success: function(msj, estado, xhr){
				console.log(msj);
				console.log(estado);
				var algo = $lbl_mensaje.get(0);
				console.log(algo);
			}	
		});
	})
});