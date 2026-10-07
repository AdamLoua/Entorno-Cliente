console.log(Number("123")); //123
console.log(Number("123abc")); //nan

console.log(parseInt("127abc")); //127
console.log(parseInt("abc127")); //nan

console.log(parseFloat("12.7abc")); //12.7
console.log(parseFloat("abc12.7")); //nan

console.log(String(5)); //5
console.log(Boolean(1)); //true
console.log(Boolean("Holiiii")); //true

if (0) {
 console.log('Esto no se ejecuta porque 0 es falsy.');
}
if ('hello') {
 console.log('Esto se ejecuta porque una cadena no vacía es truthy.');
}

console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false









