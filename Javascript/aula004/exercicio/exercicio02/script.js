// Criar um array com 5 itens

const filmes = ['Harry Potter', ' Velozes e Furiosos', ' Criaturas Mágicas', ' Amor e Monstros', ' A voz do silêncio']
console.log('Esses são os filmes: ' + filmes)

const series = [' Anne with an E', ' The Walking Dead', ' Cobra Kai']
console.log('Essas são as séries: ' + series)
// O método concat vai concatenar arrays.

const listaEntretenimento = filmes.concat(series)
console.log('Essa é a lista completa concatenada ' + listaEntretenimento)

// outro array
const mediaAlunos = [5, 4, 8, 10, 5, 2, 6]
console.log('Notas alunos: ' + mediaAlunos)
/* 
    Esse método faz uma filtragem na array. No caso está com uma 
    função verificando os números maior ou igual a 6
*/
console.log('Sem filtro: ' + mediaAlunos)
const passouOuReprovou = mediaAlunos.filter(
    function chegarNotas(notas) {
        return notas >= 6
    }
)

console.log('Notas maiores que 6: '+ passouOuReprovou)