/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempC;
    let tempF;

    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempC = ((tempF - 32) * 5/9).toFixed(1);

    alert(tempF + " grados Fahrenheit son " + tempC + " grados Celsius.");
}

function CentigradosFahrenheit () 
{
    let tempC;
    let tempF;

    tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempF = ((tempC * 9/5) + 32 );

    alert(tempC + " grados Celsius son " + tempF.toFixed(1) + " grados Celsius.");
}
