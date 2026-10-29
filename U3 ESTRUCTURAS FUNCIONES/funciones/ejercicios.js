//Ejercicio 1. Calcular el precio de un producto 
/*Crea una función por declaración llamada calcularPrecio que reciba dos parámetros: el precio de un
producto y el porcentaje de descuento que se le aplicará.
La función deberá calcular y devolver el precio final del producto después de aplicar el descuento.
El porcentaje de descuento será un parámetro por defecto cuyo valor será 10 .
Realiza dos llamadas a la función: una indicando ambos argumentos y otra indicando únicamente el precio. */

function calcularPrecio(precio, descuento=10){
    return precio-(precio*descuento/100);
}

console.log(calcularPrecio(50, 10));
console.log(calcularPrecio(50));

//Ejercicio 2. Obtener el mayor de tres números 
/*Crea una función por expresión, asignada a una variable llamada obtenerMayor , que reciba tres números
como parámetros y devuelva el mayor de ellos.
La función deberá utilizar estructuras condicionales para determinar el resultado.
Realiza una llamada a la función y muestra el resultado por consola.
Restricción: no se puede utilizar Math.max(). */

const obtenerMayor = function(num1, num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }if (num2>=num1 && num2>=num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(obtenerMayor(1, 4, 2));

//Ejercicio 3. Contar elementos de un array 
/*Crea una función por declaración llamada contarMayores que reciba dos parámetros:
    Un array de números.
    Un número que actuará como límite. 

La función deberá recorrer el array y devolver cuántos elementos son estrictamente mayores que el límite
recibido.
Realiza una llamada utilizando el siguiente array y el límite 10:
    let numeros = [5, 18, 3, 22, 10, 15, 7];    
El resultado deberá ser 3.*/

function contarMayores(numeros, limite){
    let contador = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>limite){
            contador++;
        }
        
    }

    return contador;
}

let numeros = [5, 18, 3, 22, 10, 15, 7];
console.log(contarMayores(numeros, 10));

//Ejercicio 4. Crear un array a partir de parámetros variables
/*Crea una función por declaración llamada filtrarPositivos que pueda recibir una cantidad variable de
números mediante un parámetro rest.
La función deberá crear y devolver un array que contenga únicamente los números mayores que cero.
Realiza una llamada a la función utilizando los siguientes valores:
    filtrarPositivos(-3, 5, 0, 8, -2, 12);
El resultado deberá ser:
    [5, 8, 12]   */

function filtrarPositivos(...numeros){
    let array = [];

    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>0){
            array.push(numeros[i]);
        }
    }

    return array;
}

console.log(filtrarPositivos(-3, 5, 0, 8, -2, 12));

//Ejercicio 5. Aplicar una operación a un array
/*Crea una función por declaración llamada transformarArray que reciba dos parámetros:
    Un array de números.
    Una función que indique qué operación debe realizarse sobre cada número. 

La función transformarArray deberá recorrer el array, aplicar la función recibida a cada elemento y devolver
un nuevo array con los resultados.
Realiza dos llamadas a transformarArray , utilizando el array [2, 4, 6] :
a) En la primera llamada, pasa como argumento una función por expresión anónima que multiplique cada
número por dos.
b) En la segunda llamada, pasa como argumento una función flecha que sume cinco a cada número.
Los resultados esperados son:
    [4, 8, 12]
    [7, 9, 11]   */

function transformarArray(numeros, operacion) {
    let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(operacion(numeros[i]));
    }

    return resultado;
}

let numeros2 = [2, 4, 6];

let resultado1 = transformarArray(numeros2, function(numero) {
    return numero * 2;
});

console.log(resultado1);

let resultado2 = transformarArray(numeros2, numero => numero + 5);

console.log(resultado2);

//Ejercicio 6. Calcular estadísticas de un array
/*Crea una función por declaración llamada estadisticas que reciba un array de números y devuelva un
objeto con las siguientes propiedades:  
    suma : suma de todos los elementos.
    media : media aritmética de los elementos.
    mayor : valor más alto del array.
    menor : valor más bajo del array.
    
La función deberá recorrer el array para realizar los cálculos.

Realiza una llamada con el siguiente array: 
    let notas = [6, 8, 5, 9, 7]; 
El objeto devuelto deberá contener:
    {
        suma: 35,
        media: 7,
        mayor: 9,
        menor: 5
    }  */

// Ejercicio 6. Calcular estadísticas de un array

function estadisticas(numeros) {
    let suma = 0;
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];

        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    let media = suma / numeros.length;

    return {
        suma: suma,
        media: media,
        mayor: mayor,
        menor: menor
    };
}

let notas = [6, 8, 5, 9, 7];

console.log(estadisticas(notas));