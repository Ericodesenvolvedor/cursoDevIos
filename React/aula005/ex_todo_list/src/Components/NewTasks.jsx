import { useState } from "react";
import TasksDone from "./TasksDone";
import TasksOpen from './TasksOpen'
function NewTasks() {
    
    const [inputValue, setInputValue] = useState();
    const [tarefasId, setTarefasId] = useState(1);
    const [tarefasAbertas, setTarefasAbertas] = useState([]);
    const [tarefasFechadas, setTarefasFechadas] = useState([]);

    const objTasks = {
        texto: inputValue,
        id: tarefasId,
        btnEventToogle: false,
    }
    
    const newTasks = (e) => {
        e.preventDefault();
        // ATUALIZANDO VALOR DO ID
        setTarefasId(tarefasId + 1);

        // ATUALIZANDO VALOR DAS TAREFAS ABERTAS
        tarefasAbertas.push(objTasks)
        setTarefasAbertas(tarefasAbertas);
    }

    const valueForm = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="container-newTasks">
            <header>
                <h1>O que vamos planejar hoje?</h1>
            </header>

            <form onSubmit={newTasks}>
                <input type="text" onChange={valueForm}/>
                <button type="submit">Criar Tarefas</button>
            </form>
            
            <div className="grid-tarefas">

            {
                tarefasAbertas.length > 0 ? (
                <TasksOpen 
                    tarefasAbertas={tarefasAbertas} 
                    setTarefasAbertas={setTarefasAbertas}
                    setTarefasFechadas={setTarefasFechadas}
                    tarefasFechadas={tarefasFechadas}
                />
                ) : 
                
                <p className="msgTarefasFazer">Não há tarefas em aberto.</p>

            }

            {
                tarefasFechadas.length > 0 ? (
                    <TasksDone 
                        tarefasFechadas={tarefasFechadas}
                        setTarefasFechadas={setTarefasFechadas}
                        setTarefasAbertas={setTarefasAbertas}
                        tarefasAbertas={tarefasAbertas}
                    />
                ) : (
                    <p className="mgsTarefasConcluidas">Não há tarefas concluídas</p>
                )
            }
            </div>

        </div>
    )
}

export default NewTasks;