// Objetivo: a cada acontecimento, a lista atualiza e o nome da pessoa que entrou ou saiu deve ser falado.

// Facilitar na hora de falar os nomes
const pessoas = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier', 'Zuleica', 'Silvana']

// Começando array
let festa = ['Joaquim', 'José', 'Silva', 'Xavier']
console.log('Na festa estão: ' + festa)

// Entrou amanda 

let festa1 = festa
festa1.unshift('Amanda')
console.log(`${pessoas[0]} entrou na festa`)
console.log('Na festa estão: ' + festa1)

// Saiu xavier

let festa2 = festa1
console.log(`${pessoas[4]} saiu da festa`)
festa2.pop()
console.log('Na festa estão: ' + festa2)

// Entrou Zuleica

let festa3 = festa2
festa3.push('Zuleica')
console.log(`${pessoas[5]} entrou na festa`)
console.log('Na festa estão: ' + festa3)

// Amanda saiu da festa
let festa4 = festa3
festa4.shift()
console.log(`${pessoas[0]} saiu da festa`)
console.log('Na festa estão: ' + festa4)

// Silva saiu da festa
let festa5 = festa4
delete festa5[2]
console.log(`${pessoas[3]} saiu da festa`)
console.log('Na festa estão: ' + festa5)

// Silvana entrou na festa
let festa6 = festa5
festa6[2] = 'Silvana' 
console.log(`${pessoas[6]} entrou na festa`)
console.log('Na festa estão: ' + festa6)

// Pessoas restantes na festa

console.log('Pessoas restantes na festa: ' + festa6.length)