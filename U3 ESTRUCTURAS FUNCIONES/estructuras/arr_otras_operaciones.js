
const arr1 = [4,5,6,7,9,0,4];
console.log(arr1);

const arr_aux = arr1;
arr_aux[2] = "toledo";
console.log("array auxiliar modificado");
console.log(arr_aux);
console.log("vemos que ha pasado con arr1");
console.log(arr1); 

arr1[2]=6; //restauramos el arr1
console.log("-------------------------------------");

//copia de arrays con slice()
//es una copia superficial

const arr2 = arr1.slice();
console.log(arr2);

console.log("Comprobamos si slice funciona");

arr2[4] = "panceta";
console.log(arr2); //ha cambiado

console.log("Comprobamos si arr1 ha cambiado a panceta");
console.log(arr1); //no ha cambiado

//creamos un array con un subconjunto de otro array
const arr3 = arr1.slice(2,5); //el primero se incluye, el ultimo elemento no se incluye
console.log(arr3);

//creamos un array con un subconjunto de otro array
const arr4 = arr1.slice(3); //a partir de una posicion (incluida)
console.log(arr4);

//indexof
//encontrar el elemnto 7 del array 1
console.log(arr1.indexOf(7));

//encontrar que pasa si no esta el valor que buscamos
console.log(arr1.indexOf(24)); //-1

//encontrar el elemnto 4 que esta DUPLICADO
console.log(arr1.indexOf(4)); //el primero

//encontrar el elemnto 4 que esta DUPLICADO
console.log(arr1.lastIndexOf(4)); //el ultimo


let orden = [3,5,7,10,22];
//falta





