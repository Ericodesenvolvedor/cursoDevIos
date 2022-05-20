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

// Criando eventos e chamanado funções 
const imagemSerie = ()  => {
    let figure = document.createElement('figure');
    document.body.appendChild(figure);

    let imagem = document.createElement('img');
    imagem.src = './Imagens/the-umbrella-academy.jpg';
    
    figure.appendChild(imagem);
    document.body.style.backgroundColor = '#262525';
}

btn1.addEventListener('click', imagemSerie);

const mensagemUsuario = ()  => {
    let getName = prompt('Olá visitante, digite o seu nome para ver a mensagem!!')
    document.body.innerHTML = `Olá ${getName} Bem-vindo a nossa academia.`;
}

btn2.addEventListener('click', mensagemUsuario);

const tabuada = () => {
    let numTabuada = Number(prompt('Informe o número da tabuada que você quer saber:'));
    
    for(let i = 1; i <= numTabuada; i++) {
        document.write(`${numTabuada} x ${i} = ${numTabuada * i} <br />`);
    }
}

btn3.addEventListener('click', tabuada);