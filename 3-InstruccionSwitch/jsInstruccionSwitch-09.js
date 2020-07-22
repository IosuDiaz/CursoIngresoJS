function mostrar()
{ 
	
	let destino;
	let tarifaMin = 15000; //Preguntar si así se declaran constantes
	let tarifaTotal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){

	case "Invierno":

		switch (destino) {

			case "Bariloche":
				tarifaTotal = tarifaMin * 120 / 100;
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;

			case "Cataratas":
			case "Ushuaia":
				tarifaTotal = tarifaMin * 90 / 100;
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;

			case "Mar del plata":
				tarifaTotal = tarifaMin * 80 / 100;
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;
		}
	break;

	case "Verano":

		switch (destino){

			case "Bariloche":
				tarifaTotal = tarifaMin * 80 / 100;
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;
			
			case "Cataratas":
			case "Ushuaia":
				tarifaTotal= tarifaMin * 110 /100
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;

			case "Mar del plata":
				tarifaTotal = tarifaMin * 120 / 100;
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;
		}
	break;

	default:

		switch (destino){

			case "Ushuaia":
				tarifaTotal= tarifaMin
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;

			default:
				tarifaTotal= tarifaMin * 110 /100
				alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
			break;
		}
	} 
}
	
	
	
	
/* INTENTO FALLIDO PERO SE PUEDEN CONCATENAR LAS VARIABLES QUE ESTAN ADENTRO DEL SWITCH
	switch (estacion + destino){

	case "Invierno" + "Bariloche":
		tarifaTotal = tarifaMin * 120 / 100;
		alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
	break;

	case "Verano" + "Bariloche":
		tarifaTotal = tarifaMin * 80 / 100;
			alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
	break;

	case "Otoño" + "Bariloche":
		tarifaTotal = tarifaMin * 110 / 100;
		alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
	break;
	
	case "Primavera" + "Bariloche":
		tarifaTotal = tarifaMin * 110 / 100;
		alert ("El precio es: $" +  (tarifaTotal).toFixed(2));
	break;
	
}*/
