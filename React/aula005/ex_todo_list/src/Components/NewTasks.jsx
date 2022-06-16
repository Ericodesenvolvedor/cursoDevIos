function NewTasks({addTask, acessarValorInput}) {
    return(
        <div className="container-newTasks">
            <header>
                <h1>O que vamos planejar hoje?</h1>
            </header>

            <form onSubmit={addTask}>
                <input type="text" onChange={acessarValorInput}/>
                <button type="submit">Criar Tarefas</button>
            </form>
        </div>
    )
}

export default NewTasks;