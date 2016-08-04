

$(document).ready(function(){

	$.ajax({

		url: "index.html",
		success: function(msj, estado, xhr){
			console.log(msj)
			console.log(estado)
		}	
	});

});