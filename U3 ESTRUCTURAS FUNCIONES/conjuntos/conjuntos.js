/*define un array con 5 verduras y una repetida
crear conjunto con el array de verduras
añadir verdura no repetida
añadir verdura repetida
comprobar si existe una verdura 
mostrar numero de elementos
 */

const verduras =["lechuga","cebolla","tomate","cebolla","pimiento"];
const conjVerd = new Set(verduras);
console.log(conjVerd);

console.log("añado patatas");
conjVerd.add("patatas");
console.log(conjVerd);

console.log("añado lechuga");
conjVerd.add("lechuga");
console.log(conjVerd);

console.log("existe cebolla");
console.log(conjVerd.has("cebolla"));

console.log(`hay ${conjVerd.size} elementos`);

console.log("elimino lechuga");
conjVerd.delete("lechuga");
console.log(conjVerd);
console.log(`hay ${conjVerd.size} elementos despues de eliminar lechuga`);

for (const verdu of conjVerd) {
    console.log(verdu);
}

conjVerd.clear();
console.log(`hay ${conjVerd.size} elementos despues de clear`);



