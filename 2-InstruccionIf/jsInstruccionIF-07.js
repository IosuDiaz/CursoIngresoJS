function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;


	if (edad < 18 && estado != "soltero")
	alert ("Es muy pequeño para no ser soltero.");

}