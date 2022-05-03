let notebook = {
    marca: 'Acer',
    versaoWindows: '8.1',
    bluetooth: false,
    carregador: true,
    valor: 3000
}

console.log(`Marca do notebook: ${notebook.marca}`)
console.log(`Valor do notebook: ${notebook.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)