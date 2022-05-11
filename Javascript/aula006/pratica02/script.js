// Array de objetos
console.clear();
const tarefas = [
    {
        id: 1,
        texto: "Levar o lixo para fora",
        isCompleted: true,
    },

    {
        id: 2,
        texto: "Encontrar com o chefe",
        isCompleted: true,
    },

    {
        id: 3,
        texto: "Consulta no dentista",
        isCompleted: false,
    },
];

console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);

// Transformar um array em JSON
console.log(JSON.stringify(tarefas));

// JSON - Transformando json em objeto.
const tarefa_JSON = 
`[
    {"id":1,"texto":"Levar o lixo para fora","isCompleted":true},
    {"id":2,"texto":"Encontrar com o chefe","isCompleted":true},
    {"id":3,"texto":"Consulta no dentista","isCompleted":false}
]`;
const objeto = JSON.parse(tarefa_JSON)
console.log(objeto)