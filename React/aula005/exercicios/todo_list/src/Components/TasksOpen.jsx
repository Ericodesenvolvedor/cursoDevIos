// ================= ITENS PENDENTES =======================

function TarefaPendente({tarefas}) {
    
    console.log(tarefas.id)
    
    return(
        <ul>
            <li>{tarefas.id}</li>
        </ul>
    )
}

export default TarefaPendente;