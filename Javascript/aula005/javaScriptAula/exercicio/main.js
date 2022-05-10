//  Crie uma variavel chamada leroLero e atribua o texto
const leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'

// Acesse a primeira posição do índice
console.log(leroLero[0])

// Retorne o tamanho da String no console.log
console.log(`O tamanho da String é: ${leroLero.length}`)

// Utilizando o método de troca de String
const trocarString = leroLero.replace('Dr Stephen Strange', 'Feiticeira Escarlate')
console.log(trocarString)

// transformar a String em Substring e acesse o índice de posição 13.
const separarStringPorEspacos = leroLero.split(' ')
console.log(separarStringPorEspacos)
console.log('Essa é a string de retorno da posição 13: '+ separarStringPorEspacos[13])

// Deixar o texto em maiuculo
const textoEmMaiusculo = leroLero.toUpperCase()
console.log(textoEmMaiusculo)