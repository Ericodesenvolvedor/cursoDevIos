const number1 = 10;
const number2 = 2;
const stringTeste1 = 'Aqui está um texto'

// Concatenando strings com aspas simples
console.log('A soma entre ' + number1  + ' e ' + number2 + ' é: ' + parseInt(number1 + number2))

// Concatenando strings com aspas duplas
console.log("A soma entre " + number1  +  " e " + number2 + " é: "  + parseInt(number1 + number2))

// Concatenando com template string
console.log(`A soma entre ${number1} e ${number2} é: ${number1 + number2}`)