// Método find

const meuArray = [
    {
        nome: 'diego',
        idade: 12,
        altura: 1.20,
        sexo: 'masculino'
    },

    {
        nome: 'jissara',
        idade: 15,
        altura: 1.80,
        sexo: 'feminino'
    },

    {
        nome: 'jheniffer',
        idade: 80,
        altura: 1.20,
        sexo: 'feminino'
    },
]

console.log(
    meuArray.find((genero) => {
        return genero.sexo === 'feminino'
    })
)