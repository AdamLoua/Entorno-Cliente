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

*/

const autorizados = new Set(["A102", "B205", "C310", "D415"]);

