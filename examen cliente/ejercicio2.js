// EJERCICIO 2

// Apartado a
const importes = [12,25,8,40,15,30];
const multiplos = importes.filter(elemento => elemento%5 === 0);

// Apartado b

const descuentos = importes.map(elemento => elemento*0.8);

// Apartado c

const suma = importes.filter(elemento => elemento<20).reduce((acumulador, elemento)=>acumulador+elemento,0);

