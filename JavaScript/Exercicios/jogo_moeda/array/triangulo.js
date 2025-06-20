const prompt = require("prompt-sync")();
let arraylado = []

for(let i = 0 ; i<3 ; i++){
    let triangulo = parseInt(prompt("Digite os tamanho do lado do seu triangulo: "));
    
    if(isNaN(triangulo) || triangulo <= 0){
        console.log("Digite um número válido");
        i--;
    } else {
        arraylado.push(triangulo);
    }
}

if( arraylado[0] + arraylado[1] > arraylado[2] && 
    arraylado[1] + arraylado[2] > arraylado[0] && 
    arraylado[0] + arraylado[2] > arraylado[1]){
    console.log("É triangulo.");

    if(arraylado[0] === arraylado[1] && arraylado[0] === arraylado[2]){
        console.log("É equilátero: todos seus lados são iguais.");    
    }
    if(arraylado[0] === arraylado[1] || arraylado[0] === arraylado[2] || arraylado[1] === arraylado[2]){
        console.log("É isósceles: Dois de seus lados são iguais.");
    }
    if(arraylado[0] != arraylado[1] && arraylado[0] != arraylado[2]){
        console.log("É escaleno: todos seus lados são diferentes.");
    }

} else {
    console.log("Os valores inseridos não formam um triângulo");
}