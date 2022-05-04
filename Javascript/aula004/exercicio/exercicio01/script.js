// Começando array
let party = ['Joaquim','José', 'Silva', 'Xavier']

console.log('Pessoas que estão no começo da festa: ')
console.log(party)

// Adicionando nova pessoa

party.unshift('Amanda')
console.log(`${party[0]} entrou na festa`)
console.log(party)

// Retirando pessoa

let pegarUltimo = party.pop()
console.log(`${pegarUltimo} saiu da festa`)
console.log(party)

// Adicionando pessoa 

party.push('Zuleica')
console.log(`${party[4]} entrou na festa`)
console.log(party)

// retirando pessoa

console.log(`${party[0]} Saiu da festa`)
party.shift()
console.log(party)

// retirando pessoa posição 2

console.log(`${party[2]} Saiu da festa`)
delete party[2]
console.log(party)

// Colocando pessoa na posição vazia (2)

party[2] = 'Silvana'
console.log(`${party[2]} Entrou na festa`)
console.log(party)