/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;

function comenzar(){

	alert ("Bienvenido al juego ")
    eleccionMaquina = Math.round(Math.random()* 2 + 1);

    if (eleccionMaquina == 1){
        eleccionMaquina = "Piedra";
    }
    else if (eleccionMaquina == 2){
        eleccionMaquina = "Papel";
    }
    else {
        eleccionMaquina = "Tijera";
    }

}//FIN DE LA FUNCIÓN
function piedra(){

    let resultado;
    switch(eleccionMaquina){
        case "Piedra":
            resultado = "Empate";
            break;
        case "Papel":
            resultado = "Perdiste";
            break;
        case "Tijera":
            resultado = "Ganaste";
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);
}//FIN DE LA FUNCIÓN

function papel()
{
    let resultado;
    switch(eleccionMaquina){
        case "Piedra":
            resultado ="Ganaste";
            break;
        case "Papel":
            resultado ="Empate";
            break;
        case "Tijera":
            resultado= "Perdiste";
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);

}//FIN DE LA FUNCIÓN
function tijera()
{
    let resultado;
	switch(eleccionMaquina){
        case "Piedra":
            resultado = "Perdiste";
            break;
        case "Papel":
            resultado = "Ganaste";
            break;
        case "Tijera":
            resultado = "Empataste";
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);
}//FIN DE LA FUNCIÓN