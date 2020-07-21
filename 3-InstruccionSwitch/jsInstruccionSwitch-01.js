function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
			alert ("Que comiences bien el año.");
			break;
		case "Marzo":
			alert("A clases.");
			break;
		case "Julio":
			alert ("Se vienen la vacaciones");
			break;
		case "Diciembre":
			alert ("Felices fiestas!");
			break;
		}

}


	/*
	if(mes == "Enero"){
		alert ("Que comiences bien el año.");
	}
	else if (mes == "Marzo"){
		alert("A clases.");
	}
	else if (mes == "Julio"){
		alert ("Se vienen la vacaciones");
	}
	else if (mes == "Diciembre"){
		alert ("Felices fiestas!");
	} */
