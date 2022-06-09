const nomePessoa = document.getElementById('input-nome');
const emailPessoa = document.getElementById('input-email');
const nascimentoPessoa = document.getElementById('input-nascimento-data');
const cursos = document.getElementById('card-select-cursos');
const btnEnviar = document.getElementById('btn-enviar');
const divEmailErroMsg = document.getElementById('email-msg-error');

const tableTbody = document.getElementById('table-tbody');

btnEnviar.addEventListener('click', cadastrarAluno);
emailPessoa.addEventListener('change', verificarEmail);

function cadastrarAluno(e) {
    e.preventDefault();

    if (verificarCampos() === true) {
        alert('Preencha os dados');
    }

    else if (verificarIdade() < 18) {
        alert('Você ainda é menor de idade!')
    }   

    else {
        criarElementos();
    }
    
    limparCamposFormulario();
} 

const verificarCampos = () => {
   let verificadorNome = nomePessoa.value === ''
   let verificadorEmail = emailPessoa.value === ''

   if(verificadorNome || verificadorEmail) {
       return true;
   } 
   
   else {
       return false;
   }
}

function verificarEmail() {

    let padrao = new RegExp(/.*@.*\..*/i);

    if (!padrao.test(emailPessoa.value)) {
        // alert('Por favor, insira um e-mail válido.');
        let erro = document.createElement('p');
        divEmailErroMsg.appendChild(erro);

        erro.innerHTML = 'Email invalido';
        erro.style.color = 'red';
        setTimeout(() => erro.remove(), 3000);
    }
}


const verificarIdade = () => {
    let transformarInputObjetoData = new Date(nascimentoPessoa.value);
    let pessoaDiaNascimento = transformarInputObjetoData.getUTCDate();
    let pessoaMesNascimento = transformarInputObjetoData.getUTCMonth() + 1;
    let pessoaAnoNascimento = transformarInputObjetoData.getFullYear();

    let pegarDataAtual = new Date();
    let diaAtual = pegarDataAtual.getUTCDate();
    let mesAtual = pegarDataAtual.getUTCMonth() + 1;
    let anoAtual = pegarDataAtual.getFullYear();

    let condicaoNaoFezAniversario = mesAtual < pessoaMesNascimento || mesAtual == pessoaMesNascimento && diaAtual < pessoaDiaNascimento

    let idade = anoAtual - pessoaAnoNascimento
    
    if (condicaoNaoFezAniversario) {
        return --idade;
    }

    else {
        return idade;
    }
}

const criarElementos = () => {
    let tr = document.createElement('tr');
    tableTbody.appendChild(tr);

    let tdNome = document.createElement('td');
    tdNome.innerHTML = nomePessoa.value;
    tr.appendChild(tdNome);

    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = emailPessoa.value;
    tr.appendChild(tdEmail);

    let tdCurso = document.createElement('td');
    tdCurso.innerHTML = cursos.value;
    tr.appendChild(tdCurso);

    let tdBtnCancelar = document.createElement('td');
    let btnCancelar = document.createElement('button');
    btnCancelar.innerHTML = 'Cancelar';
    btnCancelar.classList.add('btnCancelar');
    tr.appendChild(tdBtnCancelar);
    tdBtnCancelar.appendChild(btnCancelar);

    btnCancelar.addEventListener('click', function() {
        tr.remove();
    });
}

const limparCamposFormulario = () => {
    nomePessoa.value = '';
    emailPessoa.value = '';
    nascimentoPessoa.value = '2022-01-01'
}