// Eu decidi colocar variáveis ao invés de colocar direto no tempo, para poder ser algo mais auto-explicativo.
const quantidadeAno = 1 
let quantidadeDias = 365

let tempo = CalcularAnosEmDias(quantidadeAno, quantidadeDias)

function CalcularAnosEmDias(anos, dias) {
    return anos * dias
}

console.log(tempo)