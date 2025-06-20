const prompt = require("prompt-sync")();

let numMoedas, numTentativas;
let i, j;


function numJogadas(){
    console.log("========== Simulador de Moedas ==========");
    console.log("");
    numMoedas = Number(prompt("Quantas moedas serão jogadas?: "));
    numTentativas = Number(prompt("Quantas tentativas serão testadas?: "))

}


function geraMoedas(){
    const vetMoeda = [];

    for(i=0 ; i<numMoedas ; i++){
        vetMoeda.push(Math.random()< 0.5 ? 'cara' : 'coroa');
        }

    return vetMoeda;    
}


