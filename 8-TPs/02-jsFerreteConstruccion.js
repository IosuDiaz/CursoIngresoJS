/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   let largo;
    let ancho;
    let resultado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    resultado = (largo * 2) + (ancho * 2);

    alert("Se necesitan " + (resultado * 3) + " metros de alambre." );
}
function Circulo () 
{
    let perimetro;
    let radio;

    radio = document.getElementById("txtIdRadio").value;

    perimetro = 2 * 3.14 * radio; 
    
    alert("Se necesitan " + (perimetro * 3).toFixed(2)  + " metros de alambre" );


}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let bolsasCemento;
    let bolsasCal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    bolsasCemento = area * 2
    bolsasCal = area * 3

    alert("Se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal +" bolsas de cal.")
    





}