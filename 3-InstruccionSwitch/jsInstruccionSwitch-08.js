function mostrar()
{

    let destino;

    destino = document.getElementById("txtIdDestino").value;

    if (destino == "Bariloche" || destino == "Ushuaia"){
        alert ("Hace frío");
    }
    else {
        alert ("Hace calor");
    }

    /*
    switch (destino){
        case "Bariloche":
        case "Ushuaia":
            alert ("Hace frío");
        break;

        case "Cataratas":
        case "Mar del plata":
            alert ("Hace calor");
        break;

        
    }

*/

}