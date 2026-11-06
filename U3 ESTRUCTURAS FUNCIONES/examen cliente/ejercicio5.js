// EJERCICIO 5
function obtenerMayor(array){
    let numeroMayor = array[0];
    if(array.length == 0){
        numeroMayor=null;
    }else{
        for (let i = 1; i < array.length; i++) {
            if(numeroMayor<array[i]){
                numeroMayor=array[i];
            }
        }
    }
    return numeroMayor;
}
console.log(obtenerMayor([20,40,1,6,14]));

console.log(obtenerMayor([]));