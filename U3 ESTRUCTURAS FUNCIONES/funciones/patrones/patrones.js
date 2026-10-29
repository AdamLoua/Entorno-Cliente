//ejemplo 1
(function saludete(){
    console.log("Buenos dias, don miguel")
}
)();

//ejemplo 2
(function saludete(nombre){
    console.log(`Buenos dias, don ${nombre}`)
}
)("Marcelino");

/*Escribe una funcion autoejecutable que reciba dos parametros : nombre persona y una ciudad,
y devuelve la cadena <nombre> vive en <ciudad>

guardar la cadena en una constante
mostrar cadena por consola*/

const respuesta =(function ejercicio(nombre, ciudad){
    return `${nombre} vive en ${ciudad}`;
}
)("Marcelino", "New York");

console.log(respuesta);

//Ejercicio 5

/*Implementa un modulo llamado moduloLAmpara mediante una IIFE. El modulo debe disponer de una variable privada encendida,
inicialmente false, y de tres funciones internas:
    encender():cambia el estado a true
    apagar(): cambia el estado a false
    consultarEstado(): devuelve el valor de encendida
    
Devuelve un objeto literal que haga publicas las tres funciones. A continuacion , consulta el estado, enciende la lampara,
vuelve a consultar el estado y apagala. Muestra tambien el resultado de acceder a moduloLampara.encendida.    */