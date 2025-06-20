const prompt = require("prompt-sync")();

let vetCoordenadas = [];
let vetAbscissas = [];
let coordena, abscissas, i, diferencaX, diferencaY ;
let soma, resultado;

for(i = 0 ; i < 2 ; i++){
    coordena = Number(prompt("Qual a coordenada de seu ponto " + i + ": "));
    abscissas = Number(prompt("Qual a abscissa de seu ponto " + i +": "));

    vetCoordenadas.push(coordena);
    vetAbscissas.push(abscissas);
}

function calculaDistancia (){
    diferencaX = vetCoordenadas[1] - vetCoordenadas[0] ;
    diferencaY = vetAbscissas[1] - vetAbscissas[0] ;

    coordena = Math.pow(diferencaX, 2);
    abscissas = Math.pow(diferencaY, 2);

    soma = coordena + abscissas;
    resultado = Math.sqrt(soma)

    console.log("A distancia entre seus pontos é: ", resultado.toFixed(2));
}

calculaDistancia();