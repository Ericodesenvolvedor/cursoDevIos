// ================= FORMULÁRIO =======================

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
        console.log(tarefas);
        
        // tarefas.filter((arrayObjeto) => {
        //     if (arrayObjeto.id === 2) {
        //         console.log(arrayObjeto);
        //     }
        // })

        // <TarefaPendente tarefas={tarefas}/>
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