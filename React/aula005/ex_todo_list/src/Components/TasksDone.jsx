import { FaToggleOn } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function TasksDone({tarefasFechadas, setTarefasFechadas, setTarefasAbertas, tarefasAbertas}) {

    const retornaTarefasConcluidas = tarefasFechadas.map((tasks) => {
        
        const excluirTarefas = () => {
            setTarefasFechadas(tarefasFechadas.filter((id) => tasks.id !== id.id));
        }
        
        const toogleOnEvent = () => {
            tasks.btnEventToogle = false;
            
            if(tasks.btnEventToogle === false) {
                tarefasAbertas.push(tasks);
                setTarefasAbertas(tarefasAbertas);
                excluirTarefas();
            }
        }

        return (
            <li key={tasks.id}>
                {tasks.texto}
                <span>
                    <FaToggleOn onClick={toogleOnEvent}  
                    />
                    <BsXLg onClick={excluirTarefas}/>
                </span>
            </li>
        )
    })

    return(
        <div className="tasksDone">
            <h2>Tarefas Concluidas</h2>
            <ul>{retornaTarefasConcluidas}</ul>
        </div>
    )
}

export default TasksDone;