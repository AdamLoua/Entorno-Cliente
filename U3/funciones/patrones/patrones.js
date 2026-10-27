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