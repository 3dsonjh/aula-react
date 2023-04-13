// Orientação a Objetos -->> POO

// caneta bic
// função: escrever no papel
// atributo: azul

// encapsulamento
class Caneta {

    // atributos -> propriedades -> adjetivos
    //cor = "azul"; // caso haja o constructor não é preciso declarar a variável antes
    cor;

    // construtor -> método com comportamento especial
    constructor(opcao="azul"){
        this.cor = opcao;
    }

    // método -> função -> verbo -> ações
    escrever(params) {
        
    }
}

// bic1 é um instância da classe caneta
// bic1 é um objeto da classe caneta
var bic1 = new Caneta("preta");
var bic2 = new Caneta("azul");
var bic3 = new Caneta();

var bic4 = bic2;

//comparacao de atributos
bic2 == bic4;

//comparacao de atributos e se o objeto é o mesmo (alias)
bic2 === bic4;

// exemplo de cópia de atributo
bic1.cor = bic2.cor;

// exemplo trivial de criação de vetor
var cidade = new Array("curitiba", "araucaria");