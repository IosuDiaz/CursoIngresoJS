function mostrar()
{ 
	
	let destino;
	let aumento=0;
	let descuento=0;
	const PRECIO = 15000;
	let precioFinal;

	//Relevamiento de datos de entrada
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	//---------------------------------------------------------

	//Calculo de porcentade de aumento o descuento
	switch (estacion){

	case "Invierno":

		switch (destino) {

			case "Bariloche":
				aumento = 20;
			break;

			case "Cataratas":
			case "Ushuaia":
				descuento = 10;
			break;

			case "Mar del plata":
				descuento = 20;
			break;
		}
	break;

	case "Verano":

		switch (destino){

			case "Bariloche":
				descuento = 20;
			break;
			
			case "Cataratas":
			case "Ushuaia":
				aumento = 10;
			break;

			case "Mar del plata":
				aumento = 20;
			break;
		}
	break;

	default:

		switch (destino){
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				aumento = 10;
			break;
		}
	} //---------------------------------------------------------------------
	
	//Calculo de precio final de acuerdo a si corresponde aumento o descuento
	if ( aumento != 0){
		precioFinal = PRECIO + PRECIO * aumento / 100;
	}
	else if (descuento != 0){
		precioFinal = PRECIO - PRECIO * descuento / 100;
	}
	else {
		precioFinal = PRECIO;
	}//------------------------------------------------------------------------

	//Mostramos la informacion
	alert ("Precio final $ " + precioFinal.toFixed(2));
	//------------------------------------------------------------------------
}//Fin funcion
	
	
	
	
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
