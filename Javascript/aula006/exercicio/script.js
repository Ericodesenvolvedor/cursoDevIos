// Criar uma array de objetos chamado aluno

const alunos = [
    {
        nome: 'Carlos',
        idade: 15,
        nota: [5, 6, 8, 10],
        endereco: {
            rua: 'Rua dr carlos',
            numeroRua: 100,
            numeroCasa: 200 
        }, 
        corBlusa: 'Verde',
        corSapato: 'Branco',
        numeroCadeira: 15,
        dupla: 'Pedro'
        
    },

    {
        nome: 'Pedro',
        idade: 16,
        nota: [4, 3, 9, 7],
        endereco: {
            rua: 'Rua pedro alves',
            numeroRua: 101,
            numeroCasa: 201
        },
        corBlusa: 'Azul',
        corSapato: 'Preto',
        numeroCadeira: 16,
        dupla: 'Carlos'
    },

    {
        nome: 'Ana',
        idade: 17,
        nota: [4, 5, 7, 9],
        endereco: {
            rua: 'Rua Ana',
            numeroRua: 102,
            numeroCasa: 202
        },
        corBlusa: 'Vermelha',
        corSapato: 'Branco',
        numeroCadeira: 17,
        dupla: 'Pablo'
    },

    {
        nome: 'Pablo',
        idade: 18,
        nota: [10, 5, 6, 9],
        endereco: {
            rua: 'Rua Pablo',
            numeroRua: 103,
            numeroCasa: 203
        },
        corBlusa: 'Amarelo',
        corSapato: 'Preto',
        numeroCadeira: 18,
        dupla: 'Ana'
    },

]

// Calculando médias 

// Puxando notas do array
const notasCarlos = alunos[0].nota
const notasPedro = alunos[1].nota
const notasAna = alunos[2].nota
const notasPablo = alunos[3].nota

// Somando notas do array com o método reduce
const mediaCarlos = notasCarlos.reduce(nota) / 4
const mediaPedro = notasPedro.reduce(nota) / 4
const mediaAna = notasAna.reduce(nota) / 4
const mediaPablo = notasPablo.reduce(nota) / 4

function nota(nota1, nota2) {
    return nota1 + nota2 
}

console.log(`O aluno(a) ${alunos[0].nome} tirou nota ${mediaCarlos} e mora no endereço: ${alunos[0].endereco.rua}`)
console.log(`O aluno(a) ${alunos[1].nome} tirou nota ${mediaPedro} e mora no endereço: ${alunos[1].endereco.rua}`)
console.log(`O aluno(a) ${alunos[2].nome} tirou nota ${mediaAna} e mora no endereço: ${alunos[2].endereco.rua}`)
console.log(`O aluno(a) ${alunos[3].nome} tirou nota ${mediaPablo} e mora no endereço: ${alunos[3].endereco.rua}`)