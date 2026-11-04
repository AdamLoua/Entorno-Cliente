//2.1 Creacion de objetos 

//forma literal

const puesto1 ={
    posicion: 4,
    alumno: "Adam",
    dameDatos: function(){
       return `${this.posicion} => ${this.alumno}`;
    }
};

console.log(puesto1.dameDatos());

//con new Object()
const puesto2 = new Object();
puesto2.posicion = 4;
puesto2.alumno = "Adam";
puesto2.dameDatos = function(){
    return `${this.posicion} => ${this.alumno}`;
}

console.log(puesto2.dameDatos());


//constructor
//...


//Usando clases ES6
console.log("usando clases ES6");

class Clpuesto{
    constructor(pos,usu){
        this.posicion = pos;
        this.alumno = usu;
    };
    dameDatos(){
        return this.posicion + "=>"+ this.alumno;
    }
}

const puesto4 = new Clpuesto("4","Adam");
console.log(puesto4.dameDatos()); 

//usando object.create()
console.log("usando object.create()");

const puesto5 = Object.create(puesto1);
console.log(puesto5.dameDatos());

puesto5.edificio = "B";
puesto5.dameEdif = function(){
    return puesto5.edificio;
};
console.log(puesto5.dameEdif());

//metodo fábrica
console.log("metodo fábrica");

function FunPuesto(pos, usu){
    return{
        posicion: pos,
        alumno: usu,
        dameDatos: function(){
            return `${this.posicion} => ${this.alumno}`;
        }
    }
}

const puesto6 = FunPuesto("4", "Adam");
console.log(puesto6.dameDatos());



