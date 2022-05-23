const btns = document.getElementsByClassName('B_12');
const btn1 = document.getElementById('B_01');
const btn2 = document.getElementById('B_02');
const btn3 = document.getElementById('B_03');

for(let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.margin = '.7rem';
    btns[i].style.backgroundColor = '#BFBFBF';
}

// Adicionando elementos 

// Elementos para nome do úsuario
let divUsuario = document.createElement('div');
let divUsuarioH2 = document.createElement('h2');
let divUsuarioP = document.createElement('p');

document.body.appendChild(divUsuario);
divUsuario.appendChild(divUsuarioH2);
divUsuario.appendChild(divUsuarioP);

// Elementos para foto 
let img = document.createElement('img');
let figure = document.createElement('figure');
document.body.appendChild(figure);

// Elementos para tabuada
let divTabuada = document.createElement('div');
let h2Tabuada = document.createElement('h2');
document.body.appendChild(divTabuada);
divTabuada.appendChild(h2Tabuada);

// Criando funções e verificações
function aparecerImagem() {
    document.body.style.backgroundColor = ' #262525';
    document.body.style.color = 'white';

    figure.appendChild(img);
    img.src = './Imagens/the-umbrella-academy.jpg';
}

function mensagemUsuario() {
    const mensagem = prompt('Coloque seu nome no campo em branco.');

    if(mensagem.length == 0) {
        alert('Você precisa digitar o seu nome!');
    } else {
        divUsuarioH2.textContent = 'Mensagens de boas vindas!!';
        divUsuarioP.textContent = `Seja bem vindo(a) ${mensagem} a nossa academia`;
    }
}

function gerarTabuada() {
    const numeroUsuario = prompt('Digite um número para gerar a tabuada!!');

    if (numeroUsuario.length == 0) {
        alert('Você precisa digitar um valor!');
    } else {      
        h2Tabuada.textContent = 'Tabuada'
        
        for(let count = 1; count <= 10; count++) {
            let pTabuada = document.createElement('p');
            divTabuada.appendChild(pTabuada);
            pTabuada.innerHTML = (`${numeroUsuario} x ${count} = ${Number(numeroUsuario) * count} <br />`);
        }
    }
}

// Adicionando eventos nos botões
btn1.addEventListener('click', aparecerImagem);
btn2.addEventListener('click', mensagemUsuario);
btn3.addEventListener('click', gerarTabuada);