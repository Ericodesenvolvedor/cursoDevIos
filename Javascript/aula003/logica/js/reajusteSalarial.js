let salarioAtual = 1000  // Como não foi definido um valor inicial, eu coloquei de base 1000.
let salarioPorcentagem = 13 / 100
let salarioAjustado = salarioAtual * salarioPorcentagem + salarioAtual

console.log(`Seu salario atual é: R$${salarioAtual} reais`)
console.log(`O valor de reajuste será de: R$${salarioAtual * salarioPorcentagem} reais`)
console.log(`O valor total com reajuste será de: R$${salarioAjustado} reais`)

// O sálario com reajuste é 1130.



/* 
    Outra maneira de fazer:

    let totalComReajuste = salarioAtual + (salarioPorcentagem * salarioAtual)
    console.log(totalComReajuste)
*/ 