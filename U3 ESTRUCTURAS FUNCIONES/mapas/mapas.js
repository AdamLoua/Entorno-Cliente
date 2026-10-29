/*crear un mapa sobre ordenadores 
-cantidad de ram   
-modelo cpu
-tamaño disco 

estos datos se añaden al mapa cuando se declara
*/

const equipo = [
    ["cpu","Intel i7 12 generación"],
    ["ram","32GB"],
    ["disco","1TB"]
];

console.log(equipo);

const mapEquipo = new Map(equipo);
console.log(mapEquipo);

console.log("existe la clave cpu?");
console.log(mapEquipo.has("cpu"));

console.log("eliminar par cpu");
mapEquipo.delete("cpu");
console.log("existe la clave cpu?");
console.log(mapEquipo.has("cpu"));

for (let [clave, valor] of mapEquipo) {
    console.log(`${clave} --> ${valor}`);
}
