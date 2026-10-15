//6. Filtrado de elementos: filter()

/*Ejercicio 6.1. Temperaturas bajo cero
Dado el siguiente array:
    const temperaturas = [3, -2, 7, -5, 0, 9, -1];
Realiza las siguientes operaciones:
    1. Utiliza filter() para obtener un nuevo array con las temperaturas inferiores a 0.
    2. Muestra el nuevo array por consola.
    3. Muestra el array original para comprobar que no ha sido modificado.    

    solucion:
    const temperaturas = [3, -2, 7, -5, 0, 9, -1];
    nuevoArray = temperaturas.filter(numero => numero < 0);
    console.log(nuevoArray);
    console.log(temperaturas);
*/

/*Ejercicio 6.2. Clasificar precios
Dado el siguiente array:
    const precios = [12, 45, 8, 75, 30, 120, 19];
Realiza las siguientes operaciones:
    1. Utiliza filter() para obtener un array con los precios superiores a 30.
    2. Utiliza nuevamente filter() para obtener otro array con los precios menores o iguales
    que 30.
    3. Muestra ambos arrays por consola.

    solucion:
    const precios = [12, 45, 8, 75, 30, 120, 19];
    nuevoArray = precios.filter(numero => numero > 30);
    nuevoArray2 = precios.filter(numero => numero <= 30);
    console.log(nuevoArray);
    console.log(nuevoArray2);
    
*/

/*Ejercicio 6.2. Clasificar precios
Dado el siguiente array:
    const precios = [12, 45, 8, 75, 30, 120, 19];
Realiza las siguientes operaciones:
    1. Utiliza filter() para obtener un array con los precios superiores a 30.
    2. Utiliza nuevamente filter() para obtener otro array con los precios menores o iguales
    que 30.
    3. Muestra ambos arrays por consola.

    solucion:
    const precios = [12, 45, 8, 75, 30, 120, 19];
    nuevoArray = precios.filter(numero => numero > 30);
    nuevoArray2 = precios.filter(numero => numero <= 30);
    console.log(nuevoArray);
    console.log(nuevoArray2);
    
*/

//7. Transformación de elementos: map()

/*Ejercicio 7.1. Aplicar un descuento
Dado el siguiente array:
    const precios = [20, 40, 60, 80];
Realiza las siguientes operaciones: 
    1. Utiliza map() para crear un nuevo array con los precios tras aplicar un descuento del 25 % a
    cada uno.
    2. Muestra el nuevo array por consola.
    3. Muestra el array original para comprobar que no ha sido modificado.

    solucion:
    const precios = [20, 40, 60, 80];
    nuevoArray = precios.map(numero => numero * 0.75);
    console.log(nuevoArray);
    console.log(precios);

*/

/*Ejercicio 7.2. Convertir medidas
Dado el siguiente array con longitudes expresadas en metros:
    const metros = [1.5, 3, 0.75, 10];
Realiza las siguientes operaciones: 
    1. Utiliza map() para crear otro array con las longitudes expresadas en centímetros.
    2. Muestra el nuevo array por consola.

    solucion:
    const metros = [1.5, 3, 0.75, 10];
    nuevoArray = metros.map(numero => numero * 100);
    console.log(nuevoArray);
    

*/

//8. Reducción de elementos: reduce()

/*Ejercicio 8.1. Calcular el producto de varios números
Dado el siguiente array:
    const factores = [2, 3, 4, 5];
Realiza las siguientes operaciones: 
    1. Utiliza reduce() para calcular el producto de todos los elementos, utilizando 1 como valor
    inicial del acumulador.
    2. Muestra el resultado por consola.

    solucion:
    const factores = [2, 3, 4, 5];
    const nuevoArray = factores.reduce((acumulador, numero) => acumulador * numero, 1); 
    console.log(nuevoArray);
*/

/*Ejercicio 8.2. Obtener el valor máximo
Dado el siguiente array:
    const puntuaciones = [18, 42, 27, 65, 39];
Realiza las siguientes operaciones: 
    1. Utiliza reduce() para obtener la puntuación más alta. En cada paso, compara el
    acumulador con el elemento actual y conserva el mayor de los dos.
    2. Utiliza 0 como valor inicial del acumulador.
    3. Muestra el resultado por consola.
Nota: No utilices Math.max() ni estructuras repetitivas ( for , while , etc.). El objetivo es practicar
reduce().

    solucion:
    const puntuaciones = [18, 42, 27, 65, 39];
    const nuevoArray = puntuaciones.reduce((acumulador, numero) =>  acumulador >= numero ? acumulador : numero , 0); 
    console.log(nuevoArray);
*/



















