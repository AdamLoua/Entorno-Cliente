//9. Conjuntos (Set)

/*Ejercicio 9.1. Inscripciones a un taller
Se dispone de la siguiente lista de inscripciones, en la que algunos nombres aparecen repetidos:
    const inscripciones = ["Lucía", "Mario", "Ana", "Lucía", "Diego", "Ana", "Sara"];

1. Crea un conjunto participantes a partir del array, evitando inscripciones duplicadas.
2. Muestra el número de participantes diferentes.
3. Comprueba si "Diego" está inscrito y muestra el resultado.
4. Añade a "Pablo" y vuelve a intentar añadir a "Mario" .
5. Recorre el conjunto con for...of y muestra cada participante.
6. Muestra el número final de participantes y explica por qué el segundo intento de inscripción
no aumenta ese número.

solucion:
const inscripciones = ["Lucía", "Mario", "Ana", "Lucía", "Diego", "Ana", "Sara"];

const nuevoArray = new Set(inscripciones);
console.log(nuevoArray.size);
console.log(nuevoArray.has("Diego"));
nuevoArray.add("Pablo");
nuevoArray.add("Mario");

for (const element of nuevoArray) {
    console.log(element);
}

console.log(nuevoArray.size); //6 elementos unicos

*/

/*Ejercicio 9.2. Control de acceso a una sala
Parte del siguiente conjunto:
    const autorizados = new Set(["A102", "B205", "C310", "D415"]);

1. Comprueba si los códigos "B205" y "X999" tienen autorización. Muestra un mensaje distinto
en cada caso.
2. Retira la autorización del código "C310" .
3. Intenta retirar también la autorización de "X999" y muestra el valor devuelto por delete() .
4. Añade los códigos "E520" y "F625" .
5. Muestra todos los códigos autorizados y su cantidad total.

solucion:
const autorizados = new Set(["A102", "B205", "C310", "D415"]);

console.log(`tiene B205 acceso? : ${autorizados.has("B205")}`);
console.log(`tiene X999 acceso? : ${autorizados.has("X999")}`);
autorizados.delete("C310");
console.log(autorizados.delete("X999"));
autorizados.add("E520");
autorizados.add("F625");

for (const element of autorizados) {
    console.log(element);
}
console.log(autorizados.size);

*/

/*Ejercicio 9.3. Equipos pendientes de revisión
En un aula hay equipos pendientes de revisión:
    const pendientes = new Set(["PC01", "PC03", "PC05", "PC07", "PC09"]);
    const revisados = ["PC03", "PC07", "PC11"];
1. Recorre el array revisados y elimina del conjunto pendientes los equipos que figuren en él.
2. Comprueba si "PC05" sigue pendiente.
3. Añade "PC12" y "PC14" como nuevas incidencias.
4. Muestra, mediante for...of , los equipos que todavía deben revisarse.
5. Muestra cuántos equipos quedan pendientes.


solucion:
const pendientes = new Set(["PC01", "PC03", "PC05", "PC07", "PC09"]);
const revisados = ["PC03", "PC07", "PC11"];

for (const element of revisados) {
    if(pendientes.has(element)){
        pendientes.delete(element);
    }
}

console.log(`sigue PC05 pendiente? : ${pendientes.has("PC05")}`);
pendientes.add("PC12");
pendientes.add("PC14");

for (element of pendientes) {
    console.log(element);
}

console.log(pendientes.size);


*/

/*Ejercicio 9.4. Selección de identificadores
Dado el siguiente conjunto de identificadores numéricos:
    const identificadores = new Set([12, 5, 18, 3, 27, 9, 21, 6]);
1. Recorre el conjunto con for...of e identifica los valores menores que 10 .
2. Elimina del conjunto esos valores utilizando delete() .
3. Muestra los identificadores que permanecen en el conjunto.
4. Muestra el tamaño final del conjunto.
5. Comprueba si el valor 18 permanece almacenado.



solucion:
const identificadores = new Set([12, 5, 18, 3, 27, 9, 21, 6]);

for (const element of identificadores) {
   if(element < 10){
        identificadores.delete(element);
   }
}

for (element of identificadores) {
   console.log(element);
}
console.log(identificadores.size);
console.log(identificadores.has(18));

*/

//10. Mapas (Map)

/*Ejercicio 10.1. Carta de una cafetería
Crea un mapa carta con estos productos y precios: café (1,50 €), té (1,80 €), tostada (2,20 €) y zumo
(2,70 €).
    1. Muestra el precio del té utilizando get() .
    2. Comprueba si hay bocadillos en la carta.
    3. Añade "bocadillo" con un precio de 3.50 .
    4. Actualiza el precio del café a 1.70 .
    5. Elimina el producto "tostada" .
    6. Recorre el mapa con for...of y muestra cada producto junto a su precio.
    7. Muestra cuántos productos quedan en la carta.



solucion:
const carta = new Map([["café", 1.5],
    ["té", 1.8],
    ["tostada", 2.2],
    ["zumo", 2.7]
]);

console.log(carta.get("té"));
console.log(carta.has("bocadillo"));
carta.set("bocadillo", 3.5);
carta.set("café", 1.7);
carta.delete("tostada");

for (const [c,v] of carta) {
    console.log(`producto: ${c} --> precio: ${v}`);
}

console.log(carta.size);


*/

/*Ejercicio 10.2. Existencias de material
Se dispone del siguiente mapa, cuyas claves son productos y cuyos valores representan unidades
disponibles:
    const almacen = new Map([
        ["teclados", 12],
        ["ratones", 8],
        ["monitores", 5],
        ["cables", 20]
    ]);

1. Muestra las existencias actuales de "ratones" .
2. Se reciben 6 ratones nuevos. Actualiza su cantidad utilizando get() y set() .
3. Se entregan 3 monitores. Actualiza las existencias correspondientes.
4. Comprueba si el almacén contiene el producto "impresoras" .
5. Añade "impresoras" con 2 unidades.
6. Recorre el mapa y muestra un mensaje con el nombre y las unidades de cada producto.
7. Muestra el número de productos diferentes almacenados

solucion:
const almacen = new Map([
    ["teclados", 12],
    ["ratones", 8],
    ["monitores", 5],
    ["cables", 20]
]);

console.log(almacen.get("ratones"));

almacen.set("ratones", almacen.get("ratones")+6);

almacen.set("monitores", almacen.get("monitores")-3);

almacen.has("impresoras");
almacen.set("impresoras", 2);

for (const [c,v] of almacen) {
    console.log(`nombre: ${c} --> unidades: ${v}`);
}

let totalUnidades =0;
for (const [c,v] of almacen) {
    totalUnidades+=v;
}
console.log(totalUnidades);


*/

/*Ejercicio 10.3. Resultados de un concurso
Parte de las siguientes puntuaciones:
const puntuaciones = new Map([
    ["Ana", 18],
    ["Hugo", 12],
    ["Irene", 24],
    ["Leo", 16]
]);


1. Añade 5 puntos a "Hugo" utilizando su puntuación actual.
2. Resta 3 puntos a "Irene" .
3. Añade una nueva participante, "Nora" , con 20 puntos.
4. Recorre el mapa y muestra únicamente los participantes que tengan 20 puntos o más.
5. Muestra cuántos participantes hay en total.
6. Comprueba si "Leo" está registrado y elimina su puntuación.

solucion:
const puntuaciones = new Map([
    ["Ana", 18],
    ["Hugo", 12],
    ["Irene", 24],
    ["Leo", 16]
]);

puntuaciones.set("Hugo", puntuaciones.get("Hugo")+5);
puntuaciones.set("Irene", puntuaciones.get("Irene")-3);
puntuaciones.set("Nora", 20);

for (const [c,v] of puntuaciones) {
    if(v>=20){
        console.log(`nombre: ${c}, puntuación: ${v}`);
    }
}

console.log(puntuaciones.size);
console.log(puntuaciones.has("Leo"));
puntuaciones.delete("Leo");

*/

/*Ejercicio 10.4. Reposición de productos
El siguiente mapa registra las existencias de varios productos:
const existencias = new Map([
    ["folios", 6],
    ["bolígrafos", 14],
    ["carpetas", 3],
    ["grapadoras", 9],
    ["rotuladores", 2]
]);

1. Recorre el mapa con for...of y muestra los nombres de los productos que tengan menos
de 10 unidades.
2. Durante ese mismo recorrido, añade 5 unidades a cada producto que tenga menos de 10,
utilizando set() .
3. Vuelve a recorrer el mapa y muestra todas las existencias actualizadas.
4. Muestra cuántos productos diferentes contiene el mapa.
5. Calcula y muestra el número total de unidades disponibles sumando las cantidades
mediante un bucle for...of (sin utilizar reduce() ).


solucion:
const existencias = new Map([
    ["folios", 6],
    ["bolígrafos", 14],
    ["carpetas", 3],
    ["grapadoras", 9],
    ["rotuladores", 2]
]);

for (const [c,v] of existencias) {
    if(v<10){
       console.log(c); 
       existencias.set(c,v+5);
    }
    
}

for (const [c,v] of existencias) {
   console.log(`producto: ${c} --> unidades: ${v}`);
}

console.log(existencias.size);

let totalUnidades =0;
for (const [c,v] of existencias) {
    totalUnidades+=v;
}
console.log(totalUnidades);

*/

