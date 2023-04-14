// Função -> Subprograma -> Subrotina
// Entrada -> Processamento -> Saída -> (I/0)

// Função Pura

/**
 * Soma dois números e retorna o resultado
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */

function somar (n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

// executando
console.log(somar(2,5));

// Função Anônima
let maior = function(n1,n2){
    return n1 > n2;
};


var n1 = 3;
var n2 = 4;
var n3 = 2;

let multi = function(n1,n2){
    //Função privada
    function somar(n1,n2){
        let resultado = n1 + n2;
        return resultado;
    }
    function exibir(){
        return "abc";
    }
    return n1 * n2 * n3 * n4;
};

multi(2,7);

console.log(n2);

exibir();



function div(n1,n2){
    if(n2 ==0){
        //dispara uma exception
        throw new error("não é possível dividir por zero");;
    }
    return n1/n2;
}

//div(6,2);

//div(4,0);

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {function} operacao 
 * @returns {number}
 */
function calculadora (n1, n2, operacao){
    try{
        return operacao(n1,n2);
    } catch (e){
        alert(e.message);
    }
}

calculadora(1,2,somar);
calculadora(1,2,div);