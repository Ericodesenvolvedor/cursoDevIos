import { FaToggleOff } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function TasksOpen({tarefasAbertas, setTarefasAbertas, setTarefasFechadas, tarefasFechadas}) {

    const retornaTextoTarefaAberta = tarefasAbertas.map((tasks) => {

        const excluirTarefas = () => {
            setTarefasAbertas(tarefasAbertas.filter((id) => tasks.id !== id.id));
        }

        const toogleOffEvent = () => {
            // ALTERANDO O VALOR DO btnEventToogle, POR PADRÃO ESTÁ FALSE
            tasks.btnEventToogle = true;

            if(tasks.btnEventToogle === true) {
                // ENVIANDO TAREFAS QUE TENHAM O btnEventToogle COM VALOR TRUE
                tarefasFechadas.push(tasks);
                setTarefasFechadas(tarefasFechadas);
                excluirTarefas();
            }
        }

        return (
            <li key={tasks.id}>
                {tasks.texto}
                <span>
                    <FaToggleOff onClick={toogleOffEvent} />
                    <BsXLg onClick={excluirTarefas} />
                </span>
            </li>

        ) 
    }) 
      
    return(
        <div className="tasksOpen">
            <h2>Tarefas Abertas</h2>
            <ul>{retornaTextoTarefaAberta}</ul>
        </div>
    )
}

export default TasksOpen;