function mostrar()
{
	let i=0;
	let suma=0;
	let promedio;

	while (i < 5){

		suma += parseInt(prompt("Ingrese un valor."));
		i++;
	}

	promedio = suma / i;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
	
	/*
	let valor1;
	let valor2;
	let valor4;
	let valor3;
	let valor5;
	let suma;
	let promedio;

	valor1 = parseInt(prompt("Ingrese un valor"));
	valor2 = parseInt(prompt("Ingrese un valor"));
	valor3 = parseInt(prompt("Ingrese un valor"));
	valor4 = parseInt(prompt("Ingrese un valor"));
	valor5 = parseInt(prompt("Ingrese un valor"));

	suma = valor1 + valor2 + valor3 + valor4 + valor5;
	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value= promedio;
	*/

}//FIN DE LA FUNCIÓN