function Pessoa(nome, date) {
    this.nome = nome;
    this.data = new Date(date[0], date[1], date[2], date[3]);
    this.month = this.data.getMonth() ;
}

let pessoas = new Array(10);
pessoas[0] = new Pessoa('Eric', [2003, 05, 01, 5]);
pessoas[1] = new Pessoa('Fernando', '2003-06-01');
pessoas[2] = new Pessoa('Eric', '2003-06-01');

console.log(pessoas[0].data);