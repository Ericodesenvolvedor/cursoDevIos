// Método map

const numero = [1, 2, 3, 4, 5]
const newArray = numero.map(Math.sqrt) // objeto e método para tornar os números do array em raiz quadrada
console.log('Array antigo: ')
console.log(numero)

console.log('Array novo: ')
console.log(newArray)

// Pegar um valor especifico

const tarefas = [
    {
        id: 1,
        texto: 'Aqui vai um texto'
    },
    {
        id: 2,
        texto: 'Aqui vai dois texto'
    },
    {
        id: 3,
        texto: 'Aqui vai três texto'
    },
]

const mapText = tarefas.map((valor) => {
    return valor.texto
})

console.log(mapText)