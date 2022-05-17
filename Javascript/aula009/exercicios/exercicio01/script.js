/* 
    1- Criar um array unidimencional com 8 posições;
    2- Criar uma função que verifique se é impar ou par;
    3- Criar função para filtrar os número menores ou iguais a 18.
*/

const numbers = [17, 43, 8, 4, 97, 56, 29]
console.log('Verificando se o número é impar ou par:')

const imparOuPar = numbers.forEach((number) => {

    if (number % 2 === 0) {
        console.log(`Número par: ${number}`)
    } 
    else {
        console.log(`Número impar: ${number}`)
    }
})

const verificarMenor18 = numbers.filter((number) => {
    return number <= 18
})

console.log('Mostrando os número menores ou iguais a 18:')
console.log(verificarMenor18)