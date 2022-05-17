// Crie um array de objetos com 4 objeto e cada um tera 4 propriedades
// Retorne o nome de todos os alunos.
// retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5
// utilize em todos os retornos arrow function.

const classe = [
    {
        nome: 'Pedro',
        idade: 12,
        nota: 2,
        serie: '4 º ano'
    },

    {
        nome: 'Julia',
        idade: 15,
        nota: 4,
        serie: '7 º ano'
    },

    {
        nome: 'Mario',
        idade: 14,
        nota: 8,
        serie: '6 º ano'
    },

    {
        nome: 'Eric',
        idade: 18,
        nota: 10,
        serie: '3 º série'
    },
]

// RETORNANDO NOME ALUNOS
const nomeAlunos = classe.forEach((nomeAluno) => {
    console.log('Nome aluno(a):')
    console.log(nomeAluno.nome)
})

// NOTAS MAIORES QUE 6
const notaAlunosMaior = classe.filter((nota) => {
    console.log('Notas maiores que 6: ')
    return nota.nota > 6
})

console.log(notaAlunosMaior)

// NOTAS MENORES QUE 5
const notaAlunosMenor = classe.filter((nota) => {
    console.log('Notas menores que 5: ')
    return nota.nota < 5
})

console.log(notaAlunosMenor)