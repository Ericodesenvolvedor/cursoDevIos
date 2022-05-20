// getElementById
let titulo = document.getElementById('titulo');

// Trocando conteúdo
titulo.innerHTML = 'Perdendo Pc, leia sobre:';

// Configurando formatações
titulo.style.textAlign = 'center';
titulo.style.margin = '20px';

titulo.style.backgroundColor = 'gold';
titulo.style.borderBottom = '2px solid black';

// getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Banana';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].style.padding = '.5rem';

// Utilizando o for para percorrer a lista
for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'skyblue';
}

// Chamando tag pelo nome 
let li = document.getElementsByTagName('li'); 
console.log(li);

for(let i = 0; i < li.length; i+=2) {
    li[i].style.backgroundColor = 'pink';
}

// Chamando pelo atributo name

let nome = document.getElementsByName('fitem');
console.clear();
console.log(nome)
nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = 'green';
nome[1].textContent = 'Receba';
nome[1].style.backgroundColor = 'yellow';

// Removendo conteúdo

let item2 = document.getElementById('item2');
item2.remove();

// Inserindo um valor

let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

// Alterar estilo da lista 

let ul = document.getElementById('items');
ul.style.listStyle = 'none';