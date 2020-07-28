/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos = 0;
let flag = 0;

function comenzar()
{ //Genero numero random
  numeroSecreto = Math.round(Math.random()*99 + 1);
  //alert (numeroSecreto)
  alert ("Listo, ya pensé un numero. Trata de adivinarlo.");
  flag = 1;

  document.getElementById("txtIdIntentos").value = contadorIntentos;
  document.getElementById("txtIdNumero").focus();
  contadorIntentos = 0
  
  
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
      //alert ("Usted ganó en tan solo " + contadorIntentos + `. Presione el botón "Comenzar" para volver a empezar`);
      flag = 0
	  switch(contadorIntentos){
	  		case 1:
			  alert ("Usted es psiquico");
		 	 break;
		  
		 	 case 2:
			  alert ("Excelente percepcion");
		 	 break;
	  
		 	 case 3:
			  alert ("Esto es suerte");
		  	break;
	  
		 	 case 4:
			  alert ("Excelente tecnica");
		 	 break;
	  
		  	case 5:
			  alert ("Usted esta en la media");
		 	 break;
	  
		  	case 6:
		  	case 7:
		  	case 8:
		  	case 9:
		  	case 10:
			  alert ("Falta tecnica");
		  	break;
	  
		  	default:
			  alert ("Afortunado en el amor");
	  }
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











