let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
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
    mostrarResultado()
}//---------------------------------------------------------

function piedra(){

	let resultado;

    switch(eleccionMaquina){
        case "Piedra":
            resultado = "Empate";
            ContadorDeEmpates++
            break;
        case "Papel":
            resultado = "Perdiste";
            ContadorDePerdidas++
            break;
        case "Tijera":
            resultado = "Ganaste";
            ContadorDeGanadas++
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);
    comenzar()

}//----------------------------------------------------
function papel(){

	let resultado;

    switch(eleccionMaquina){
        case "Piedra":
            resultado ="Ganaste";
            ContadorDeGanadas++
            break;
        case "Papel":
            resultado ="Empate";
            ContadorDeEmpates++
            break;
        case "Tijera":
            resultado= "Perdiste";
            ContadorDePerdidas++
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);
    comenzar()

}//-----------------------------------------------------
function tijera(){
	
	let resultado;

	switch(eleccionMaquina){
        case "Piedra":
            resultado = "Perdiste";
            ContadorDePerdidas++
            break;
        case "Papel":
            resultado = "Ganaste";
            ContadorDeGanadas++
            break;
        case "Tijera":
            resultado = "Empataste";
            ContadorDeEmpates++
            break;
    }
    alert (eleccionMaquina + " -----> " + resultado);
    comenzar()
}//------------------------------------------------------

function mostrarResultado()
{
document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
document.getElementById("txtIdPerdidas").value = ContadorDePerdidas
document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates
}