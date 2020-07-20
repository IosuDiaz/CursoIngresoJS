function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13){

		alert ("Usted es niño.");

	}

	else if (edad < 18) {

			alert ("Usted es adolescente.");

		}
		else {

			alert ("Usted es adulto.");

		}


}