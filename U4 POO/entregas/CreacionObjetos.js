/* Ejercicio 1. Creación mediante notación literal {}
Crea un objeto llamado libro mediante notación literal que tenga las siguientes propiedades:
titulo : "El camino".
autor : "Miguel Delibes".
paginas : 224.
prestado : false . 

Incluye un método mostrarInformacion() que muestre en la consola el título, el autor y el número de
páginas del libro. Después, invoca el método y muestra el valor de la propiedad prestado .

solucion:
const libro = {
    titulo : "El camino",
    autor : "Miguel Delibes",
    paginas : 224,
    prestado : false,
    mostrarInformacion: function(){
        console.log("Titulo: "+this.titulo+", autor: "+this.autor+", páginas: "+this.paginas);
    }
}

libro.mostrarInformacion();
console.log(libro.prestado);*/

/* Ejercicio 2. Creación mediante new Object()
Crea un objeto llamado ordenador utilizando new Object() . Añade posteriormente estas propiedades:

marca : "HP".
modelo : "EliteDesk".
memoriaRAM : 16.
encendido : false .

Añade un método encender() que cambie encendido a true y muestre un mensaje en la consola. Ejecuta el
método y muestra el estado final de la propiedad encendido .


solucion:
const ordenador = new Object();
ordenador.marca = "HP";
ordenador.modelo = "EliteDesk";
ordenador.memoriaRAM = 16;
ordenador.encendido = false;

ordenador.encender = function(){
    this.encendido = true;
    console.log("Ordenador encendido");
}

ordenador.encender();
console.log(ordenador.encendido);
*/

/* Ejercicio 3. Creación mediante una función constructora
Define una función constructora llamada Alumno que reciba como parámetros el nombre, la edad y el ciclo
formativo. Debe asignar estos datos como propiedades del objeto e incluir un método presentarse() que
muestre la información del alumno.
Utiliza el operador new para crear dos objetos con datos diferentes. Invoca presentarse() en ambos
objetos.


solucion:
function Alumno(nombre, edad, ciclo){
    this.nombre = nombre,
    this.edad = edad,
    this.ciclo = ciclo
    this.presentarse = function(){
        console.log("Me llamo "+ this.nombre+", tengo "+ this.edad+" y estoy cursando "+ this.ciclo);
    };
}

const adam = new Alumno("Adam", 21, "DAW");
const pepe = new Alumno("Pepe", 19, "DAM");

adam.presentarse();
pepe.presentarse();
*/

/* Ejercicio 4. Creación mediante class (ES6)
Define una clase llamada Producto con un constructor que reciba el nombre, el precio y la cantidad
disponible. Añade un método mostrarProducto() que muestre esos tres datos y otro método
calcularValorAlmacen() que devuelva el resultado de multiplicar el precio por la cantidad.
Crea dos objetos mediante new , utilizando datos diferentes. Muestra la información y el valor de almacén de
cada producto.

solucion:
class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }

    mostrarProducto(){
       console.log("Nombre: "+ this.nombre+", precio: "+ this.precio+", cantidad:"+ this.cantidad);
    }

    calcularValorAlmacen(){
        return this.precio*this.cantidad;
    }
}

const raton = new Producto("Ratón", 12.99, 5);
const teclado = new Producto("Teclado", 20.99, 3);

raton.mostrarProducto();
console.log(raton.calcularValorAlmacen());

teclado.mostrarProducto();
console.log(teclado.calcularValorAlmacen());
*/

/* Ejercicio 5. Creación mediante Object.create()
Crea un objeto llamado vehiculo con una propiedad tipo , cuyo valor sea "vehículo", y un método
describir() que muestre en la consola el valor de tipo .
Crea un nuevo objeto llamado coche mediante Object.create(vehiculo) . Asigna a coche el valor "coche"
para su propiedad tipo y añade una propiedad marca con el valor "Seat".
Invoca describir() desde coche y muestra su marca. Comprueba mediante Object.getPrototypeOf()
que el prototipo de coche es vehiculo .


solucion:
const vehiculo = {
    tipo: "vehículo",
    describir: function(){
        console.log(this.tipo);
    }
}

const coche = Object.create(vehiculo);
coche.tipo = "coche";
coche.marca = "Seat";
coche.describir()
console.log(coche.marca);
console.log(Object.getPrototypeOf(coche));
*/

/* Ejercicio 6. Creación mediante una función fábrica
Define una función fábrica llamada crearPelicula que reciba el título, el director y la duración en minutos.
La función debe devolver un objeto con esas propiedades y un método mostrarFicha() que muestre sus
datos.
Llama dos veces a la función para crear dos objetos con información diferente, sin utilizar el operador new .
Invoca mostrarFicha() en ambos objetos.


solucion:
function crearPelicula(titulo, director, duración) {
    return{
        titulo: titulo,
        director: director,
        duración: duración,
        mostrarFicha: function() {
            console.log("Titulo: " +this.titulo+", Director: "+this.director+", Duracion: "+this.duración);
        }
    };
}

const peli1 = crearPelicula("peli1", "director1", "duracion1");
const peli2 = crearPelicula("peli2", "director2", "duracion2");

peli1.mostrarFicha();
peli2.mostrarFicha();
*/

/* Ejercicio 7. Comparación de las seis formas de creación
Se necesita representar un videojuego mediante un objeto que tenga:
titulo (cadena de texto).
genero (cadena de texto).
horasJugadas (número).
Un método mostrarDatos() que muestre el título, el género y las horas jugadas.

Crea un videojuego de ejemplo de cada una de las seis formas estudiadas:
1. Notación literal {} .
2. new Object() .
3. Función constructora.
4. Clase con class .
5. Object.create() a partir de un objeto que actúe como prototipo.
6. Función fábrica.

En todos los casos, utiliza el mismo título, género y número de horas, e invoca mostrarDatos() para
comprobar que el resultado es equivalente. Usa nombres de variables diferentes para cada objeto.
Nota para la forma con Object.create() : Define primero un objeto prototipo que contenga el método
mostrarDatos() y crea a partir de él el objeto videojuego, al que asignarás sus propiedades.

solucion:
// 1. Notación literal {}
const juegoLiteral = {
    titulo: "The Legend of Zelda",
    genero: "Aventura",
    horasJugadas: 120,
    mostrarDatos: function(){
        console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
    }
};
 
juegoLiteral.mostrarDatos();
 
 
// 2. new Object()
const juegoObject = new Object();
juegoObject.titulo = "The Legend of Zelda";
juegoObject.genero = "Aventura";
juegoObject.horasJugadas = 120;
juegoObject.mostrarDatos = function(){
    console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
};
 
juegoObject.mostrarDatos();
 
 
// 3. Función constructora
function Videojuego(titulo, genero, horasJugadas){
    this.titulo = titulo;
    this.genero = genero;
    this.horasJugadas = horasJugadas;
    this.mostrarDatos = function(){
        console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
    };
}
 
const juegoConstructor = new Videojuego("The Legend of Zelda", "Aventura", 120);
 
juegoConstructor.mostrarDatos();
 
 
// 4. Clase con class (ES6)
class VideojuegoClase {
    constructor(titulo, genero, horasJugadas){
        this.titulo = titulo;
        this.genero = genero;
        this.horasJugadas = horasJugadas;
    }
 
    mostrarDatos(){
        console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
    }
}
 
const juegoClase = new VideojuegoClase("The Legend of Zelda", "Aventura", 120);
 
juegoClase.mostrarDatos();
 
 
// 5. Object.create() a partir de un prototipo
const prototipoVideojuego = {
    mostrarDatos: function(){
        console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
    }
};
 
const juegoCreate = Object.create(prototipoVideojuego);
juegoCreate.titulo = "The Legend of Zelda";
juegoCreate.genero = "Aventura";
juegoCreate.horasJugadas = 120;
 
juegoCreate.mostrarDatos();
 
 
// 6. Función fábrica
function crearVideojuego(titulo, genero, horasJugadas){
    return {
        titulo: titulo,
        genero: genero,
        horasJugadas: horasJugadas,
        mostrarDatos: function(){
            console.log("Título: "+this.titulo+", género: "+this.genero+", horas jugadas: "+this.horasJugadas);
        }
    };
}
 
const juegoFabrica = crearVideojuego("The Legend of Zelda", "Aventura", 120);
 
juegoFabrica.mostrarDatos();

*/


