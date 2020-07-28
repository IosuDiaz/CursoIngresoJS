function mostrar()
{
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){

		case "Invierno":
			if (destino == "Bariloche"){
				alert ("Se viaja")
			}	
			else {
				alert ("No se viaja")
			}
		/*
			switch (destino){

				case "Bariloche":
					alert ("Se viaja");
				break;

				default:
					alert("No se viaja");
				break;
			}*/
		break;

		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				alert ("Se viaja")
			}
			else {
				alert ("No se viaja")
			}
		/*
			switch (destino){
				
				case "Cataratas":
				case "Mar del plata":
					alert ("Se viaja");
				break;

				default:
					alert ("No se viaja");
				break;

			}*/
		break;

		case "Primavera":
			if (destino != "Bariloche"){
				alert ("Se viaja");
			}
			else {
				alert ("No se viaja")
			}
		/*
			switch (destino){
				 
				case "Bariloche":
					 alert ("No se viaja");
				break;

				default:
					alert ("No se viaja");
				break;
			 }*/
		break;

		case "Otoño":
			alert ("Se viaja");
		break;
	}
}
