// Definido nota do aluno (3 notas)
const notaPeso1 = 5
const notaPeso2 = 7
const notaPeso3 = 3

// Criando um objeto para guardar nome e notas com o calculo do peso da nota.
const notasAluno = {
    Nome: 'Eric',
    Nota1: notaPeso1 * 2,
    Nota2: notaPeso2 * 5,
    Nota3: notaPeso3 * 5
}

// Fazendo calculo da nota final e mostrando no console.
const notaFinal = (notasAluno.Nota1 + notasAluno.Nota2 + notasAluno.Nota3) / 10
console.log(`A nota final do aluno ${notasAluno.Nome} é ${notaFinal}`) 