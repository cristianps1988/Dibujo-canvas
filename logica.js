var cajaTexto = document.getElementById("lineas");
var botonCalcular = document.getElementById("botonEnviar");
botonCalcular.addEventListener("click", comenzarDibujo);

var d = document.getElementById("formas");
var lienzo = d.getContext("2d");

function dibujar(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

dibujar("black", 1,1,1,499);
dibujar("black", 1,499,499,499);
dibujar("black", 499,499,499,1);
dibujar("black", 499,1,1,1);

function comenzarDibujo(){
    var xini, yini, xfin, yfin;
    var numLineas = parseInt(cajaTexto.value);
    var espacioLineas = d.width/numLineas;

    for(var i = 0; i < numLineas; i++){
        yini = espacioLineas * i;
        xfin = espacioLineas * (i + 1);
        dibujar("yellow", 0, yini, xfin, 500);
    }
    for(var i = 0; i < numLineas; i++){
        xini = espacioLineas * i;
        yfin = espacioLineas * (i + 1);
        dibujar("blue", xini, 0, 500, yfin);
    }

    for(var i = 0; i < numLineas; i++){
        yini = 500 - (i * espacioLineas);
        xfin = espacioLineas * (i + 1);
        dibujar("red", 0, yini, xfin, 0);
    }

    for(var i = 0; i < numLineas; i++){
        xini = i * espacioLineas; 
        yfin = 500 - ((i + 1) * espacioLineas);
        dibujar("green", xini, 500, 500, yfin);
    }

    for(var i = 0; i < 15; i++){
        yini = 100 + (i * 10);
        xfin = 250 - (i * 10);
        dibujar("green", 250, yini, xfin, 250);
    }

    for(var i = 0; i < 15; i++){
        yini = 100 + (i * 10);
        xfin = 250 + (i * 10);
       dibujar("yellow", 250, yini, xfin, 250);
    }

    for(var i = 0; i < 15; i++){
        xini = 100 + (i * 10);
        yfin = 250 + (i * 10);
        dibujar("blue", xini, 250, 250, yfin);
    }


    for(var i = 0; i < 15; i++){
        yini = 400 - (i * 10);
        xfin = 250 + (i * 10);
        dibujar("red", 250, yini, xfin, 250);
    } 
}
