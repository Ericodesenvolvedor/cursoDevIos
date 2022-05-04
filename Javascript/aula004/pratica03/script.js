//Métodos em Arrays
console.clear();

let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

// join()
console.clear();

let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');

console.log(teste2);
console.log(typeof teste2);

//Tamanho de Arrays
console.clear();

let array = [0, 1, 2, 3, 4];
console.log(array.length);

// Remover e inserir elementos
// pop()
console.clear();

const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); // x = "Manga"

console.log(frutas1);
console.log(x);

// push()
console.clear();

const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi'); // y = 5

console.log(frutas2);
console.log(y);

// shift()
console.clear();

const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); // z = 'Banana'

console.log(frutas3);
console.log(z);

// unshift()
console.clear();

const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); // w = 3

console.log(frutas4);
console.log(w);

// delete
console.clear();

const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];

delete frutas5[2];
console.log(frutas5);