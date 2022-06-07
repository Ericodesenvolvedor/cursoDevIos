function Nome() {
    let nomeAluno = prompt('Qual é o seu nome?');
    if(nomeAluno === '') {
        nomeAluno = 'Anonimo';
    }

    return nomeAluno;
}

export default Nome;