const nome = document.getElementById('nome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('email');
let divEmail = document.getElementById('div-email');
let tipoCarta = document.getElementById('tipoCarta');
const enviarDados = document.getElementById('enviar');
const dados = document.getElementById('pessoas');


enviarDados.addEventListener('click', enviar);
email.addEventListener('change', verificarEmail);

// Função para enviar os dados e guardar
function enviar(event) {
    event.preventDefault();

    let idade = pegarIdade(dataNascimento);

    if (idade < 18) {
        alert('Você é menor de idade');
    } else {
        let lista = document.createElement('li');
        let btnExcluir = document.createElement('button')
        dados.appendChild(lista);
        
        lista.innerHTML = `Nome: ${nome.value} | Email: ${email.value} | Data de nascimento: ${dataNascimento.value} | Tipo de carta: ${tipoCarta.value}`
        lista.appendChild(btnExcluir);
        btnStyle(btnExcluir)

        btnExcluir.addEventListener('click', excluirItem);

        function excluirItem() {
            lista.remove();
            btnExcluir.remove();
        }
    }

    limparForm();
}

function btnStyle(btn) {
    btn.textContent = 'Excluir'
    btn.style.backgroundColor = 'red';
    btn.style.padding = '0.4rem 1.5rem';
    btn.style.marginLeft = '1rem'
}

function pegarIdade(data) {
    let nascimento = data.value
    let array = nascimento.split('-');

    let objetoData = new Date();
    let dia = objetoData.getDate();
    let mes = objetoData.getMonth();
    let ano = objetoData.getFullYear();

    if (mes < array[1] || mes == array[1] && dia < array[2]) {
        idade = ano - array[0];
    }

    return --idade
}

function verificarEmail() {
    let padrao = new RegExp(/.*@.*\..*/i);

    if (!padrao.test(email.value)) {
        // alert('Por favor, insira um e-mail válido.');
        let erro = document.createElement('p');
        divEmail.appendChild(erro);

        erro.innerHTML = 'Email invalido';
        erro.style.color = 'red';
        setTimeout(() => erro.remove(), 3000);
    }
}

function limparForm() {
    nome.value = ''
    email.value = ''
    dataNascimento.value = ''
    tipoCarta.value = ''
}