/*1. Añadir elementos a un array

    Ejercicio 1.1 Dado el siguiente array:
    const colores = ["rojo", "verde", "azul"];
    Realiza las siguientes operaciones:
    1. Añade "amarillo" al final utilizando push() .
    2. Añade "negro" al principio utilizando unshift() .
    3. Muestra el array completo.
    4. Muestra el número de elementos del array.

    solucion:
    const colores = ["rojo", "verde", "azul"];
    colores.push("amarillo");
    colores.unshift("negro");

    for (let i = 0; i < colores.length; i++) {
        console.log(colores[i]);
    }
    console.log(colores.length);

*/

/*1. Ejercicio 1.2 Dado el siguiente array:
    const numeros = [10, 20, 30];
    Realiza las siguientes operaciones:
    1. Añade el valor 40 al final utilizando la propiedad length .
    2. Añade el valor 60 en la posición 5.
    3. Muestra el array completo.
    4. Muestra el contenido de la posición 4.

    solucion:
    const numeros = [10, 20, 30];
    numeros[numeros.length] = 40;
    numeros[4] = 60;

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    console.log(numeros[4]);
*/

/*2. Eliminar elementos de un array

    Ejercicio 2.1
    Dado el siguiente array:
    const animales = ["perro", "gato", "conejo", "loro", "pez"];
    Realiza las siguientes operaciones:
    1. Elimina el último elemento utilizando pop() .
    2. Elimina el primer elemento utilizando shift() .
    3. Muestra el array resultante.


    solucion:
    const animales = ["perro", "gato", "conejo", "loro", "pez"];
    animales.pop();
    animales.shift();

    for (let i = 0; i < animales.length; i++) {
        console.log(animales[i]);
    }
   
*/

/*2. 
    Ejercicio 2.2
    Dado el siguiente array:
    const numeros = [5, 10, 15, 20, 25, 30];
    Realiza las siguientes operaciones:
    1. Elimina el elemento 15 utilizando splice() .
    2. Elimina después dos elementos consecutivos empezando en la posición 2.
    3. Muestra el array resultante después de cada operación.


    solucion:
    const numeros = [5, 10, 15, 20, 25, 30];
    numeros.splice(2,1); //(posicion, numero de elemntos a eliminar)
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    numeros.splice(2,2);
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    
*/

/*2. 
    Ejercicio 2.3
    Dado el siguiente array:
    const valores = [1, 2, 3, 4, 5, 6, 7];
    Haz que el array conserve únicamente sus cuatro primeros elementos modificando la propiedad length .

    solucion:
    const valores = [1, 2, 3, 4, 5, 6, 7];
    valores.length = 4;
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
    
*/

/*3. Copiar arrays
    Ejercicio 3.1
    Dado el siguiente array:
    const original = [10, 20, 30, 40, 50];
    Realiza las siguientes operaciones:
    1. Crea una copia completa del array utilizando slice() .
    2. Modifica el primer elemento de la copia.
    3. Muestra el array original y la copia para comprobar si el original ha cambiado.

    solucion:
    const original = [10, 20, 30, 40, 50];
    const copia = original.slice();
    copia[0]=99;
    console.log(original);
    console.log(copia);

*/

/*3. Copiar arrays
    Ejercicio 3.2
    Dado el siguiente array:
    const datos = [2, 4, 6, 8, 10, 12, 14];
    Utiliza slice() para crear:
    1. Un nuevo array que contenga los elementos desde el índice 2 hasta el índice 4, ambos incluidos.
    2. Otro array que contenga los elementos desde el índice 4 hasta el final.

    solucion:
    const datos = [2, 4, 6, 8, 10, 12, 14];
    const copia = datos.slice(2,5);
    const copia2 = datos.slice(4)
    console.log(copia);
    console.log(copia2);

*/

/*3. Copiar arrays
    Ejercicio 3.3
    Dado el siguiente array:
    const array1 = [1, 2, 3];
    Realiza la siguiente asignación:
    const array2 = array1;
    Después:
    1. Cambia el primer elemento de array2 por 99 .
    2. Muestra array1 .
    3. Explica qué ha ocurrido

    solucion:
    const array1 = [1, 2, 3];
    const array2 = array1;
    array2[0] = 99;
    console.log(array1);

    la variable array2 almacena la direccion de array1, no el objeto.

*/

/*4.  Buscar elementos en un array
    Ejercicio 4.1
    Dado el siguiente array:
    const frutas = ["pera", "manzana", "uva", "manzana", "kiwi"];
    Utilizando indexOf() :
    1. Busca la primera aparición de "manzana" .
    2. Busca "kiwi" .
    3. Busca "naranja" .
    4. Busca "manzana" comenzando a partir del índice 2.

    solucion:
    const frutas = ["pera", "manzana", "uva", "manzana", "kiwi"];
    console.log(frutas.indexOf("manzana"));
    console.log(frutas.indexOf("kiwi"));
    console.log(frutas.indexOf("naranja"));
    console.log(frutas.indexOf("manzana",2));
*/

/*4.  Buscar elementos en un array
    Ejercicio 4.2
    Utilizando el mismo array del ejercicio anterior y el método lastIndexOf() :
    1. Busca la última aparición de "manzana" .
    2. Busca la última aparición de "pera" .
    3. Busca "naranja" .


    solucion:
    const frutas = ["pera", "manzana", "uva", "manzana", "kiwi"];
    console.log(frutas.lastIndexOf("manzana"));
    console.log(frutas.lastIndexOf("pera"));
    console.log(frutas.lastIndexOf("naranja"));
*/

/*4.  Buscar elementos en un array
    Ejercicio 4.3
    Dado el siguiente array:
    const valores = [10, "10", 20, "20"];
    Realiza las siguientes búsquedas:
    1. Busca el número 10 .
    2. Busca la cadena "10" .
    3. Busca el número 20 .
    4. Busca la cadena "20" .



    solucion:
    const valores = [10, "10", 20, "20"];
    console.log(valores.indexOf(10));
    console.log(valores.indexOf("10"));
    console.log(valores.indexOf(20));
    console.log(valores.indexOf("20"));

*/

/*5.  Ordenación de elementos de un array
    Ejercicio 5.1
    Dado el siguiente array:
    const letras = ["d", "a", "c", "b"];
    1. Ordena el array utilizando sort() .
    2. Muestra el array resultante.

    solucion:
     const letras = ["d", "a", "c", "b"];
    letras.sort();
    console.log(letras);
    
*/
  
/*5.  Ordenación de elementos de un array
    Ejercicio 5.2
    Dado el siguiente array:
    const numeros = [3, 20, 100, 5, 12];
    1. Ordena el array utilizando sort() sin pasarle ningún argumento.
    2. Muestra el resultado.
    3. Explica por qué el orden obtenido puede no coincidir con el orden numérico esperado.

    solucion:
     const numeros = [3, 20, 100, 5, 12];
    numeros.sort();
    console.log(numeros);
    
    convierte los elementos a cadenas de texto y los compara según sus unidades de código UTF-16,
    por lo que la ordenación puede no coincidir con la esperada
*/

/*5.  Ordenación de elementos de un array
    Ejercicio 5.3
    Dado el siguiente array:
    const valores = [1, 2, 3, 4, 5];
    1. Invierte el orden de los elementos utilizando reverse() .
    2. Muestra el array resultante.
   

    solucion:
    const valores = [1, 2, 3, 4, 5];
    valores.reverse();
    console.log(valores);

*/

/*5.  Ordenación de elementos de un array
    Ejercicio 5.4
    Dado el siguiente array:
    const palabras = ["pera", "Manzana", "uva", "melón"];
    1. Ordena el array utilizando sort() .
    2. Muestra el resultado.
    3. Observa cómo afecta el uso de mayúsculas y minúsculas al orden obtenido.

    solucion:
    const palabras = ["pera", "Manzana", "uva", "melón"];
    palabras.sort();
    console.log(palabras);
    
*/

















