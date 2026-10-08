//operaciones agregadas
const numeros = [9,2,8,4,5,6,0,10];
console.log(numeros);

//crear un nuevo array a partir de numeros
//cuyos elementos sean mayor de 5
console.log("filter");
const arr_aux = numeros.filter(elem => elem>5);
console.log(arr_aux);

//crear un nuevo array a partir de otro con
//los elementos cuya primera letra sea una M

const ciudades =["Madrid","Sevilla","Malaga","Cordoba","Murcia"];
const con_M = ciudades.filter(ciu => ciu[0] == "M");
console.log(con_M);

//metodo map
/*Dado el siguiente array, añadirle la 
letra s deñ plural */
console.log("Ejemplo de map")
const palabras =["casa","piedra","palo","hormiga"];
const plur = palabras.map(pal => pal +"s");
console.log(plur);

/*Dado un array de numero, crear otra que tenga solo numeros par
para conseguirlo se debe hacer lo siguiente:
- si el numero es impar, se multiplica por 2
- si el numero es par, se deja como esta
*/

console.log("array de pares");
const lista_num = [2,4,7,8,3,2,1,0,8];
console.log(lista_num);
const pares = lista_num.map(numero => numero % 2 == 0 ? numero : numero * 2 );
console.log(pares);

//reduce
//ejemplo de los apuntes. sumar los elemntos de un array
const numeros_a_sumar = [1,4,4,7,7,8,9,6,5];
let resul = numeros_a_sumar.reduce((acu, elem) => acu + elem,0);
console.log(`el resultado de sumar los elemntos del array es ${resul}`);

//que devuelva la suma de los numeros pares del array

let resulpar = numeros_a_sumar.reduce((acu, elem) => elem%2 === 0 ? acu + elem : acu + 0,0);
console.log(`el resultado de sumar los elemntos pares del array es ${resulpar}`);