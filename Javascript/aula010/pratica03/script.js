class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const pessoa1 = new ClassePessoa("John", "Doe", "1980-04-03");
const pessoa2 = new ClassePessoa("Marry", "Smith", "1970-06-13");

console.log(pessoa1);
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());
console.log(pessoa1.getFullName());