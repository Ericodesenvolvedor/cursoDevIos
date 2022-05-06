// Preço ficticio para o carro
const carroValor = 15000

// Percentual do distribuidor = 28%
const porcentagemDistribuidor = 28/100 * carroValor

// Percentual de impostos = 45%
const porcentagemImpostos = 45/100 * carroValor

// Valor final
const valorFinal = porcentagemDistribuidor + porcentagemImpostos + carroValor
console.log('O custo de fábrica do carro vai sair por: ' + valorFinal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}))