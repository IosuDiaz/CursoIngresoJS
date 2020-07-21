function mostrar()
{
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero" :
		case "Marzo" :
		case "Abril":
		case "Mayo":
		case "Junio" :
		case "Julio" :
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 o mas dias");
		break;
		//Se puede simplificar con "default"

		case "Febrero" :
			alert ("Este mes no tiene mas de 29 dias");
		break;
	}

}

// Version alternativa simplificada
/*
	let mes;

	mes = document.getElementById("txtIdMes").value;

	if (mes == "Febrero"){
		alert ("Este mes no tiene mas de 29 dias");
	}
	else {
		alert ("Este mes tiene 30 o mas dias ")
	}
	*/	