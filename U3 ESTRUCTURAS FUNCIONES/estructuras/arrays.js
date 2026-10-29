//Declaracion de arrays

//Mediante corchetes
const miprimerarray = [1,2,3,4,5];
console.table(miprimerarray);


//Mediante constructor array()

//Mediante constructor array()
const arr1 = new Array(5);
console.log(arr1);

const miarray = new Array("Hola","adios");
console.log(miarray);

let frutas = new Array("manzana", "pera", "platano");
console.log(frutas);

//bidimensionales

const bi =[
    [1,2,3,4],  //valor [0][4] empty devuelve undefined
    [5,6,7,8,9]
];
console.table(bi);

//propiedad lenght
console.log(bi[0].length);
console.log(bi[1].length);

console.log(bi[1][4]);


const ar1=[1,2,3,4,5];
console.log(ar1[1]);

/*
//recorrer arrays
for(let i = 0; i < ar1<ar1.length;i++) console.log(ar1[i]);


let valor;
for(valor of ar1) console.log(valor);

//for .. in
let ind;
for(ind in ar1) console.log(ind + "->" + ar1[i]);
*/

console.log("----------------------------------------------------------");

const lenguajes = ["JavaScript", "Java", "Phyton", "PHP", "C#"];

console.log(lenguajes[0]);
console.log(lenguajes[2]);
console.log(lenguajes[lenguajes.length-1]);
console.log(lenguajes.length-1);
console.log("----------------------------------------------------------");

const temperaturas = [18,21,24,20,17];
console.log(temperaturas[0]);
console.log(temperaturas[2]);
temperaturas[2] = 25;

for(let i=0;i<temperaturas.length;i++){
    console.log(temperaturas[i]);
}
console.log(temperaturas[10]);

console.log("----------------------------------------------------------");


const colores=["rojo","verde", "azul", "amarillo"];
for(i=0;i<colores.length;i++){
    console.log("Indice"+ i+" : "+ colores[i]);
}
console.log("----------------------------------------------------------");


const ciudades = ["Madrid", "Sevilla", "Valencia", "Bilbao"];
let val;
for(val of ciudades) console.log(val);

console.log("----------------------------------------------------------");

const notas=[7,3,5,9,4,8,2];
for(i=0;i<notas.length;i++){
    if(notas[i]>=5){
        console.log(notas[i]);
    }
}
console.log("--array con while------------------------------");

i=0;
while(i<notas.length){
    console.log(notas[i]);
    i++;
}

console.log("--array con  do while------------------------------");

i=0;
if(notas.length>0){
    do{
        console.log(notas[i]);
        i++;
    }while(i<notas.length)
}
console.log("----------------------------------------------------------");

const precios =[10,25,8,12,15];
let suma=0;
for(i=0;i<precios.length;i++){
   suma +=precios[i];
}
console.log(suma);

