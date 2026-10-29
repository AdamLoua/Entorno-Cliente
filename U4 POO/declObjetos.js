//2.1 Creacion de objetos 

//forma literal

// const puesto ={
//     posicion: 4,
//     alumno: "Adam",
//     dameDatos: function(){
//         return `${this.posicion} => ${this.alumno}`;
//     }
// };

// console.log(puesto.dameDatos());

//con new Object()
const puesto = new Object();
puesto.posicion = 4;
puesto.alumno = "Adam";
puesto.dameDatos = function(){
    return `${this.posicion} => ${this.alumno}`;
}

console.log(puesto.dameDatos());



