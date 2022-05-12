// Estrutura condicional composta
const e = '10';

if (e === 10) console.log('e é o numeral 10');

else {
    console.log(`Resultado da condição: ${e === 10}`);
    console.log('e não é o numeral 10');
}

// Multiplas condições
console.clear();
const f = 4;
const g = 11;

if (f > 5 || g > 10) {
    console.log(`Condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do 10');
} 
else console.log('f não é maior do que 5 e g não é maior do 10');

if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do 10');

else {
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior do 10');
}

// Desvios encadeados
console.clear();
const num = 'Ola';

if (num % 2 == 0 && !isNaN(num)) console.log('Número par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
else console.log('Não é um número!');

// Desvios encadeados
console.clear();
const num1 = 10;

if (num1 % 2 == 0 && !isNaN(num1)) console.log('Número par!');
else if (num1 % 2 != 0 && !isNaN(num1)) console.log('Número ímpar');
else console.log('Não é um número!');