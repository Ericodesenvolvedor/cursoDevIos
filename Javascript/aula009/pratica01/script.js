const frutas = ['maça', 'Pera', 'Melancia']
frutas.forEach(myFunction) // Percorrendo array e passando função

function myFunction(item, index) { // funcão para retornar itens
    console.log(item)
    console.log(index)
}

// Arrow function

const frutas2 = ['maça', 'Pera', 'Melancia']

frutas2.forEach((item, index) =>  {
    console.log(item)
    console.log(index)
})


// Método forEach com objetos
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

tarefas.forEach((teste) => {
    console.log(teste.texto)
})