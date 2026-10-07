console.log("hola mundo");

{
    let numero = 10;
    console.log(numero);
    //comentario de linea

    /* varias
    lineas */

    //variables var o let diferencias entre var y let : Fuera de todo son globales. Dentro de una funcion las dos son locales de la función. Dentro de un bloque que no son función var --> global  let --> bloque 
    /*   
    let a = 10; // caja exterior

    {
        let b = 20; // caja interior

        console.log(a); // ✅
        console.log(b); // ✅
    }

    console.log(a); // ✅
    console.log(b); // X 
    */

    var saludo = "buenos dias";
    let edad = 20;

    //constantes
    const anio = 2026;

    /*uso antes de declaración
        console.log(numero); // undefined la variable existe antes de que empiece a ejecutarlo el codigo
        var numero = 10;

        console.log(numero); // Error
        let numero = 10;
    */

    //redeclaracion
    var nombre = "Ana";
    console.log(nombre);
    var nombre = "Luis"; // Correcto
    console.log(nombre);

    /*let nombre = "Ana";
    let nombre = "Luis"; // Error 
    let nombre = "Ana";
    nombre = "Luis"; // Correcto */

    



}
