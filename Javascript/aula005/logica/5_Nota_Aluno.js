const notaPeso1 = 5
const notaPeso2 = 7
const notaPeso3 = 3

const notasAluno = {
    Nome: 'Eric',
    Nota1: notaPeso1 * 2,
    Nota2: notaPeso2 * 5,
    Nota3: notaPeso3 * 5
}

const notaFinal = (notasAluno.Nota1 + notasAluno.Nota2 + notasAluno.Nota3) / 10
console.log(`A nota final do aluno ${notasAluno.Nome} é ${notaFinal}`) 