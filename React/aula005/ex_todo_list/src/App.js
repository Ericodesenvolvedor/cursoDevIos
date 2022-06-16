import { useState } from "react";
import NewTasks from "./Components/NewTasks";
import TasksDone from "./Components/TasksDone";
import TasksOpen from "./Components/TasksOpen";

function App() {

  const [textoTask, setTextoTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);

  const listaTasks = {
    texto: textoTask,
    id: id,
  }

  const acessarValorInput = (e) => {
    setTextoTask(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    setId(id + 1);
    setTasks([...tasks, listaTasks]);
    console.log(tasks);
  }

  // const removerTask = () => {
  //   setTasks(tasks.filter((tasks) => tasks.id !== tasks.id));
  // }

  return (
    <div className="App">
        <NewTasks addTask={addTask} acessarValorInput={acessarValorInput} />
        { tasks.length > 0 ? (
          <div className="tarefas-flex">
            <TasksOpen tasks={tasks} id={id} />
            <TasksDone />
          </div>

        ) : (
          <p>Nenhuma tarefa pra você!</p>
        )

        }
    </div>
  );
}

export default App;
