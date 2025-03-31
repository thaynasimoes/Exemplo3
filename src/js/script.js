var nome = "fiap";
let idade = 19;
const sobrenome = "fiapinho";

console.log(nome);
console.log(idade);
console.log(sobrenome);

let nome2 = null;
console.log(nome2);

//tipos de variaveis

let exemplo1 = 10;
console.log(typeof exemplo1);

let exemplo2 = "10";
console.log(typeof exemplo2);

let exemplo3 = true;
console.log(typeof exemplo3);

let exemplo4 = {};
console.log(typeof exemplo4);

let exemplo5 = [];
console.log(typeof exemplo5);

//Conversoes

numFloat = 123.456;
console.log(parseInt( numFloat));

let numString = "123.456";
console.log(parseFloat(numString));

//Metodos

//retorna o numero de caracteres
let frase = "O mundo da tecnologia";
console.log(frase.length);

//retorna a posicao de um trecho do texto
let texto = "A programacão indomavel e sustentavel";
console.log(texto.indexOf("ão"));

//retorna o trecho de texto que esta entre as posicoes
let info = "Processamento de ponta";
console.log(info.slice(16,25));