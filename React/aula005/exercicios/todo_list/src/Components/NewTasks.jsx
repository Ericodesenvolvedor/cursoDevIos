// ================= FORMULÁRIO =======================
import { render } from '@testing-library/react';
import { useState } from 'react';
import TarefaPendente from './TasksOpen';
 
function Formulario() {

    const [mensagemInput, setMensagemInput] = useState();
    const [idTarefas, setIdTarefas] = useState(0);

    const tarefas = [
        {
            id: idTarefas,
            texto: mensagemInput,
        }
    ]

    const clickBtnInput = (e) => {
        e.preventDefault();
        setIdTarefas(idTarefas + 1);

        render(
            <TarefaPendente tarefas={tarefas}/>
        )
    }
    
    return (
        <form>
            <input type="text" onChange={(e) => setMensagemInput(e.target.value)}/>
            <button 
                type="submit" 
                onClick={clickBtnInput}
            >
                Enviar
            </button>


        </form>
    )
}

export default Formulario;