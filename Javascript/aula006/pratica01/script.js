// Objetos
let pessoa = {
    firstName: "Irmão do",
    lastName: "Jorel",
    idade: 10,
    corDosOlhos: "preto",
    hobbies: ["música", "filmes", "esportes"],
    endereco: {
        rua: "Rua do bobos",
        numero: 0,
        cidade: "São Paulo",
        estado: "SP",
    },
};

console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]); // chamando o indice 1 da array que está no objeto.
console.log(pessoa.endereco.cidade);

// Tipos
console.log(typeof pessoa.firstName);
console.log(typeof pessoa.hobbies);
console.log(typeof pessoa.endereco);

// Atribuição via desestruturação
console.clear();

const {
    firstName,
    lastName,
    endereco: { cidade },
} = pessoa;

console.log(`${firstName} ${lastName} é de ${cidade}`);

// Atribuição via desestruturação com arrays
console.clear();

const array = [1, 2, 3, 4, 5];

let [valor01, valor02, ...resto] = array;

console.log(valor01);
console.log(valor02);
console.log(resto);

// Outro teste

let [valorA, valorB, valorC, ...restante] = array;

console.log(valorA);
console.log(valorB);
console.log(valorC);
console.log(restante);