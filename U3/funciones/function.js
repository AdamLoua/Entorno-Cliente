function saludo(nombre){
    console.log(`Buenos dias, ${nombre}`);
}

saludo("pepe");

/*function doble(numero){
    return numero*2;
}
*/

console.log(doble(2));
console.log(saludo("paco"));
let se = saludo("paco"); //undefined no tiene return

console.log(se); //undefined


//ámbitos de variables 

function suma(numero){
    let a = 10;
    var b = 10
    return a+b+numero;
}

//console.log(a);

//parametros por defecto
function doble(n=5){
    return n*2;
}
console.log(doble(2));
console.log(doble());
