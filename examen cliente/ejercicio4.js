// EJERCICIO 4
function calcularPrecioEntrada(edad, precio=12){
    let precioFinal =0;
    if(edad<12){
       precioFinal = precio*0.5;
    }
    if(edad>=65){
       precioFinal = precio*0.7;
    }
    if(edad >=12 && edad <65){
        precioFinal = precio;
    }

    return precioFinal;
    
}

console.log(calcularPrecioEntrada(15,40));
console.log(calcularPrecioEntrada(15));
