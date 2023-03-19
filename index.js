
"use strict";

/* TODO */


var nota = prompt("Subir una nota o presionar 'c' o enter para continuar");
const notas = [];


while(nota!="" && nota!= "c"){
    if(nota<=0 || nota>10 ){
        alert("Nota invalida, por favor intentelo nuevamente");
        nota = prompt("Subir una nota o 'c' para continuar");
    }else{
        notas.push(nota);
        nota = prompt("Subir una nota o 'c' para continuar");
    }
}

var desaprobados = 0;
var aprobados = 0;
var promocionados = 0;

for (var i = 0; i < notas.length; i++) {

    if(notas[i] < 4){
        desaprobados++;
    }
    else{
        aprobados++;
        if(notas[i] >= 7){
            promocionados++;
        }
    }
}

alert(
`Promedio de desaprobados: ${(desaprobados*100/notas.length).toFixed(2)}%.
Promedio de aprobados: ${(aprobados*100/notas.length).toFixed(2)}%.
Promedio de promocionados: ${(promocionados*100/notas.length).toFixed(2)}%.
La minima nota ingresada fue: ${Math.min(...notas)}.
La maxima nota ingresada fue: ${Math.max(...notas)}.`
);