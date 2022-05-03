let button = document.getElementById('button')
let button1 = document.getElementById('button1')

button.addEventListener('click', ClicaEmMim)
button1.addEventListener('click', ClicaEmMim1)

function ClicaEmMim () {
    alert('clicou')
}

function ClicaEmMim1 () {
    alert('clicou em mim, obrigado por me chamar')
}