/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i=0;
	let suma=0;
	let promedio;

	do {
		
		suma += parseInt(prompt("Ingrese un valor."));
		seguir = prompt("Desea seguir");
		i++
		

	}while (seguir == `s`);


	promedio = suma / i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//---------------------------------------------------------------