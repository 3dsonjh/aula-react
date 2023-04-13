// Comentário de 1 linha

/* Comentário de múltipla linha */

var nome = "Meu nome";  // variável tipo string
var idade = 12;         // variável tipo number integer
var peso = 23.5;        // variável tipo number float
var andando = false;    // variável tipo boolean

// JS == EcmaScript == ES22
// ES > 2015 == ES6 == ES15

const pais = "Brasil"; // const não muda o valor

// let == var (porém só funciona dentro de um mesmo escopo do script)

//estrutura de dados
let alunos = ["Ana", "Paulo", "Pedro", "Julia", 123]; //array

alunos[3]; //Consulta = Julia
alunos[1] = "Paulo"; //Atribuição

alunos.push("Mario"); // Adiciona um item ao array
alunos.shift();       // Remove o primeiro item do array
alunos.pop();         // Remove o último item do array
alunos.splice();      // Remove um item do array

let bolsa1 = [12.3, 33.5, 44.3, '34.7']; //Erro de tipagem
let bolsa2 = Float32Array(12.3, 33.5, 44.3, '34.7'); //Array tipada, tipo específico de valor

//lógica booleana
let idade=12;

/*
    > maior
    < menor
    == igual
    >= maior ou igual
    <= menor ou igual
    != diferente
    ! negação
    && E lógico
    || OU lógico
    === exatamente igual

    0 === false

    null = nulo mais reservado
    undefined = totalmente vazio
    NaN = Not a Number (impossível converter todos as variáveis para números)
*/

if(idade >= 18 && idade < 30){ // false == null
    //true
}else{
    //false
}

let cor = (idade>18)?"Azul":"Vermelho"; // if ternário

// JSON JavaScript Object Notation
let cliente = {
    nome    : "edir",
    idade   : 12,
    peso    : 23.5,
    produtos: ["Tenis","Meias","Bone"],
    endereco: {
        estado  : "PR",
        cidade  : "Curitiba",
        CEP     : "80060-000"
    }
};

cliente.idade; // acesso ao item idade
cliente.produtos[0]; // acesso ao item produtos na posição zero
cliente.endereco; // obj endereco
cliente.endereco.cidade // obj endereco cidade