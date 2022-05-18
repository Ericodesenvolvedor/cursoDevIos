// Declarar nova classe com métodos
console.clear();
class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano;
    }
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();

// console.log(dataHoje);

// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro("Ford", 2014);
console.log(meuNovoCarro.idadeCarro(ano));