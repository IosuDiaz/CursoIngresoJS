function mostrar()
{
	let nota;

	nota = Math.round(Math.random() * (10 - 1) + 1);

	if(nota > 9 ){
		alert ("La nota es: " + nota + ". Excelente!");
	}
	else if (nota >= 4) {
		alert ("La nota es: " + nota + ". Aprobó");
	}
	else {
		alert ("La nota es: " + nota + ". Vamos, la proxima se puede.");
	}

}