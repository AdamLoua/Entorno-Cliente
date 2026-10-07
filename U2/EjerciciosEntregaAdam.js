/*Ejercicio 1. Precio de una entrada 

Crea un script que utilice una variable numérica llamada edad.

El precio normal de una entrada es de 12 €.
    Si la persona tiene menos de 12 años, el precio será de 6 €.
    Si tiene 65 años o más, el precio será de 8 €.
    En cualquier otro caso, el precio será de 12 €.

Muestra en la consola el precio que debe pagar

solucion:

let edad = 34;
let precio = 12;

if(edad<12){
    precio = 6;
}
if(edad>=65){
    precio = 8;
}
console.log(precio);
*/




/*Ejercicio 2. Acceso a una zona restringida

let edad = 22;
let tieneAcreditacion = true;

Una persona podrá acceder únicamente si tiene 18 años o más y dispone de acreditación.

Muestra en la consola:
    Acceso permitido
    Acceso denegado

según corresponda    

solucion:
let edad = 22;
let tieneAcreditacion = true;

if(edad>=18 && tieneAcreditacion){
    console.log("Acceso permitido");
}else{
    console.log("Acceso denegado");
}
*/

/*Ejercicio 3. Tipo de usuario

Crea un script que utilice una variable llamada tipoUsuario .

Los valores posibles serán:

    "A" → Administrador
    "E" → Editor
    "L" → Lector

Para cualquier otro valor deberá mostrarse:
Tipo de usuario desconocido
Utiliza una estructura switch.   

solucion:
let tipoUsuario = "A";
switch(tipoUsuario){
    case "A":
        console.log("Administrador");
        break;
    case "E":
        console.log("Editor");
        break;
    case "L":
        console.log("Lector");
        break; 
    default: 
        console.log("Tipo de usuario desconocido");       
}
*/
 
/*Ejercicio 4. Potencias de 2

Crea un script que muestre en la consola las siguientes potencias de 2:

2
4
8
16
32
64

Utiliza un bucle for.

solucion:

for(let i=1;i<7;i++){
    console.log(2**i);
}
*/

/*Ejercicio 5. Suma acumulada

Crea un script que calcule la suma de los números del 1 al 10.
Utiliza un bucle for y una variable llamada suma .
Al terminar el bucle, muestra en la consola:

Suma total: 55

solucion:
let suma =0;
for(let i=1;i<=10;i++){
    suma = suma+i;
    
}
console.log(suma);


*/

/*Ejercicio 6. Reducción de una deuda

Crea un script que utilice una variable:

let deuda = 90;

Mientras la deuda sea mayor que 0, resta 15 € en cada iteración y muestra el nuevo valor.
Utiliza un bucle while .
Cuando la deuda llegue a 0, muestra:

Deuda pagada

solucion:
let deuda = 90;

while(deuda > 0){
    deuda -=15;
    console.log(deuda);
}
if(deuda == 0){
    console.log("Deuda pagada");
    
}
*/


/*Ejercicio 7. Nivel de carga

Crea un script que utilice:

let carga = 10;

En cada iteración, aumenta la carga en 15 unidades y muestra su valor.
Utiliza un bucle do...while .
El proceso deberá repetirse mientras la carga sea inferior a 70.

solucion:
let carga = 10;
do {
    carga += 15;
    console.log(carga);
} while (carga < 70);
*/

/*Ejercicio 8. Primer número divisible entre 6 y 7

Crea un script que recorra los números comprendidos entre 1 y 100.
Cuando encuentre el primer número que sea divisible entre 6 y entre 7 al mismo tiempo:

    1. muéstralo en la consola;
    2. finaliza el bucle con break.

solucion:
for(let i=1; i<=100; i++){
    if(i%6 == 0 && i%7 == 0){
        console.log(i);
        break;
    }
}    

*/

/*Ejercicio 9. Excluir números terminados en 5

Crea un script que recorra los números del 1 al 30.
No deberán mostrarse los números que terminen en 5.
Utiliza la instrucción continue .

solucion:
for (let i = 1; i <= 30; i++) {
    if (i % 10 === 5) {
        continue;
    }
    console.log(i);
}

*/

/*Ejercicio 10. Asientos de un cine

Un cine tiene 4 filas y 6 asientos por fila.
Crea dos bucles for anidados que muestren todas las posiciones con este formato:

Fila 1 - Asiento 1
Fila 1 - Asiento 2
...

solucion:
for(let i=1; i<=4;i++){
   for(let j=1; j<=6;j++){
        console.log("fila "+i+" - "+ "asiento "+j);
    } 
}

*/

/*Ejercicio 11. Finalizar únicamente el bucle interior

Un programa recorre 3 categorías y, dentro de cada categoría, 6 elementos.
Crea dos bucles for anidados.
Cuando el elemento llegue al valor 4, deberá finalizar únicamente el bucle interior mediante break .
Muestra en la consola las combinaciones que lleguen a ejecutarse con el formato:

Categoría 1 - Elemento 1

solucion:
for(let i=1; i<=3;i++){
   for(let j=1; j<=6;j++){
        if(j == 4) break;
        console.log("categoria "+i+" - "+ "elemento "+j);
    } 
}

*/

/*Ejercicio 12. Búsqueda etiquetada

Una biblioteca dispone de 5 secciones y cada sección contiene 8 estantes.
Crea dos bucles for anidados para recorrer las secciones y los estantes.
Etiqueta el bucle exterior.
Cuando se llegue a la sección 4 y al estante 3:

    1. muestra Libro localizado ;
    2. finaliza los dos bucles utilizando break y la etiqueta

solucion:
seccion:
for(let i=1; i<=5;i++){
   for(let j=1; j<=8;j++){
       if(i == 4 && j == 3){
            console.log("libro localizado");
            break seccion;
       }
    } 
}

*/

/*Ejercicio 13. Control de velocidad

Crea un script que utilice una variable numérica llamada velocidad .
El programa deberá mostrar:

    Velocidad insuficiente si es inferior a 30.
    Velocidad correcta si está entre 30 y 100, ambos incluidos.
    Exceso de velocidad si es superior a 100.

solucion:
let velocidad = 30;

if(velocidad <30){
    console.log("velocidad insuficiente");
}
if(velocidad >=30 && velocidad <=100){
    console.log("velocidad correcta");
}
if(velocidad >100){
    console.log("exceso de velocidad");
}

*/

/*Ejercicio 14. Cuenta de tres en tres

Crea un script que muestre los números:

3
6
9
12
15
18
21
24
27
30

Utiliza un bucle for.

solucion:
for(let i=3;i<=30;i+=3){
    console.log(i);
}

*/

/*Ejercicio 15. Selección de idioma

Crea un script que utilice una variable llamada idioma .
Los valores posibles serán:

    "es" → Español
    "en" → Inglés
    "fr" → Francés

Para cualquier otro valor deberá mostrarse:
Idioma no disponible
Utiliza una estructura switch.

solucion:
let idioma = "es";
switch(idioma){
    case "es":
        console.log("Español");
        break;
    case "en":
        console.log("Inglés");
        break;
    case "fr":
        console.log("Francés");
        break; 
    default: 
        console.log("Idioma no disponible");       
}

*/


