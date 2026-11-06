// EJERCICIO 6

// Apartado a
const expresion = function(edad){
    return edad>=18 ? "Mayor de edad" : "Menor de edad";
}
console.log(expresion(40));

// Apartado b

const flecha = edad => edad>=18 ? "Mayor de edad" : "Menor de edad";

console.log(flecha(19));


// Apartado c
const call = function(edad, llamada){
    llamada(edad);
}

call(13,function(edad){
    if(edad>=18){
        console.log("Mayor de edad");
    }else{
        console.log("Menor de edad");
    }
})

