const nome = document.getElementById('nome');
const email = document.getElementById('email');
const dataNascimento = document.getElementById('dataNascimento');
const setores = document.getElementById('setores');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', enviarDados);

function enviarDados(event) {
    event.preventDefault();
}