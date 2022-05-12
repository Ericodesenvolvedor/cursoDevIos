// Switch
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';

switch (cor) {
    case 'vermelha':
    console.log('A cor é vermelha');
    break;
    
    case 'azul':
    console.log('A cor é azul');
    break;

    default:
    console.log('A cor não é vermelha ou azul');
    break;
}