//Arrays bidimensionais
console.clear();
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];

// Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`);

// Alterando um valor do array
console.clear();

let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(`Antes: ${moedas}`);

moedas[2] = 'Yen';

console.log(`Depois: ${moedas}`);

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];

console.log('Antes:');
console.log(matrix1);

// Alterando um valor do array
console.clear();

matrix1[0][2] = -10;

console.log('Depois:');
console.log(matrix1);