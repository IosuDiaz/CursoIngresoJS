/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos;
let flag = 0;

function comenzar()
{ //Genero numero random
  numeroSecreto = Math.round(Math.random()*99 + 1);
  contadorIntentos= 0;
  alert ("Listo, ya pensé un numero. Trata de adivinarlo.")
  flag = 1;

  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  
  
}

function verificar()
{
  let numero;


	if (flag == 0){
    alert (`Debes presionar primero el boton "Comernzar"`);
  }
	else {
    
    numero = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos ++
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    
    
    if (numero == numeroSecreto){
      alert ("Usted ganó en tan solo " + contadorIntentos + `. Presione el botón "Comenzar" para volver a empezar`);
      flag = 0
    }
    else if (numero > numeroSecreto){
      alert("Se pasó...")
      
    }
    else{
      alert ("Le faltó")
    }
    
    document.getElementById("txtIdNumero").value = ""
    document.getElementById("txtIdNumero").focus();
  }
}
// Cuando inicializamos una variable en la que vamos a guardar una cuenta, 
// tenemos que inicializarla con el valor que queremos que arranque

//contadorIntentos = contadorIntentos + 1
//contadorIntentos += 1