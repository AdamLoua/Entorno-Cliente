// EJERCICIO 1

// Apartado a.1
const notas = [7,5,8,5,9,6];

// Apartado a.2
for (let i = 0; i < notas.length; i++) {
    console.log(`posicion ${i} valor ${notas[i]}`);
    
}

// Apartado a.3
const eliminado = notas.shift();

// Apartado a.4
const aparicion = notas.lastIndexOf(5);

// Apartado a.5
notas.push(3);
console.log(notas);


// Apartado b
const mapa = new Map([
    ["Ana", notas[4]],
    ["Luis", notas[1]],
    ["Marta", notas[3]],
    
]);

for (const [c,v] of mapa) {
    console.log(`Nombre: ${c} Nota: ${v}`);
}