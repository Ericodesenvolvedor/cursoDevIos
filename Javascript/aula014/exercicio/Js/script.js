const nome = document.getElementById('nome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('email');
let tipoCarta = document.getElementById('tipoCarta');
const enviarDados = document.getElementById('enviar');
const dados = document.getElementById('pessoas');

enviarDados.addEventListener('click', enviar);

function enviar(event) {
    event.preventDefault();

    let lista = document.createElement('li');
    let btnExcluir = document.createElement('button')
    dados.appendChild(lista);
    lista.style.backgroundColor = 'white'
    lista.innerHTML = `Nome: ${nome.value} | Email: ${email.value} | Data de nascimento: ${dataNascimento.value} | Tipo de carta: ${tipoCarta.value}`
    lista.appendChild(btnExcluir);
    btnStyle(btnExcluir)

    btnExcluir.addEventListener('click', excluirItem);

    function excluirItem() {
        lista.remove();
        btnExcluir.remove();
    }

    pegarIdade()

    nome.value = ''
    email.value = ''
    dataNascimento.value = ''

    function pegarIdade() {
        let dataNiver = dataNascimento.value 
        let semTraco = dataNiver.replace("-", " ");
        semTraco = semTraco.replace("-", " ")
        let tranformarEmArray = semTraco.split(" ");
        
        let date = new Date();
        let dia = date.getDate();
        let mes = date.getMonth() + 1
        let ano = date.getFullYear();

        // Maior ou Menor de idade
        
        if (mes < tranformarEmArray[1] || mes == tranformarEmArray[1] && dia < tranformarEmArray[2]) {
            console.log('Você já é maior de idade');
        } else {
            console.log('Menor de idade');
        }
    }

}

function btnStyle(btn) {
    btn.textContent = 'Excluir'
    btn.style.backgroundColor = 'red';
    btn.style.padding = '0.4rem 1.5rem';
    btn.style.marginLeft = '1rem'
}