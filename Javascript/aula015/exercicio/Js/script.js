const itemInput = document.getElementById('item');
const quantidadeInput = document.getElementById('quantidade');
const valorInput = document.getElementById('valor');
const form = document.getElementById('form');
let valorFinal = document.getElementById('valorFinal');
const adicionarInput = document.getElementById('adicionar');

const itemsLista = document.getElementById('itemsUl');
const quantidadeLista = document.querySelector('.quantidadeUl');
const precoLista = document.getElementById('precosLista');

let acumuladorValores = 0

adicionarInput.addEventListener('click', adicionarItems);

class Item {
    constructor(nome, quantidade, valor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.createElements();
        this.calcularTotalValorItens();
    }

    createElements() {
        // Li PARA NOME ITEM
        let nomeLi = document.createElement('li');
        nomeLi.innerHTML = this.nome;
        itemsLista.appendChild(nomeLi);

        // LI PARA QUANTIDADE ITEM
        let quantidadeLi = document.createElement('li');
        quantidadeLista.appendChild(quantidadeLi);

        // Span Para guardar valores da quantidade
        let textoQuantidadeValor = document.createElement('span');
        textoQuantidadeValor.innerHTML = this.quantidade;
        quantidadeLi.appendChild(textoQuantidadeValor);

        // LI PARA VALOR ITEM  
        let valorLi = document.createElement('li');
        valorLi.innerHTML = this.valor;
        precoLista.appendChild(valorLi);

        // BOTÃO PARA RETIRAR UM ITEM 
        let btnRetirarItem = document.createElement('button');
        btnRetirarItem.innerHTML = '-';
        quantidadeLi.appendChild(btnRetirarItem);
        btnRetirarItem.classList.add('red')
        btnRetirarItem.addEventListener('click', retirar);

        // BOTÃO PARA ADICIONAR UM ITEM
        let btnAdicionarItem = document.createElement('button');
        btnAdicionarItem.innerHTML = '+';
        quantidadeLi.appendChild(btnAdicionarItem);
        btnAdicionarItem.addEventListener('click', adicionar);

        // BOTÃO PARA CANCELAR UM ITEM
        let btnCancelarItem = document.createElement('button');
        btnCancelarItem.innerHTML = 'X';
        valorLi.appendChild(btnCancelarItem);
        btnCancelarItem.addEventListener('click', cancelar);

        // let texto = quantidadeTextoSpan.innerHTML

        let quantidade = this.quantidade
        let valor = this.valor
        
        function retirar() {
            quantidade--
            acumuladorValores -= valor 
            console.log(quantidade * valor);
            valorFinal.innerHTML = acumuladorValores;
            console.log(quantidade);
            textoQuantidadeValor.innerHTML = quantidade;
            return acumuladorValores;
        }

        function adicionar() {
            quantidade++
            valor = Number(valor)
            // console.log(typeof valor)
            acumuladorValores += valor
            // console.log(quantidade * valor);
            valorFinal.innerHTML = acumuladorValores;
            // console.log(quantidade);
            textoQuantidadeValor.innerHTML = quantidade;
            return acumuladorValores;
        }

        function cancelar() {
            nomeLi.remove();
            quantidadeLi.remove();
            valorLi.remove();
            // console.log(acumuladorValores)
            acumuladorValores = acumuladorValores - (quantidade * valor)
            valorFinal.innerHTML = acumuladorValores;
            
        }
    }

    calcularTotalValorItens() {
        acumuladorValores += Number(this.quantidade * this.valor);
        valorFinal.innerHTML = acumuladorValores;
        return acumuladorValores
    }
}

function adicionarItems(event) {
    event.preventDefault();

    if(itemInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (quantidadeInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (valorInput.value == '') {
        alert('Preencha todos os campos!');
    } else {
        new Item(itemInput.value, quantidadeInput.value, valorInput.value);
    }

    form.reset();
}