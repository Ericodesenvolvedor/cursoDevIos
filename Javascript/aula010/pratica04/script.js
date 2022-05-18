// Lexical this em uma função

// Constructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    };
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Instanciando os objetos
const pessoa3 = new PessoaFunc("John", "Doe", "1980-04-03");
const pessoa4 = new PessoaFunc("Marry", "Smith", "1970-06-13");

console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

// Adicionando prototipos
PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};

console.clear();
console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());    