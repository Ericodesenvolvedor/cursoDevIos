// Métodos strings 
const nome = 'Eric'

// Acessa uma String
const guardaLetraString = nome.charAt(0) // Também podemos acessar usando [], porém não precisamos chamar o método. ex: nome[0]
console.log(guardaLetraString) 

// Tamanho da String
const guardaTamanhoString = nome.length
console.log(guardaTamanhoString)

// Maiúsculas e Minúsculas
const deixaEmMaiusculo = nome.toUpperCase()
console.log(deixaEmMaiusculo)

const deixaEmMinusculo = nome.toLowerCase()
console.log(deixaEmMinusculo)

// Substring e Slipt
const cortaString = nome.substring(0, 3)
console.log(cortaString)

const dividirStringTexto = 'A raposa é legal'
const dividirString = dividirStringTexto.split(' ') // separa pelos espaços e transforma em array. podemos acessar pela sua posição, ou chamar a array.
console.log(dividirString) // exemplo: dividirString[1] = retorna raposa.

// Substituir uma string dentro da string 
const substituirString = nome.replace('Eric', 'Eric Oliveira') // primeiro argumento: qual você quer substituir, segundo argumento: qual você vai colocar.
console.log(substituirString)

// Remover espaços da string
const removerEspacosString = ' Retirando espaços do inicio e final da string '
const removerEspacos = removerEspacosString.trim()
console.log(removerEspacos)

// Métodos de buscar em strings 

// indexOf
const buscarString = nome.indexOf('E') // Busca a ocorrência e revela sua posição
console.log(buscarString)

// lastIndexOf
const buscarUltimaOcorrenciaString = 'Buscando última ocorrência, Buscando última ocorrência'
const buscarUltimaOcorrencia = buscarUltimaOcorrenciaString.lastIndexOf('Buscando')
console.log(buscarUltimaOcorrencia) 

// search
const buscarStringSearch = buscarUltimaOcorrenciaString.search('Buscando')
console.log(buscarStringSearch)

// startWith e endsWith
const iniciaCom = buscarUltimaOcorrenciaString.startsWith('B')
console.log(iniciaCom)

const terminaCom = buscarUltimaOcorrenciaString.startsWith('c')
console.log(terminaCom)