// Exercício Musica
let musica = [
    {
        nome: "We Will Rock You",
        autor: "Queen",
        grupo: "Queen",
        ano_lançamento: "1977",
        midia_disponivel: "spotify"
    },
    {
        nome: "Melhor Eu Ir",
        autor: "Pericles",
        grupo: "Pericles",
        ano_lançamento: "2015",
        midia_disponivel: "spotify"
    },
    {
        nome: "Ela Partiu",
        autor: "Tim Maia",
        grupo: "Tim Maia",
        ano_lançamento: "1977",
        midia_disponivel: "spotify"
    }
]

var i;

console.log("Registro inicial: ");
for(i = 0; i < musica.length; i++){
    console.log("nome: ", musica[i].nome);
    console.log("autor: ", musica[i].autor);
    console.log("grupo: ", musica[i].grupo);
    console.log("ano de lançamento: ", musica[i].ano_lançamento);
    console.log("midia disponivel: ", musica[i].midia_disponivel);
}


musica[3] = {
    nome: "Azul da cor do mar",
    autor: "Tim Maia",
    grupo: "Tim Maia",
    ano_lançamento: "1970",
    midia_disponivel: "spotify"
}
musica[4] = {
    nome: "Meu Lugar",
    autor: "Arlindo Cruz",
    grupo: "Arlindo Cruz",
    ano_lançamento: "2014",
    midia_disponivel: "spotify"
}

console.log("\nDuas músicas adicionadas: ");
for(i = 0; i < musica.length; i++){
    console.log("nome: ", musica[i].nome);
    console.log("autor: ", musica[i].autor);
    console.log("grupo: ", musica[i].grupo);
    console.log("ano de lançamento: ", musica[i].ano_lançamento);
    console.log("midia disponivel: ", musica[i].midia_disponivel);
}

musica.splice(3,1);
musica.splice(0,1);

console.log("\nmusicas nos registros 1 e 4 removidas: ");
for(i = 0; i < musica.length; i++){
    console.log("nome: ", musica[i].nome);
    console.log("autor: ", musica[i].autor);
    console.log("grupo: ", musica[i].grupo);
    console.log("ano de lançamento: ", musica[i].ano_lançamento);
    console.log("midia disponivel: ", musica[i].midia_disponivel);
} 
*/
//Exercício Animais (obs: Professor, acho que não entendi esse exercício direito)
let animais = ["Gato","Baleia","Cachorro","Avestruz","Codorna","Ema","Jacaré", "Crocodilo", "Tartaruga", "Antarctossauro", "Titanossauro","Amazonssauro"];

let ultimos = animais.slice(-3);
let primeiros = animais.slice(0,3);

let segundaAultima = animais.slice(1);

let mamifero = animais.slice(0,3);
let ave = animais.slice(3,6);
let reptil = animais.slice(6,9);
let dinossauros = animais.slice(9,12);

let mamiferoVetor = [animais.slice(0,3)];
let aveVetor = [animais.slice(3,6)];
let reptilVetor = [animais.slice(6,9)];
let dinossaurosVetor = [animais.slice(9,12)];


console.log("os ultimos são: ", ultimos);
console.log("os primeiros são: ", primeiros);
console.log("a partir do segundo são: ", segundaAultima);
console.log("os mamiferos são: ", mamifero);
console.log("as aves são: ", ave);
console.log("os répteis são: ", reptil);
console.log("os dinossauros são: ", dinossauros);

console.log("os mamiferos são: ", mamiferoVetor);
console.log("as aves são: ", aveVetor);
console.log("os répteis são: ", reptilVetor);
console.log("os dinossauros são: ", dinossaurosVetor);