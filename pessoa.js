// pessoa.js

class Pessoa
{
    nome;
    telefone;
    endereco;
    constructor(){
        console.log("buaaa"); //herança ruim
    }
}

//herança
class PessoaFisica extends Pessoa
{
    cpf;
    constructor(){
        //sobrecarga -> alterando comportamento da herança
        super();
        console.log("atimm"); //herança ruim
    }
}

class PessoaJuridica extends Pessoa
{
    cnpj;
    responsavel;
}

class Funcionario extends PessoaFisica
{
    codigo;
}

var joao = new PessoaFisica();
var ambev = new PessoaJuridica();

// testa se estancia existe no objeto, pode ser testado com o pai
joao instanceof PessoaJuridica;