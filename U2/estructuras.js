let temperatura = 20;
if(temperatura >=18 && temperatura <= 25){
    console.log("Temperatura adecuada");
}else{
    console.log("No se");
    
}

let velocidad = 75;

if(velocidad<50){
    console.log("baja")
}else if(velocidad >=50 && velocidad <=90){
    console.log("media")

}else{
    console.log("alta")

}

//estructura for

for(let i=10;i>=0;i--){
    console.log(i);
}

//while
let saldo = 100;
while(saldo >10){
    console.log(saldo);
    saldo-=15;
   
}

let intento = 1;
do{
    console.log("intento:" + intento);
    intento++;
}while(intento <=4);


//instruccion break

let contador = 0;
for(let t=2;t<8;t++){
    for(let j = 1; j<=100;j++){
        if(contador == 4) break;
        if(j % t == 0){
            console.log(j);
            contador++;
        }
    }
    console.log(`Fin bucle del numero ${t}`);
    contador = 0;
}
console.log("Fin");

//continue
// utilizando for, incrementado de 1 y continue, mostrar todos los numeros del 1 al 10 excepto los multiplos de 3
for(let q = 1; q<=10; q++){
    if(q % 3 == 0) continue;
    console.log(q);
    
}

outerLoop:
for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
        if(i == 1 && j == 1) break outerLoop;
        console.log(`${i} ${j}`);
    }   
}

console.log("_-----------------------------_")
almacen:
for(i = 0; i<3; i++){
   for(j = 0; j<5; j++){
        if( i == 2 && j == 4) break almacen;
        console.log(`${i} ${j}`);
        
    } 
}
console.log("Producto localizado");


