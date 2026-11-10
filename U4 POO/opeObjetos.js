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

