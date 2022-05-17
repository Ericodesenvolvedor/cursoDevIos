/* 
    1-  Retorne somente o nome e o ano dos alunos 
    2-  Retorne apenas os alunos do segundo ano
    3-  Faça a soma de todas as notas dos alunos e retorne a média informando se os alunos ficaram acima da média que é 7.
*/

const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2ºB'
    },

    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2ºC'
    },

    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2ºC'
    },

    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3ºC'
    },

    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3ºC'
    },

    {
        nome: ' Maria',
        idade: 14,
        nota: 4,
        ano: '1ºF'
    },
]

console.log('Mostrando nome e ano dos alunos:')

const nomeAno = alunos.filter((alunos) => {
    console.log('-------------------------------')
    console.log('Nome: ' + alunos.nome)
    console.log('Ano: ' + alunos.ano)
})

console.log('Mostrando alunos(a) que são do segundo ano:')

const apenasSegundoAno = alunos.filter((alunos) => {
    if (alunos.ano == '2ºB' || alunos.ano == '2ºC') {
        console.log(alunos)
    }
})

console.log('Mostrando se a turma passou ou não passou:')

const notaAlunos = alunos.map((notaValores) => {return notaValores.nota}).reduce(calcularNotas)

function calcularNotas(nota1, nota2) {
    return nota1 + nota2
}

function mediaSala(totalNotas) {
    if (totalNotas / 6 >= 7) {
        console.log('Turma aprovada, pois a nota é maior ou igual a 7')
    }

    else {
        console.log('Turma reprovada, pois a nota é menor que 7')
    }
}

mediaSala(notaAlunos)