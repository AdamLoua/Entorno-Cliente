//recorrer objetos

//crear el objeto persona
//propiedad : nombre
//metodo : dameNombre

const persona = {
    nombre : "yo",
    dameNombre: function(){
        return this.nombre;
    }
}

const profesor = Object.create(persona);
profesor.tutoria = "1SMRA";

/*Crear el objeto padre receta que contenga
propiedad: tipoplato y que contenga getter/setter con sintaxis de clase ES6

Crea objeto hijo que herede de objeto receta y que contenga propiedad de tipo array con los ingredientes
Metodo que recorre por consola el array
con Object.create*/



// Objeto padre
class Receta {
    constructor(tp) {
        this.tipo = tp;
    }

    // Getter
    getTipo() {
        return this.tipo;
    }

    // Setter
    setTipo(tp) {
        this.tipo = tp;
    }
}

const receta = new Receta("Segundo Plato");

//herencia de un prototipo personalizado
const tortillaPatatas = Object.create(receta);
tortillaPatatas.ingredientes = ["huevos", "patatas","Aceite de oliva", "sal"];
tortillaPatatas.dameIngredientes = function(){
    for(let ingr of this.ingredientes) console.log(ingr);
};
tortillaPatatas.dameIngredientes();
console.log(tortillaPatatas.getTipo());

//object.prototype --> prototipo por defecto

/*const pepe = Object.create(persona) persona es un objeto*/

//object.prototype
const ord1 = {
    cpu: "i5 9550",
    ram: "DDR4 8GB",
    getDatos: function(){
        return "CPU: "+this.cpu+" , RAM: "+this.ram;
    }
}

console.log(ord1.getDatos());

console.log(ord1.hasOwnProperty("cpu"));

console.log(ord1.getPrototypeOf(ord1) === Object.prototype);

/*Herencia con prototipo personalizado
crea el objeto usu1 que contenga las propiedades
nombre
fecha nacimiento
y el metodo getDatPers que debe devolverlos

El objeto usu1 debe estar basado en otro objeto llamado cliente
ademas, usu1 es un cliente VIP, por lo que tendria una propiedad descuento con valor 15
Crea el usuario USU2 basado en cliente. Este usuario no es VIP
propiedades nombre fechanacimiento
metodo getDatos*/

const cliente = {
    nombre: "cliente",
    fechaNacimiento: "01-01-1999",
    getDatos: function(){
        return this.nombre+" "+this.fechaNacimiento;
    }
}

const usu1 = Object.create(cliente);
usu1.descuento = 15;

const usu2 = Object.create(cliente);

