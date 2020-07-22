function mostrar()
{
	let destino;
	let tarifaMin = 15000; //Preguntar si así se declaran constantes
	let tarifaTotal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){

		case "Invierno":

			switch (destino){

				case "Bariloche":
					alert ("Se viaja");
				break;

				default:
					alert("No se viaja");
				break;
			}
		break;

		case "Verano":

			switch (destino){

				case "Cataratas":
				case "Mar del plata":
					alert ("Se viaja");
				break;

				default:
					alert ("No se viaja");
				break;

			}
		break;

		case "Primavera":

			 switch (destino){
				 
				case "Bariloche":
					 alert ("No se viaja");
				break;

				default:
					alert ("No se viaja");
				break;
			 }
		break;

		default:
			alert ("Se viaja");
		break;
	}
}
