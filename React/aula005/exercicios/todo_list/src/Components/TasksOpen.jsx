// ================= ITENS PENDENTES =======================

function TarefaPendente({tarefas}) {

    const tarefasPercorrer = tarefas.map((tarefasItens) => {
        console.log(tarefasItens.texto);
        return <li key={tarefasItens.id}>{tarefasItens.texto}</li>
    })

    return(
        <>
           <ul>
                {tarefasPercorrer}
            </ul>
        </> 
    )
}

export default TarefaPendente;