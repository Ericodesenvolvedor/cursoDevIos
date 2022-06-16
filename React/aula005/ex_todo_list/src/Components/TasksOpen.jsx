import { FaToggleOff } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function TasksOpen({tasks, removerTask}) {

    const mapeandoTasks = tasks.map((e) => {
        return (
            <li key={e.id}>{e.texto} 
                <span>
                    <FaToggleOff />
                    <BsXLg style={{fontSize: '2.5rem'}}/>
                </span>
            </li>
        )
    })

    return(
        <div className="tasksOpen">
            <h2>Para fazer</h2>
            <ul>{mapeandoTasks}</ul>
        </div>
    )
}

export default TasksOpen;