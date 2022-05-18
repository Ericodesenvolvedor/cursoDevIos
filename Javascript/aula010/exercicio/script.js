function Pessoa(nome, date) {
    this.nome = nome;
    this.dataNascimento = new Date(date[0], date[1], date[2], date[3]);
    this.ano = this.dataNascimento.getFullYear();
    this.month = this.dataNascimento.getMonth() + 1
    this.dia = this.dataNascimento.getDate();
    
    this.atual = new Date();
    this.anoAtual = this.atual.getFullYear();
    this.mesAtual = this.atual.getMonth() + 1;
    this.diaAtual = this.atual.getDate();

    this.idade = function() {
        if (this.mesAtual < this.month || this.mesAtual == this.month && this.diaAtual < this.dia) {
            idade = this.anoAtual - this.ano;
        }
        return --idade
    }
}

let pessoas = new Array(10);
pessoas[0] = new Pessoa('Eric', [2003, 05, 01, 5]);
pessoas[1] = new Pessoa('Fernando', [2002, 07, 10, 5]);
pessoas[2] = new Pessoa('Paulo', [2001, 06, 7, 5]);
pessoas[3] = new Pessoa('Mario', [2000, 08, 6, 5]);
pessoas[4] = new Pessoa('Maria', [1999, 04, 22, 5]);
pessoas[5] = new Pessoa('Joana', [1998, 03, 11, 5]);
pessoas[6] = new Pessoa('Carlos', [2005, 07, 18, 5]);
pessoas[7] = new Pessoa('Patricia', [2003, 08, 12, 5]);
pessoas[8] = new Pessoa('Joao', [2004, 04, 02, 5]);
pessoas[9] = new Pessoa('Juliana', [2000, 09, 05, 5]);

for (var c = 0; c < pessoas.length; c++) {
    
    function verificandoMes() {
        if (pessoas[c].mesAtual < pessoas[c].month) {
            console.log(`${pessoas[c].nome} tem ${pessoas[c].idade()} e ainda não fez aniversário`);
        } else {
            console.log(`${pessoas[c].nome} tem ${pessoas[c].idade()} e já fez aniversário`);
        }
    }

    verificandoMes();
}